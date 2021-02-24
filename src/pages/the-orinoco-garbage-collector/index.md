---
title: The Orinoco Garbage Collector
date: '2021-02-07'
spoiler:  V8的垃圾回收器--Orinoco” 
---

V8中的堆被划分为不同的区域：<br/>
其中包括young generation(新生代)和old generation(老生代)。<br/>
新生代内部进一步划分为“nursery幼生代”和“intermediate中间代”2个子代。<br/>

对象首先分配到nursery(幼生代)，如果它们能在下一次GC中存活下来，则会被移动到intermediate(中间代)，如果它们在再次从GC中存活下来，就会被移到old generation(老生代)中去。

<div align="center">
  <img src="https://i.ibb.co/gW87MnK/gc-01.png" />
</div>

---

V8中有两个垃圾收集器：<br/>
主GC[Major GC(Mark-Compact)](#major-gc-full-mark-compact)从整个堆中收集垃圾；<br/>
次GC[Minor GC (Scavenger)](#minor-gc-scavenger)在young generation(新生代)中收集垃圾。<br/>

## Major GC (Full Mark-Compact)
<div align="center">
  <img style="margin-bottom: 0px" src="https://i.ibb.co/5r4yyd2/gc-02.png" />
  <span style="color: #666; font-size: 14px">主GC分为三个阶段：标记，清除和整理。</span>
</div>

#### 标记阶段 (Marking)
垃圾回收器通过可访问性（reachability）来确定对象的 “活跃度”（liveness）。这意味着任何对象如果在运行时是可访问的（reachable），那么必须保证这些对象应该在内存中保留，如果对象是不可访问的（unreachable）那么这些对象就可能被回收。

#### 清除阶段 (Sweeping)
清除阶段就是将非活动对象占用的内存空间添加到一个叫空闲列表（free-list）的数据结构中。一旦标记完成，垃圾回收器会找到不可访问对象的内存空间，并将内存空间添加到相应的空闲列表中。

#### 整理阶段 (Compaction)
主垃圾回收器会通过一种叫做碎片启发式（fragmentation heuristic）的算法来整理内存页，你可以将整理阶段理解为老式 PC 上的磁盘整理。那么碎片启发式算法是怎么做的呢？我们将活动对象复制到当前没有被整理的其他内存页中（即被添加到空闲列表的内存页）；通过这种做法，我们就可以利用内存中高度小而分散的内存空间。

## Minor GC (Scavenger)
<p>
在只在新生代内收集的Scavenger中，幸存的对象总是被evacuation（这个不好翻译啊喂, 暂且称为复制迁移）到新的内存页中。V8对young generation(新生代)采用了semi-space(半空间)设计。这意味着总空间的一半始终是空的，以便进行这个evacuation步骤。在清理过程中，这个初始为空的区域被称为'To-Space'。我们从这里复制的区域叫做 "From-Space"。在最坏的情况下，每个对象都可以在清扫中存活下来，我们需要复制每个对象。
<p>
<p>
对于清理，我们会维护一个额外的根集（root set），这个根集里会存放一些从旧到新的引用。这些引用是在旧空间（old-space）中指向新生代中对象的指针。我们使用“写屏障（write barriers）”来维护从旧到新的引用列表，而不是跟踪整个堆中的每一个对象变更。当堆和全局对象结合使用时，我们知道每一个在新生代中对象的引用，而无需追踪整个老生代。
</p>
<p>
evacuation步骤将所有存活的对象移动到一个连续的内存块中（在一个内存页内）。这样做的好处是完成去除碎片化--死对象留下的空隙。然后，我们将两个空间进行切换，即To-Space变成From-Space，反之亦然。GC完成后，新的分配发生在From-Space的下一个空闲地址。
<p>

<div align="center">
  <img style="margin-bottom: 0px" src="https://i.ibb.co/NF5X8pK/gc-03.png" />
  <span style="color: #666; font-size: 14px">次GC移动活动对象到一个新的内存页</span>
</div>

<p>仅凭这一策略，我们很快就会在young generation(新生代)中耗尽空间。在第二个GC中幸存下来的对象被evacuation(复制迁移)到old generation(老生代)中，而不是'To-Space'。</p>
<p>清除的最后一步是更新引用已移动的原始对象的指针。每个复制的对象都会留下一个转发地址，用于将原始指针更新为指向新位置。</p>

<div align="center">
  <img style="margin-bottom: 0px" src="https://i.ibb.co/QvyrPXB/gc-04.png" />
  <span style="color: #666; font-size: 14px">次GC将活跃对象移动到老生代</span>
</div>

<p>次GC在清理时，实际上执行三个步骤：标记，移动活动对象，和更新对象的指针；这三个步骤是交错进行的，而不是分阶段进行的。</p>

## Orinoco

衡量垃圾收集所花时间的一个重要指标是GC执行时主线程暂停的时间。对于传统的 "stop-the-world"(全暂停)垃圾收集器来说，这个时间真的会增加，而且这些做GC的时间会直接影响到用户体验，表现为页面的卡顿和糟糕的渲染和延迟。

<div align="center">
  <img style="margin-bottom: 0px; width: 200px; display: block" src="https://v8.dev/_img/v8-orinoco.svg" />
  <span style="color: #666; font-size: 14px">Orinoco的Logo</span>
</div>

<p>Orinoco是GC项目的代号，利用最新最先进的并行、增量和并发技术进行垃圾收集，以解放主线程。下面是一些术语在GC上下文中的详细定义。</p>

#### 并行式垃圾回收（Parallel）

并行式垃圾回收是指主线程和辅助线程在同一时间做大致相等的工作。这仍然是一种"stop-the-world"(全暂停)的方法，但总的暂停时间现在被参与的线程数量除以（加上同步的一些开销）。这是三种技术中最简单的一种。JavaScript堆是暂停的，因为没有JavaScript运行，所以每个辅助线程只需要确保它同步访问另一个辅助线程可能也想访问的任何对象。

<div align="center">
  <img style="margin-bottom: 0px;display: block" src="https://v8.dev/_img/trash-talk/05.svg" />
  <span style="color: #666; font-size: 14px">主线程和辅助线程同时进行GC处理。</span>
</div>

#### 增量式垃圾回收（Incremental）
增量式垃圾回收是指主线断断续续地做一小段工作。我们在增量暂停中并不是做整个GC，只是做GC所需的总工作中的一小段。这一点比较困难，因为JavaScript在每个增量工作段之间都会执行，这意味着堆的状态发生了变化，可能会使之前增量完成的工作失效。从图中可以看出，这并没有减少花在主线程上的时间（事实上，通常会略微增加），只是把时间分散了。对于解决我们最初的一个问题：主线程延迟，这还是一个不错的技术。通过让JavaScript间歇性运行，但也继续垃圾收集任务，用户在输入或者执行动画的时候仍能得到及时的响应。

<div align="center">
  <img style="margin-bottom: 0px;display: block" src="https://v8.dev/_img/trash-talk/06.svg" />
  <span style="color: #666; font-size: 14px">小块的GC任务穿插在主线程的执行中。</span>
</div>

#### 并发式垃圾回收（Concurrent）
并发式垃圾回收是指主线程不断地执行JavaScript，而辅助线程完全在后台做GC工作。这是三种技术中最困难的一种：JavaScript堆上的任何东西都可能随时发生变化，使我们之前所做的工作失效。除此之外，现在还要担心读/写竞争，因为辅助线程和主线程同时读取或修改同一个对象。这里的好处是，主线程完全可以自由地执行JavaScript--虽然由于与辅助线程的一些同步，会有一些小的开销。

<div align="center">
  <img style="margin-bottom: 0px;display: block" src="https://v8.dev/_img/trash-talk/07.svg" />
  <span style="color: #666; font-size: 14px">GC任务完全发生在后台。主线程可以自由运行JavaScript。</span>
</div>


## V8中的GC机制

### Scavenging
V8 在新生代垃圾回收中使用并行清理，每个辅助线程会将所有的活动对象都移动到 ‘To-Space’。在每一次尝试将活动对象移动到 ‘To-Space’ 的时候必须通确保原子化的读和写以及比较和交换操作。不同的辅助线程都有可能通过不同的路径找到相同的对象，并尝试将这个对象移动到 ‘To-Space’；无论哪个协助线程成功移动对象到 ‘To-Space’，都必须更新这个对象的指针，并且去维护移动这个活动对象所留下的转发地址。以便于其他辅助线程可以找到该活动对象更新后的指针。为了快速的给幸存下来的活动对象分配内存，清理任务会使用线程局部分配缓冲区。

<div align="center">
  <img style="margin-bottom: 0px;display: block" src="https://v8.dev/_img/trash-talk/08.svg" />
  <span style="color: #666; font-size: 14px">并行清理将清理工作分布在多个辅助线程和主线程之间。</span>
</div>

### Major GC
V8 中的主垃圾回收器主要使用并发标记，一旦堆的动态分配接近极限的时候，将启动并发标记任务。每个辅助线程都会去追踪每个标记到的对象的指针以及对这个对象的引用。在 JavaScript 执行的时候，并发标记在后台进行。写屏障（write barriers）技术在辅助线程在进行并发标记的时候会一直追踪每一个 JavaScript 对象的新引用。

<div align="center">
  <img style="margin-bottom: 0px;display: block" src="https://v8.dev/_img/trash-talk/09.svg" />
  <span style="color: #666; font-size: 14px">主垃圾回收器并发的去标记和清除对象，并行的去整理内存和更新活动对象的指针</span>
</div>

当并发标记完成或者动态分配到达极限的时候，主线程会执行最终的快速标记步骤；在这个阶段主线程会被暂停，这段时间也就是主垃圾回收器执行的所有时间。在这个阶段主线程会再一次的扫描根集以确保所有的对象都完成了标记；然后辅助线程就会去做更新指针和整理内存的工作。并非所有的内存页都会被整理，之前提到的加入到空闲列表的内存页就不会被整理。在暂停的时候主线程会启动并发清理的任务，这些任务都是并发执行的，并不会影响并行内存页的整理工作和 JavaScript 的执行。


### Idle-time GC
JavaScript无法主动触发垃圾收集，然而，提供了一种机制让Embedders（嵌入V8的环境）去触发垃圾回收，GC可以发布 "闲置任务"，像Chrome这样的嵌入器可能有一些空闲或闲置时间的概念。例如在Chrome浏览器中，以每秒60帧的速度，浏览器大约有16.6毫秒的时间来渲染每一帧动画。如果动画工作提前完成，Chrome可以选择在下一帧之前的空闲时间运行GC创建的这些闲置任务。
<div align="center">
  <img style="margin-bottom: 0px;display: block" src="https://v8.dev/_img/trash-talk/10.svg" />
  <span style="color: #666; font-size: 14px">利用主线程上的空闲时间主动执行GC工作。</span>
</div>


#### Referencing : 
[the Orinoco garbage collector](https://v8.dev/blog/trash-talk)  

<!-- [end](/thanks watch/) -->
---
title: The JavaScript Event Loop
date: '2019-10-29'
spoiler:  JS的事件循环以及异步队列
---

## JavaScript is a single thread language
众所周知,  JS是一门单线程语言,  这和它的用途有关，作为浏览器脚本语言，它主要是用来处理页面中用户的交互，以及操作DOM树、CSS样式树来给用户呈现一份动态而丰富的交互体验和服务器逻辑的交互处理。

如果JavaScript是多线程的方式来操作这些UI DOM，则可能出现UI操作的冲突。

浏览器中的GUI线程和JS引擎是互斥的,  当JS引擎执行时GUI线程会被挂起，GUI更新则会被保存在一个队列中等到JS引擎线程空闲时立即被执行。

如果有一个进程需要很长时间，那么它将阻塞其他进程运行。

因此，在浏览器中定义了一个等待进程响应的超时任务。当进程在超时中没有响应时，你将看到一个弹出窗口，询问是否终止这个页面。
<div align = "center">
  <img src="https://i.ibb.co/QNY2TGx/killPage.jpg" />
</div>

> 关于 Web Worker, 虽然运行 JavaScript 脚本创建多个线程, 但是子线程完全受主线程控制, 且不得操作DOM, 所以这个新标准没有改变JavaScript单线程的本质。

## JavaScript runtime engine
<div align = "center">
  <img src="https://i.ibb.co/s39YRy8/js.png" />
</div>

> JS内存空间  

**Memory Heap**:  堆 是我们定义变量时存储对象的地方.    

**Call Stack**: 执行栈，也就是在其它编程语言中所说的“调用栈”，是一种拥有 LIFO（后进先出）数据结构的栈，被用来存储代码运行时创建的所有执行上下文。  
当 JavaScript 引擎第一次遇到你的脚本时，它会创建一个全局的执行上下文并且压入当前执行栈。每当引擎遇到一个函数调用，它会为该函数创建一个新的执行上下文并压入栈的顶部。  
引擎会执行那些执行上下文位于栈顶的函数。当该函数执行结束时，执行上下文从栈中弹出，控制流程到达当前栈中的下一个上下文。  


两者区别:  

|         `栈内存`        |            `堆内存`           |
| :-------------------- | :-------------------------- |
|    存储基础数据类型     |       存储引用数据类型      |
|        按值访问        |          按引用访问          |
|    存储的值大小固定     | 存储的值大小不定，可动态调整 |
| 由系统自动分配内存空间   |   由程序员通过代码进行分配   |
|    主要用来执行程序     |       主要用来存放对象       |
|   空间小，运行效率高    | 空间大，但是运行效率相对较低 |
|   先进后出，后进先出    | 无序存储，可根据引用直接获取 |  


> Web APIs 

浏览器提供了一系列的API，供开发人员可以使用它们进行复杂的流程，例如获取访问者的位置, 发起请求等.    
[查看Web APIs list](https://developer.mozilla.org/en-US/docs/Web/API)  

> Callback Queue 

当进程完成其工作（例如XHR调用）时，它会被放入回调队列中。  
堆栈为空后，事件循环进程将触发回调队列，这意味着该进程在该队列中等待，直到堆栈为空。  
一旦我们的堆栈没有函数调用，就会从回调队列中弹出一个进程并将其推入堆栈。  

> Event Loop

JS的单线程也就是说所有的任务都需要按照一定的规则顺序排队执行，这个规则就是我们要说明的Event Loop事件环。Event Loop在不同的运行环境下有着不同的方式。(本文我们只说处于浏览器下的情况)  

总结一下:  
+ 所有同步任务都在主线程上执行，形成一个执行栈

+ 主线程之外，还存在一个任务队列。只要异步任务有了运行结果，就在任务队列之中放置一个事件。

+ 一旦执行栈中的所有同步任务执行完毕，系统就会读取任务队列,将队列中的事件放到执行栈中依次执行

+ 主线程从任务队列中读取事件，这个过程是循环不断的.  
  
举个🌰  
```javascript
console.log(1)
setTimeout(() => {
 console.log(2)
}, 0)
console.log(3)

// 输出 1, 3, 2
```  

## Tasks and Microtasks.
JavaScript 中的异步队列,  可分为 task 和 micro - task.  
而关于 task, 网络上流行两种叫法, 一种为 task, 另一种为 macro - task.  
实际上这两种称呼出自不同的标准规范,  task为 [HTML standard](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops) 中的叫法,  
macro-task 这种叫法应该是源自 [Promise/A+](https://promisesaplus.com/).  
我们只要知道两者说的其实都是一个事就行.   
另外, 在ECMAScript规范中, microtasks 也被称为 jobs.  

***

`Tasks`:  **setTimeout** 、**setInterval** 、 **setImmediate**  、requestAnimationFrame、 I/O 、UI rendering ...  
  
`Microtasks`:  **process.nextTick** 、  **Promise** 、  **MutationObserver** ...    

首先明确一下JS的执行顺序:  主线程 -> MicroTasks  ->  Tasks;  
线程执行完毕,  便开始执行 micro-task , 并执行完所有回调,  micro-task 总是发生在下一个 task 之前.

附注: 
  + node11之前, task中如果有microtask的, 会先执行完所有的task之后, 再去执行microtask
  + node11开始,  Event Loop运行原理发生了变化，一旦执行一个阶段里的一个宏任务(setTimeout,setInterval和setImmediate)就立刻执行微任务队列，这点就跟浏览器端一致了。

*** 

举个🌰  
```javascript
console.log(1)
let promise = new Promise(function(resolve , reject) {
	console.log(2)
  resolve()
}).then(function() {
  console.log(3)
})
setTimeout(function() {
  console.log(4)
})
console.log(5)

// 输出  =>  1 , 2 , 5 , 3 , 4
```
回想一下我们上面所提到的.  JS的执行顺序:  主线程 -> MicroTasks  ->  Tasks  
1. 所以首先执行第一行代码, 输出 `1`

2. 接着, 进入 new Promise (它也是同步执行的代码,  then之后才是异步代码),  先输出`2` ; resolve 之后把其回调函数扔进  `micro - tasks队列`
3. 这时候遇到一个 `settimeout`, 不管它, 扔了(╯‵□′)╯︵┻━┻   (丢进 `tasks 队列`中)

4. 执行到了同步代码的最后一行, 直接输出 `5`
5. 此时主线程的同步代码已经跑完. 可以开始执行我们的异步队列中的事件
6. 先看`micro-tasks`,  发现有个promise回调函数, 输出` 3`
7. 此时 `micro-tasks` 队列已经清空, 执行` tasks` 队列的事件. 输出 `5`  

***

再举个🌰  
```javascript
async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}

async function async2() {
  console.log('async2')
}

console.log('script start')

setTimeout(function() {
  console.log('setTimeout')
}, 0)

async1()

new Promise(function(resolve) {
  console.log('promise1')
  resolve()
}).then(function() {
  console.log('promise2')
})

console.log('script end')

```

async / await其实是生成器的语法糖, 遇到的时候把它转换成 Promise 的形式即可.
```javascript
async function foo () {
  // await 前面的代码
  await bar()
  // await 后面的代码
}

async function bar() {
	// do something
}

foo()
```
其中 `await 前面的代码` 是同步的，调用此函数时会直接执行；而 `await bar()` 这句可以被转换成 `Promise.resolve(bar())`；`await 后面的代码` 则会被放到 Promise 的 then() 方法里。因此上面的代码可以被转换成如下形式:
```javascript
function foo() {
  // await 前面的代码
  Promise.resolve(bar()).then(() => {
    // await 后面的代码
  })
}

function bar() {
  // do something...
}

foo()
```

现在让我们`重构`一下刚才代码. 

```javascript
function async1() {
  console.log('async1 start')  // 2

  Promise.resolve(async2()).then(() => {
    console.log('async1 end')  // 6
  })
}

function async2() {
  console.log('async2')        // 3
}

console.log('script start')    // 1

setTimeout(function() {
  console.log('settimeout')    // 8
}, 0)

async1()

new Promise(function(resolve) {
  console.log('promise1')      // 4
  resolve()
}).then(function() {
  console.log('promise2')      // 7
})

console.log('script end')      // 5
```
+ 首先输出 `script start`

+ 接着将 `settimeout` 添加到tasks队列，此时tasks队列为 `['settimeout']`
+ 然后执行函数 `async1`，先打印出 `async1 start`，又因为 `Promise.resolve(async2())` 是同步任务，所以打印出 `async2`，接着将 `async1 end` 添加到`MicroTasks队列`，，此时微任务队列为 `['async1 end']`

+ 接着打印出 `promise1`，将 `promise2` 添加到`MicroTasks队列`，，此时微任务队列为 `['async1 end', promise2]`
+ 执行主线程的最后一句同步代码, 打印出 `script end`
+ 因为`MicroTasks`优先级高于`Tasks`，所以先依次打印出 `async1 end` 和 `promise2`
+ 最后打印出Task `settimeout`

> 关于 **async1 end** 和 **promise2** 的执行顺序,  我在 `Chrome 78.0.3904.70 for MAC`  和  `Node.js v12.13.0 、 v8.16.0`测试是 **async1 end** 先于 **promise2**，而在 `Safari 13.0.3 (14608.3.10.10.1)` , `Node.js v11.9.0、v10.16.3`测试是 **async1 end** 后于 **promise2**。  


<br/>

#### Referencing :

[Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)

[How JavaScript works: Event loop and the rise of Async programming + 5 ways to better coding with async/await](https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5)

[Understanding JavaScript — Heap, Stack, Event-loops and Callback Queue](https://medium.com/javascript-in-plain-english/understanding-javascript-heap-stack-event-loops-and-callback-queue-6fdec3cfe32e)

[浏览器多线程和js单线程](https://juejin.im/post/5ca49fea6fb9a05e731fc03d)

[最后一次搞懂 Event Loop](https://juejin.im/post/5cbc0a9cf265da03b11f3505#heading-5)

<!-- [end](/thanks watch/) -->
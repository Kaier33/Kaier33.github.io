---
title: Implementing Promise Using JavaScript
date: '2020-11-11'
spoiler:  JS实现原生promise
---

Promise是异步编程的一种解决方案,  在Promise出现之前, 我们经常能看(写)到类似如下代码, 也就是所谓的”回调地狱” :

```javascript
step(1, function() {
  step(2, function() {
    step(3, function() {
      // more and more nesting
    })
  })
})
```

用Promise改写后, 可读性得到明显提高. 感觉像是在写同步代码.

```javascript
Promise.resolve(1)
  .then(step => ++step)
  .then(step => ++step)
  .then(step => ++step)
```

## 先从实现一个简易版的Promise开始

```javascript

// 根据Promise/A+对States的定义, 我们先声明其三个状态: 
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class MyPromise {
  constructor(executor) {
    const self = this
    self.status = PENDING   // 默认为 pending
    self.value = undefined  // 完成态用来传递的值
    self.reason = undefined // 拒绝态用来传递的值

    // 当executor是异步执行时, 先把then的回调函数各自先压入对应的栈
    self.onFulfilledCallback = [] // 完成态的回调队列
    self.onRejectedCallback = []  // 拒绝态的回调队列

    // promise的完成态回调
    let _resolve = (value) => {
      // 状态只能变更一次, 防止后续执行重复调用的 resolve 或 reject
      if (self.status === PENDING) {
        self.status = FULFILLED   // 将status改为 完成态
        self.value = value        // 保存传递进来的value值
        self.onFulfilledCallback.forEach(fn => fn(self.value)) // 触发之前异步执行时入栈的函数
      }
    }

    // promise的拒绝态回调, 实现原理同上
    let _reject = (reason) => {
      if (self.status === PENDING) {
        self.status = REJECTED
        self.reason = reason
        self.onRejectedCallback.forEach(fn => fn(self.reason))
      }
    }

    // executor 就是我们在new Promise时传入的那个函数, eg: new Promise((resolve, reject) => {})
    try {
      executor(_resolve, _reject)
    } catch (err) {
      reject(err)
    }
  }

  // promise的 then 方法，用来获取当前或最终的 value 或 reason
  then(onFulfilled, onRejected) {
    const self = this
    if (self.status === FULFILLED) { // 当状态为成功态时, 返回value值
      onFulfilled(self.value)
    }
    if (self.status === REJECTED) { // 当状态为拒绝态时, 返回reason值
      onRejected(self.reason)
    }
    if (self.status === PENDING) { // 当executor是在异步函数中触发时, 先让then的两个函数入栈
      self.onFulfilledCallback.push(onFulfilled)
      self.onRejectedCallback.push(onRejected)
    }
  }
}

```
> 测试一下代码
```javascript
const p1 = new MyPromise(resolve => resolve('FULFILLED')) 
const p2 = new MyPromise((_, reject) => reject('REJECTED'))
const p3 = new MyPromise(resolve => setTimeout(() => resolve('async'), 1000))

p1.then(data => console.log('resolve::', data))        // 控制台输出-> resolve:: FULFILLED
p2.then(_ => {}, err => console.log('reject::', err))  // 控制台输出-> reject:: REJECTED
p3.then(data => console.log('异步返回::', data))        // 1秒后控制台输出-> 异步返回:: async
```



## 加强版promise (then的链式调用 和 值穿透特性)

```javascript
// 解析X. 根据X是promise还是简单类型还是引用类型去做不同处理
const resolvePromise = (promise2, x, resolve, reject) => {
  if (promise2 === x) { // 防止promise等待promise, 直接抛出错误
    return reject(new TypeError("Chaining cycle detected for promise"))
  }
  if ((x !== null && typeof(x) === 'object') || typeof(x) === 'function') {
    // x很有可能是个promise, 根据规范 2.3.3.1  定义一个then变量,用于检测x是否为promise
    try {
      let then = x.then
      if (typeof(then) === 'function') { // 如果有then函数, 则认为他是promise
        // 规范 2.3.3.2 确保this指向x
        then.call(x, (y) => { // y 有可能也是一个promise
          resolvePromise(promise2, y, resolve, reject) // 递归解析
        }, (r) => {
          reject(r)
        })
      } else { // 当前的x就是一个普通的引用类型 eg: x = {a: 233}
        resolve(x)
      }
    } catch (e) {
       reject(e)
    }
  } else { // 简单类型直接返回 eg: x = 233
    resolve(x)
  }
}

class MyPromise {
  // ...  相同的代码省略
  // 主要还是对then进行改写
  then(onFulfilled, onRejected) {
    // 为了能使其支持穿透调用 eg: p.then().then().then(), 确保其必须是一个函数
    onFulfilled = typeof(onFulfilled) === 'function' ? onFulfilled : data => data 
    onRejected = typeof(onRejected) === 'function' ? onRejected : err => {throw err}
    const self = this
    // 1) 返回一个新的promise用于支持链式调用
    // 2) 为了能让新的promise能拿到当前then方法 成功或失败执行后的结果. 先用一个变量存起来.
    //    当我们的上一个promise 执行 成功/失败 的状态后. 然后变返回新的promise的then (注意, 上一个promise记得要return value 出去, 这样下一个then才能接收到值)
    const promise2 = new MyPromise(function(resolve, reject) {
      if (self.status === FULFILLED) {
        // 为了能让promise2 拿到值, 必须在实例化完成之后 (注意, 这里用setTimeout其实并不太合适(变为宏任务), 这里只是为了兼容在浏览器和node端运行, 才用此方法, 推荐用queueMicrotask)
        setTimeout(() => {
          try { // 捕获在onFulfilled的运行报错
            let x = onFulfilled(self.value) // 注意. x不一定是常量. 也有可能是promise
            resolvePromise(promise2, x, resolve, reject) // 解析传过来的x是常量还是promise
          } catch (error) {
            reject(error) // 如果执行函数时抛出失败, 那么会走向下一个人的失败
          }
        }, 0)
      }
      if (self.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(self.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0)
      }
      // 如果是异步的的话. 那么它的状态会先是pending
      if (self.status === PENDING) {
        self.onFulfilledCallback.push(function() {
          setTimeout(() => {
            try {
              let x = onFulfilled(self.value)
              resolvePromise(promise2, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          }, 0)
        })
        self.onRejectedCallback.push(function() {
          setTimeout(() => {
            try {
              let x = onRejected(self.reason)
              // reject(x)
              resolvePromise(promise2, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          }, 0)
        })
      }
    })
    return promise2
  }
}
```

## Promise Api

> Promise.resolve & Promise.reject

默认产生一个成功 或者 失败(拒绝)的promise

```JavaScript
class MyPromise {
  // ...
  static resolve(data){
    //根据规范, 如果参数是Promise实例, 直接return这个实例
    if (data instanceof MyPromise) return data
    return new MyPromise(resolve => resolve(data))
  }
  
  static reject(reason){
    return new MyPromise((_, reject) => reject(reason))
  }
}
```

> catch

catch方法其实就是执行一下then的第二个回调, 如果在then中写了第二个捕获错误的函数的话, 则不会触发catch

```JavaScript
class MyPromise {
  // ... 
  catch(rejectFn) {
    return this.then(null, rejectFn)
  }
}
```

> finally

finally也是返回一个promise, 无论promise是以哪种状态结束, 它都会执行执行的回调函数, 在finally之后, 还可以继续then, 并且将值原封不动传给后面的then

```JavaScript
class MyPromise {
  // ...
  finally(callback) {
    return this.then(
      (value) => MyPromise.resolve(callback()).then(() => value),
      (reason) =>
        MyPromise.resolve(callback()).then(() => {
          throw reason
        })
    )
  }
}
```

> all

把我们传递进来的各个promise返回结果存入一个数组, 并于所有结果完成之后返回. <br/>

用2个变量来记录, 一个记录累计结果, 一个记录执行的是第几个事件, 当累计结果的数组长度 === 执行事件的索引时, 抛出结果即可 (成功的情况下). <br/>

同时要注意, all传递进来的值并非promise, 则直接记录在 累计结果数组即可, 否则就是调用then中的resolve后记录

```JavaScript
class MyPromise {
  // ...
  static all = function(values) {
    if (!typeof values[Symbol.iterator] === "function") {
      throw new TypeError("object is not iterable")
    }
    return new MyPromise((resolve, reject) => {
      let resultArr = []
      let currIndex = 0
      function processData(i, val) {
        resultArr[i] = val
        currIndex++
        if (currIndex === values.length) {
          resolve(resultArr)
        }
      }
      for (let i = 0; i < values.length; i++) {
        let current = values[i]
        if (current && current.then && typeof current.then === "function") {
          current.then(y => {
            processData(i, y)
          }, reject)
        } else {
          processData(i, current)
        }
      }
    })
  }
}
```

> race

race: 竞态执行. 谁先返回谁赢, 利用promise的状态只能改变一次的特性. <br/>

简单点讲, 就是遍历执行所有的事件, 如果都是promise的话. 看谁先执行resolve方法. (resolve执行的时候, 改变了promise的状态, 那么其他后续的事件就没用了..还记得我们最开始写的那个resolve方法吗, 必须是pending状态才会执行)

```JavaScript
class MyPromise {
  // ...
  static race = function(values) {
    if (!typeof values[Symbol.iterator] === "function") {
      throw new TypeError("object is not iterable");
    }
    return new MyPromise((resolve, reject) => {
      for (let i = 0; i < values.length; i++) {
        let current = values[i]
        if (current && current.then && typeof current.then === 'function') {
          current.then(resolve, reject)
        } else {  // 普通值直接返回
          resolve(current)
        }
      }
    })
  }
}
```

## 完整的代码

```javascript
 
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

const resolvePromise = (promise2, x, resolve, reject) => {
  if (promise2 === x) {
    return reject(new TypeError("Chaining cycle detected for promise"))
  }
  if ((x !== null && typeof(x) === 'object') || typeof(x) === 'function') {
    try {
      let then = x.then
      if (typeof(then) === 'function') { 
        then.call(x, (y) => { 
          resolvePromise(promise2, y, resolve, reject) 
        }, (r) => {
          reject(r)
        })
      } else {
        resolve(x)
      }
    } catch (e) {
       reject(e)
    }
  } else {
    resolve(x)
  }
}

class MyPromise {
  constructor(executor) {
    const self = this
    self.status = PENDING 
    self.value = undefined  
    self.reason = undefined 
    self.onFulfilledCallback = [] 
    self.onRejectedCallback = [] 

    let _resolve = (value) => {
      if (self.status === PENDING) {
        self.status = FULFILLED   
        self.value = value        
        self.onFulfilledCallback.forEach(fn => fn(self.value)) 
      }
    }

    let _reject = (reason) => {
      if (self.status === PENDING) {
        self.status = REJECTED
        self.reason = reason
        self.onRejectedCallback.forEach(fn => fn(self.reason))
      }
    }

    try {
      executor(_resolve, _reject)
    } catch (err) {
      _reject(err)
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof(onFulfilled) === 'function' ? onFulfilled : data => data 
    onRejected = typeof(onRejected) === 'function' ? onRejected : err => {throw err}
    const self = this
    const promise2 = new MyPromise(function(resolve, reject) {
      if (self.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(self.value) 
            resolvePromise(promise2, x, resolve, reject) 
          } catch (error) {
            reject(error)
          }
        }, 0)
      }
      if (self.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(self.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0)
      }
      if (self.status === PENDING) {
        self.onFulfilledCallback.push(function() {
          setTimeout(() => {
            try {
              let x = onFulfilled(self.value)
              resolvePromise(promise2, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          }, 0)
        })
        self.onRejectedCallback.push(function() {
          setTimeout(() => {
            try {
              let x = onRejected(self.reason)
              resolvePromise(promise2, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          }, 0)
        })
      }
    })
    return promise2
  }

  catch(rejectFn) {
    return this.then(null, rejectFn);
  }

  finally(callback) {
    return this.then(
      (value) => MyPromise.resolve(callback()).then(() => value),
      (reason) =>
        MyPromise.resolve(callback()).then(() => {
          throw reason
        })
    )
  }

  static resolve(data) {
    if (data instanceof MyPromise) return data

    return new MyPromise(resolve => resolve(data))
  }
  
  static reject(reason) {
    return new MyPromise((_, reject) => reject(reason))
  }

  static all = function(values) {
    if (!typeof values[Symbol.iterator] === "function") {
      throw new TypeError("object is not iterable")
    }
    return new MyPromise((resolve, reject) => {
      let resultArr = []
      let currIndex = 0
      function processData(i, val) {
        resultArr[i] = val
        currIndex++
        if (currIndex === values.length) {
          resolve(resultArr)
        }
      }
      for (let i = 0; i < values.length; i++) {
        let current = values[i]
        if (current && current.then && typeof current.then === "function") {
          current.then(y => {
            processData(i, y)
          }, reject)
        } else {
          processData(i, current)
        }
      }
    })
  }

  static race = function(values) {
    if (!typeof values[Symbol.iterator] === "function") {
      throw new TypeError("object is not iterable");
    }
    return new MyPromise((resolve, reject) => {
      for (let i = 0; i < values.length; i++) {
        let current = values[i]
        if (current && current.then && typeof current.then === 'function') {
          current.then(resolve, reject)
        } else {
          resolve(current)
        }
      }
    })
  }
}

export default MyPromise
```
   
#### Referencing : 
[Promises/A+](https://promisesaplus.com/)  

<!-- [end](/thanks watch/) -->

    

    

    

    

    
   
    
   
    
   
    


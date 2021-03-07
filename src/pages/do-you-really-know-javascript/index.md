---
title: Do You Really Know JavaScript?
date: '2020-12-01'
spoiler:  js中一些“奇怪“的知识点😝
---

> 以下测试行为基于ECMA 262(5.1)在"浏览器环境"中。

***
1. 
```js
['1', '2', '3'].map(parseInt)

// => [1, NaN, NaN] 
```  

parseInt原本传的是2个参数(val,radix) ,  map 函数传参分别是 (ele,index,array)   
so, 当跑到数组的第二个项时,把map的第二个参数index丢给parsetInt的radix , parsetInt('2',1) 返回便是 NaN 

***
2. 
```js
[typeof null, null instanceof Object]

// =>  ["object", false]
```
typeOf null 返回"Object"实际上是个bug, 因为null根本就不在Object的原型上 , instanceof 已经给出了答案; 
null 不是一个对象，它是原始值.  <br>
null(JSVAL_NULL)是机器代码的空指针，一个对象类型的引用，值是零。<br>
标志位 000：对象，数据是对象的应用。 <br>
这样就很明显的知道为什么typeof null的值是object了：它检查了标志位的类型，标志位表明它是个对象。

***
3. 
```js
[ [3,2,1].reduce(Math.pow), [].reduce(Math.pow) ]

// Uncaught TypeError: Reduce of empty array with no initial value
```
MDN已有描述 : if the array is empty and no initialValue is provided, TypeError will be thrown.  <br>
如果一个空数组没有指定 initialValue ,则会报错.

***
4. 
```js
var val = 'smtg';
console.log('Value is ' + (val === 'smtg') ? 'Something' : 'Nothing');

// => Something
```
三元运算符具有更高的优先级。 <br/>
那如果要连着打印呢? 把 三元 那一段用括号包起来就行了

***
5. 
```js
var name = 'World!';
(function () {
    if (typeof name === 'undefined') {
        var name = 'Jack';
        console.log('Goodbye ' + name);
    } else {
        console.log('Hello ' + name);
    }
})();

// => Goodbye Jack
```
IIFE自执行函数有自己的作用域~ 

***
6. 
```js
var END = Math.pow(2, 53);
var START = END - 100;
var count = 0;
for (var i = START; i <= END; i++) {
    count++;
}
console.log(count);
```
boom~~ 数太大.浏览器被玩坏了,实际上什么都不会输出~~~

***
7. 
```js
var ary = [0,1,2]
ary[10] = 10
ary.filter(function(x) { return x === undefined})

// => []
```
数组的空位empty ,length长度也会算上去. ary的length是11 <br>
虽然ary[3]返回的是undefined, 不代表ary[3]里面就是undefined ,而是 empty , <br>
filter不会对缺失的项进行操作,所以返回[]

***
8. 
```js
var two   = 0.2
var one   = 0.1
var eight = 0.8
var six   = 0.6
console.log([two - one == one, eight - six == two])

// => [true, false]
```
浮点运算精度丢失的问题
***
9. 
```js
function showCase(value) {
    switch(value) {
    case 'A':
        console.log('Case A');
        break;
    case 'B':
        console.log('Case B');
        break;
    case undefined:
        console.log('undefined');
        break;
    default:
        console.log('Do not know!');
    }
}

showCase(new String('A'));

// => Do not know!
```
new String("A") 返回的是一个字符对象 {'A'}
***
10. 
```js
function showCase2(value) {
    switch(value) {
    case 'A':
        console.log('Case A');
        break;
    case 'B':
        console.log('Case B');
        break;
    case undefined:
        console.log('undefined');
        break;
    default:
        console.log('Do not know!');
    }
}
showCase2(String('A'));

// => Case A
```
注意这里没有加new, 返回的是个字符串

***
11. 
```js
function isOdd(num) {
    return num % 2 == 1;
}
function isEven(num) {
    return num % 2 == 0;
}
function isSane(num) {
    return isEven(num) || isOdd(num);
}
var values = [7, 4, '13', -9, Infinity];
values.map(isSane);

// =>  [true, true, true, false, false] 
```

-9 % 2 返回的还会是负数 -1, Infinity % 2 为 NaN; 所以后面2个是false

***
12. 
```js
parseInt(3, 8)
parseInt(3, 2)
parseInt(3, 0)

// => 3, NaN, 3
```
除了“0、1”外，其它数字都不是有效二进制数字，所以第二个为 NaN , 那么0呢? <br/>
parseInt将考虑一个伪基数，并假设您指的是10，因此返回3。

***
13. 
```js
Array.isArray(Array.prototype)

// => true
```
数组的原型链是也是个数组~

***
14. 
```js
var a = [0];
if ([0]) {
  console.log(a == true);
} else {
  console.log("wut");
}

// => result: false

```
[0]的bool是true没错, 但是, [0]和bool 去==的话, 就是发生隐式转换 , 最终[0].toString 去对比,返回便是false

15. 
```js
[]==[]
```
指针地址不同

16. 
```js
'5' + 3
'5' - 3

// => '53', 2
```
+ 在字符串前是当连接符用的, - 会发生隐式转换

***

17. 
```js
1 + - + + + - + 1 
1 - + - + - 1 

// => 2 , 0
```
个人看法: 简单点理解就是比较 - +哪个多 , +多的就相加, -多的将相减 ~~ 

18. 
```js
var ary = Array(3);
ary[0]=2
ary.map(function(elem) { return '1'; });

// => ["1", empty × 2]
```
因为map只对数组中已经初始化的元素进行调用~

***

19. 
```js
function sidEffecting(ary) {
  ary[0] = ary[2];
}
function bar(a,b,c) {
  c = 10
  sidEffecting(arguments);
  return a + b + c;
}
bar(1,1,1)

// => 21
```
传参后被函数改动了数值. 所以是10+1+10

***

20. 
```js
var a = 111111111111111110000,
    b = 1111;
a + b;

// => 111111111111111110000
```
jvaScript中的数字缺乏精确性会影响小数字和大数字~ 

***

21. 
```js
var x = [].reverse;
x();

// VM2952:1 Uncaught TypeError: Cannot convert undefined or null to object
```
我猜这道题本来想考察this指向的问题.. 旧一点的浏览器会返回window, 现在是直接报错

***

22. 
```js
Number.MIN_VALUE > 0

// =>  true
```
Number.MIN_VALUE提供了一个大于0的最小值

***

23. 

```js
[1 < 2 < 3, 3 < 2 < 1]

// [true, true] 
```
隐式转换会把 true变成1 , false变成0 

***

24. 
```js
2 == [[[2]]]

// => true
```
值和引用类型去比较,把引用类型转话成值类型.   
具体转换过程看这篇:https://stackoverflow.com/questions/7202157/why-does-return-the-string-10/7202287#7202287

***


25. 

```js
3.toString()    //报错.
3..toString()   //3.是 "3"的有效写法
3...toString()  //报错.
```
运算符优先级的问题，点运算符会被优先识别为数字常量的一部分，然后才是对象属性访问符.  
3.toString() 会被 JS 引擎解析成 (3.)toString() 所以报错 <br>
3..toString() 会被 JS 引擎解析成 (3.).toString() 会输出 "3" <br>
3...toString() 会被 JS 引擎解析成 (3.)..toString() 还是报错 <br>

***

26. 
```js
(function(){
  var x = y = 1;
})();
console.log(y);
console.log(x);

// => : 1, error
```
作用域问题, Y是全局的, X的作用域在函数内

***

27. 
```js
var a = /123/,
    b = /123/;
a == b
a === b

// =>  false false
```
reg是个对象 , 2个对象指针不同 ,所以看起来值一样也是没用的,   
这里相当于去比较 {a:1}=={a:1}

***

28. 
```js
var a = [1, 2, 3],
    b = [1, 2, 3],
    c = [1, 2, 4]
a ==  b  
a === b
a > c
a < c

// => false false false true
```
前面两个还好理解, 毕竟引用地址各不相同.  
主要是看 比较大小, 引用类型间比较大小是按照字典序比较，就是先比第一项谁大，相同再去比第二项。

***

29.  
```js
var a = {}, b = Object.prototype;
[a.prototype === b, Object.getPrototypeOf(a) === b]

// => [false ,true]
```

首先, 实例对象没有prototype , 只有__proto__ , 所以第一个是false; <br>
然后, Object.getPrototypeOf() 方法返回指定对象的原型 , a的__poroto__ 指向的是Object.prototype，也就是Object.getPrototypeOf(a)。 <br>
注意Object.getPrototypeOf(Object)  不是  Object.prototype

***

30. 
```js
function f() {}
var a = f.prototype, b = Object.getPrototypeOf(f);
a === b

// => false
```
a是构造函数f的原型 ： {constructor: ƒ} <br>
b是实例f的原型对象 ： ƒ () { [native code] }

*** 

31. 
```js
function foo() { }
var oldName = foo.name;
foo.name = "bar";
[oldName, foo.name]

// =>  ['foo','foo']  
```
函数都有一个name,且修改无效

***

32. 
```js
"1 2 3".replace(/\d/g, parseInt)

// =>  "1 NaN 3" 
```
如果没有与子表达式匹配的项，第二参数为出现的位置.所以第一个参数是匹配项，第二个参数是位置 <br/>
parseInt('1', 0) // 0会被默认改为10进制 <br>
parseInt('2', 2) // 2进制中不可能有2 <br>
parseInt('3', 4) // 4进制中有3的存在 

***

33. 
```js
function f() {}
var parent = Object.getPrototypeOf(f);
f.name 
parent.name 
typeof eval(f.name) 
typeof eval(parent.name) 

// =>  'f', '', 'function', 'undefined'

```
第一个是"f"很好理解吧, 就是f函数的name <br>
parent是f原型对象的名字为 '' <br>
eval(f.name) 为 f,f的数据类型是function <br>
eval(parent.name) 为undefined, 'undefined' <br>


***

34. 
```js
var lowerCaseOnly =  /^[a-z]+$/
[lowerCaseOnly.test(null), lowerCaseOnly.test()]

// =>  [true, true]
```
null, undefined(没传参) 会被转义为字符串, 所以就匹配到规则(匹配英文字母)了 
***

35. 
```js
[,,,].join(", ")

// =>  ", ,"
```
数组是 [empty,empty,empty] . 所以转出来便是 ', , '
***


36. 
```js
var a = {class: "Animal", name: 'Fido'}
a.class

// =>  大部分情况下输出 'Animal' 
```
类是一个保留字，但它被Chrome、Firefox和Opera接受为属性名。在IE中，它将失败。另一方面，每个人都会接受大多数其他保留字（int、private、throws等）作为变量名，而class是禁止的。
***

37. 
```js
var a = new Date("epoch")

// =>  Invalid Date
```
new Date接收的是number或是date , date在内部以数字保存 , NAN类型进来的话便是  Invalid Date 了
***

38. 
```js
var a = Function.length
var b = new Function().length

a === b

// =>  false
```
像Array,Object, Function他们的长度都被定义为1 , 另一方面 ,函数原型对象的长度属性被定义为0
***

39. 
```js
var a = Date(0)
var b = new Date(0)
var c = new Date()
[a === b, b === c, a === c]

// =>  [false,false,false]
```
a 为当前时间的字符串, b是时间为1970年的Date对象, c 是也是一个 Date对象; <br>
值 和 引用对象, 以及引用对象之间的比较 , 答案显而易见, 全是 false
***

40. 
```js
var min = Math.min(), max = Math.max()

min < max

// =>  false
```
Math.min()返回 Infinity, Math.max() 返回 -Infinity ，Infinity应该大于-Infinity, 所以是false

***

41. 
```js
function captureOne(re, str) {
  var match = re.exec(str)
  return match && match[1]
}

var numRe  = /num=(\d+)/ig,
    wordRe = /word=(\w+)/i,
    a1 = captureOne(numRe,  "num=1"),
    a2 = captureOne(wordRe, "word=1"),
    a3 = captureOne(numRe,  "NUM=2"),
    a4 = captureOne(wordRe,  "WORD=2")

[a1 === a2, a3 === a4]

// =>  [true, false]
```
当正则表达式使用 "g" 标志时，可以多次执行 exec (test) 方法来查找同一个字符串中的成功匹配。<br>
如果匹配不到, **lastIndex**会被重置为0; 匹配到的话, 则会更新**lastIndex**的位置。<br>
上面的a1和a3用的是同一个正则 **/num=(\d+)/ig**, a1匹配到后, 把**lastIndex**由0更新到5, <br>
这会导致 a3的索引是从 5 开始去匹配的, 导致匹配不到, 返回null。 <br>
numRe的**lastIndex**此时重置为0, 要想a3 === a4, 这里重新计算一下a3就可以了

***


42. 
```js
var a = new Date("2014-03-19")
var b = new Date(2014, 03, 19)
[a.getDay() === b.getDay(), a.getMonth() === b.getMonth()]

// =>  [false, false]
```
a 返回的正确的时间; b 的月份要-1才对 , date的月份从0开始算
***

43. 
```js
if ('http://giftwrapped.com/picture.jpg'.match('.gif')) {
  'a gif file'
} else {
  'not a gif file'
}

// =>  "a gif file" 
```
match默认会将string转为reg, 所以这里的点(.), 表示匹配的是任意字符
***


44. 
```js
function foo(a) {
    var a;
    return a;
}
function bar(a) {
    var a = 'bye';
    return a;
}
[foo('hello'), bar('hello')]


// =>  ["hello", "bye"]
```

foo函数中的var a 是函数默认就会对参数进行的变量提升, 并不是说这里var a 就表示把a 定义为undefined


<br/>
<br/>


#### Referencing : 
[JavaScript Puzzlers!](https://javascript-puzzlers.herokuapp.com/)  

<!-- [end](/thanks watch/) -->
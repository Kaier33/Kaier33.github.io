webpackJsonp([33],{"7b0v":function(t,e){},"8iDn":function(t,e){},"9guz":function(t,e,n){t.exports=n.p+"static/img/test_null@3x.f43bd2a.png"},GwQm:function(t,e,n){"use strict";var a=n("woOf"),i=n.n(a),s=n("mvHQ"),o=n.n(s),r=(n("fZjL"),n("pFYg"),n("u2KI"));n.n(r)()({});function c(t){return Object.prototype.toString.call(t).slice(8,-1)}function u(t){return"Object"==c(t)}function l(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=[];for(var a in t){var i=t[a];i.constructor===Array?i.forEach(function(t){n.push(a+"="+t)}):n.push(a+"="+i)}return e?"?"+n.join("&"):n.join("&")}var d=n("wzuo");function f(t,e,n){if(e&&!t.hasOwnProperty(e))throw new Error("没有发现"+e);if(n&&!u(n))throw new Error(e+": 传入的$data应为一个对象")}e.c=function(t){if(!d.a)return;var e="dgtle4://nativeBrowse?imgUrl="+t;v(e),console.log(e),console.log("图片浏览: ",t)},e.h=function(t,e){if(!d.a)return;var n="dgtle4://nativeGo?"+t+"&"+l(e,!1);v(n),console.log(n),console.log("跳转: ",t,e)},e.b=function(t){if(!d.a)return;var e="dgtle4://nativeAddFavorites"+l(t);v(e),console.log(e),console.log("加入收藏夹: ",t)},e.d=function(t){if(!d.a)return;var e="dgtle4://nativeCommentLink"+l(t);v(e),console.log(e),console.log("点评点赞 或 取消: ",t)},e.g=function(t){if(!d.a)return;var e="dgtle4://nativeCommentReviewLink"+l(t);v(e),console.log(e),console.log("点评评论点赞 或 取消: ",t)},e.f=function(t,e){if(!d.a)return;if(e){var n="dgtle4://nativeCommentRankCancelFavorites"+l(t);v(n),console.log(n),console.log("榜单详情点取消收藏: ",t)}else{var a="dgtle4://nativeCommentRankFavorites"+l(t);v(a),console.log(a),console.log("榜单详情点收藏: ",t)}},e.e=function(t){if(!d.a)return;var e="dgtle4://nativeCommentProductLibrarySearch"+l(t);v(e),console.log(e),console.log("产品搜索: ",t)};e.a=function(t){if(d.a){if(t.hasOwnProperty("bridge"))throw new Error("bridge字段被占用");if(!t.vms)throw new Error("没有发现vms字段");var e=t.vms;if(!u(e))throw new Error("vms类型错误");t.bridge={getData:function(t,n){t=String(t),f(e,t);var a=e[t];return n?o()(a.$data,null,4):i()({},a.$data)},pushData:function(t,n){t=String(t),f(e,t,n);var a=e[t];i()(a,n)}}}};function v(t){var e=document.createElement("IFRAME");e.setAttribute("src",t),document.documentElement.appendChild(e),e.parentNode.removeChild(e),e=null}},HjsM:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=n("M93x"),s=n("/ocq"),o=(n("Q24Q"),{name:"my-test-detail",mixins:[n("txzs").a],components:{},data:function(){return{datas:[{productImg:"http://i4.article.fd.zol-img.com.cn/g5/M00/04/03/ChMkJlpgPuGISF3iAAFxP3ckvFkAAkLfgGYMngAAXFX214.jpg",productName:"Misfit SHINE 新世界的复古手表",testStatusStr:"申请失败",testStatus:0},{productImg:"http://i4.article.fd.zol-img.com.cn/g5/M00/04/03/ChMkJlpgPuGISF3iAAFxP3ckvFkAAkLfgGYMngAAXFX214.jpg",productName:"apple watch 3",testStatusStr:"预计 02 月 01 日公布名单",testStatus:1},{productImg:"http://i4.article.fd.zol-img.com.cn/g5/M00/04/03/ChMkJlpgPuGISF3iAAFxP3ckvFkAAkLfgGYMngAAXFX214.jpg",productName:"Misfit SHINE 新世界的复古手表asdasdasdasd",testStatusStr:"申请成功，请在 48 小时内确认信息",testStatus:2},{productImg:"http://i4.article.fd.zol-img.com.cn/g5/M00/04/03/ChMkJlpgPuGISF3iAAFxP3ckvFkAAkLfgGYMngAAXFX214.jpg",productName:"Misfit SHINE 新世界的复古手表asdasdasdasd",testStatusStr:"未在  48 小时内确认信息，已失去此产品的众测资格 ",testStatus:3},{productImg:"http://i4.article.fd.zol-img.com.cn/g5/M00/04/03/ChMkJlpgPuGISF3iAAFxP3ckvFkAAkLfgGYMngAAXFX214.jpg",productName:"Misfit SHINE 新世界的复古手表asdasdasdasd",testStatusStr:" 体验中 ",testStatus:4}]}},methods:{getData:function(t){}},mounted:function(){}}),r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"100%"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"main"},[t.datas.length>0?a("ul",{staticClass:"testList",attrs:{id:"testList"}},t._l(t.datas,function(e,n){return a("li",{key:n},[a("div",{staticClass:"testItem"},[a("img",{attrs:{src:e.productImg}}),t._v(" "),a("div",{staticClass:"testInfo"},[a("p",{staticClass:"testName"},[t._v(t._s(e.productName))]),t._v(" "),a("p",{staticClass:"testStatus"},[t._v(t._s(e.testStatusStr))])])]),t._v(" "),0!==e.testStatus&&1!==e.testStatus?a("div",{staticClass:"btn"},[a("div",{staticClass:"examine"},[t._v("查看申请信息")]),t._v(" "),2==e.testStatus?a("div",{staticClass:"affirm"},[t._v("确认")]):3==e.testStatus?a("div",{staticClass:"pastDue"},[t._v("已过期")]):4==e.testStatus?a("div",{staticClass:"submitTest"},[t._v("提交众测体验")]):t._e()]):t._e()])})):a("div",{staticClass:"nullData",attrs:{id:"nullData"}},[a("img",{staticClass:"nullDataImg",attrs:{src:n("9guz")}}),t._v(" "),a("p",[t._v("这里什么都没有")]),t._v(" "),a("p",[t._v("去众测首页开始产品体验之旅")])])])])])},staticRenderFns:[]};var c=n("VU/8")(o,r,!1,function(t){n("7b0v")},"data-v-6b874dd6",null).exports;a.a.use(s.a);var u=new s.a({routes:[{path:"/",name:"myTestDetail",component:c}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:u,components:{App:i.a},template:"<App/>"})},L7xQ:function(t,e){},M93x:function(t,e,n){"use strict";var a=function(){var t;t=0,document.addEventListener("touchend",function(e){if(1===e.touches.length){var n=(new Date).getTime();n-t<=300&&e.preventDefault(),t=n}},!1)},i=n("wzuo"),s=n("GwQm");var o=function(){i.b&&(window.vms={}),Object(s.a)(window)},r={name:"App",beforeCreate:function(){o()},mounted:function(){a()}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var u=n("VU/8")(r,c,!1,function(t){n("8iDn"),n("UtKP"),n("L7xQ")},null,null);e.a=u.exports},Q24Q:function(t,e){},UtKP:function(t,e){},txzs:function(t,e,n){"use strict";var a=n("wzuo");e.a={created:function(){a.a&&(window.vms[this.$options.name]=this)}}},wzuo:function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"a",function(){return c});var a="undefined"!=typeof window,i=a&&window.navigator.userAgent.toLowerCase(),s=(i&&/msie|trident/.test(i),i&&i.indexOf("msie 9.0"),i&&i.indexOf("edge/")>0),o=i&&i.indexOf("android")>0,r=i&&/iphone|ipad|ipod|ios/.test(i),c=(i&&/chrome\/\d+/.test(i),i&&(o||r))}},["HjsM"]);
//# sourceMappingURL=my-test-detail.d60a6a5d8db59e81b14c.js.map
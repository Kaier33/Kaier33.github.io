webpackJsonp([16],{"1j1P":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAYAAAB6kdqOAAAAAXNSR0IArs4c6QAAAiFJREFUWAnN2M9KAkEcB/D5TahHo+5e6l5Br9ChQxARaOQrdChx8xHMqEuvUGSg4SEI7BWC/pyrQ3fDrkVO39+sa+bmNrv+m4FxZ+fvZ3fWnVESfYIqlRaFUpsoXkFMIT2DYwPxFfFGxGIVyuUekPYFdXS0ID4/f9oKMSuI3lDRbUtUIce59zVEBvVmquPjeXR2CMB6b5nvnOgSAzno/JnLcBFzaFdC3PDV7c0gquGi8rS399Rd9AukisVVFJ4jJrsrBaaJmgBkdB2iMtLTgfV/F77jdIsKhWsvuwNqY65QIL1C4yPRl66r1JRxG68it1VqzUNpkJ6mj49b1DG/M16Hwzm+i3h8mafPvRv8zEwOw5eU1M8tEqS/Ta3WHedOPEi5JDF//PW0I8DCU8bvGVvCCoNStmjYwlPGb2A7Aix8h3g5sCU0GPRqi4YtEmtR3RoQLFJIWbEGBIukfP4RoKoFqCpb+BkSIpFwMHXNiaF4bDYgaBDt7r4AlEZ0V+1xynhMjK0NHojHxyarjndSdqwod+uR1WO3b0JnP9Q+F9gXZYA6BS783sbrxOToYQqFcnd1H4gLR47qg+Gx/wSNFBWACQSNBPUP5l/QUFEGGCPQUFCGGGPQQKgQmFCgSKiQmNCgUKgImEggI1RETGRQIIoxRNtYDi64XtjQ98Vo0hF+06WxxJx1lpkBMTzmQCDuQB0c8L8kJ5xG2KH9/ZqbjPb5DTbo9oNf+4UhAAAAAElFTkSuQmCC"},"6KCO":function(t,e){},"8iDn":function(t,e){},GwQm:function(t,e,a){"use strict";var i=a("woOf"),n=a.n(i),s=a("mvHQ"),r=a.n(s),o=(a("fZjL"),a("pFYg"),a("u2KI"));a.n(o)()({});function c(t){return Object.prototype.toString.call(t).slice(8,-1)}function l(t){return"Object"==c(t)}function u(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=[];for(var i in t){var n=t[i];n.constructor===Array?n.forEach(function(t){a.push(i+"="+t)}):a.push(i+"="+n)}return e?"?"+a.join("&"):a.join("&")}var d=a("wzuo");function g(t,e,a){if(e&&!t.hasOwnProperty(e))throw new Error("没有发现"+e);if(a&&!l(a))throw new Error(e+": 传入的$data应为一个对象")}e.c=function(t){if(!d.a)return;var e="dgtle4://nativeBrowse?imgUrl="+t;m(e),console.log(e),console.log("图片浏览: ",t)},e.h=function(t,e){if(!d.a)return;var a="dgtle4://nativeGo?"+t+"&"+u(e,!1);m(a),console.log(a),console.log("跳转: ",t,e)},e.b=function(t){if(!d.a)return;var e="dgtle4://nativeAddFavorites"+u(t);m(e),console.log(e),console.log("加入收藏夹: ",t)},e.d=function(t){if(!d.a)return;var e="dgtle4://nativeCommentLink"+u(t);m(e),console.log(e),console.log("点评点赞 或 取消: ",t)},e.g=function(t){if(!d.a)return;var e="dgtle4://nativeCommentReviewLink"+u(t);m(e),console.log(e),console.log("点评评论点赞 或 取消: ",t)},e.f=function(t,e){if(!d.a)return;if(e){var a="dgtle4://nativeCommentRankCancelFavorites"+u(t);m(a),console.log(a),console.log("榜单详情点取消收藏: ",t)}else{var i="dgtle4://nativeCommentRankFavorites"+u(t);m(i),console.log(i),console.log("榜单详情点收藏: ",t)}},e.e=function(t){if(!d.a)return;var e="dgtle4://nativeCommentProductLibrarySearch"+u(t);m(e),console.log(e),console.log("产品搜索: ",t)};e.a=function(t){if(d.a){if(t.hasOwnProperty("bridge"))throw new Error("bridge字段被占用");if(!t.vms)throw new Error("没有发现vms字段");var e=t.vms;if(!l(e))throw new Error("vms类型错误");t.bridge={getData:function(t,a){t=String(t),g(e,t);var i=e[t];return a?r()(i.$data,null,4):n()({},i.$data)},pushData:function(t,a){t=String(t),g(e,t,a);var i=e[t];n()(i,a)}}}};function m(t){var e=document.createElement("IFRAME");e.setAttribute("src",t),document.documentElement.appendChild(e),e.parentNode.removeChild(e),e=null}},L7xQ:function(t,e){},M93x:function(t,e,a){"use strict";var i=function(){var t;t=0,document.addEventListener("touchend",function(e){if(1===e.touches.length){var a=(new Date).getTime();a-t<=300&&e.preventDefault(),t=a}},!1)},n=a("wzuo"),s=a("GwQm");var r=function(){n.b&&(window.vms={}),Object(s.a)(window)},o={name:"App",beforeCreate:function(){r()},mounted:function(){i()}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var l=a("VU/8")(o,c,!1,function(t){a("8iDn"),a("UtKP"),a("L7xQ")},null,null);e.a=l.exports},"Q/Ka":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAYAAAB6kdqOAAAAAXNSR0IArs4c6QAAA2hJREFUWAm9l1tPE0EUx3dmt9VWasFgAwWboGJiGoIPvgB94IGEEIP6wrtfwO/Ad/AL+GhCYtBqGhIS+lAuD+KDBE0IFBNWSwiRS2Xrtt1d599m6+yy29LLOkkz55yZc86vcznTEsGlzc7OBo+PjR7DMG7qOvFTSkTDIGVKjaIgGPneXnKSTCYVJ3fTVxBICL6EGJKuGxp8CSHn9XyJPeDk5IvrxeLpgKaVuu1jdl0Ufafh8B05lXqlYmxm5uW1s7ODwav6+v3dP9Lp13/4uBagqam5sKKUhlhAkZ9UT2ZQWjDo28ecVn2XlxfOzBw1IMDk88p9c+B/9qFQcNeEokiMbbq4UO9ehpAKlAb3R0cHvmxsfPgciwW3oPv9UuHyXKtFkijbClGWJHEHfuhF0X9QtVvnYmXBAGtlhcbHn9+z7zsLkMtk3uXYITSs7uxIs9OdSDzrL5e1fvsYdHYBDqenH+fm5+d1+ziz0aWlT/3skPfxYziPa2uLewQ34uhIf8gPAmZ19f1P3uYkJxJPekolwbKyPp+QzWQ+njjN520TE0+j9i8UidBvFFebnygIUgErY7U5a0gcCPj2KJWK+EC+CgyiVXNYtx4sEuoMn45S/6HTNvFzeDmdXjxlOj5NNeQYG5s71PXykOkIForCZRrQj4z05HndS3lwUPjNx68WYFaBeWM0GtV43Us5Ho+X+fh4DSieA964vb0t8bqXsj1X9WmqvE3/0sqy0PVP81ay58JbR9kynfNpJanYh1rB27yQkQO5+NhgESORB3iFb5sDmqb7stkckeUdTw+3qnaxOqRbSk6xSGS6uZlUUCVNIPSoouxK3uJtnZQR26lSg6WyNeGwKuPV5pPqujLkBVQVRqnVHuREbjBArgClUik1HL6RhYFvnYZygkE+5AYD5FoN2t3dUmOxR6phlCz7Ch12Wf7a8IVHQLfmBoNfDysrb2pHpgaEQEjqBVQ9mPX1hV/8l7AAeQHVDAzyXwLqJFSzMK5AnYBqBaYuUDtQrcI0BGoFqh2YKwE1A9UuDHLV/gZBadTqJYQvCqk9BuqM/Wrb5/B6U0BwdIPig5pyszDwc7z2ZkCn3q142ue2AoMYTQPBqRFUqzAtA9WDagemLSATang4XiiXSYj9cNADAel7JvO24Z9E+Lq1v06XOg43iXU/AAAAAElFTkSuQmCC"},Q24Q:function(t,e){},UtKP:function(t,e){},aJ7X:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),n=a("M93x"),s=a("/ocq"),r=a("txzs"),o=a("GwQm"),c=a("wzuo"),l=a("gqv3"),u=a("oJDE"),d={name:"question-answer-details",mixins:[r.a],components:{ReviewBar:u.a,TagBar:l.a},data:function(){return{data:{id:1,title:"苹果派和草莓派哪种你最爱呢",user_id:1,reply_count:null,tags_id:"1",product_id:3,imgs_url:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg"],created_at:1525940018,updated_at:1526276159,tags:[{id:19,title:"小米",icon:"http://img.whalegogo.com/tag/20180124/14bed9fd09e41ef7c0eda81b9d8c40b2.jpg",catalog:"数码"},{id:20,title:"大米",icon:"http://img.whalegogo.com/tag/20180124/14bed9fd09e41ef7c0eda81b9d8c40b2.jpg",catalog:"数码"}],user_profile:{id:"1Bb7GbPl",username:"master",status:10,created_at:1486460628,updated_at:1507886382,sys_manager:0,profile:{realname:null,avatar_path:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg",space_cover_path:null,province:null,city:null,gender:null,introduce:null}},answers:[{id:1,type:2,object_id:2,user_id:7,like_state:1,parent_id:0,content:"aaa",imgs_url:["http://backend.dgtle.t/12","http://backend.dgtle.t/34"],likes:10,reply_count:0,tags_id:"",deleted_at:null,created_at:1526471306,updated_at:1526471306,user_profile:{id:"Ejb5pwXG",username:"尾巴用户0636",status:10,created_at:1525937876,updated_at:1525937876,sys_manager:0,profile:{realname:null,avatar_path:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg",space_cover_path:null,province:null,city:null,gender:null,introduce:null}}},{id:2,type:2,object_id:2,user_id:7,parent_id:0,content:"aaa",imgs_url:["http://backend.dgtle.t/12","http://backend.dgtle.t/34"],likes:10,reply_count:0,tags_id:"",like_state:0,deleted_at:null,created_at:1526471306,updated_at:1526471306,user_profile:{id:"Ejb5pwXG",username:"尾巴用户0636",status:10,created_at:1525937876,updated_at:1525937876,sys_manager:0,profile:{realname:null,avatar_path:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg",space_cover_path:null,province:null,city:null,gender:null,introduce:null}}}]}}},methods:{imgBrowse:function(t){Object(o.c)(t),c.a},getTagIndex:function(t){Object(o.h)("跳转到标签但是没有页面",{id:this.data.tags[t].id}),c.a}}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{padding:"0 40px"}},[a("h3",{staticClass:"QuestionAnswerDetails_title"},[t._v(t._s(t.data.title))]),t._v(" "),a("p",{staticClass:"QuestionAnswerDetails_time"},[t._v(t._s(t.data.created_at))]),t._v(" "),a("ul",{staticClass:"QuestionAnswerDetails_img clearfix"},t._l(t.data.imgs_url,function(e,i){return a("li",{key:i,on:{click:function(a){t.imgBrowse(e)}}},[a("a",{attrs:{href:"JavaScript:void(0)"}},[a("img",{attrs:{src:e}})])])})),t._v(" "),a("TagBar",{attrs:{vTitle:"相关标签",vData:t.data.tags},on:{getIndex:t.getTagIndex}}),t._v(" "),a("ReviewBar",{attrs:{vTitle:"回答",vData:t.data.answers}})],1)},staticRenderFns:[]};var m=a("VU/8")(d,g,!1,function(t){a("mDIT")},"data-v-078ac7ce",null).exports;a("Q24Q");i.a.config.productionTip=!1,i.a.use(s.a);var v=new s.a({routes:[{path:"/",name:"QuestionAnswerDetails",component:m}]});new i.a({el:"#app",router:v,components:{App:n.a},template:"<App/>"})},gqv3:function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"TagBar"},[t.vTitle?a("h3",{staticClass:"TagBar-h3"},[t._v(t._s(t.vTitle))]):t._e(),t._v(" "),a("ul",{staticClass:"clearfix"},t._l(t.vData,function(e,i){return a("li",{key:e.id,staticClass:"TagBar-relatedLabels",on:{click:function(e){t.sendIndex(i)}}},[a("a",{style:{lineHeight:!!t.vHeight&&2*t.vHeight+"px"},attrs:{href:"JavaScript:void(0)"}},[t._v("# "+t._s(e.title))])])}))])},staticRenderFns:[]};var n=a("VU/8")({props:["vData","vTitle","vHeight"],data:function(){return{}},methods:{sendIndex:function(t){this.$emit("getIndex",t)}},mounted:function(){}},i,!1,function(t){a("6KCO")},"data-v-3eb6f1ae",null);e.a=n.exports},mDIT:function(t,e){},oJDE:function(t,e,a){"use strict";var i=a("GwQm"),n=a("wzuo"),s={name:"discussBar",props:["vTitle","vLimit","vData"],data:function(){return{discussLists:""}},methods:{commentLove:function(t,e){e?t.likes--:t.likes++,this.$emit("getLikeIndex",{id:t.id,isCancel:e}),t.like_state=!t.like_state},go:function(t){Object(i.h)("user",{id:t}),n.a},goReviewDetails:function(t){Object(i.h)("review-details",{id:t})}},mounted:function(){}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"discussBar"},[""!=t.vTitle?i("h3",{staticClass:"discussBar_title"},[t._v(t._s(t.vTitle))]):t._e(),t._v(" "),t._l(t.vData,function(e,n){return i("div",{key:e.id,staticClass:"discussContent clearfix"},[i("div",{staticClass:"discuss_portrait"},[i("img",{staticClass:"discuss_portrait_img",attrs:{src:e.user_profile.profile.avatar_path,alt:""},on:{click:function(a){t.go(e.user_profile.id)}}})]),t._v(" "),i("div",{staticClass:"discuss_content_right"},[i("div",{staticStyle:{overflow:"hidden"}},[i("span",{staticClass:"discussBar_name",on:{click:function(a){t.go(e.user_profile.id)}}},[t._v(t._s(e.user_profile.username))]),t._v(" "),i("span",{staticClass:"discussBar_time"},[t._v(t._s(e.created_at))]),t._v(" "),i("div",{staticClass:"discussBar_love_box"},[i("img",{directives:[{name:"show",rawName:"v-show",value:!e.like_state,expression:"!item.like_state"}],attrs:{src:a("Q/Ka"),alt:""},on:{click:function(a){t.commentLove(e,!1)}}}),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:e.like_state,expression:"item.like_state"}],attrs:{src:a("1j1P"),alt:""},on:{click:function(a){t.commentLove(e,!0)}}}),t._v(" "),i("span",{staticClass:"discussBar_love_count"},[t._v(t._s(e.likes))])])]),t._v(" "),i("div",{staticClass:"discussBar_name_one"},[t._v("\r\n\t\t\t\t\t\t\t\t\t"+t._s(e.content)+"\r\n\t   \t   \t   \t  ")]),t._v(" "),e.kids?i("div",{staticClass:"discussBar_name_another",on:{click:function(a){t.goReviewDetails(e.id)}}},[t._l(e.kids,function(a){return e.kids.length>0?i("p",{key:a.id,staticClass:"discussBar_commentator_show"},[i("a",{staticClass:"discussBar_commentator",attrs:{href:"javascript:;"}},[t._v(t._s(a.user_profile.username))]),t._v(" "),i("span",{staticClass:"discussBar_commentator_word"},[t._v(t._s(a.content))])]):t._e()}),t._v(" "),e.kids.length>0?i("a",{staticClass:"discussBar_checkMore"},[t._v("共 "+t._s(e.kids.length)+" 条回复 >")]):t._e()],2):t._e(),t._v(" "),i("div",{class:!n==t.vData.length-1?"discussBar_bottomLine":"btn-secondary"})])])})],2)},staticRenderFns:[]};var o=a("VU/8")(s,r,!1,function(t){a("vx1m")},"data-v-a533364a",null);e.a=o.exports},txzs:function(t,e,a){"use strict";var i=a("wzuo");e.a={created:function(){i.a&&(window.vms[this.$options.name]=this)}}},vx1m:function(t,e){},wzuo:function(t,e,a){"use strict";a.d(e,"b",function(){return i}),a.d(e,"a",function(){return c});var i="undefined"!=typeof window,n=i&&window.navigator.userAgent.toLowerCase(),s=(n&&/msie|trident/.test(n),n&&n.indexOf("msie 9.0"),n&&n.indexOf("edge/")>0),r=n&&n.indexOf("android")>0,o=n&&/iphone|ipad|ipod|ios/.test(n),c=(n&&/chrome\/\d+/.test(n),n&&(r||o))}},["aJ7X"]);
//# sourceMappingURL=comment-question-answer-details.26e0971c0aad17112700.js.map
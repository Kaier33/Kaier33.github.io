webpackJsonp([35],{"8iDn":function(e,t){},GwQm:function(e,t,i){"use strict";var a=i("woOf"),r=i.n(a),s=i("mvHQ"),l=i.n(s),n=(i("fZjL"),i("pFYg"),i("u2KI"));i.n(n)()({});function c(e){return Object.prototype.toString.call(e).slice(8,-1)}function u(e){return"Object"==c(e)}function d(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=[];for(var a in e){var r=e[a];r.constructor===Array?r.forEach(function(e){i.push(a+"="+e)}):i.push(a+"="+r)}return t?"?"+i.join("&"):i.join("&")}var o=i("wzuo");function p(e,t,i){if(t&&!e.hasOwnProperty(t))throw new Error("没有发现"+t);if(i&&!u(i))throw new Error(t+": 传入的$data应为一个对象")}t.c=function(e){if(!o.a)return;var t="dgtle4://nativeBrowse?imgUrl="+e;_(t),console.log(t),console.log("图片浏览: ",e)},t.h=function(e,t){if(!o.a)return;var i="dgtle4://nativeGo?"+e+"&"+d(t,!1);_(i),console.log(i),console.log("跳转: ",e,t)},t.b=function(e){if(!o.a)return;var t="dgtle4://nativeAddFavorites"+d(e);_(t),console.log(t),console.log("加入收藏夹: ",e)},t.d=function(e){if(!o.a)return;var t="dgtle4://nativeCommentLink"+d(e);_(t),console.log(t),console.log("点评点赞 或 取消: ",e)},t.g=function(e){if(!o.a)return;var t="dgtle4://nativeCommentReviewLink"+d(e);_(t),console.log(t),console.log("点评评论点赞 或 取消: ",e)},t.f=function(e,t){if(!o.a)return;if(t){var i="dgtle4://nativeCommentRankCancelFavorites"+d(e);_(i),console.log(i),console.log("榜单详情点取消收藏: ",e)}else{var a="dgtle4://nativeCommentRankFavorites"+d(e);_(a),console.log(a),console.log("榜单详情点收藏: ",e)}},t.e=function(e){if(!o.a)return;var t="dgtle4://nativeCommentProductLibrarySearch"+d(e);_(t),console.log(t),console.log("产品搜索: ",e)};t.a=function(e){if(o.a){if(e.hasOwnProperty("bridge"))throw new Error("bridge字段被占用");if(!e.vms)throw new Error("没有发现vms字段");var t=e.vms;if(!u(t))throw new Error("vms类型错误");e.bridge={getData:function(e,i){e=String(e),p(t,e);var a=t[e];return i?l()(a.$data,null,4):r()({},a.$data)},pushData:function(e,i){e=String(e),p(t,e,i);var a=t[e];r()(a,i)}}}};function _(e){var t=document.createElement("IFRAME");t.setAttribute("src",e),document.documentElement.appendChild(t),t.parentNode.removeChild(t),t=null}},"KOY/":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("7+uW"),r=i("M93x"),s=i("/ocq"),l=i("GwQm"),n=i("wzuo"),c=i("txzs"),u={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"ProductStory",on:{click:e.ddfd}},[i("a",{staticClass:"ProductStory_img",attrs:{href:"javascript:;"}},[i("img",{staticClass:"ProductStory_bgImg",attrs:{src:e.vData.product.imgs_url&&e.vData.product.imgs_url[0],alt:""}}),e._v(" "),i("span",{staticClass:"ProductStory_imgTip"},[e._v("产品故事")])]),e._v(" "),i("p",{staticClass:"ProductStory_imgExp"},[i("a",{attrs:{href:"javascript:;"}},[e._v(e._s(e.vData.content))])]),e._v(" "),i("p",{staticClass:"ProductStory_wordTip"},[e._v("\n\t  \t "+e._s(e.vData.user_profile.username)+"·点评 "+e._s(e.vData.profile.title)+"\n\t  ")])])},staticRenderFns:[]};var d=i("VU/8")({name:"ProductStory",props:["vData"],data:function(){return{}},methods:{ddfd:function(){}},mounted:function(){}},u,!1,function(e){i("c3K1")},"data-v-3eba408c",null).exports,o={name:"product-story-list",mixins:[c.a],components:{ProductStoryBox:d},data:function(){return{data:[{id:9,title:null,cover_img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg?qua=high&where=super",product_id:2,user_id:7,star:null,content:"198% 可以说是很棒的产品了！",likes:0,phone_user_spec_id:2,phone_user_spec:{price:"1234",color:"red",size:"5.5英寸"},rsuv:0,rsuv_at:0,visible:1,created_at:1526471756,tags:[[]],product:{id:2,title:"iPhone X",content:"依然配得上全球最好用的手机称号—荷里活",score:"2.1",score_stat:'{"1":0,"2":0,"3":0,"4":0,"5":"1"}',likes:0,tags_id:null,products_type_id:2,imgs_url:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg"],cover_img_url:null,purchase_link_url:"jingdong.com",issue_state:0,issue_date:"1970-01-01",user_id:null,state:1,created_at:1525857813,updated_at:1526521279},user_profile:{id:"Ejb5pwXG",username:"尾巴用户0636",status:10,created_at:1525937876,updated_at:1525937876,sys_manager:0,profile:{realname:null,avatar_path:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg",space_cover_path:null,province:null,city:null,gender:null,introduce:null}},likes_detail:[],hot_comments:[],steps:{5:{id:5,story_id:9,proc_id:5,title:"打开的一瞬间好惊喜",user_id:null,step:1,imgs_url:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg"],proc:{id:5,title:"拆机",story_id:9,step:2,user_id:7,created_at:1526471756,updated_at:1526471756}}}},{id:8,title:null,cover_img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg?qua=high&where=super",product_id:11,user_id:2,star:null,content:"Valve 近日宣布，将于 5 月 21 日为 Steam 平台推出针对 iOS 和 Android 智能手机的串流服务。届时用户可以下载对应的手机应用，来串流游玩 PC/Mac 端 Steam 上的游戏。\n当然，受网络传输速率的影响，串流游戏几乎必然会带来一定的延迟，不过与躺在沙发上游玩 3A 级游戏的体验相比，一点延迟或许也能让人忍受吧？",likes:0,phone_user_spec_id:12,phone_user_spec:{color:"red",price:"1234",size:"988*90"},rsuv:0,rsuv_at:0,visible:1,created_at:1525945699,tags:[[]],product:{id:11,title:"坚果3",content:"罗老师的 UI 始终自成一派；当大家都在学 iPhone 的时候，坚果手机的某些点始终自成一派",score:"0.0",score_stat:null,likes:0,tags_id:["17","18"],products_type_id:12,imgs_url:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg"],cover_img_url:null,purchase_link_url:"null",issue_state:1,issue_date:"2018-05-03",user_id:1,state:0,created_at:1525866070,updated_at:1525866070},user_profile:{id:"vZyXG8P3",username:"尾巴用户3780",status:10,created_at:1518157008,updated_at:1518157008,sys_manager:0,profile:{realname:null,avatar_path:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg",space_cover_path:null,province:null,city:null,gender:null,introduce:null}},likes_detail:[],hot_comments:[],steps:{3:{id:3,story_id:8,proc_id:3,title:"是在什么时候开箱的我已经忘了 ",user_id:null,step:0,imgs_url:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg"],proc:{id:3,title:"拆机",story_id:8,step:1,user_id:7,created_at:1525945699,updated_at:1525945699}}}},{id:7,title:null,cover_img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg?qua=high&where=super",product_id:30,user_id:2,star:null,content:"Valve 近日宣布，将于 5 月 21 日为 Steam 平台推出针对 iOS 和 Android 智能手机的串流服务。届时用户可以下载对应的手机应用，来串流游玩 PC/Mac 端 Steam 上的游戏。\n当然，受网络传输速率的影响，串流游戏几乎必然会带来一定的延迟，不过与躺在沙发上游玩 3A 级游戏的体验相比，一点延迟或许也能让人忍受吧？",likes:0,phone_user_spec_id:2,phone_user_spec:{color:"red",price:"1234",size:"988*90"},rsuv:0,rsuv_at:0,visible:1,created_at:1525943739,tags:[[]],product:"",user_profile:{id:"vZyXG8P3",username:"尾巴用户3780",status:10,created_at:1518157008,updated_at:1518157008,sys_manager:0,profile:{realname:null,avatar_path:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg",space_cover_path:null,province:null,city:null,gender:null,introduce:null}},likes_detail:[],hot_comments:[],steps:{2:{id:2,story_id:7,proc_id:2,title:"是在什么时候开箱的我已经忘了 ",user_id:null,step:0,imgs_url:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg"],proc:{id:2,title:"开箱",story_id:7,step:1,user_id:7,created_at:1525943739,updated_at:1525943739}}}},{id:6,title:null,cover_img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg?qua=high&where=super",product_id:3,user_id:2,star:null,content:"Valve 近日宣布，将于 5 月 21 日为 Steam 平台推出针对 iOS 和 Android 智能手机的串流服务。届时用户可以下载对应的手机应用，来串流游玩 PC/Mac 端 Steam 上的游戏。\n当然，受网络传输速率的影响，串流游戏几乎必然会带来一定的延迟，不过与躺在沙发上游玩 3A 级游戏的体验相比，一点延迟或许也能让人忍受吧？",likes:0,phone_user_spec_id:2,phone_user_spec:{color:"red",size:"988*90",price:"1234"},rsuv:0,rsuv_at:0,visible:1,created_at:1525941193,tags:[[]],product:{id:3,title:"iphone6s plus",content:"一直以来，我们都心存一个设想，期待着能够打造出这样一部 iPhone：它有整面的屏幕，能让你在使用时完全沉浸其中，仿佛忘记了它的存在",score:"0.0",score_stat:'{"1":0,"2":0,"3":0,"4":0,"5":0}',likes:0,tags_id:null,products_type_id:2,imgs_url:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg"],cover_img_url:null,purchase_link_url:"",issue_state:1,issue_date:"1970-01-01",user_id:null,state:1,created_at:1525857976,updated_at:1526521279},user_profile:{id:"vZyXG8P3",username:"尾巴用户3780",status:10,created_at:1518157008,updated_at:1518157008,sys_manager:0,profile:{realname:null,avatar_path:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg",space_cover_path:null,province:null,city:null,gender:null,introduce:null}},likes_detail:[],hot_comments:[],steps:{1:{id:1,story_id:6,proc_id:1,title:"是在什么时候开箱的我已经忘了 ",user_id:null,step:0,imgs_url:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg"],proc:{id:1,title:"开箱",story_id:6,step:1,user_id:7,created_at:1525941193,updated_at:1525941193}}}},{id:5,title:null,cover_img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg?qua=high&where=super",product_id:3,user_id:2,star:null,content:"Valve 近日宣布，将于 5 月 21 日为 Steam 平台推出针对 iOS 和 Android 智能手机的串流服务。届时用户可以下载对应的手机应用，来串流游玩 PC/Mac 端 Steam 上的游戏。\n当然，受网络传输速率的影响，串流游戏几乎必然会带来一定的延迟，不过与躺在沙发上游玩 3A 级游戏的体验相比，一点延迟或许也能让人忍受吧？",likes:0,phone_user_spec_id:2,phone_user_spec:{color:"red",size:"988*90",price:"1234"},rsuv:0,rsuv_at:0,visible:1,created_at:1525941103,tags:[[]],product:{id:3,title:"iphone6s plus",content:"一直以来，我们都心存一个设想，期待着能够造出这样一部 iPhone：它有整面的屏幕，能让你在使用时完全沉浸其中，仿佛忘记了它的存在",score:"0.0",score_stat:'{"1":0,"2":0,"3":0,"4":0,"5":0}',likes:0,tags_id:null,products_type_id:2,imgs_url:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg"],cover_img_url:null,purchase_link_url:"",issue_state:1,issue_date:"1970-01-01",user_id:null,state:1,created_at:1525857976,updated_at:1526521279},user_profile:{id:"vZyXG8P3",username:"尾巴用户3780",status:10,created_at:1518157008,updated_at:1518157008,sys_manager:0,profile:{realname:null,avatar_path:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg",space_cover_path:null,province:null,city:null,gender:null,introduce:null}},likes_detail:[{id:5,user_id:8,type:4,object_id:5,user_profile:{id:"pN89e83Q",username:"尾巴用户8032",status:10,created_at:1526008093,updated_at:1526008093,sys_manager:0,profile:{realname:null,avatar_path:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg",space_cover_path:null,province:null,city:null,gender:null,introduce:null}},avatar:""}],hot_comments:[],steps:null},{id:4,title:null,cover_img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg?qua=high&where=super",product_id:3,user_id:2,star:null,content:"Valve 近日宣布，将于 5 月 21 日为 Steam 平台推出针对 iOS 和 Android 智能手机的串流服务。届时用户可以下载对应的手机应用，来串流游玩 PC/Mac 端 Steam 上的游戏。\n当然，受网络传输速率的影响，串流游戏几乎必然会带来一定的延迟，不过与躺在沙发上游玩 3A 级游戏的体验相比，一点延迟或许也能让人忍受吧？",likes:0,phone_user_spec_id:2,phone_user_spec:{color:"red",size:"988*90"},rsuv:0,rsuv_at:0,visible:1,created_at:1525940872,tags:[[]],product:{id:3,title:"iphone6s plus",content:"一直以来，我们都心存一个设想，期待着能够打造出这样一部 iPhone：它有整面的屏幕，能让你在使用时完全沉浸其中，仿佛忘记了它的存在",score:"0.0",score_stat:'{"1":0,"2":0,"3":0,"4":0,"5":0}',likes:0,tags_id:null,products_type_id:2,imgs_url:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg"],cover_img_url:null,purchase_link_url:"",issue_state:1,issue_date:"1970-01-01",user_id:null,state:1,created_at:1525857976,updated_at:1526521279},user_profile:{id:"vZyXG8P3",username:"尾巴用户3780",status:10,created_at:1518157008,updated_at:1518157008,sys_manager:0,profile:{realname:null,avatar_path:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg",space_cover_path:null,province:null,city:null,gender:null,introduce:null}},likes_detail:[{id:3,user_id:8,type:4,object_id:4,user_profile:{id:"pN89e83Q",username:"尾巴用户8032",status:10,created_at:1526008093,updated_at:1526008093,sys_manager:0,profile:{realname:null,avatar_path:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg",space_cover_path:null,province:null,city:null,gender:null,introduce:null}},avatar:""},{id:7,user_id:7,type:4,object_id:4,user_profile:{id:"Ejb5pwXG",username:"尾巴用户0636",status:10,created_at:1525937876,updated_at:1525937876,sys_manager:0,profile:{realname:null,avatar_path:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg",space_cover_path:null,province:null,city:null,gender:null,introduce:null}},avatar:""}],hot_comments:[],steps:null},{id:3,title:null,cover_img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg?qua=high&where=super",product_id:3,user_id:2,star:null,content:"Valve 近日宣布，将于 5 月 21 日为 Steam 平台推出针对 iOS 和 Android 智能手机的串流服务。届时用户可以下载对应的手机应用，来串流游玩 PC/Mac 端 Steam 上的游戏。\n当然，受网络传输速率的影响，串流游戏几乎必然会带来一定的延迟，不过与躺在沙发上游玩 3A 级游戏的体验相比，一点延迟或许也能让人忍受吧？",likes:0,phone_user_spec_id:2,phone_user_spec:{price:"1235",size:"988*90"},rsuv:0,rsuv_at:0,visible:1,created_at:1525940786,tags:[[]],product:{id:3,title:"iphone6s plus",content:"一直以来，我们都心存一个设想，期待着能够打造出这样一部 iPhone：它有整面的屏幕，能让你在使用时完全沉浸其中，仿佛忘记了它的存在",score:"0.0",score_stat:'{"1":0,"2":0,"3":0,"4":0,"5":0}',likes:0,tags_id:null,products_type_id:2,imgs_url:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg"],cover_img_url:null,purchase_link_url:"",issue_state:1,issue_date:"1970-01-01",user_id:null,state:1,created_at:1525857976,updated_at:1526521279},user_profile:{id:"vZyXG8P3",username:"尾巴用户3780",status:10,created_at:1518157008,updated_at:1518157008,sys_manager:0,profile:{realname:null,avatar_path:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg",space_cover_path:null,province:null,city:null,gender:null,introduce:null}},likes_detail:[{id:4,user_id:8,type:4,object_id:3,user_profile:{id:"pN89e83Q",username:"尾巴用户8032",status:10,created_at:1526008093,updated_at:1526008093,sys_manager:0,profile:{realname:null,avatar_path:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg",space_cover_path:null,province:null,city:null,gender:null,introduce:null}},avatar:""}],hot_comments:[],steps:null},{id:2,title:null,cover_img_url:"",product_id:2,user_id:2,star:null,content:"",likes:0,phone_user_spec_id:2,phone_user_spec:{price:"123",pric:"988"},rsuv:0,rsuv_at:0,visible:1,created_at:1525940500,tags:[[]],product:{id:2,title:"iPhone X",content:"依然配得上全球最好用的手机称号—荷里活",score:"2.1",score_stat:'{"1":0,"2":0,"3":0,"4":0,"5":"1"}',likes:0,tags_id:null,products_type_id:2,imgs_url:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg"],cover_img_url:null,purchase_link_url:"jingdong.com",issue_state:0,issue_date:"1970-01-01",user_id:null,state:1,created_at:1525857813,updated_at:1526521279},user_profile:{id:"vZyXG8P3",username:"尾巴用户3780",status:10,created_at:1518157008,updated_at:1518157008,sys_manager:0,profile:{realname:null,avatar_path:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg",space_cover_path:null,province:null,city:null,gender:null,introduce:null}},likes_detail:[{id:2,user_id:8,type:4,object_id:2,user_profile:{id:"pN89e83Q",username:"尾巴用户8032",status:10,created_at:1526008093,updated_at:1526008093,sys_manager:0,profile:{realname:null,avatar_path:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg",space_cover_path:null,province:null,city:null,gender:null,introduce:null}},avatar:""},{id:6,user_id:7,type:4,object_id:2,user_profile:{id:"Ejb5pwXG",username:"尾巴用户0636",status:10,created_at:1525937876,updated_at:1525937876,sys_manager:0,profile:{realname:null,avatar_path:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg",space_cover_path:null,province:null,city:null,gender:null,introduce:null}},avatar:""}],hot_comments:[],steps:null},{id:1,title:null,cover_img_url:"",product_id:2,user_id:2,star:null,content:"",likes:0,phone_user_spec_id:2,phone_user_spec:{price:"123"},rsuv:0,rsuv_at:0,visible:1,created_at:1525940443,tags:[[]],product:{id:2,title:"iPhone X",content:"依然配得上全球最好用的手机称号",score:"2.1",score_stat:'{"1":0,"2":0,"3":0,"4":0,"5":"1"}',likes:0,tags_id:null,products_type_id:2,imgs_url:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg"],cover_img_url:null,purchase_link_url:"jingdong.com",issue_state:0,issue_date:"1970-01-01",user_id:null,state:1,created_at:1525857813,updated_at:1526521279},user_profile:{id:"vZyXG8P3",username:"尾巴用户3780",status:10,created_at:1518157008,updated_at:1518157008,sys_manager:0,profile:{realname:null,avatar_path:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg",space_cover_path:null,province:null,city:null,gender:null,introduce:null}},likes_detail:[{id:1,user_id:8,type:4,object_id:1,user_profile:{id:"pN89e83Q",username:"尾巴用户8032",status:10,created_at:1526008093,updated_at:1526008093,sys_manager:0,profile:{realname:null,avatar_path:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526623210095&di=b6b1afd7c32941696221d0a968736748&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2F39%2F56%2FrBACFFOJZ0mDlDkZAAAcODzXYPQ517.jpg",space_cover_path:null,province:null,city:null,gender:null,introduce:null}},avatar:""}],hot_comments:[],steps:null}]}},methods:{go:function(e){Object(l.h)("product-story-details",{id:e}),n.a}}},p={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{padding:"0 40px"}},e._l(e.data,function(t,a){return i("div",{key:t.id,on:{click:function(i){e.go(t.id)}}},[i("ProductStoryBox",{attrs:{vData:t}})],1)}))},staticRenderFns:[]};var _=i("VU/8")(o,p,!1,function(e){i("a2ow")},null,null).exports;i("Q24Q");a.a.config.productionTip=!1,a.a.use(s.a);var m=new s.a({routes:[{path:"/",name:"ProductStoryList",component:_}]});new a.a({el:"#app",router:m,components:{App:r.a},template:"<App/>"})},L7xQ:function(e,t){},M93x:function(e,t,i){"use strict";var a=function(){var e;e=0,document.addEventListener("touchend",function(t){if(1===t.touches.length){var i=(new Date).getTime();i-e<=300&&t.preventDefault(),e=i}},!1)},r=i("wzuo"),s=i("GwQm");var l=function(){r.b&&(window.vms={}),Object(s.a)(window)},n={name:"App",beforeCreate:function(){l()},mounted:function(){a()}},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var u=i("VU/8")(n,c,!1,function(e){i("8iDn"),i("UtKP"),i("L7xQ")},null,null);t.a=u.exports},Q24Q:function(e,t){},UtKP:function(e,t){},a2ow:function(e,t){},c3K1:function(e,t){},txzs:function(e,t,i){"use strict";var a=i("wzuo");t.a={created:function(){a.a&&(window.vms[this.$options.name]=this)}}},wzuo:function(e,t,i){"use strict";i.d(t,"b",function(){return a}),i.d(t,"a",function(){return c});var a="undefined"!=typeof window,r=a&&window.navigator.userAgent.toLowerCase(),s=(r&&/msie|trident/.test(r),r&&r.indexOf("msie 9.0"),r&&r.indexOf("edge/")>0),l=r&&r.indexOf("android")>0,n=r&&/iphone|ipad|ipod|ios/.test(r),c=(r&&/chrome\/\d+/.test(r),r&&(l||n))}},["KOY/"]);
//# sourceMappingURL=comment-product-story-list.9a41b668d60a84539819.js.map
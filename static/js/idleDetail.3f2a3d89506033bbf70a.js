webpackJsonp([5],{AkDx:function(t,s){},Bsas:function(t,s){},Q24Q:function(t,s){},VpFf:function(t,s){},c41C:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),n=e("/ocq"),a=(e("Q24Q"),{render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"idleDetail"}},[s("router-view",{staticStyle:{width:"750px",margin:"0 auto"}})],1)},staticRenderFns:[]}),o=e("VU/8")(null,a,!1,null,null,null).exports,c=e("c4IW");i.a.use(n.a);var l=new n.a({routes:[{path:"/",name:"idleDetail",component:c.a}]});i.a.config.productionTip=!1,new i.a({el:"#idleDetail",router:l,components:{idleDetail:o},template:"<idleDetail/>"})},c4IW:function(t,s,e){"use strict";var i={components:{articleLike:e("iPs5").a},data:function(){return{detailInfo:{likeInfo:{likeUserList:[],totalLike:0}}}},methods:{getData:function(t){this.detailInfo=t},setTransactionStatus:function(){this.detailInfo.transactionStatus=!1},handleEnter:function(t){console.log(t)},handleContact:function(t){console.log(t)},personalCenter:function(t){console.log(t)}},mounted:function(){},created:function(){this.getData({transactionStatus:!0,userName:"瓦力怪叔叔",userIcon:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3744872283,1870099043&fm=27&gp=0.jpg",userId:123456,time:"1小时前",oldPrice:1354,newPrice:998,fineness:"全新",local:"武汉",freightCharge:20,articleTitle:"未拆封红米 note 4x",likeInfo:{likeUserList:[{userId:110,userIcon:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3744872283,1870099043&fm=27&gp=0.jpg"},{userId:119,userIcon:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3744872283,1870099043&fm=27&gp=0.jpg"},{userId:120,userIcon:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3744872283,1870099043&fm=27&gp=0.jpg"},{userId:911,userIcon:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3744872283,1870099043&fm=27&gp=0.jpg"},{userId:12306,userIcon:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3744872283,1870099043&fm=27&gp=0.jpg"}],totalLike:10}})}},n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticStyle:{width:"100%"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"idleIntro"},[e("div",{staticClass:"TopInfo"},[e("div",{staticClass:"userInfo"},[e("img",{attrs:{src:t.detailInfo.userIcon},on:{click:function(s){t.personalCenter(t.detailInfo.userId)}}}),t._v(" "),e("p",[e("span",{staticClass:"userName"},[t._v(t._s(t.detailInfo.userName))]),t._v(" "),e("br"),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.detailInfo.time))])])]),t._v(" "),e("div",{staticClass:"price"},[e("p",{staticClass:"oldPrice"},[e("del",[t._v("¥\n                            "),e("span",[t._v(t._s(t.detailInfo.oldPrice))])])]),t._v(" "),e("p",{staticClass:"newPrice"},[t._v("\n                        ¥\n                        "),e("span",[t._v(t._s(t.detailInfo.newPrice))])])])]),t._v(" "),e("div",{staticClass:"otherInfo"},[e("div",{staticClass:"left"},[e("p",[t._v("成色 : "+t._s(t.detailInfo.fineness)+" ")]),t._v(" "),e("p",[t._v("所在地 : "+t._s(t.detailInfo.local)+" ")]),t._v(" "),e("p",[t._v("运费 : ¥ "+t._s(t.detailInfo.freightCharge)+" ")])]),t._v(" "),e("div",{staticClass:"right"},[t.detailInfo.transactionStatus?e("div",{staticClass:"btn",on:{click:function(s){t.handleContact(t.detailInfo.userId)}}},[t._v("联系 Ta")]):e("div",{staticClass:"disableBtn"},[t._v("交易已完成")])])])]),t._v(" "),e("p",{staticClass:"idleTitle"},[t._v(" 未拆封红米 note 4x")]),t._v(" "),e("div",{staticClass:"content"},[t._v("\n             ......\n        ")]),t._v(" "),e("articleLike",{attrs:{resData:this.detailInfo.likeInfo}})],1)])},staticRenderFns:[]};var a=e("VU/8")(i,n,!1,function(t){e("AkDx")},"data-v-7301519c",null);s.a=a.exports},iPs5:function(t,s,e){"use strict";e("VpFf");var i={props:["resData"],data:function(){return{}},computed:{moreLikes:function(){return this.resData.totalLike>6&&this.resData.totalLike<1e3?this.resData.totalLike-5:999}},watch:{},methods:{personalInformation:function(t){console.log(t)},likeArticle:function(){this.$refs.likeBackground.classList.contains("like")?(this.$refs.likeBackground.classList.remove("like"),this.$refs.likeBackground.classList.add("unlike")):(this.$refs.likeBackground.classList.remove("unlike"),this.$refs.likeBackground.classList.add("like"))}},mounted:function(){}},n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"articleLick"},[e("div",{ref:"likeBackground",staticClass:"unlike",on:{click:this.likeArticle}},[e("span",{staticClass:"icon-in_like_icon"})]),t._v(" "),e("p",[e("span",[t._v(t._s(t.resData.totalLike))]),t._v(" 人已赞\n    ")]),t._v(" "),e("ul",{staticClass:"personList"},[t._l(t.resData.likeUserList,function(s,i){return e("li",{key:i,on:{click:function(e){t.personalInformation(s.userId)}}},[e("img",{attrs:{src:s.userIcon}})])}),t._v(" "),this.resData.totalLike>6?e("li",[e("div",{staticClass:"manyMore"},[t._v("\n                +"+t._s(t.moreLikes)+"\n            ")])]):t._e()],2)])},staticRenderFns:[]};var a=e("VU/8")(i,n,!1,function(t){e("Bsas")},"data-v-281d1742",null);s.a=a.exports}},["c41C"]);
//# sourceMappingURL=idleDetail.3f2a3d89506033bbf70a.js.map
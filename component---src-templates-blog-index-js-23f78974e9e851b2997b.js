(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{151:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return f});n(163);var a=n(8),r=n.n(a),i=n(57),o=n(164),c=n(165),l=n(159),h=n(0),s=n.n(h),d=n(172),u=n(179),m=n.n(u),g=n(155),A=function(t){function e(){return t.apply(this,arguments)||this}r()(e,t);var n=e.prototype;return n.componentDidMount=function(){if(!/Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent)){window.StarLight=null,window.starColor=["#0d4b74","#6691ab","#213a55","#bed0cb","#7f486b"],window.initStar=function(){var t=document.documentElement.clientWidth,e=document.documentElement.clientHeight/2+50;StarLight.init("starlight",t,e),StarLight.star()},StarLight=function(){var t={width:screen.width,height:screen.height,canvas:null,content:null,maxStar:30,newStar:6,starArr:[],number:30};function e(){t.content.clearRect(0,0,t.width,t.height),t.content.save();for(var n=0;n<t.starArr.length;n++){var a=.35*t.starArr[n].scale;if(t.starArr[n].x+=Math.tan(t.starArr[n].deg*Math.PI/180)*a/2,t.starArr[n].y=t.starArr[n].y+a,t.starArr[n].x<0||t.starArr[n].x>t.width||t.starArr[n].y>t.height)t.starArr.splice(n--,1);else{t.content.beginPath();for(var r=0;r<5;r++)t.content.lineTo(10*Math.cos((18+72*r)/180*Math.PI)+t.starArr[n].x,10*-Math.sin((18+72*r)/180*Math.PI)+t.starArr[n].y),t.content.lineTo(5*Math.cos((54+72*r)/180*Math.PI)+t.starArr[n].x,5*-Math.sin((54+72*r)/180*Math.PI)+t.starArr[n].y);t.content.closePath(),t.content.globalAlpha=t.starArr[n].alpha,t.content.shadowOffsetX=2,t.content.shadowOffsetY=2,t.content.shadowBlur=4,t.content.shadowColor="rgba(0, 0, 0, 0.15)",t.content.fillStyle=starColor[t.starArr[n].c],t.content.fill()}}t.content.restore(),window.requestAnimationFrame(e)}return{init:function(e,n,a){t.canvas=document.getElementById(e),t.canvas.setAttribute("width",n),t.canvas.setAttribute("height",a),t.width=n,t.height=a,t.content=t.canvas.getContext("2d")},star:function(){for(var n=0;n<t.number;n++){var a=Math.random()<.5?-1:1;t.starArr.push({x:Math.random()*t.width,y:Math.random()*t.height,c:Math.floor(6*Math.random()),deg:6*Math.random()*a,scale:3+3*Math.random(),alpha:.5+.1*Math.random()})}e(),function e(){setTimeout(function(){if(t.starArr.length<t.maxStar)for(var n=0;n<t.newStar;n++){var a=Math.random()<.5?-1:1;t.starArr.push({x:Math.random()*t.width,y:0,c:Math.floor(6*Math.random()),deg:6*Math.random()*a,scale:3+3*Math.random(),alpha:.5+.1*Math.random()})}e()},200*Math.random()+500)}()},set:function(e,n,a){t.num=e,t.maxStar=n,t.newStar=a}}}();document.documentElement.clientWidth;var t=document.documentElement.clientHeight/2+50,e=document.getElementById("___gatsby"),n=document.getElementById("starlight");n||((n=document.createElement("canvas")).id="starlight",document.body.insertBefore(n,e));var a=document.getElementById("mask");a||((a=document.createElement("div")).id="mask",a.style.height=t+"px",document.body.insertBefore(a,e)),e.children[0].children[0].style.background="transparent",initStar()}},n.render=function(){var t=m()(this,"props.data.site.siteMetadata.title"),e=this.props.pageContext.langKey,n=m()(this,"props.data.allMarkdownRemark.edges");return s.a.createElement(h.Fragment,null,s.a.createElement(l.a,{location:this.props.location,title:t},s.a.createElement(d.a,null),s.a.createElement("aside",null,s.a.createElement(c.a,null)),s.a.createElement("main",null,n.map(function(t){var n=t.node,a=m()(n,"frontmatter.title")||n.fields.slug;return s.a.createElement("article",{key:n.fields.slug},s.a.createElement("header",null,s.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",fontSize:Object(g.a)(1),marginBottom:Object(g.a)(.25)}},s.a.createElement(i.Link,{style:{boxShadow:"none"},to:n.fields.slug,rel:"bookmark"},a)),s.a.createElement("small",null,Object(o.a)(n.frontmatter.date,e)," • "+Object(o.b)(n.timeToRead))),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:n.frontmatter.spoiler}}))}))))},e}(s.a.Component);e.default=A;var f="3710597169"},155:function(t,e,n){"use strict";n.d(e,"a",function(){return l}),n.d(e,"b",function(){return h});n(167),n(168);var a=n(169),r=n.n(a),i=n(170),o=n.n(i);o.a.overrideThemeStyles=function(){return{a:{color:"var(--textLink)"},hr:{background:"var(--hr)"},"a.gatsby-resp-image-link":{boxShadow:"none"},"a.anchor":{boxShadow:"none"},'a.anchor svg[aria-hidden="true"]':{stroke:"var(--textLink)"},"p code":{fontSize:"1rem"},"h1 code, h2 code, h3 code, h4 code, h5 code, h6 code":{fontSize:"inherit"},"li code":{fontSize:"1rem"},blockquote:{color:"inherit",borderLeftColor:"inherit",opacity:"0.8"},"blockquote.translation":{fontSize:"1em"}}},delete o.a.googleFonts;var c=new r.a(o.a);var l=c.rhythm,h=c.scale},157:function(t,e){t.exports="data:image/png;base64,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"},158:function(t,e){t.exports="data:image/png;base64,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"},159:function(t,e,n){"use strict";n(20);var a=n(8),r=n.n(a),i=n(0),o=n.n(i),c=n(57),l=n(77),h=n.n(l),s=n(36),d=n.n(s);n(171);function u(t){if(t){var e=t.changedTouches;if(e&&e.length>0){var n=e[0];return{x:n.clientX,y:n.clientY}}var a=t.pageX;if(void 0!==a)return{x:a,y:t.pageY}}return{x:0,y:0}}var m=function(t){function e(e){var n;return(n=t.call(this,e)||this).handleClick=n.handleClick.bind(d()(n)),n.handleTouchStart=n.handleTouchStart.bind(d()(n)),n.handleTouchMove=n.handleTouchMove.bind(d()(n)),n.handleTouchEnd=n.handleTouchEnd.bind(d()(n)),n.handleTouchCancel=n.handleTouchCancel.bind(d()(n)),n.handleFocus=n.handleFocus.bind(d()(n)),n.handleBlur=n.handleBlur.bind(d()(n)),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}r()(e,t);var n=e.prototype;return n.componentWillReceiveProps=function(t){"checked"in t&&(this.setState({checked:!!t.checked}),this.previouslyChecked=!!t.checked)},n.componentDidMount=function(){window.__LightFlag=this.input.checked,window.__LightFlag?document.getElementById("mask")&&(document.getElementById("mask").style.background="transparent"):document.getElementById("mask")&&(document.getElementById("mask").style.background="linear-gradient(-180deg, rgba(255, 255, 255, .1) 0, #fff 100%)")},n.handleClick=function(t){var e=this.input;if(this.previouslyChecked=e.checked,t.target!==e&&!this.moved)return t.preventDefault(),e.checked&&document.getElementById("mask")?document.getElementById("mask").style.background="linear-gradient(-180deg, rgba(255, 255, 255, .1) 0, #fff 100%)":!e.checked&&document.getElementById("mask")&&(document.getElementById("mask").style.background="transparent"),e.focus(),void e.click();this.setState({checked:e.checked})},n.handleTouchStart=function(t){this.startX=u(t).x,this.touchStarted=!0,this.hadFocusAtTouchStart=this.state.hasFocus,this.setState({hasFocus:!0})},n.handleTouchMove=function(t){if(this.touchStarted&&(this.touchMoved=!0,null!=this.startX)){var e=u(t).x;this.state.checked&&e+15<this.startX?(this.setState({checked:!1}),this.startX=e):!this.state.checked&&e-15>this.startX&&(this.setState({checked:!0}),this.startX=e)}},n.handleTouchEnd=function(t){if(this.touchMoved){var e=this.input;t.preventDefault(),null!=this.startX&&(this.previouslyChecked!==this.state.checked&&e.click(),this.touchStarted=!1,this.startX=null,this.touchMoved=!1),this.hadFocusAtTouchStart||this.setState({hasFocus:!1})}},n.handleTouchCancel=function(t){null!=this.startX&&(this.touchStarted=!1,this.startX=null,this.touchMoved=!1),this.hadFocusAtTouchStart||this.setState({hasFocus:!1})},n.handleFocus=function(t){var e=this.props.onFocus;e&&e(t),this.hadFocusAtTouchStart=!0,this.setState({hasFocus:!0})},n.handleBlur=function(t){var e=this.props.onBlur;e&&e(t),this.hadFocusAtTouchStart=!1,this.setState({hasFocus:!1})},n.getIcon=function(t){var n=this.props.icons;return n?void 0===n[t]?e.defaultProps.icons[t]:n[t]:null},n.render=function(){var t=this,e=this.props,n=e.className,a=(e.icons,h()(e,["className","icons"])),r="react-toggle"+(this.state.checked?" react-toggle--checked":"")+(this.state.hasFocus?" react-toggle--focus":"")+(this.props.disabled?" react-toggle--disabled":"")+(n?" "+n:"");return o.a.createElement("div",{className:r,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd,onTouchCancel:this.handleTouchCancel},o.a.createElement("div",{className:"react-toggle-track"},o.a.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.a.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.a.createElement("div",{className:"react-toggle-thumb"}),o.a.createElement("input",Object.assign({},a,{ref:function(e){t.input=e},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox","aria-label":"Switch between Dark and Light mode"})))},e}(i.PureComponent),g=n(156),A=n.n(g),f=n(155),p=n(157),v=n.n(p),y=n(158),b=n.n(y),k=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))||this).state={theme:null},e}r()(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this;(window.navigator.userAgent.indexOf("MSIE")>=1||window.navigator.userAgent.indexOf("Edge")>-1)&&(document.body.style.cursor="auto"),this.setState({theme:window.__theme}),window.__onThemeChange=function(){t.setState({theme:window.__theme})};var e=document.title;document.addEventListener("visibilitychange",function(){"hidden"==document.visibilityState?document.title="(づ￣ 3￣)づ救救孩纸吧":document.title=e})},n.renderHeader=function(){var t=this.props,e=t.location,n=t.title;return"/"===e.pathname?o.a.createElement("h1",{style:Object.assign({},Object(f.b)(.75),{marginBottom:0,marginTop:0})},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"var(--textTitle)"},to:"/"},n)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:0,height:42,lineHeight:"2.625rem"}},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"rgb(255, 167, 196)"},to:"/"},n))},n.render=function(){var t=this.props.children;return o.a.createElement("div",{style:{color:"var(--textNormal)",background:"var(--bg)",transition:"color 0.2s ease-out, background 0.2s ease-out",minHeight:"100vh"}},o.a.createElement(A.a,{meta:[{name:"theme-color",content:"light"===this.state.theme?"#ffa8c5":"#282c35"}]}),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(f.a)(24),padding:"2.625rem "+Object(f.a)(.75)}},o.a.createElement("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"2.625rem"}},this.renderHeader(),null!==this.state.theme?o.a.createElement(m,{icons:{checked:o.a.createElement("img",{src:b.a,width:"16",height:"16",role:"presentation",style:{pointerEvents:"none"}}),unchecked:o.a.createElement("img",{src:v.a,width:"16",height:"16",role:"presentation",style:{pointerEvents:"none"}})},checked:"dark"===this.state.theme,onChange:function(t){return window.__setPreferredTheme(t.target.checked?"dark":"light")}}):o.a.createElement("div",{style:{height:"24px"}})),t))},e}(o.a.Component);e.a=k},164:function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"a",function(){return r});n(163);function a(t){var e=Math.round(t/5);return e>5?new Array(Math.round(e/Math.E)).fill("🍱").join("")+" "+t+" min read":new Array(e||1).fill("☕️").join("")+" "+t+" min read"}function r(t,e){var n;if("function"!=typeof Date.prototype.toLocaleDateString)return t;t=new Date(t);var a=[e,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(n=t).toLocaleDateString.apply(n,a)}},165:function(t,e,n){"use strict";var a=n(8),r=n.n(a),i=n(0),o=n.n(i),c=n(166),l=n.n(c),h=n(155),s=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){return o.a.createElement("div",{style:{display:"flex",marginBottom:Object(h.a)(2)}},o.a.createElement("img",{src:l.a,alt:"avatar",style:{marginRight:Object(h.a)(.5),marginBottom:0,width:Object(h.a)(2),height:Object(h.a)(2),borderRadius:"50%"}}),o.a.createElement("p",{style:{maxWidth:310}},"Personal blog by"," ",o.a.createElement("a",{href:"https://github.com/KaierChou"},"Kaier"),"."," "," ",o.a.createElement("br",null),"Make a little little progress every day."))},e}(o.a.Component);e.a=s},166:function(t,e,n){t.exports=n.p+"static/02-44a3d5115826ea50cebec363c7414fe7.png"},172:function(t,e,n){"use strict";n(20);var a=n(173),r=n(0),i=n.n(r),o=n(156),c=n.n(o),l=n(1),h=n.n(l),s=n(57),d="3036156164";function u(t){var e=t.meta,n=t.image,r=t.title,o=t.description,l=t.slug,h=t.lang,u=void 0===h?"en":h;return i.a.createElement(s.StaticQuery,{query:d,render:function(t){var a=t.site.siteMetadata,h=o||a.description,s=(n&&a.siteUrl,""+a.siteUrl+l);return i.a.createElement(c.a,Object.assign({htmlAttributes:{lang:u}},r?{titleTemplate:"%s — "+a.title,title:r}:{title:a.title+" — A blog by KaierChou"},{meta:[{name:"description",content:h},{property:"og:url",content:s},{property:"og:title",content:r||a.title},{property:"og:description",content:h}].concat(e)}))},data:a})}u.defaultProps={meta:[],title:"",slug:""},u.propTypes={description:h.a.string,image:h.a.string,meta:h.a.array,slug:h.a.string,title:h.a.string.isRequired},e.a=u},173:function(t){t.exports={data:{site:{siteMetadata:{title:"Kaier33",author:"KaierChou",description:"Personal blog by KaierChou.",siteUrl:"https://kaierchou.github.io"}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-index-js-23f78974e9e851b2997b.js.map
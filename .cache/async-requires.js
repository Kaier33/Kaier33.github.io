// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-index-js": () => import("/Users/kaierchou/Desktop/OpenSource/KaierChou.github.io/src/templates/blog-index.js" /* webpackChunkName: "component---src-templates-blog-index-js" */),
  "component---src-templates-blog-post-js": () => import("/Users/kaierchou/Desktop/OpenSource/KaierChou.github.io/src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---src-pages-404-js": () => import("/Users/kaierchou/Desktop/OpenSource/KaierChou.github.io/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-confirm-js": () => import("/Users/kaierchou/Desktop/OpenSource/KaierChou.github.io/src/pages/confirm.js" /* webpackChunkName: "component---src-pages-confirm-js" */),
  "component---src-pages-thanks-js": () => import("/Users/kaierchou/Desktop/OpenSource/KaierChou.github.io/src/pages/thanks.js" /* webpackChunkName: "component---src-pages-thanks-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/kaierchou/Desktop/OpenSource/KaierChou.github.io/.cache/data.json")


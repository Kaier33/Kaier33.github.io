var plugins = [{
      plugin: require('/Users/kaierchou/Desktop/OpenSource/KaierChou.github.io/node_modules/gatsby-remark-autolink-headers/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/kaierchou/Desktop/OpenSource/KaierChou.github.io/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-130227707-1"},
    },{
      plugin: require('/Users/kaierchou/Desktop/OpenSource/KaierChou.github.io/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Kaier33","short_name":"Kaier33","start_url":"/","background_color":"#ffffff","theme_color":"#ffa7c4","display":"minimal-ui","icon":"src/assets/icon.png","theme_color_in_head":false},
    },{
      plugin: require('/Users/kaierchou/Desktop/OpenSource/KaierChou.github.io/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/kaierchou/Desktop/OpenSource/KaierChou.github.io/node_modules/gatsby-plugin-typography/gatsby-ssr'),
      options: {"plugins":[],"pathToConfigModule":"src/utils/typography"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}

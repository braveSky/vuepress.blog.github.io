(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{349:function(e,t,a){"use strict";a.r(t);var r=a(5),v=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"术语"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#术语"}},[e._v("#")]),e._v(" 术语")]),e._v(" "),t("p",[e._v("你可能会在文档中碰到一些陌生的概念，本节列出了文档中常见的术语，方便查阅、学习、插件/主题开发之用。")]),e._v(" "),t("h2",{attrs:{id:"layout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#layout"}},[e._v("#")]),e._v(" layout")]),e._v(" "),t("ul",[t("li",[e._v("Access: "),t("code",[e._v("$page.frontmatter.layout")])])]),e._v(" "),t("p",[e._v("当前页面所使用的布局组件名。")]),e._v(" "),t("h2",{attrs:{id:"frontmatter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter"}},[e._v("#")]),e._v(" frontmatter")]),e._v(" "),t("ul",[t("li",[e._v("Access: "),t("code",[e._v("$page.frontmatter")])])]),e._v(" "),t("p",[e._v("当前页面的 "),t("code",[e._v("markdown")]),e._v(" 文件中包裹在 "),t("code",[e._v("---")]),e._v(" 中的配置，一般用于做一些页面级别的配置，参考 "),t("RouterLink",{attrs:{to:"/guide/frontmatter.html"}},[e._v("Front Matter")]),e._v(" 一节了解更多。")],1),e._v(" "),t("h2",{attrs:{id:"permalink"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#permalink"}},[e._v("#")]),e._v(" permalink")]),e._v(" "),t("ul",[t("li",[e._v("Access: "),t("code",[e._v("$page.frontmatter.permalink")])])]),e._v(" "),t("p",[e._v("永久链接，参考 "),t("RouterLink",{attrs:{to:"/guide/permalinks.html"}},[e._v("Permalinks")]),e._v(" 一节了解更多。")],1),e._v(" "),t("h2",{attrs:{id:"regularpath"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#regularpath"}},[e._v("#")]),e._v(" regularPath")]),e._v(" "),t("ul",[t("li",[e._v("Access: "),t("code",[e._v("$page.regularPath")])])]),e._v(" "),t("p",[e._v("当前页面基于目录结构生成的 URL。")]),e._v(" "),t("h2",{attrs:{id:"path"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[e._v("#")]),e._v(" path")]),e._v(" "),t("ul",[t("li",[e._v("Access: "),t("code",[e._v("$page.path")])])]),e._v(" "),t("p",[e._v("当前页面的实际 URL。在构建期生成路由时，一个页面的 URL 将优先使用 "),t("code",[e._v("permalink")]),e._v("，若不存在则降级到 "),t("code",[e._v("regularPath")]),e._v("。")]),e._v(" "),t("h2",{attrs:{id:"headers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#headers"}},[e._v("#")]),e._v(" headers")]),e._v(" "),t("ul",[t("li",[e._v("Access: "),t("code",[e._v("$page.headers")])])]),e._v(" "),t("p",[e._v("即 "),t("code",[e._v("markdown")]),e._v(" 中那些以一个或多个 "),t("code",[e._v("#")]),e._v(" 定义的标题。")]),e._v(" "),t("h2",{attrs:{id:"siteconfig"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#siteconfig"}},[e._v("#")]),e._v(" siteConfig")]),e._v(" "),t("ul",[t("li",[e._v("Access: "),t("code",[e._v("$site | Context.siteConfig")])])]),e._v(" "),t("p",[e._v("即 "),t("code",[e._v(".vuepress/config.js")]),e._v("，译为 "),t("code",[e._v("站点配置")]),e._v("。")]),e._v(" "),t("h2",{attrs:{id:"themeconfig"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#themeconfig"}},[e._v("#")]),e._v(" themeConfig")]),e._v(" "),t("ul",[t("li",[e._v("Access: "),t("code",[e._v("$themeConfig | Context.themeConfig")])])]),e._v(" "),t("p",[e._v("即 "),t("code",[e._v(".vuepress/config.js")]),e._v(" 中 "),t("code",[e._v("themeConfig")]),e._v(" 的值，是用户对当前所使用的主题的配置。")]),e._v(" "),t("h2",{attrs:{id:"themepath"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#themepath"}},[e._v("#")]),e._v(" themePath")]),e._v(" "),t("ul",[t("li",[e._v("Access: "),t("code",[e._v("Context.themeAPI.theme.path")])])]),e._v(" "),t("p",[e._v("当前使用的主题的所在的绝对路径。")]),e._v(" "),t("h2",{attrs:{id:"themeentry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#themeentry"}},[e._v("#")]),e._v(" themeEntry")]),e._v(" "),t("ul",[t("li",[e._v("Access: "),t("code",[e._v("Context.themeAPI.theme.entry")])])]),e._v(" "),t("p",[e._v("主题的配置文件 "),t("code",[e._v("themePath/index.js")]),e._v("。")]),e._v(" "),t("h2",{attrs:{id:"parentthemepath"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parentthemepath"}},[e._v("#")]),e._v(" parentThemePath")]),e._v(" "),t("ul",[t("li",[e._v("Access: "),t("code",[e._v("Context.themeAPI.parentTheme.path")])])]),e._v(" "),t("p",[e._v("如果当前使用的主题是一个派生主题，那么 "),t("code",[e._v("parentThemePath")]),e._v(" 就是指父主题的所在绝对路径。")]),e._v(" "),t("h2",{attrs:{id:"parentthemeentry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parentthemeentry"}},[e._v("#")]),e._v(" parentThemeEntry")]),e._v(" "),t("ul",[t("li",[e._v("Access: "),t("code",[e._v("Context.themeAPI.parentTheme.entry")])])]),e._v(" "),t("p",[e._v("如果当前使用的主题是一个派生主题，那么 "),t("code",[e._v("parentThemePath")]),e._v(" 就是指父主题的主题的配置文件 "),t("code",[e._v("parentThemePath/index.js")]),e._v("。")])])}),[],!1,null,null,null);t.default=v.exports}}]);
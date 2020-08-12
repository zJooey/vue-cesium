(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{IYsP:function(s,a,t){"use strict";t.r(a);var e=t("JFUb"),r=Object(e.a)({data:function(){return{timeline:!0}},methods:{ready:function(s){this.cesiumInstance=s;var a=this.cesiumInstance;a.Cesium,a.viewer}}},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("鹰眼")]),s._v(" "),s._m(0),s._v(" "),t("h2",[s._v("示例")]),s._v(" "),t("h3",[s._v("加载鹰眼部件")]),s._v(" "),t("h4",[s._v("预览")]),s._v(" "),t("doc-preview",[[t("div",{staticClass:"viewer"},[t("vc-viewer",{attrs:{timeline:s.timeline},on:{ready:s.ready}},[t("vc-map-overview"),s._v(" "),t("vc-layer-imagery",[t("vc-provider-imagery-openstreetmap")],1)],1)],1)]],2),s._v(" "),t("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),t("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),t("hr"),s._v(" "),t("h2",[s._v("事件")]),s._v(" "),s._m(3)],1)}),[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[t("code",{pre:!0},[s._v("vc-map-overview")]),s._v(" 组件用于加载鹰眼部件。"),t("strong",[s._v("注意：")]),s._v(" 使用此组件需要引入 "),t("code",{pre:!0},[s._v("import 'vue-cesium/lib/vc-map-overview.css'")]),s._v("，需要"),t("code",{pre:!0},[s._v("css-loader")]),s._v("。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":timeline")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"timeline"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-navigation")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":options")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"options"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-navigation")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-openstreetmap")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-openstreetmap")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"demo-tool"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("罗盘部件"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"options.enableCompass"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("缩放部件"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"options.enableZoomControl"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("罗盘外环是否可用"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"options.enableCompassOuterRing"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("比例尺部件"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"options.enableDistanceLegend"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("位置信息部件"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"options.enableLocationBar"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("timeline")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enableCompass")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enableZoomControl")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// enableZoomControl: {")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//   // 缩放比例")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//    zoomAmount: 2,")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//   // 用于在使用重置导航重置地图视图时设置默认视图控制。接受的值是经纬度{lng: number, lat: number, height: number}或者 rectangle{west: number,south: number,east: number,north: number}")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//   defaultResetView: {")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//     lng: 105, lat: 29.999999999999993, height: 19059568.497290563, heading: 360, pitch: -90, roll: 0")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//   },")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//   overrideCamera: false")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// },")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enableDistanceLegend")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enableLocationBar")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// enableLocationBar: {")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//   // 获取更精确的高程")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//   gridFileUrl: 'https://zouyaoji.top/vue-cesium/statics/SampleData/WW15MGH.DAC'")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// },")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enableCompassOuterRing")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enablePrintView")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// enablePrintView: {")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//   // 是否添加 Credit")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//   showCredit: true,")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//   // 是否自动打印")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//   printAutomatically: false")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// },")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// enableMyLocation: true,")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enableMyLocation")]),s._v(": {\n            "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 使用高德api定位")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("amap")]),s._v(": {\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'42d22e6ed83f077bc28b7864718726de'")]),s._v("\n            }\n          }\n        }\n      }\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance = cesiumInstance\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("属性名")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("默认值")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("enableCompass")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("true")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定是否启用罗盘部件。")])]),s._v(" "),t("tr",[t("td",[s._v("enableZoomControl")]),s._v(" "),t("td",[s._v("Boolean|Object")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("true")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定是否启用缩放部件。")])]),s._v(" "),t("tr",[t("td",[s._v("enableZoomControl.zoomAmount")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("2")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 缩放控件缩放系数。")])]),s._v(" "),t("tr",[t("td",[s._v("enableZoomControl.defaultResetView")]),s._v(" "),t("td",[s._v("Object")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 重置相机参数。")])]),s._v(" "),t("tr",[t("td",[s._v("enableZoomControl.overrideCamera")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("false")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 缩放控件默认相机位置参数是否覆盖 vc-viewer 上的相机参数。")])]),s._v(" "),t("tr",[t("td",[s._v("enableDistanceLegend")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("true")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定是否启用距离比例尺部件。")])]),s._v(" "),t("tr",[t("td",[s._v("enableCompassOuterRing")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("true")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定罗盘部件是否可用。")])]),s._v(" "),t("tr",[t("td",[s._v("enableLocationBar")]),s._v(" "),t("td",[s._v("Boolean|Object")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("true")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定位置信息部件是否可用。")])]),s._v(" "),t("tr",[t("td",[s._v("enablePrintView")]),s._v(" "),t("td",[s._v("Boolean|Object")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("true")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定打印部件是否可用。")])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("事件名")]),s._v(" "),t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("ready")]),s._v(" "),t("td",[s._v("{Cesium, viewer}")]),s._v(" "),t("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。")])]),s._v(" "),t("tr",[t("td",[s._v("legendChanged")]),s._v(" "),t("td",[s._v("number")]),s._v(" "),t("td",[s._v("比例尺改变时触发，返回比例尺数值，单位米。")])]),s._v(" "),t("tr",[t("td",[s._v("geolocation")]),s._v(" "),t("td",[s._v("Object")]),s._v(" "),t("td",[s._v("定位成功时触发，返回定位结果。")])])])])}],!1,null,null,null);a.default=r.exports},"O/1+":function(s,a,t){s.exports=t("IYsP")}}]);
//# sourceMappingURL=110.304b7fd012e9afa5926e.js.map
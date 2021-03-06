/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/style.css":
/*!*************************************************!*\
  !*** ./node_modules/css-loader!./src/style.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"html {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  font-family: Arial, Helvetica, sans-serif;\\r\\n  font-size: 14px;\\r\\n}\\r\\n.wraper {\\r\\n  display: grid;\\r\\n  grid-template-rows: auto 1fr auto;\\r\\n  min-height: 100vh;\\r\\n}\\r\\n.card-grid {\\r\\n  display: grid;\\r\\n  grid-template-columns: 50% 50%;\\r\\n  grid-template-rows: repeat(auto-fill,50%);\\r\\n  grid-auto-flow: dense;\\r\\n  grid-gap: 16px;\\r\\n}\\r\\nheader, footer {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(6,1fr);\\r\\n  }\\r\\n  header a , footer a {\\r\\n    opacity: 0.6;\\r\\n    font-size: 16px;\\r\\n    color: #333333;\\r\\n    line-height: 20px;\\r\\n  }\\r\\n\\r\\n.description, .title {\\r\\n  font-family: Helvetica,sans-serif;\\r\\n}\\r\\n.bold {\\r\\n  font-weight: bold;\\r\\n}\\r\\n/* card layout */\\r\\n.card {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(auto-fill, 100%);\\r\\n  grid-template-rows: repeat(auto-fill,minmax(100px,120px));\\r\\n  color: #333333;\\r\\n  align-items: center;\\r\\n}\\r\\n.critical {\\r\\n  background: #DB5341;\\r\\n  border-radius: 20px 20px 0 0;\\r\\n}\\r\\n.info {\\r\\n  background: #FAFAFA;\\r\\n  border-radius: 20px;\\r\\n}\\r\\n.header {\\r\\n  display: grid;\\r\\n  grid-template-rows: 100% 100%;\\r\\n  grid-template-columns: 50% 50%;\\r\\n  padding: 16px;\\r\\n  align-items: center;\\r\\n}\\r\\n.body {\\r\\n  padding: 16px;\\r\\n}\\r\\n.title {\\r\\n  grid-area: 1/2/span 1/span 1\\r\\n}\\r\\n.icon {\\r\\n  grid-area: 1/1/span 1/span 1;\\r\\n}\\r\\n.source {\\r\\n  grid-area: 2/1/span 1/span 1;\\r\\n}\\r\\n.time {\\r\\n  grid-area: 2/2/span 1/span 1;\\r\\n}\\r\\n.description {\\r\\n  grid-area: 3/1/span 1/span 2\\r\\n}\\r\\n.camera-footage {\\r\\n  max-width: 635px;\\r\\n}\\r\\n  /* mobile adaptation */\\r\\n@media screen and (max-width: 320px) {\\r\\n  header, footer {\\r\\n    display: grid;\\r\\n    grid-template: 100%/ 50% 50%\\r\\n    }\\r\\n  .card-grid {\\r\\n    grid-template-columns: 100%;\\r\\n    grid-template-rows: auto;\\r\\n  }\\r\\n  .lenta {\\r\\n    font-size: 24px;\\r\\n  }\\r\\n  .nav-menu {\\r\\n    background-image: url(\" + escape(__webpack_require__(/*! ../src/images/icon_list_m@2x.png */ \"./src/images/icon_list_m@2x.png\")) + \");\\r\\n    background-repeat: no-repeat;\\r\\n    width: 28px;\\r\\n    height: 32px;\\r\\n  }\\r\\n  .card_s , .card_m , .card_l {\\r\\n    grid-column: span 1;\\r\\n  }\\r\\n}\\r\\n.logo {\\r\\n  max-height: 27px;\\r\\n}\\r\\n/* ~Surveillance block\\r\\n  disclaimer: да, тянуть 1 css файл со всеми стилями это неоч (особенно когда он раздуется), но тут мы на это не будем смотреть.\\r\\n */\\r\\n .surveillance-grid {\\r\\n   display: grid;\\r\\n   grid-template:\\r\\n   'c1 c2' 1fr\\r\\n   'c3 c4' 1fr\\r\\n   /1fr 1fr\\r\\n   ;\\r\\n   grid-gap: 20px;\\r\\n }\\r\\n @media screen and (max-width: 320px) {\\r\\n  .surveillance-grid {\\r\\n    grid-template:\\r\\n    'c1' 300px\\r\\n    'c2' 300px\\r\\n    'c3' 300px\\r\\n    'c4' 300px\\r\\n    ;\\r\\n  }\\r\\n }\\r\\n .center {\\r\\n  justify-items: center;\\r\\n  align-items: center;\\r\\n }\\r\\n .video {\\r\\n   max-width: 480px;\\r\\n   max-height: 360px;\\r\\n }\\r\\n .camera-1 {\\r\\n   grid-area: c1;\\r\\n }\\r\\n .camera-2 {\\r\\n   grid-area: c2;\\r\\n }\\r\\n .camera-3 {\\r\\n   grid-area: c3;\\r\\n }\\r\\n .camera-4 {\\r\\n   grid-area: c4;\\r\\n }\\r\\n .hidden {\\r\\n   display: none;\\r\\n }\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function escape(url) {\n    if (typeof url !== 'string') {\n        return url\n    }\n    // If url is already wrapped in quotes, remove them\n    if (/^['\"].*['\"]$/.test(url)) {\n        url = url.slice(1, -1);\n    }\n    // Should url be wrapped?\n    // See https://drafts.csswg.org/css-values-3/#urls\n    if (/[\"'() \\t\\n]/.test(url)) {\n        return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"'\n    }\n\n    return url\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/url/escape.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/images/Richdata Graph Alternative.jpg":
/*!***************************************************!*\
  !*** ./src/images/Richdata Graph Alternative.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"8b16c35932c83979d71d6efee9b71564.jpg\";\n\n//# sourceURL=webpack:///./src/images/Richdata_Graph_Alternative.jpg?");

/***/ }),

/***/ "./src/images/air-conditioner.svg":
/*!****************************************!*\
  !*** ./src/images/air-conditioner.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"57231c48dee1545f0cafa664cc58755f.svg\";\n\n//# sourceURL=webpack:///./src/images/air-conditioner.svg?");

/***/ }),

/***/ "./src/images/battery.svg":
/*!********************************!*\
  !*** ./src/images/battery.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"b975a1eab1df3014bb0e6f662d0c2c7f.svg\";\n\n//# sourceURL=webpack:///./src/images/battery.svg?");

/***/ }),

/***/ "./src/images/fridge.svg":
/*!*******************************!*\
  !*** ./src/images/fridge.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"b70a2893618aabc07f3e042395476a12.svg\";\n\n//# sourceURL=webpack:///./src/images/fridge.svg?");

/***/ }),

/***/ "./src/images/icon_list_m@2x.png":
/*!***************************************!*\
  !*** ./src/images/icon_list_m@2x.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"2b6aa45dcd53f71bf733a33928d91e24.png\";\n\n//# sourceURL=webpack:///./src/images/icon_list_m@2x.png?");

/***/ }),

/***/ "./src/images/kettle.svg":
/*!*******************************!*\
  !*** ./src/images/kettle.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"bc0882bc0c39c282502ffa53bc6c7829.svg\";\n\n//# sourceURL=webpack:///./src/images/kettle.svg?");

/***/ }),

/***/ "./src/images/key.svg":
/*!****************************!*\
  !*** ./src/images/key.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"a5ec5fd40c40057427294f2b5dcd49e7.svg\";\n\n//# sourceURL=webpack:///./src/images/key.svg?");

/***/ }),

/***/ "./src/images/music.svg":
/*!******************************!*\
  !*** ./src/images/music.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"dfa40fb45084b3c3632e55e309783138.svg\";\n\n//# sourceURL=webpack:///./src/images/music.svg?");

/***/ }),

/***/ "./src/images/robot-cleaner.svg":
/*!**************************************!*\
  !*** ./src/images/robot-cleaner.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"cea93be51b62941d9e76d9bed1fa9c61.svg\";\n\n//# sourceURL=webpack:///./src/images/robot-cleaner.svg?");

/***/ }),

/***/ "./src/images/router.svg":
/*!*******************************!*\
  !*** ./src/images/router.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"4ca7829ee87e7796a23a1ed51982d804.svg\";\n\n//# sourceURL=webpack:///./src/images/router.svg?");

/***/ }),

/***/ "./src/images/stats.svg":
/*!******************************!*\
  !*** ./src/images/stats.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"33b0379147ec7ac0823b6e078402323e.svg\";\n\n//# sourceURL=webpack:///./src/images/stats.svg?");

/***/ }),

/***/ "./src/images/thermal.svg":
/*!********************************!*\
  !*** ./src/images/thermal.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"dc2995b06349bf95ae651985365a74d6.svg\";\n\n//# sourceURL=webpack:///./src/images/thermal.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_stats_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/stats.svg */ \"./src/images/stats.svg\");\n/* harmony import */ var _images_stats_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_stats_svg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_key_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/key.svg */ \"./src/images/key.svg\");\n/* harmony import */ var _images_key_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_key_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_robot_cleaner_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/robot-cleaner.svg */ \"./src/images/robot-cleaner.svg\");\n/* harmony import */ var _images_robot_cleaner_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_robot_cleaner_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_router_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/router.svg */ \"./src/images/router.svg\");\n/* harmony import */ var _images_router_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_router_svg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _images_thermal_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/thermal.svg */ \"./src/images/thermal.svg\");\n/* harmony import */ var _images_thermal_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_thermal_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _images_air_conditioner_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/air-conditioner.svg */ \"./src/images/air-conditioner.svg\");\n/* harmony import */ var _images_air_conditioner_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_air_conditioner_svg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _images_music_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/music.svg */ \"./src/images/music.svg\");\n/* harmony import */ var _images_music_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_music_svg__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _images_fridge_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/fridge.svg */ \"./src/images/fridge.svg\");\n/* harmony import */ var _images_fridge_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_fridge_svg__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _images_battery_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/battery.svg */ \"./src/images/battery.svg\");\n/* harmony import */ var _images_battery_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_battery_svg__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _images_kettle_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/kettle.svg */ \"./src/images/kettle.svg\");\n/* harmony import */ var _images_kettle_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_kettle_svg__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _images_Richdata_Graph_Alternative_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/Richdata Graph Alternative.jpg */ \"./src/images/Richdata Graph Alternative.jpg\");\n/* harmony import */ var _images_Richdata_Graph_Alternative_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_Richdata_Graph_Alternative_jpg__WEBPACK_IMPORTED_MODULE_11__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('load', () => {\r\n  fetchEvents().then((events) => {\r\n    if (events.hasOwnProperty('events')) {\r\n      events.events.forEach((element) => {\r\n        createCard(element);\r\n      });\r\n    } else {\r\n      throw new Error('events not found');\r\n    }\r\n  });\r\n});\r\nasync function fetchEvents(type, limit) {\r\n  let myHeaders = new Headers();\r\n  let endpoint = 'http://localhost:8000/api/events';\r\n  myHeaders.append('x-requested-with', 'XMLHttpRequest');\r\n  let params = new URLSearchParams();\r\n  if (type) {\r\n    params.append('type', type);\r\n  }\r\n  if (limit) {\r\n    params.append('limit', limit);\r\n  }\r\n  try {\r\n    let result = await fetch(endpoint,\r\n        {\r\n          method: 'POST',\r\n          body: params,\r\n          headers: myHeaders,\r\n        });\r\n    if (result.status !== 200) {\r\n      throw new Error(`failed with code ${result.status}`);\r\n    } else {\r\n      let data = await result.json();\r\n      return data;\r\n    }\r\n  } catch (e) {\r\n    console.log(e);\r\n    throw e;\r\n  }\r\n}\r\nfunction createCard(e) {\r\n  // Test to see if the browser supports the HTML template element by checking\r\n// for the presence of the template element's content attribute.\r\n  if ('content' in document.createElement('template')) {\r\n    let card = document.getElementById('card-tempo');\r\n    let clone = document.importNode(card.content, true);\r\n\r\n    let cloneCard = clone.querySelector('.card');\r\n    //  title\r\n    let title = clone.querySelector('.title');\r\n    title.innerHTML = e.title;\r\n    // icon\r\n    let icon = clone.querySelector('.icon');\r\n    switch (e.icon) {\r\n      case 'stats':\r\n        icon.src = _images_stats_svg__WEBPACK_IMPORTED_MODULE_1___default.a;\r\n        break;\r\n      case 'key':\r\n        icon.src = _images_key_svg__WEBPACK_IMPORTED_MODULE_2___default.a;\r\n        break;\r\n      case 'robot-cleaner':\r\n        icon.src = _images_robot_cleaner_svg__WEBPACK_IMPORTED_MODULE_3___default.a;\r\n        break;\r\n      case 'router':\r\n        icon.src = _images_router_svg__WEBPACK_IMPORTED_MODULE_4___default.a;\r\n        break;\r\n      case 'thermal':\r\n        icon.src = _images_thermal_svg__WEBPACK_IMPORTED_MODULE_5___default.a;\r\n        break;\r\n      case 'ac':\r\n        icon.src = _images_air_conditioner_svg__WEBPACK_IMPORTED_MODULE_6___default.a;\r\n        break;\r\n      case 'music':\r\n        icon.src = _images_music_svg__WEBPACK_IMPORTED_MODULE_7___default.a;\r\n        break;\r\n      case 'fridge':\r\n        icon.src = _images_fridge_svg__WEBPACK_IMPORTED_MODULE_8___default.a;\r\n        break;\r\n      case 'battery':\r\n        icon.src = _images_battery_svg__WEBPACK_IMPORTED_MODULE_9___default.a;\r\n        break;\r\n      case 'kettle':\r\n        icon.src = _images_kettle_svg__WEBPACK_IMPORTED_MODULE_10___default.a;\r\n        break;\r\n      default:\r\n        icon.src = '';\r\n    }\r\n    //  description\r\n    let desc = clone.querySelector('.description');\r\n    if (e.description === null) {\r\n      desc.remove();\r\n    } else {\r\n      desc.innerHTML = e.description;\r\n    }\r\n    //  source\r\n    let source = clone.querySelector('.source');\r\n    source.innerHTML = e.source;\r\n    //  time\r\n    let time = clone.querySelector('.time');\r\n    time.innerHTML = e.time;\r\n    let cardGrid = document.getElementById('card-grid');\r\n    if (e.size === 's') {\r\n      cloneCard.classList.add('card_s');\r\n    }\r\n    if (e.type === 'info') {\r\n      // cloneCard.classList.add('info');\r\n    } else\r\n    if (e.type === 'critical') {\r\n      // cloneCard.classList.add('critical');\r\n      cloneCard.querySelector('.header').classList.add('critical');\r\n    }\r\n    if (e.data) {\r\n      if (e.data.image === 'get_it_from_mocks_:3.jpg') {\r\n        let image = cloneCard.querySelector('.camera-footage');\r\n        image.src = _images_Richdata_Graph_Alternative_jpg__WEBPACK_IMPORTED_MODULE_11___default.a;\r\n      }\r\n    }\r\n    cardGrid.appendChild(clone);\r\n  } else {\r\n    // Find another way to add the rows to the table because\r\n  // the HTML template element is not supported.\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader!./style.css */ \"./node_modules/css-loader/index.js!./src/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });
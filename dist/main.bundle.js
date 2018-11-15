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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/Dispatcher.js":
/*!***************************!*\
  !*** ./lib/Dispatcher.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Dispatcher; });\nclass Dispatcher {\r\n  constructor() {\r\n    this._callbacks = [];\r\n  }\r\n  register(callback) {\r\n    this._callbacks.push(callback);\r\n  }\r\n  dispatch(action) {\r\n    this._callbacks.forEach((callback) => {\r\n      callback(action);\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./lib/Dispatcher.js?");

/***/ }),

/***/ "./lib/EventEmitter.js":
/*!*****************************!*\
  !*** ./lib/EventEmitter.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EventEmitter; });\nclass EventEmitter {\r\n  constructor() {\r\n    this._listeners = {};\r\n  }\r\n  on(eventName, callback) {\r\n    if (!this._listeners[eventName]) {\r\n      this._listeners[eventName] = [];\r\n    }\r\n    this._listeners[eventName].push(callback);\r\n  }\r\n  trigger(eventName, data) {\r\n    let listeners = this._listeners[eventName];\r\n    listeners.forEach((callback) => {\r\n      callback(data);\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./lib/EventEmitter.js?");

/***/ }),

/***/ "./lib/Store.js":
/*!**********************!*\
  !*** ./lib/Store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Store; });\nclass Store {\r\n  constructor(defaultStore, reducer, dispatcher, emitter) {\r\n    let store = defaultStore;\r\n    dispatcher.register((action) => {\r\n      store = reducer(store, action);\r\n      emitter.trigger('storeChanged',\r\n          {actionType: action.type, ...store});\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./lib/Store.js?");

/***/ }),

/***/ "./lib/View.js":
/*!*********************!*\
  !*** ./lib/View.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return View; });\nclass View {\r\n  constructor(emitter, dispatcher) {\r\n  }\r\n  reset(data) {\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./lib/View.js?");

/***/ }),

/***/ "./src/Button.js":
/*!***********************!*\
  !*** ./src/Button.js ***!
  \***********************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony import */ var _lib_View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/View */ \"./lib/View.js\");\n\r\nclass Button extends _lib_View__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(emitter, dispatcher) {\r\n    super(dispatcher);\r\n    const button = document.querySelector('.view-stub__apply');\r\n    const input = document.querySelector('.view-stub__input');\r\n    button.addEventListener('click', ()=> {\r\n      const value = input.value;\r\n      dispatcher.dispatch({\r\n        type: 'set_name',\r\n        name: value,\r\n      });\r\n    });\r\n  }\r\n  _setData(data) {}\r\n  _redraw() {}\r\n}\r\n\n\n//# sourceURL=webpack:///./src/Button.js?");

/***/ }),

/***/ "./src/Label.js":
/*!**********************!*\
  !*** ./src/Label.js ***!
  \**********************/
/*! exports provided: Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Label\", function() { return Label; });\n/* harmony import */ var _lib_View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/View */ \"./lib/View.js\");\n\r\nclass Label extends _lib_View__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(emitter, dispatcher) {\r\n    super(emitter, dispatcher);\r\n    this._label = undefined;\r\n    emitter.on('storeChanged', (data) => {\r\n      if (data.actionType === 'server_sent') {\r\n        const serverName = data.serverName;\r\n        this.reset({label: serverName});\r\n      }\r\n    });\r\n  }\r\n  _setData(data) {\r\n    this._label = data.label ? data.label : this._label;\r\n  }\r\n  _redraw() {\r\n    document.querySelector('.view-stub__label').innerHTML = `Меня зовут Меня зовут ${this._label}`;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/Label.js?");

/***/ }),

/***/ "./src/Reducer.js":
/*!************************!*\
  !*** ./src/Reducer.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return reduce; });\nfunction reduce(store, action) {\r\n  const newStore = reduce(store, action);\r\n  function reduce(store, action) {\r\n    switch (action.type) {\r\n      case 'set_name':\r\n        return {\r\n          ...store,\r\n          name: action.name,\r\n        };\r\n      case 'server_sent':\r\n        return {\r\n          ...store,\r\n          serverName: action.name,\r\n        };\r\n      default:\r\n        return store;\r\n    }\r\n  }\r\n  return newStore;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/Reducer.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _lib_EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/EventEmitter */ \"./lib/EventEmitter.js\");\n/* harmony import */ var _lib_Dispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Dispatcher */ \"./lib/Dispatcher.js\");\n/* harmony import */ var _lib_Store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/Store */ \"./lib/Store.js\");\n/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Label */ \"./src/Label.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ \"./src/Button.js\");\n/* harmony import */ var _Reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Reducer */ \"./src/Reducer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass App {\r\n  constructor() {\r\n    this._globalEmitter = new _lib_EventEmitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    this._dispatcher = new _lib_Dispatcher__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n    // new ServerApi(this._globalEmitter, this._dispatcher);\r\n    this._initViews();\r\n    this._initStore();\r\n  }\r\n  _initViews() {\r\n    new _Label__WEBPACK_IMPORTED_MODULE_3__[\"Label\"](this._globalEmitter, this._dispatcher);\r\n    new _Button__WEBPACK_IMPORTED_MODULE_4__[\"Button\"](this._globalEmitter, this._dispatcher);\r\n  }\r\n  _initStore() {\r\n    const defaultStore = {\r\n      name: '',\r\n      serverName: '',\r\n      events: [],\r\n    };\r\n    this._store = new _lib_Store__WEBPACK_IMPORTED_MODULE_2__[\"default\"](defaultStore, _Reducer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], this._dispatcher, this._globalEmitter);\r\n  }\r\n}\r\nconst app = new App();\r\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/sensor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/sensor.js":
/*!***********************!*\
  !*** ./src/sensor.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const image = document.querySelector('.camera-footage');\r\n\r\nconst log = (json) => {\r\n  const str = JSON.stringify(json);\r\n  const div = document.createElement('div');\r\n  div.innerText = `${Date.now()} ${str}`;\r\n};\r\n\r\n// Сюда будем записывать события\r\nconst currentPointerEvents = {};\r\n\r\n// Состояние нашей картинки\r\nconst imageState = {\r\n  leftMin: -(image.offsetWidth - image.parentNode.offsetWidth),\r\n  left: 0,\r\n  leftMax: 0,\r\n  zoomMin: 100,\r\n  zoom: 100,\r\n  zoomMax: 300,\r\n  brightnessMin: .2,\r\n  brightness: 1,\r\n  brightnessMax: 4,\r\n};\r\n\r\n// Описание текущего жеста\r\nlet gesture = null;\r\n\r\n// Запрещает таскать картинку мышкой\r\nimage.addEventListener('dragstart', (event) => {\r\n  event.preventDefault();\r\n});\r\n\r\nimage.addEventListener('pointerdown', (event) => {\r\n  currentPointerEvents[event.pointerId] = event;\r\n  if (!gesture) {\r\n    gesture = {\r\n      type: 'move',\r\n    };\r\n  }\r\n});\r\n\r\nconst getDistance = (e1, e2) => {\r\n  const {clientX: x1, clientY: y1} = e1;\r\n  const {clientX: x2, clientY: y2} = e2;\r\n  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);\r\n};\r\n\r\nconst getAngle = (e1, e2) => {\r\n  const {clientX: x1, clientY: y1} = e1;\r\n  const {clientX: x2, clientY: y2} = e2;\r\n  const r = Math.atan2(x2 - x1, y2 - y1);\r\n  return 360 - (180 + Math.round(r * 180 / Math.PI));\r\n};\r\n\r\nconst feedbackNodes = {\r\n  left: document.querySelector('.feedback__unit_left'),\r\n  zoom: document.querySelector('.feedback__unit_zoom'),\r\n  brightness: document.querySelector('.feedback__unit_brightness'),\r\n};\r\n\r\nconst setFeedback = (name, value) => {\r\n  feedbackNodes[name].innerText = Math.round(value * 100) / 100;\r\n};\r\n\r\nconst setLeft = (dx) => {\r\n  const {leftMin, leftMax} = imageState;\r\n\r\n  imageState.left += dx;\r\n  if (imageState.left < leftMin) {\r\n    imageState.left = leftMin;\r\n  } else if (imageState.left > leftMax) {\r\n    imageState.left = leftMax;\r\n  }\r\n  image.style.left = `${imageState.left}px`;\r\n\r\n  setFeedback('left', -imageState.left);\r\n};\r\n\r\nimage.addEventListener('pointermove', (event) => {\r\n  const pointersCount = Object.keys(currentPointerEvents).length;\r\n\r\n  if (pointersCount === 0 || !gesture) {\r\n    return;\r\n  }\r\n\r\n  if (pointersCount === 1 && gesture.type === 'move' && !currentPointerEvents.fake) {\r\n    const previousEvent = currentPointerEvents[event.pointerId];\r\n    const dx = event.clientX - previousEvent.clientX;\r\n    setLeft(dx);\r\n    currentPointerEvents[event.pointerId] = event;\r\n  } else if (pointersCount === 2) {\r\n    currentPointerEvents[event.pointerId] = event;\r\n    const events = Object.values(currentPointerEvents);\r\n    const distance = getDistance(events[0], events[1]);\r\n    const angle = getAngle(events[0], events[1]);\r\n\r\n    if (!gesture.startDistance) {\r\n      gesture.startZoom = imageState.zoom;\r\n      gesture.startDistance = distance;\r\n\r\n      gesture.startBrightness = imageState.brightness;\r\n      gesture.startAngle = angle;\r\n      gesture.angleDiff = 0;\r\n      gesture.type = null;\r\n    }\r\n\r\n    const diff = distance - gesture.startDistance;\r\n    const angleDiff = angle - gesture.startAngle;\r\n\r\n    if (!gesture.type) {\r\n      if (Math.abs(diff) < 32 && Math.abs(angleDiff) < 8) {\r\n        log({'!': 'ignore', diff, angleDiff});\r\n        return;\r\n      } else if (Math.abs(diff) > 32) {\r\n        log({'!': 'detected zoom', diff, angleDiff});\r\n        gesture.type = 'zoom';\r\n      } else {\r\n        log({'!': 'detected rotate', diff, angleDiff});\r\n        gesture.type = 'rotate';\r\n      }\r\n    }\r\n\r\n    if (gesture.type === 'zoom') {\r\n      const {zoomMin, zoomMax} = imageState;\r\n      let zoom = gesture.startZoom + diff;\r\n      if (diff < 0) {\r\n        zoom = Math.max(zoom, zoomMin);\r\n      } else {\r\n        zoom = Math.min(zoom, zoomMax);\r\n      }\r\n\r\n      imageState.zoom = zoom;\r\n      image.style.height = `${zoom}%`;\r\n      setFeedback('zoom', zoom);\r\n    }\r\n\r\n    if (gesture.type === 'rotate') {\r\n      const {brightnessMin, brightnessMax} = imageState;\r\n\r\n      if (Math.abs(angleDiff - gesture.angleDiff) > 300) {\r\n        gesture.startBrightness = imageState.brightness;\r\n        gesture.startAngle = angle;\r\n        gesture.angleDiff = 0;\r\n        return;\r\n      }\r\n\r\n      gesture.angleDiff = angleDiff;\r\n\r\n      let brightness = gesture.startBrightness + angleDiff / 50;\r\n      if (angleDiff < 0) {\r\n        brightness = Math.max(brightness, brightnessMin);\r\n      } else {\r\n        brightness = Math.min(brightness, brightnessMax);\r\n      }\r\n\r\n      imageState.brightness = brightness;\r\n      image.style.filter = `brightness(${brightness})`;\r\n      setFeedback('brightness', brightness);\r\n    }\r\n  }\r\n});\r\n\r\nconst onPointerUp = (event) => {\r\n  gesture = null;\r\n  delete currentPointerEvents[event.pointerId];\r\n};\r\n\r\nimage.addEventListener('pointerup', onPointerUp);\r\nimage.addEventListener('pointercancel', onPointerUp);\r\nimage.addEventListener('pointerleave', onPointerUp);\r\n\r\nconst fakePointer = document.querySelector('.fake-pointer');\r\nimage.addEventListener('dblclick', (event) => {\r\n  if (currentPointerEvents['fake']) {\r\n    delete currentPointerEvents.fake;\r\n    fakePointer.style.left = 0;\r\n    fakePointer.style.top = 0;\r\n    fakePointer.classList.remove('active');\r\n  } else {\r\n    currentPointerEvents['fake'] = event;\r\n    width = fakePointer.offsetWidth;\r\n    fakePointer.classList.add('active');\r\n    fakePointer.style.left = imageState.left + event.offsetX - width / 2;\r\n    fakePointer.style.top = event.offsetY - width / 2;\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/sensor.js?");

/***/ })

/******/ });
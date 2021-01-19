/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n  font-size: 100%;\\n  box-sizing: border-box;\\n}\\n\\n*,\\n*::before,\\n*::after {\\n  box-sizing: inherit;\\n}\\n\\nbody {\\n  font-family: Arial, Helvetica, sans-serif;\\n  line-height: 1.3;\\n  margin: 0;\\n  padding: 0;\\n  height: 100vh;\\n  color: white;\\n}\\n\\n.background {\\n  width: 100%;\\n  height: 100vh;\\n}\\n\\n.form-control:focus {\\n  border-color: #ced4da;\\n  box-shadow: none;\\n}\\n\\n.btn:focus,\\n.btn-primary:focus,\\n.btn-primary:active:focus {\\n  border-color: transparent;\\n  box-shadow: none;\\n}\\n\\n.search-city {\\n  border-radius: 0.25rem 0 0 0.25rem;\\n}\\n\\n.search-btn {\\n  border-radius: 0 0.25rem 0.25rem 0;\\n}\\n\\n.weather-container {\\n  margin-top: -90px;\\n}\\n\\n.info-container {\\n  margin-top: -30px;\\n  margin-bottom: 15px;\\n}\\n\\n.switch {\\n  display: inline-block;\\n  width: 60px;\\n  height: 34px;\\n  top: 50px;\\n  right: 50px;\\n}\\n\\n.switch input {\\n  opacity: 0;\\n  width: 0;\\n  height: 0;\\n}\\n\\n.slider {\\n  position: absolute;\\n  cursor: pointer;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  background-color: #ccc;\\n  -webkit-transition: .4s;\\n  transition: .4s;\\n}\\n\\n.slider:before {\\n  position: absolute;\\n  content: \\\"\\\";\\n  height: 26px;\\n  width: 26px;\\n  left: 4px;\\n  bottom: 4px;\\n  background-color: white;\\n  -webkit-transition: .4s;\\n  transition: .4s;\\n}\\n\\ninput:checked + .slider {\\n  background-color: #0d6efd;\\n}\\n\\ninput:focus + .slider {\\n  box-shadow: 0 0 1px #0d6efd;\\n}\\n\\ninput:checked + .slider:before {\\n  -webkit-transform: translateX(26px);\\n  -ms-transform: translateX(26px);\\n  transform: translateX(26px);\\n}\\n\\n.slider.round {\\n  border-radius: 34px;\\n}\\n\\n.slider.round:before {\\n  border-radius: 50%;\\n}\\n\\n.text-anim {\\n  opacity: 0;\\n  transition: opacity 225ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\\n}\\n\\n.fade-anim {\\n  opacity: 1;\\n  transition: opacity 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53);\\n}\\n\\n.cities-list-cont {\\n  width: 30%;\\n  max-height: 200px;\\n  overflow: hidden;\\n}\\n\\n.cities-list {\\n  height: 100%;\\n  overflow-y: auto;\\n  margin-right: -1.1rem;\\n  padding-right: 1.1rem;\\n}\\n\\n.input-warning::placeholder {\\n  color: red;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://weather-app/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _javascript_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./javascript/weather */ \"./src/javascript/weather.js\");\n\n\n\nconst weather = new _javascript_weather__WEBPACK_IMPORTED_MODULE_1__.default();\n\nif (navigator.geolocation) {\n  navigator.geolocation.getCurrentPosition(weather.currentLocation);\n}\n\nfunction permissionHanldler() {\n  navigator.permissions.query({ name: 'geolocation' })\n    .then(result => {\n      if (result.state === 'granted') {\n        navigator.geolocation.getCurrentPosition(weather.currentLocation);\n      } else {\n        weather.randomLocation();\n      }\n    });\n}\n\npermissionHanldler();\n\nconst searchBtn = document.querySelector('.search-btn');\nconst searchInput = document.getElementById('searchCity');\nlet counter = 0;\n\nsearchBtn.addEventListener('click', () => {\n  if (searchInput.value !== '') {\n    weather.searchCity();\n    searchInput.value = '';\n  } else {\n    counter += 1;\n    searchInput.classList.add('input-warning');\n\n    if (counter >= 3) {\n      searchInput.placeholder = 'PLEASE ENTER A CITY!!';\n    } else {\n      searchInput.placeholder = 'Please Enter a City';\n    }\n  }\n});\n\nsearchInput.addEventListener('keydown', (e) => {\n  if (e.key === 'Enter') {\n    e.preventDefault();\n    searchBtn.click();\n  }\n});\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/javascript/loaderAnimation.js":
/*!*******************************************!*\
  !*** ./src/javascript/loaderAnimation.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ loaderAnimation\n/* harmony export */ });\nfunction loaderAnimation() {\n  const div = document.createElement('div');\n  const span = document.createElement('span');\n\n  div.className = 'spinner-grow text-primary m-5';\n  div.style = 'width: 5rem; height: 5rem;';\n  div.setAttribute('role', 'status');\n\n  span.className = 'visually-hidden';\n  span.textContent = 'Loading...';\n\n  div.appendChild(span);\n\n  return div;\n}\n\n\n//# sourceURL=webpack://weather-app/./src/javascript/loaderAnimation.js?");

/***/ }),

/***/ "./src/javascript/unsplash.js":
/*!************************************!*\
  !*** ./src/javascript/unsplash.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ unsplashAPI\n/* harmony export */ });\nconst unsplashKey = \"Fxb6TRiRwRnVd_rajKUeJTJWZkEosjAys8EZjxMvhxA\";\n\nclass unsplashAPI {\n  constructor() {\n    this.fetchBg = this.fetchBg.bind(this);\n  }\n\n  async fetchBg(weather) {\n    const bg = document.querySelector('.background');\n\n    const response = await fetch(`https://api.unsplash.com/search/photos?page=1?c&query=${weather}&per_page=15&orientation=landscape&client_id=${unsplashKey}`, { mode: 'cors' });\n\n    response.json().then(items => {\n      const imgURL = Math.floor(Math.random() * items.results.length) + 1;\n      this.image = items.results[imgURL].urls.regular;\n\n      bg.style.background = `linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.80)), url(${this.image}) no-repeat center`;\n      bg.style.backgroundSize = 'cover';\n    });\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/javascript/unsplash.js?");

/***/ }),

/***/ "./src/javascript/weather.js":
/*!***********************************!*\
  !*** ./src/javascript/weather.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Weather\n/* harmony export */ });\n/* harmony import */ var _unsplash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unsplash */ \"./src/javascript/unsplash.js\");\n/* harmony import */ var _weatherInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherInfo */ \"./src/javascript/weatherInfo.js\");\n/* harmony import */ var _loaderAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loaderAnimation */ \"./src/javascript/loaderAnimation.js\");\n\n\n\n\nconst weatherKey = \"01b4c0c1687fecce16e2630853d88314\";\n\nconst imgBG = new _unsplash__WEBPACK_IMPORTED_MODULE_0__.default();\n\nfunction citiesListCont() {\n  const ul = document.createElement('ul');\n  const div = document.createElement('div');\n\n  ul.className = 'cities-list list-group';\n  div.className = 'cities-list-cont m-5';\n\n  ul.innerHTML = '';\n\n  div.appendChild(ul);\n\n  return div;\n}\n\nclass Weather {\n  constructor() {\n    this.currentLocation = this.currentLocation.bind(this);\n    this.currentWeather = this.currentWeather.bind(this);\n    this.randomLocation = this.randomLocation.bind(this);\n    this.loader = this.loader.bind(this);\n    this.searchLoader = this.searchLoader.bind(this);\n    this.setTemp = this.setTemp.bind(this);\n    this.container = document.querySelector('.weather-container');\n    this.searchCity = this.searchCity.bind(this);\n    this.setTempRN = this.setTempRN.bind(this);\n  }\n\n  searchLoader(state) {\n    this.listContainer = document.querySelector('.cities-list-cont');\n    this.listContainer.appendChild((0,_loaderAnimation__WEBPACK_IMPORTED_MODULE_2__.default)());\n\n    this.loadAnim = this.listContainer.querySelectorAll('.spinner-grow');\n\n    this.loadAnim.forEach(loader => {\n      loader.classList.add(`${state ? 'd-block' : 'd-none'}`);\n    });\n  }\n\n  loader(state) {\n    this.container.appendChild((0,_loaderAnimation__WEBPACK_IMPORTED_MODULE_2__.default)());\n\n    this.loadAnim = document.querySelector('.spinner-grow');\n\n    this.loadAnim.classList.add(`${state ? 'd-block' : 'd-none'}`);\n  }\n\n  setTempRN(currentTemp) {\n    this.temp = document.querySelector('.temp-checkbox');\n    const temp = document.getElementById('weatherTemp');\n    const fahrenheit = (currentTemp * (9 / 5)) + 32;\n\n    temp.textContent = this.temp.checked ? `${Number((fahrenheit).toFixed(1))}°F` : `${Number((currentTemp).toFixed(1))}°C`;\n  }\n\n  setTemp(currentTemp) {\n    this.temp = document.querySelector('.temp-checkbox');\n    const temp = document.getElementById('weatherTemp');\n    const fahrenheit = (currentTemp * (9 / 5)) + 32;\n\n    temp.classList.remove('fade-anim');\n\n    setTimeout(() => {\n      requestAnimationFrame(() => {\n        temp.innerHTML = this.temp.checked ? `${Number((fahrenheit).toFixed(1))}°F` : `${Number((currentTemp).toFixed(1))}°C`;\n        temp.classList.add('fade-anim');\n      });\n    }, 250);\n  }\n\n  currentLocation(location) {\n    this.latitude = location.coords.latitude;\n    this.longitude = location.coords.longitude;\n\n    this.currentWeather();\n  }\n\n  async currentWeather(id) {\n    this.container.innerHTML = '';\n    this.loader(true);\n\n    let response;\n    if (this.latitude && this.longitude) {\n      response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&units=metric&appid=${weatherKey}`, { mode: 'cors' });\n    } else {\n      response = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=${weatherKey}`);\n    }\n\n    this.allCities = await fetch('city.list.json');\n    this.allCities = this.allCities.json();\n\n    await response.json()\n      .then(items => {\n        const tempSwitch = document.querySelector('.temp-checkbox');\n        const { temp } = items.main;\n        const { weather: weatherAll } = items;\n        const weather = weatherAll[0].main;\n\n        imgBG.fetchBg(weather);\n        (0,_weatherInfo__WEBPACK_IMPORTED_MODULE_1__.default)(items);\n\n        this.setTempRN(temp);\n\n        tempSwitch.addEventListener('click', () => {\n          this.setTemp(temp);\n        });\n\n        this.loader(false);\n      });\n  }\n\n  async randomLocation() {\n    this.latitude = null;\n    this.longitude = null;\n    this.allCities = await fetch('city.list.json');\n    this.allCities = this.allCities.json();\n\n    await this.allCities\n      .then(items => {\n        this.currentWeather(items[Math.floor(Math.random() * items.length) + 1].id);\n      });\n  }\n\n  filterCities(searchResult) {\n    const filtered = new Promise((resolve, reject) => {\n      try {\n        this.allCities\n          .then(items => {\n            const result = items.map(({ id, name }) => {\n              if (name.toLowerCase().startsWith(searchResult.toLowerCase())) {\n                return { id, name };\n              }\n              return 'fail';\n            }).filter(city => city !== 'fail');\n            return resolve(result);\n          });\n      } catch (e) {\n        return reject(e);\n      }\n    });\n    return filtered;\n  }\n\n  async searchCity() {\n    const main = document.querySelector('.main');\n    if (main.childElementCount >= 3) {\n      const divs = document.querySelectorAll('.cities-list-cont');\n\n      divs.forEach(div => {\n        main.removeChild(div);\n      });\n    }\n\n    main.appendChild(citiesListCont());\n\n    const searchInput = document.getElementById('searchCity');\n    const searchResult = searchInput.value;\n\n    this.searchLoader(true);\n\n    const citiesList = document.querySelector('.cities-list');\n\n    this.filteredCities = await this.filterCities(searchResult);\n\n    citiesList.innerHTML = '';\n\n    await this.filteredCities.forEach(({ id, name }) => {\n      const li = document.createElement('li');\n\n      li.setAttribute('id', id);\n      li.className = 'list-group-item';\n      li.textContent = name;\n      li.style.color = 'black';\n      li.style.cursor = 'pointer';\n\n      citiesList.appendChild(li);\n    });\n\n    const citiesResult = document.querySelectorAll('.list-group-item');\n    citiesResult.forEach(city => {\n      city.addEventListener('click', () => {\n        const div = document.querySelector('.cities-list-cont');\n        this.latitude = null;\n        this.longitude = null;\n        this.currentWeather(city.id);\n        main.removeChild(div);\n      });\n    });\n\n    this.searchLoader(false);\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/javascript/weather.js?");

/***/ }),

/***/ "./src/javascript/weatherInfo.js":
/*!***************************************!*\
  !*** ./src/javascript/weatherInfo.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ weatherInfo\n/* harmony export */ });\nfunction weatherInfo(items) {\n  const { icon: iconIMG } = items.weather[0];\n  const { name: countryName } = items;\n  const { country } = items.sys;\n  const container = document.querySelector('.weather-container');\n  const icon = document.createElement('img');\n  const infoCont = document.createElement('div');\n  const temp = document.createElement('h1');\n  const header = document.createElement('h3');\n  const desc = document.createElement('p');\n  const { description } = items.weather[0];\n\n  container.innerHTML = '';\n\n  icon.src = `http://openweathermap.org/img/wn/${iconIMG}@4x.png`;\n\n  temp.classList.add('text-anim', 'fade-anim');\n  temp.setAttribute('id', 'weatherTemp');\n\n  header.textContent = `${countryName}, ${country}`;\n\n  desc.textContent = description;\n  desc.style.textTransform = 'capitalize';\n\n  infoCont.className = 'text-center info-container';\n\n  infoCont.append(temp, header, desc);\n  container.append(icon, infoCont);\n\n  return container;\n}\n\n//# sourceURL=webpack://weather-app/./src/javascript/weatherInfo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
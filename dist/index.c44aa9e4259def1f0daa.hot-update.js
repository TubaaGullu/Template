"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatewebpack"]("index",{

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_pages_home_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @scss/pages/home.scss */ \"./src/scss/pages/home.scss\");\n\n// import * as bootstrap from \"bootstrap\";\n\nconsole.log(\"Hello World! from home page\");\n\nconst themeToggle = document.querySelector(\"#themeToggle\");\nconst buttons = themeToggle.querySelectorAll(\"button\");\nconsole.log(buttons);\n\nbuttons.forEach((button) => {\n  button.addEventListener(\"click\", (e) => {\n    console.log(e.target.dataset.theme);\n    document.documentElement.setAttribute(\n      \"data-bs-theme\",\n      e.target.dataset.theme\n    );\n  });\n});\n\n\n//# sourceURL=webpack://webpack/./src/js/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5993e850959783737700")
/******/ })();
/******/ 
/******/ }
);
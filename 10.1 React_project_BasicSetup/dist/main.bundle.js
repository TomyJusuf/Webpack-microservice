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

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.scss */ \"./src/App.scss\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _Pages_Login_login_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pages/Login/login.jsx */ \"./src/Pages/Login/login.jsx\");\n/* harmony import */ var _Pages_Movies_Movies_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pages/Movies/Movies.jsx */ \"./src/Pages/Movies/Movies.jsx\");\n\n\n\n\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {\n    path: \"/login\",\n    component: _Pages_Login_login_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {\n    path: \"/movies\",\n    component: _Pages_Movies_Movies_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {\n    path: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Redirect, {\n    to: \"/login\"\n  }))));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://10-react-project/./src/App.js?");

/***/ }),

/***/ "./src/Pages/Login/login.jsx":
/*!***********************************!*\
  !*** ./src/Pages/Login/login.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _login_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.scss */ \"./src/Pages/Login/login.scss\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/logo.png */ \"./src/assets/logo.png\");\n/* harmony import */ var _components_Button_Button_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Button/Button.jsx */ \"./src/components/Button/Button.jsx\");\n/* harmony import */ var _components_signIn_signin_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/signIn/signin.jsx */ \"./src/components/signIn/signin.jsx\");\n\n\n\n\n\n\nfunction Login() {\n  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useHistory)();\n  const signInToMoviesNow = () => {\n    history.push('/movies');\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"background\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"header\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    className: \"logo-img\",\n    src: _assets_logo_png__WEBPACK_IMPORTED_MODULE_2__,\n    alt: \"logo\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Button_Button_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: \"Sign In\",\n    onClick: signInToMoviesNow\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"main\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_signIn_signin_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n//# sourceURL=webpack://10-react-project/./src/Pages/Login/login.jsx?");

/***/ }),

/***/ "./src/Pages/Movies/Movies.jsx":
/*!*************************************!*\
  !*** ./src/Pages/Movies/Movies.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/logo.png */ \"./src/assets/logo.png\");\n/* harmony import */ var _components_Button_Button_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Button/Button.jsx */ \"./src/components/Button/Button.jsx\");\n/* harmony import */ var _components_IconSlider_IconSlider_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/IconSlider/IconSlider.jsx */ \"./src/components/IconSlider/IconSlider.jsx\");\n/* harmony import */ var _Movies_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Movies.scss */ \"./src/Pages/Movies/Movies.scss\");\n\n\n\n\n\n\nfunction Movies() {\n  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useHistory)();\n  const logOut = () => {\n    history.push('/login');\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"movies-main-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"header\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    className: \"logo-img\",\n    src: _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__,\n    alt: \"logo\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Button_Button_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Sign Out\",\n    onClick: logOut\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_IconSlider_IconSlider_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: \"Continue Watching ..\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_IconSlider_IconSlider_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: \"To 10 Globally ..\"\n  }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Movies);\n\n//# sourceURL=webpack://10-react-project/./src/Pages/Movies/Movies.jsx?");

/***/ }),

/***/ "./src/components/Button/Button.jsx":
/*!******************************************!*\
  !*** ./src/components/Button/Button.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.scss */ \"./src/components/Button/Button.scss\");\nfunction _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }\n\n\nfunction Button(_ref) {\n  let {\n    title,\n    ...props\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", _extends({\n    type: \"button\"\n  }, props), title);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);\n\n//# sourceURL=webpack://10-react-project/./src/components/Button/Button.jsx?");

/***/ }),

/***/ "./src/components/IconSlider/IconSlider.jsx":
/*!**************************************************!*\
  !*** ./src/components/IconSlider/IconSlider.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _IconSlider_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconSlider.scss */ \"./src/components/IconSlider/IconSlider.scss\");\n/* harmony import */ var _assets_1_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/1.jpeg */ \"./src/assets/1.jpeg\");\n/* harmony import */ var _assets_2_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/2.jpeg */ \"./src/assets/2.jpeg\");\n/* harmony import */ var _assets_3_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/3.jpeg */ \"./src/assets/3.jpeg\");\n/* harmony import */ var _assets_4_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/4.jpeg */ \"./src/assets/4.jpeg\");\n/* harmony import */ var _assets_5_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/5.jpeg */ \"./src/assets/5.jpeg\");\n/* harmony import */ var _assets_6_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/6.jpeg */ \"./src/assets/6.jpeg\");\n/* harmony import */ var _assets_7_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/7.jpeg */ \"./src/assets/7.jpeg\");\n/* harmony import */ var _assets_8_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/8.jpeg */ \"./src/assets/8.jpeg\");\n/* harmony import */ var _assets_9_jpeg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/9.jpeg */ \"./src/assets/9.jpeg\");\n/* harmony import */ var _assets_10_jpeg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/10.jpeg */ \"./src/assets/10.jpeg\");\n/* harmony import */ var _assets_11_jpeg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/11.jpeg */ \"./src/assets/11.jpeg\");\n/* harmony import */ var _assets_12_jpeg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/12.jpeg */ \"./src/assets/12.jpeg\");\n/* harmony import */ var _assets_13_jpeg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/13.jpeg */ \"./src/assets/13.jpeg\");\n/* harmony import */ var _assets_14_jpeg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../assets/14.jpeg */ \"./src/assets/14.jpeg\");\n/* harmony import */ var _assets_15_jpeg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../assets/15.jpeg */ \"./src/assets/15.jpeg\");\n\n\n\n// Static imports for assets\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// Map assets to their respective imports\nconst movieImages = {\n  1: _assets_1_jpeg__WEBPACK_IMPORTED_MODULE_2__,\n  2: _assets_2_jpeg__WEBPACK_IMPORTED_MODULE_3__,\n  3: _assets_3_jpeg__WEBPACK_IMPORTED_MODULE_4__,\n  4: _assets_4_jpeg__WEBPACK_IMPORTED_MODULE_5__,\n  5: _assets_5_jpeg__WEBPACK_IMPORTED_MODULE_6__,\n  6: _assets_6_jpeg__WEBPACK_IMPORTED_MODULE_7__,\n  7: _assets_7_jpeg__WEBPACK_IMPORTED_MODULE_8__,\n  8: _assets_8_jpeg__WEBPACK_IMPORTED_MODULE_9__,\n  9: _assets_9_jpeg__WEBPACK_IMPORTED_MODULE_10__,\n  10: _assets_10_jpeg__WEBPACK_IMPORTED_MODULE_11__,\n  11: _assets_11_jpeg__WEBPACK_IMPORTED_MODULE_12__,\n  12: _assets_12_jpeg__WEBPACK_IMPORTED_MODULE_13__,\n  13: _assets_13_jpeg__WEBPACK_IMPORTED_MODULE_14__,\n  14: _assets_14_jpeg__WEBPACK_IMPORTED_MODULE_15__,\n  15: _assets_15_jpeg__WEBPACK_IMPORTED_MODULE_16__\n};\nfunction IconSlider(props) {\n  const randomMovie = items => {\n    const movList = [];\n    for (let i = 0; i < items; i += 1) {\n      const counter = Math.floor(Math.random() * 15) + 1; // Ensure 1-15 range\n      const key = Date.now() * Math.random();\n      const mov = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n        key: key,\n        src: movieImages[counter],\n        alt: `Movie ${counter}`\n      });\n      movList.push(mov);\n    }\n    return movList;\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"list-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"list-title\"\n  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"movies-container\"\n  }, randomMovie(5)));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconSlider);\n\n//# sourceURL=webpack://10-react-project/./src/components/IconSlider/IconSlider.jsx?");

/***/ }),

/***/ "./src/components/inputbox/inputbox.jsx":
/*!**********************************************!*\
  !*** ./src/components/inputbox/inputbox.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _inputbox_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputbox.scss */ \"./src/components/inputbox/inputbox.scss\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n\n\n\n\nfunction Inputbox(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"textinput-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    placeholder: props.placeholder,\n    type: \"text\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"input-error\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faExclamation\n  }), \"Error message\"));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inputbox);\n\n//# sourceURL=webpack://10-react-project/./src/components/inputbox/inputbox.jsx?");

/***/ }),

/***/ "./src/components/signIn/signin.jsx":
/*!******************************************!*\
  !*** ./src/components/signIn/signin.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _Button_Button_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button/Button.jsx */ \"./src/components/Button/Button.jsx\");\n/* harmony import */ var _inputbox_inputbox_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../inputbox/inputbox.jsx */ \"./src/components/inputbox/inputbox.jsx\");\n/* harmony import */ var _signin_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin.scss */ \"./src/components/signIn/signin.scss\");\n\n\n\n// import Header from '../../components/header/header';\n\n\nfunction Signin() {\n  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useHistory)();\n  const loginToSite = () => {\n    history.push('/movies');\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"signin-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", null, \"Sign In\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_inputbox_inputbox_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    placeholder: \"Enter Username\",\n    error: \"someerror\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_inputbox_inputbox_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    placeholder: \"Enter Password\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button_Button_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: \"signin-btn\",\n    title: \"Sign In\",\n    onClick: loginToSite\n  }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signin);\n\n//# sourceURL=webpack://10-react-project/./src/components/signIn/signin.jsx?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1__.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)), document.getElementById('app'));\n\n//# sourceURL=webpack://10-react-project/./src/index.js?");

/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://10-react-project/./src/App.scss?");

/***/ }),

/***/ "./src/Pages/Login/login.scss":
/*!************************************!*\
  !*** ./src/Pages/Login/login.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://10-react-project/./src/Pages/Login/login.scss?");

/***/ }),

/***/ "./src/Pages/Movies/Movies.scss":
/*!**************************************!*\
  !*** ./src/Pages/Movies/Movies.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://10-react-project/./src/Pages/Movies/Movies.scss?");

/***/ }),

/***/ "./src/components/Button/Button.scss":
/*!*******************************************!*\
  !*** ./src/components/Button/Button.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://10-react-project/./src/components/Button/Button.scss?");

/***/ }),

/***/ "./src/components/IconSlider/IconSlider.scss":
/*!***************************************************!*\
  !*** ./src/components/IconSlider/IconSlider.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://10-react-project/./src/components/IconSlider/IconSlider.scss?");

/***/ }),

/***/ "./src/components/inputbox/inputbox.scss":
/*!***********************************************!*\
  !*** ./src/components/inputbox/inputbox.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://10-react-project/./src/components/inputbox/inputbox.scss?");

/***/ }),

/***/ "./src/components/signIn/signin.scss":
/*!*******************************************!*\
  !*** ./src/components/signIn/signin.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://10-react-project/./src/components/signIn/signin.scss?");

/***/ }),

/***/ "./src/assets/1.jpeg":
/*!***************************!*\
  !*** ./src/assets/1.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cf2bf5404241fea9af72.jpeg\";\n\n//# sourceURL=webpack://10-react-project/./src/assets/1.jpeg?");

/***/ }),

/***/ "./src/assets/10.jpeg":
/*!****************************!*\
  !*** ./src/assets/10.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bed591cd9bb4a6ac6d42.jpeg\";\n\n//# sourceURL=webpack://10-react-project/./src/assets/10.jpeg?");

/***/ }),

/***/ "./src/assets/11.jpeg":
/*!****************************!*\
  !*** ./src/assets/11.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b7e63727c60453465bdc.jpeg\";\n\n//# sourceURL=webpack://10-react-project/./src/assets/11.jpeg?");

/***/ }),

/***/ "./src/assets/12.jpeg":
/*!****************************!*\
  !*** ./src/assets/12.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"122a3a36df4c4ffc8710.jpeg\";\n\n//# sourceURL=webpack://10-react-project/./src/assets/12.jpeg?");

/***/ }),

/***/ "./src/assets/13.jpeg":
/*!****************************!*\
  !*** ./src/assets/13.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"69ef06bbb629e1db717f.jpeg\";\n\n//# sourceURL=webpack://10-react-project/./src/assets/13.jpeg?");

/***/ }),

/***/ "./src/assets/14.jpeg":
/*!****************************!*\
  !*** ./src/assets/14.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"38c052030430afff3ca4.jpeg\";\n\n//# sourceURL=webpack://10-react-project/./src/assets/14.jpeg?");

/***/ }),

/***/ "./src/assets/15.jpeg":
/*!****************************!*\
  !*** ./src/assets/15.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c03b370f649a9832493c.jpeg\";\n\n//# sourceURL=webpack://10-react-project/./src/assets/15.jpeg?");

/***/ }),

/***/ "./src/assets/2.jpeg":
/*!***************************!*\
  !*** ./src/assets/2.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fce3c5a0c10dff20d6c7.jpeg\";\n\n//# sourceURL=webpack://10-react-project/./src/assets/2.jpeg?");

/***/ }),

/***/ "./src/assets/3.jpeg":
/*!***************************!*\
  !*** ./src/assets/3.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"baffebc8c17bf5a302b2.jpeg\";\n\n//# sourceURL=webpack://10-react-project/./src/assets/3.jpeg?");

/***/ }),

/***/ "./src/assets/4.jpeg":
/*!***************************!*\
  !*** ./src/assets/4.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6f6548b210381fca8741.jpeg\";\n\n//# sourceURL=webpack://10-react-project/./src/assets/4.jpeg?");

/***/ }),

/***/ "./src/assets/5.jpeg":
/*!***************************!*\
  !*** ./src/assets/5.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ba6241efc66de0ddce1e.jpeg\";\n\n//# sourceURL=webpack://10-react-project/./src/assets/5.jpeg?");

/***/ }),

/***/ "./src/assets/6.jpeg":
/*!***************************!*\
  !*** ./src/assets/6.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fa17c6d9dba34e20abf5.jpeg\";\n\n//# sourceURL=webpack://10-react-project/./src/assets/6.jpeg?");

/***/ }),

/***/ "./src/assets/7.jpeg":
/*!***************************!*\
  !*** ./src/assets/7.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3237e822d0a4afdfe518.jpeg\";\n\n//# sourceURL=webpack://10-react-project/./src/assets/7.jpeg?");

/***/ }),

/***/ "./src/assets/8.jpeg":
/*!***************************!*\
  !*** ./src/assets/8.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e02ed52ca57754a24b5d.jpeg\";\n\n//# sourceURL=webpack://10-react-project/./src/assets/8.jpeg?");

/***/ }),

/***/ "./src/assets/9.jpeg":
/*!***************************!*\
  !*** ./src/assets/9.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"da7b8627bb47454c7bfd.jpeg\";\n\n//# sourceURL=webpack://10-react-project/./src/assets/9.jpeg?");

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"87305146e88b6e023539.png\";\n\n//# sourceURL=webpack://10-react-project/./src/assets/logo.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_10_react_project"] = self["webpackChunk_10_react_project"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_fortawesome_react-fontawesome_index_es_js-node_modules_react-dom_index_j-63e7d8"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
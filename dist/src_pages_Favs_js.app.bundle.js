"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkappanimalesinstagram"] = self["webpackChunkappanimalesinstagram"] || []).push([["src_pages_Favs_js"],{

/***/ "./src/components/ListOfFavs/index.js":
/*!********************************************!*\
  !*** ./src/components/ListOfFavs/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListOfFavs\": () => (/* binding */ ListOfFavs)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/ListOfFavs/styles.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n // Importando estilos\n\n // Importando PropTypes\n\n\nvar ListOfFavs = function ListOfFavs(_ref) {\n  var _ref$favs = _ref.favs,\n      favs = _ref$favs === void 0 ? [] : _ref$favs;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Grid, null, favs.map(function (fav) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Link, {\n      key: fav.id,\n      to: \"/detail/\".concat(fav.id)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Image, {\n      src: fav.src\n    }));\n  }));\n};\nListOfFavs.propTypes = {\n  favs: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({\n    id: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),\n    src: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)\n  }))\n};\n\n//# sourceURL=webpack://appanimalesinstagram/./src/components/ListOfFavs/index.js?");

/***/ }),

/***/ "./src/components/ListOfFavs/styles.js":
/*!*********************************************!*\
  !*** ./src/components/ListOfFavs/styles.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Link\": () => (/* binding */ Link),\n/* harmony export */   \"Grid\": () => (/* binding */ Grid),\n/* harmony export */   \"Image\": () => (/* binding */ Image)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reach/router */ \"./node_modules/@reach/router/es/index.js\");\nvar _templateObject, _templateObject2, _templateObject3;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar Link = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(_reach_router__WEBPACK_IMPORTED_MODULE_0__.Link)(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n    border-radius: 8px;\\n    box-shadow: 0 0 8px rgba(0,0,0,.3);\\n    display: inline-block;\\n    margin: 1%;\\n    overflow: hidden;\\n    position: relative;\\n    width: 31.33%;\\n    &:after {\\n        content: '';\\n        display: block;\\n        padding-bottom: 100%;\\n    }\\n\"])));\nvar Grid = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n    padding-top: 32px;\\n\"])));\nvar Image = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.img(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"\\n    object-fit: cover;\\n    height: 100%;\\n    width: 100%;\\n    position: absolute;\\n\"])));\n\n//# sourceURL=webpack://appanimalesinstagram/./src/components/ListOfFavs/styles.js?");

/***/ }),

/***/ "./src/container/GetFavorites.js":
/*!***************************************!*\
  !*** ./src/container/GetFavorites.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RenderPropFavs\": () => (/* binding */ RenderPropFavs)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/react/hooks/useQuery.js\");\n/* harmony import */ var _components_ListOfFavs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ListOfFavs */ \"./src/components/ListOfFavs/index.js\");\nvar _templateObject;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n // Importando elementos para usar GraphQL\n\n // Importando componente ListOfFavs\n\n // Query para obtener las fotos a las que se le da like\n\nvar GET_FAVORITES = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n    query getFavs{\\n        favs{\\n            id\\n            categoryId\\n            src\\n            likes\\n            userId\\n        }\\n    }\\n\"])));\n\nvar GetFavorites = function GetFavorites() {\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(GET_FAVORITES, {\n    fetchPolicy: 'cache-and-network'\n  }),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  return {\n    data: data,\n    error: error,\n    loading: loading\n  };\n};\n\nvar RenderPropFavs = function RenderPropFavs() {\n  var _GetFavorites = GetFavorites(),\n      data = _GetFavorites.data,\n      error = _GetFavorites.error,\n      loading = _GetFavorites.loading;\n\n  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"Loading...\");\n  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"Error...\");\n  var favs = data.favs;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ListOfFavs__WEBPACK_IMPORTED_MODULE_1__.ListOfFavs, {\n    favs: favs\n  });\n};\n\n//# sourceURL=webpack://appanimalesinstagram/./src/container/GetFavorites.js?");

/***/ }),

/***/ "./src/pages/Favs.js":
/*!***************************!*\
  !*** ./src/pages/Favs.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _container_GetFavorites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../container/GetFavorites */ \"./src/container/GetFavorites.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout/index.js\");\n // Importando RenderPropsFavs\n\n // Importando compononente Layout\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n    title: \"Tus Favoritos\",\n    subtitle: \"Aqu\\xED puedes encontrar tus favoritos\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_container_GetFavorites__WEBPACK_IMPORTED_MODULE_1__.RenderPropFavs, null));\n});\n\n//# sourceURL=webpack://appanimalesinstagram/./src/pages/Favs.js?");

/***/ })

}]);
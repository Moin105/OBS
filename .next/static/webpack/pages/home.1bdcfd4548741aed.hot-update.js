"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ \"./pages/header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ \"./pages/footer.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), data = ref[0], setData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"http://obstechnologia.com/api/index\").then(function(response) {\n            return setData(response.data);\n        });\n        // fetch(\"http://obstechnologia.com/api/index\")\n        //   .then((res) => {\n        //     if (res.ok) {\n        //       // console.log(\"*****\", res.json());\n        //       return res.json();\n        //     }\n        //     throw res;\n        //   })\n        //   .then((data) => setData(data))\n        //   .catch((err) => console.log(\"catch geee catch error\", err));\n        console.log(data);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Moin Latif\\\\obs\\\\pages\\\\home.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().ph),\n                    children: \"SELECTED PROJECTS\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Moin Latif\\\\obs\\\\pages\\\\home.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().phl)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Moin Latif\\\\obs\\\\pages\\\\home.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().text),\n                    children: \"Take a look at some of our best work!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Moin Latif\\\\obs\\\\pages\\\\home.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Moin Latif\\\\obs\\\\pages\\\\home.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Moin Latif\\\\obs\\\\pages\\\\home.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Moin Latif\\\\obs\\\\pages\\\\home.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDa0I7QUFDSTtBQUNsQjtBQUNBO0FBQ0o7O0FBQzFCLFNBQVNPLElBQUksR0FBRzs7SUFDZCxJQUF3QkwsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQVB4QyxJQU9hLEdBQWFBLEdBQWMsR0FBM0IsRUFQYixPQU9zQixHQUFJQSxHQUFjLEdBQWxCO0lBQ3BCRCxnREFBUyxDQUFDLFdBQU07UUFDZEssZ0RBQ00sQ0FBQyxxQ0FBcUMsQ0FBQyxDQUMxQ0ssSUFBSSxDQUFDLFNBQUNDLFFBQVE7bUJBQUtILE9BQU8sQ0FBQ0csUUFBUSxDQUFDSixJQUFJLENBQUM7U0FBQSxDQUFDLENBQUM7UUFDOUMsK0NBQStDO1FBQy9DLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIsNkNBQTZDO1FBQzdDLDJCQUEyQjtRQUMzQixRQUFRO1FBQ1IsaUJBQWlCO1FBQ2pCLE9BQU87UUFDUCxtQ0FBbUM7UUFDbkMsaUVBQWlFO1FBRWpFSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sSUFBSSxDQUFDLENBQUM7S0FDbkIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNFLDhEQUFDTyxLQUFHO1FBQUNDLFNBQVMsRUFBRWIsMkVBQWdCO2tCQUM5Qiw0RUFBQ1ksS0FBRztZQUFDQyxTQUFTLEVBQUViLDJFQUFnQjs7OEJBQzlCLDhEQUFDQywrQ0FBTTs7Ozt3QkFBRzs4QkFDViw4REFBQ2MsSUFBRTtvQkFBQ0YsU0FBUyxFQUFFYixvRUFBUzs4QkFBRSxtQkFBaUI7Ozs7O3dCQUFLOzhCQUNoRCw4REFBQ1ksS0FBRztvQkFBQ0MsU0FBUyxFQUFFYixxRUFBVTs7Ozs7d0JBQVE7OEJBQ2xDLDhEQUFDa0IsR0FBQztvQkFBQ0wsU0FBUyxFQUFFYixzRUFBVzs4QkFBRSx1Q0FBcUM7Ozs7O3dCQUFJOzhCQVFwRSw4REFBQ0UsK0NBQU07Ozs7d0JBQUc7Ozs7OztnQkFFTjs7Ozs7WUFDRixDQUNOO0NBQ0g7R0F2Q1FFLElBQUk7QUFBSkEsS0FBQUEsSUFBSTtBQXlDYiwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hvbWUuanM/MTY3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KFwiaHR0cDovL29ic3RlY2hub2xvZ2lhLmNvbS9hcGkvaW5kZXhcIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzZXREYXRhKHJlc3BvbnNlLmRhdGEpKTtcclxuICAgIC8vIGZldGNoKFwiaHR0cDovL29ic3RlY2hub2xvZ2lhLmNvbS9hcGkvaW5kZXhcIilcclxuICAgIC8vICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgLy8gICAgIGlmIChyZXMub2spIHtcclxuICAgIC8vICAgICAgIC8vIGNvbnNvbGUubG9nKFwiKioqKipcIiwgcmVzLmpzb24oKSk7XHJcbiAgICAvLyAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgdGhyb3cgcmVzO1xyXG4gICAgLy8gICB9KVxyXG4gICAgLy8gICAudGhlbigoZGF0YSkgPT4gc2V0RGF0YShkYXRhKSlcclxuICAgIC8vICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKFwiY2F0Y2ggZ2VlZSBjYXRjaCBlcnJvclwiLCBlcnIpKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnBofT5TRUxFQ1RFRCBQUk9KRUNUUzwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waGx9PjwvZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlRha2UgYSBsb29rIGF0IHNvbWUgb2Ygb3VyIGJlc3Qgd29yayE8L3A+XHJcbiAgICAgICAgey8qIHtkYXRhPy5tYXAoKHJlcykgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlcy5pZCAlIDIgPT0gMCkge1xyXG4gICAgICAgICAgICByZXMuSGVhZGluZztcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcy5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KX0gKi99XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIHsvKiA8VGVzdGltb25pYWxzIC8+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiSGVhZGVyIiwiRm9vdGVyIiwiYXhpb3MiLCJIb21lIiwiZGF0YSIsInNldERhdGEiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaDIiLCJwaCIsInBobCIsInAiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/home.js\n");

/***/ })

});
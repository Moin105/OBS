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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ \"./pages/header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ \"./pages/footer.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), datas = ref[0], setData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // const getAnswer = async () => {\n        //   const { data } = await axios(\"http://obstechnologia.com/api/index\").then(\n        //     (data) => setData(data)\n        //   );\n        //   // console.log(data.data);\n        //   // setData(data.heading);\n        // };\n        // getAnswer();\n        // console.log(datas);\n        // console.log(datas);\n        // axios\n        //   .get(\"http://obstechnologia.com/api/index\")\n        //   .then((res) => {\n        //     if (res.ok) {\n        //       // console.log(\"*****\", res.json());\n        //       return res.json();\n        //     }\n        //     throw res;\n        //   })\n        //   .then((data) => setData(data));\n        // .catch((err) => console.log(\"catch geee catch error\", err));\n        axios__WEBPACK_IMPORTED_MODULE_4___default()(\"http://obstechnologia.com/api/index\").then(function(res) {\n            setData(function() {\n                return res.data.data;\n            });\n            console.log(res.data.data);\n            return console.log(datas);\n        }).catch(function(err) {\n            return console.log(\"catch geee catch error\", err);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Moin Latif\\\\obs\\\\pages\\\\home.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().ph),\n                    children: \"SELECTED PROJECTS\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Moin Latif\\\\obs\\\\pages\\\\home.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().phl)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Moin Latif\\\\obs\\\\pages\\\\home.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().text),\n                    children: \"Take a look at some of our best work!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Moin Latif\\\\obs\\\\pages\\\\home.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this),\n                datas === null || datas === void 0 ? void 0 : datas.map(function(res) {\n                    res.description;\n                }),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Moin Latif\\\\obs\\\\pages\\\\home.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Moin Latif\\\\obs\\\\pages\\\\home.js\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Moin Latif\\\\obs\\\\pages\\\\home.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDa0I7QUFDSTtBQUNsQjtBQUNBO0FBQ0o7O0FBQzFCLFNBQVNPLElBQUksR0FBRzs7SUFDZCxJQUF5QkwsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQVB6QyxLQU9jLEdBQWFBLEdBQWMsR0FBM0IsRUFQZCxPQU91QixHQUFJQSxHQUFjLEdBQWxCO0lBQ3JCRCxnREFBUyxDQUFDLFdBQU07UUFDZCxrQ0FBa0M7UUFDbEMsOEVBQThFO1FBQzlFLDhCQUE4QjtRQUM5QixPQUFPO1FBQ1AsK0JBQStCO1FBQy9CLDhCQUE4QjtRQUM5QixLQUFLO1FBQ0wsZUFBZTtRQUNmLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsUUFBUTtRQUNSLGdEQUFnRDtRQUNoRCxxQkFBcUI7UUFDckIsb0JBQW9CO1FBQ3BCLDZDQUE2QztRQUM3QywyQkFBMkI7UUFDM0IsUUFBUTtRQUNSLGlCQUFpQjtRQUNqQixPQUFPO1FBQ1Asb0NBQW9DO1FBQ3BDLCtEQUErRDtRQUMvREssNENBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUN6Q0ksSUFBSSxDQUFDLFNBQUNDLEdBQUcsRUFBSztZQUNiRixPQUFPLENBQUMsV0FBTTtnQkFDWixPQUFPRSxHQUFHLENBQUNDLElBQUksQ0FBQ0EsSUFBSSxDQUFDO2FBQ3RCLENBQUMsQ0FBQztZQUVIQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDQyxJQUFJLENBQUNBLElBQUksQ0FBQyxDQUFDO1lBQzNCLE9BQU9DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixLQUFLLENBQUMsQ0FBQztTQUMzQixDQUFDLENBQ0RPLEtBQUssQ0FBQyxTQUFDQyxHQUFHO21CQUFLSCxPQUFPLENBQUNDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRUUsR0FBRyxDQUFDO1NBQUEsQ0FBQyxDQUFDO0tBQy9ELEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVmLDJFQUFnQjtrQkFDOUIsNEVBQUNjLEtBQUc7WUFBQ0MsU0FBUyxFQUFFZiwyRUFBZ0I7OzhCQUM5Qiw4REFBQ0MsK0NBQU07Ozs7d0JBQUc7OEJBQ1YsOERBQUNnQixJQUFFO29CQUFDRixTQUFTLEVBQUVmLG9FQUFTOzhCQUFFLG1CQUFpQjs7Ozs7d0JBQUs7OEJBQ2hELDhEQUFDYyxLQUFHO29CQUFDQyxTQUFTLEVBQUVmLHFFQUFVOzs7Ozt3QkFBUTs4QkFDbEMsOERBQUNvQixHQUFDO29CQUFDTCxTQUFTLEVBQUVmLHNFQUFXOzhCQUFFLHVDQUFxQzs7Ozs7d0JBQUk7Z0JBQ25FSyxLQUFLLGFBQUxBLEtBQUssV0FBSyxHQUFWQSxLQUFBQSxDQUFVLEdBQVZBLEtBQUssQ0FBRWlCLEdBQUcsQ0FBQyxTQUFDZCxHQUFHLEVBQUs7b0JBQ25CQSxHQUFHLENBQUNlLFdBQVcsQ0FBQztpQkFDakIsQ0FBQzs4QkFDRiw4REFBQ3JCLCtDQUFNOzs7O3dCQUFHOzs7Ozs7Z0JBRU47Ozs7O1lBQ0YsQ0FDTjtDQUNIO0dBbkRRRSxJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUFxRGIsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ob21lLmpzPzE2NzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbZGF0YXMsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGNvbnN0IGdldEFuc3dlciA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcyhcImh0dHA6Ly9vYnN0ZWNobm9sb2dpYS5jb20vYXBpL2luZGV4XCIpLnRoZW4oXHJcbiAgICAvLyAgICAgKGRhdGEpID0+IHNldERhdGEoZGF0YSlcclxuICAgIC8vICAgKTtcclxuICAgIC8vICAgLy8gY29uc29sZS5sb2coZGF0YS5kYXRhKTtcclxuICAgIC8vICAgLy8gc2V0RGF0YShkYXRhLmhlYWRpbmcpO1xyXG4gICAgLy8gfTtcclxuICAgIC8vIGdldEFuc3dlcigpO1xyXG4gICAgLy8gY29uc29sZS5sb2coZGF0YXMpO1xyXG4gICAgLy8gY29uc29sZS5sb2coZGF0YXMpO1xyXG4gICAgLy8gYXhpb3NcclxuICAgIC8vICAgLmdldChcImh0dHA6Ly9vYnN0ZWNobm9sb2dpYS5jb20vYXBpL2luZGV4XCIpXHJcbiAgICAvLyAgIC50aGVuKChyZXMpID0+IHtcclxuICAgIC8vICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAvLyAgICAgICAvLyBjb25zb2xlLmxvZyhcIioqKioqXCIsIHJlcy5qc29uKCkpO1xyXG4gICAgLy8gICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHRocm93IHJlcztcclxuICAgIC8vICAgfSlcclxuICAgIC8vICAgLnRoZW4oKGRhdGEpID0+IHNldERhdGEoZGF0YSkpO1xyXG4gICAgLy8gLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKFwiY2F0Y2ggZ2VlZSBjYXRjaCBlcnJvclwiLCBlcnIpKTtcclxuICAgIGF4aW9zKFwiaHR0cDovL29ic3RlY2hub2xvZ2lhLmNvbS9hcGkvaW5kZXhcIilcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHNldERhdGEoKCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHJlcy5kYXRhLmRhdGE7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLmRhdGEpO1xyXG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhkYXRhcyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhcImNhdGNoIGdlZWUgY2F0Y2ggZXJyb3JcIiwgZXJyKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5waH0+U0VMRUNURUQgUFJPSkVDVFM8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhsfT48L2Rpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5UYWtlIGEgbG9vayBhdCBzb21lIG9mIG91ciBiZXN0IHdvcmshPC9wPlxyXG4gICAgICAgIHtkYXRhcz8ubWFwKChyZXMpID0+IHtcclxuICAgICAgICAgIHJlcy5kZXNjcmlwdGlvbjtcclxuICAgICAgICB9KX1cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgey8qIDxUZXN0aW1vbmlhbHMgLz4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJIZWFkZXIiLCJGb290ZXIiLCJheGlvcyIsIkhvbWUiLCJkYXRhcyIsInNldERhdGEiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImgyIiwicGgiLCJwaGwiLCJwIiwidGV4dCIsIm1hcCIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/home.js\n");

/***/ })

});
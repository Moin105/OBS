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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Moin_Latif_obs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Moin_Latif_obs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Moin_Latif_obs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ \"./pages/header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ \"./pages/footer.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), datas = ref[0], setData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var getAnswer = function() {\n            var _ref = _asyncToGenerator(C_Users_Moin_Latif_obs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var data;\n                return C_Users_Moin_Latif_obs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return axios__WEBPACK_IMPORTED_MODULE_5___default()(\"http://obstechnologia.com/api/index\");\n                        case 2:\n                            data = _ctx.sent.data;\n                            console.log(data.data);\n                            setData(data.heading);\n                        case 5:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getAnswer() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getAnswer();\n        console.log(datas);\n        console.log(datas);\n    // axios\n    //   .get(\"http://obstechnologia.com/api/index\")\n    //   .then((res) => {\n    //     if (res.ok) {\n    //       // console.log(\"*****\", res.json());\n    //       return res.json();\n    //     }\n    //     throw res;\n    //   })\n    //   .then((data) => setData(data));\n    // .catch((err) => console.log(\"catch geee catch error\", err));\n    // fetch(\"http://obstechnologia.com/api/index\")\n    //   .then((res) => {\n    //     if (res.ok) {\n    //       // console.log(\"*****\", res.json());\n    //       return res.json();\n    //     }\n    //     throw res;\n    //   })\n    //   .then((data) => setData(data))\n    //   .catch((err) => console.log(\"catch geee catch error\", err));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Moin Latif\\\\obs\\\\pages\\\\home.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().ph),\n                    children: \"SELECTED PROJECTS\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Moin Latif\\\\obs\\\\pages\\\\home.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().phl)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Moin Latif\\\\obs\\\\pages\\\\home.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().text),\n                    children: \"Take a look at some of our best work!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Moin Latif\\\\obs\\\\pages\\\\home.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                datas === null || datas === void 0 ? void 0 : datas.map(function(res) {\n                    res.description;\n                }),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Moin Latif\\\\obs\\\\pages\\\\home.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Moin Latif\\\\obs\\\\pages\\\\home.js\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Moin Latif\\\\obs\\\\pages\\\\home.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNrQjtBQUNJO0FBQ2xCO0FBQ0E7QUFDSjs7QUFDMUIsU0FBU08sSUFBSSxHQUFHOztJQUNkLElBQXlCTCxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBUHpDLEtBT2MsR0FBYUEsR0FBYyxHQUEzQixFQVBkLE9BT3VCLEdBQUlBLEdBQWMsR0FBbEI7SUFFckJELGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQU1TLFNBQVM7dUJBQUcsdUtBQVk7b0JBQ3BCQyxJQUFJOzs7OzttQ0FBV0wsNENBQUssQ0FBQyxxQ0FBcUMsQ0FBQzs7NEJBQTdELElBQU0sYUFBSkssSUFBSSxDQUF1RDs0QkFDbkVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUNBLElBQUksQ0FBQyxDQUFDOzRCQUN2QkYsT0FBTyxDQUFDRSxJQUFJLENBQUNHLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7YUFDdkI7NEJBSktKLFNBQVM7OztXQUlkO1FBQ0RBLFNBQVMsRUFBRSxDQUFDO1FBQ1pFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxLQUFLLENBQUMsQ0FBQztRQUNuQkksT0FBTyxDQUFDQyxHQUFHLENBQUNMLEtBQUssQ0FBQyxDQUFDO0lBQ25CLFFBQVE7SUFDUixnREFBZ0Q7SUFDaEQscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQiw2Q0FBNkM7SUFDN0MsMkJBQTJCO0lBQzNCLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsT0FBTztJQUNQLG9DQUFvQztJQUNwQywrREFBK0Q7SUFDL0QsK0NBQStDO0lBQy9DLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsNkNBQTZDO0lBQzdDLDJCQUEyQjtJQUMzQixRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLE9BQU87SUFDUCxtQ0FBbUM7SUFDbkMsaUVBQWlFO0tBQ2xFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRSw4REFBQ08sS0FBRztRQUFDQyxTQUFTLEVBQUViLDJFQUFnQjtrQkFDOUIsNEVBQUNZLEtBQUc7WUFBQ0MsU0FBUyxFQUFFYiwyRUFBZ0I7OzhCQUM5Qiw4REFBQ0MsK0NBQU07Ozs7d0JBQUc7OEJBQ1YsOERBQUNjLElBQUU7b0JBQUNGLFNBQVMsRUFBRWIsb0VBQVM7OEJBQUUsbUJBQWlCOzs7Ozt3QkFBSzs4QkFDaEQsOERBQUNZLEtBQUc7b0JBQUNDLFNBQVMsRUFBRWIscUVBQVU7Ozs7O3dCQUFROzhCQUNsQyw4REFBQ2tCLEdBQUM7b0JBQUNMLFNBQVMsRUFBRWIsc0VBQVc7OEJBQUUsdUNBQXFDOzs7Ozt3QkFBSTtnQkFDbkVLLEtBQUssYUFBTEEsS0FBSyxXQUFLLEdBQVZBLEtBQUFBLENBQVUsR0FBVkEsS0FBSyxDQUFFZSxHQUFHLENBQUMsU0FBQ0MsR0FBRyxFQUFLO29CQUNuQkEsR0FBRyxDQUFDQyxXQUFXLENBQUM7aUJBQ2pCLENBQUM7OEJBQ0YsOERBQUNwQiwrQ0FBTTs7Ozt3QkFBRzs7Ozs7O2dCQUVOOzs7OztZQUNGLENBQ047Q0FDSDtHQWxEUUUsSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBb0RiLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS5qcz8xNjc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2hlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW2RhdGFzLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0QW5zd2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zKFwiaHR0cDovL29ic3RlY2hub2xvZ2lhLmNvbS9hcGkvaW5kZXhcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSk7XHJcbiAgICAgIHNldERhdGEoZGF0YS5oZWFkaW5nKTtcclxuICAgIH07XHJcbiAgICBnZXRBbnN3ZXIoKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGFzKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGFzKTtcclxuICAgIC8vIGF4aW9zXHJcbiAgICAvLyAgIC5nZXQoXCJodHRwOi8vb2JzdGVjaG5vbG9naWEuY29tL2FwaS9pbmRleFwiKVxyXG4gICAgLy8gICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgLy8gICAgICAgLy8gY29uc29sZS5sb2coXCIqKioqKlwiLCByZXMuanNvbigpKTtcclxuICAgIC8vICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICB0aHJvdyByZXM7XHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyAgIC50aGVuKChkYXRhKSA9PiBzZXREYXRhKGRhdGEpKTtcclxuICAgIC8vIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhcImNhdGNoIGdlZWUgY2F0Y2ggZXJyb3JcIiwgZXJyKSk7XHJcbiAgICAvLyBmZXRjaChcImh0dHA6Ly9vYnN0ZWNobm9sb2dpYS5jb20vYXBpL2luZGV4XCIpXHJcbiAgICAvLyAgIC50aGVuKChyZXMpID0+IHtcclxuICAgIC8vICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAvLyAgICAgICAvLyBjb25zb2xlLmxvZyhcIioqKioqXCIsIHJlcy5qc29uKCkpO1xyXG4gICAgLy8gICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHRocm93IHJlcztcclxuICAgIC8vICAgfSlcclxuICAgIC8vICAgLnRoZW4oKGRhdGEpID0+IHNldERhdGEoZGF0YSkpXHJcbiAgICAvLyAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhcImNhdGNoIGdlZWUgY2F0Y2ggZXJyb3JcIiwgZXJyKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5waH0+U0VMRUNURUQgUFJPSkVDVFM8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhsfT48L2Rpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5UYWtlIGEgbG9vayBhdCBzb21lIG9mIG91ciBiZXN0IHdvcmshPC9wPlxyXG4gICAgICAgIHtkYXRhcz8ubWFwKChyZXMpID0+IHtcclxuICAgICAgICAgIHJlcy5kZXNjcmlwdGlvbjtcclxuICAgICAgICB9KX1cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgey8qIDxUZXN0aW1vbmlhbHMgLz4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJIZWFkZXIiLCJGb290ZXIiLCJheGlvcyIsIkhvbWUiLCJkYXRhcyIsInNldERhdGEiLCJnZXRBbnN3ZXIiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImhlYWRpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoMiIsInBoIiwicGhsIiwicCIsInRleHQiLCJtYXAiLCJyZXMiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/home.js\n");

/***/ })

});
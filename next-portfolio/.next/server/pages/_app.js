/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (true) return;\n        if (window.matchMedia && window.matchMedia(\"(prefers-reduced-motion: reduce)\").matches) return;\n        const observer = new IntersectionObserver((entries, obs)=>{\n            entries.forEach((entry)=>{\n                if (entry.isIntersecting) {\n                    entry.target.classList.add(\"active\");\n                    obs.unobserve(entry.target);\n                }\n            });\n        }, {\n            threshold: 0.12\n        });\n        document.querySelectorAll(\".reveal\").forEach((el)=>observer.observe(el));\n        // Smooth scrolling for internal anchor links (respect sticky header)\n        function onClick(e) {\n            const a = e.target.closest && e.target.closest('a[href^=\"#\"]');\n            if (!a) return;\n            const href = a.getAttribute(\"href\");\n            if (!href || href === \"#\") return;\n            const id = href.slice(1);\n            const target = document.getElementById(id);\n            if (!target) return;\n            e.preventDefault();\n            // header height (sticky)\n            const header = document.querySelector(\"header\");\n            const headerHeight = header ? header.getBoundingClientRect().height : 0;\n            const top = window.scrollY + target.getBoundingClientRect().top - headerHeight - 12;\n            window.scrollTo({\n                top,\n                behavior: \"smooth\"\n            });\n        }\n        document.addEventListener(\"click\", onClick);\n        return ()=>{\n            observer.disconnect();\n            document.removeEventListener(\"click\", onClick);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"viewport\",\n                    content: \"width=device-width, initial-scale=1\"\n                }, void 0, false, {\n                    fileName: \"/Users/anirban/Desktop/Code/anirbanbhk88.github.io/next-portfolio/pages/_app.js\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/anirban/Desktop/Code/anirbanbhk88.github.io/next-portfolio/pages/_app.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/anirban/Desktop/Code/anirbanbhk88.github.io/next-portfolio/pages/_app.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDRjtBQUNLO0FBRWxCLFNBQVNFLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbERILGdEQUFTQSxDQUFDO1FBQ04sSUFBSSxJQUFrQixFQUFhO1FBQ25DLElBQUlJLE9BQU9DLFVBQVUsSUFBSUQsT0FBT0MsVUFBVSxDQUFDLG9DQUFvQ0MsT0FBTyxFQUFFO1FBRXhGLE1BQU1DLFdBQVcsSUFBSUMscUJBQXFCLENBQUNDLFNBQVNDO1lBQ2hERCxRQUFRRSxPQUFPLENBQUNDLENBQUFBO2dCQUNaLElBQUlBLE1BQU1DLGNBQWMsRUFBRTtvQkFDdEJELE1BQU1FLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUM7b0JBQzNCTixJQUFJTyxTQUFTLENBQUNMLE1BQU1FLE1BQU07Z0JBQzlCO1lBQ0o7UUFDSixHQUFHO1lBQUVJLFdBQVc7UUFBSztRQUVyQkMsU0FBU0MsZ0JBQWdCLENBQUMsV0FBV1QsT0FBTyxDQUFDVSxDQUFBQSxLQUFNZCxTQUFTZSxPQUFPLENBQUNEO1FBRXBFLHFFQUFxRTtRQUNyRSxTQUFTRSxRQUFRQyxDQUFDO1lBQ2QsTUFBTUMsSUFBSUQsRUFBRVYsTUFBTSxDQUFDWSxPQUFPLElBQUlGLEVBQUVWLE1BQU0sQ0FBQ1ksT0FBTyxDQUFDO1lBQy9DLElBQUksQ0FBQ0QsR0FBRztZQUNSLE1BQU1FLE9BQU9GLEVBQUVHLFlBQVksQ0FBQztZQUM1QixJQUFJLENBQUNELFFBQVFBLFNBQVMsS0FBSztZQUMzQixNQUFNRSxLQUFLRixLQUFLRyxLQUFLLENBQUM7WUFDdEIsTUFBTWhCLFNBQVNLLFNBQVNZLGNBQWMsQ0FBQ0Y7WUFDdkMsSUFBSSxDQUFDZixRQUFRO1lBQ2JVLEVBQUVRLGNBQWM7WUFDaEIseUJBQXlCO1lBQ3pCLE1BQU1DLFNBQVNkLFNBQVNlLGFBQWEsQ0FBQztZQUN0QyxNQUFNQyxlQUFlRixTQUFTQSxPQUFPRyxxQkFBcUIsR0FBR0MsTUFBTSxHQUFHO1lBQ3RFLE1BQU1DLE1BQU1sQyxPQUFPbUMsT0FBTyxHQUFHekIsT0FBT3NCLHFCQUFxQixHQUFHRSxHQUFHLEdBQUdILGVBQWU7WUFDakYvQixPQUFPb0MsUUFBUSxDQUFDO2dCQUFFRjtnQkFBS0csVUFBVTtZQUFTO1FBQzlDO1FBRUF0QixTQUFTdUIsZ0JBQWdCLENBQUMsU0FBU25CO1FBRW5DLE9BQU87WUFDSGhCLFNBQVNvQyxVQUFVO1lBQ25CeEIsU0FBU3lCLG1CQUFtQixDQUFDLFNBQVNyQjtRQUMxQztJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNJOzswQkFDSSw4REFBQ3hCLGtEQUFJQTswQkFDRCw0RUFBQzhDO29CQUFLQyxNQUFLO29CQUFXQyxTQUFROzs7Ozs7Ozs7OzswQkFFbEMsOERBQUM3QztnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7OztBQUdwQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtcG9ydGZvbGlvLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSknKS5tYXRjaGVzKSByZXR1cm5cblxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzKSA9PiB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgb2JzLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgeyB0aHJlc2hvbGQ6IDAuMTIgfSlcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmV2ZWFsJykuZm9yRWFjaChlbCA9PiBvYnNlcnZlci5vYnNlcnZlKGVsKSlcblxuICAgICAgICAvLyBTbW9vdGggc2Nyb2xsaW5nIGZvciBpbnRlcm5hbCBhbmNob3IgbGlua3MgKHJlc3BlY3Qgc3RpY2t5IGhlYWRlcilcbiAgICAgICAgZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgICAgICBjb25zdCBhID0gZS50YXJnZXQuY2xvc2VzdCAmJiBlLnRhcmdldC5jbG9zZXN0KCdhW2hyZWZePVwiI1wiXScpXG4gICAgICAgICAgICBpZiAoIWEpIHJldHVyblxuICAgICAgICAgICAgY29uc3QgaHJlZiA9IGEuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgIGlmICghaHJlZiB8fCBocmVmID09PSAnIycpIHJldHVyblxuICAgICAgICAgICAgY29uc3QgaWQgPSBocmVmLnNsaWNlKDEpXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcbiAgICAgICAgICAgIGlmICghdGFyZ2V0KSByZXR1cm5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgLy8gaGVhZGVyIGhlaWdodCAoc3RpY2t5KVxuICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJylcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IGhlYWRlciA/IGhlYWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgOiAwXG4gICAgICAgICAgICBjb25zdCB0b3AgPSB3aW5kb3cuc2Nyb2xsWSArIHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSBoZWFkZXJIZWlnaHQgLSAxMlxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHsgdG9wLCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGljaylcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2spXG4gICAgICAgIH1cbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8Lz5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZUVmZmVjdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsIm9icyIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwidW5vYnNlcnZlIiwidGhyZXNob2xkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWwiLCJvYnNlcnZlIiwib25DbGljayIsImUiLCJhIiwiY2xvc2VzdCIsImhyZWYiLCJnZXRBdHRyaWJ1dGUiLCJpZCIsInNsaWNlIiwiZ2V0RWxlbWVudEJ5SWQiLCJwcmV2ZW50RGVmYXVsdCIsImhlYWRlciIsInF1ZXJ5U2VsZWN0b3IiLCJoZWFkZXJIZWlnaHQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJ0b3AiLCJzY3JvbGxZIiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXNjb25uZWN0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1ldGEiLCJuYW1lIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
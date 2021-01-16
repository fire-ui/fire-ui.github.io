webpackHotUpdate_N_E("pages/docs/[slug]",{

/***/ "./src/pages/docs/[slug].tsx":
/*!***********************************!*\
  !*** ./src/pages/docs/[slug].tsx ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/Layout */ "./src/components/Layout.tsx");
/* harmony import */ var src_utils_FireUIJS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/utils/FireUIJS */ "./src/utils/FireUIJS.js");


var _jsxFileName = "E:\\Fire-UI - Organisation\\fire-ui.github.io\\src\\pages\\docs\\[slug].tsx",
    _this = undefined,
    _s = $RefreshSig$();





var lastRender = "";

var Docs = function Docs(_ref) {
  _s();

  var content = _ref.content,
      data = _ref.data,
      slugs = _ref.slugs,
      allData = _ref.allData;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      path = _useState[0],
      setPath = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    lastRender = window.location.href;
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (lastRender !== window.location.href) {
      Object(src_utils_FireUIJS__WEBPACK_IMPORTED_MODULE_4__["doStuff"])();
      lastRender = window.location.href;
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setPath(window.location.pathname);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    slugs: slugs,
    allData: allData,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "".concat(data.title, " ~ Fire UI")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "title",
        content: data.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: data.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "twitter:title",
        content: data.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: data.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:description",
        content: data.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "twitter:description",
        content: data.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, _this), !data.keywords || data.keywords.length === 0 ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "keywords",
        content: data.keywords.join(',')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 72
      }, _this), path === "/docs/slideshow" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        type: "text/javascript",
        dangerouslySetInnerHTML: {
          __html: "var defaultIndex = 1;\n                    activeSlide(defaultIndex);\n                \n                    function btnSlide(n) { activeSlide(defaultIndex += n); }\n                    function currentSlide(n) { activeSlide(defaultIndex = n); }\n                    function activeSlide(n) {\n                        var i;\n                        var slides = document.getElementsByClassName(\"slideshow\");\n                        var info = document.getElementsByClassName(\"slideshow-dot\");\n                        if (n > slides.length) {defaultIndex = 1}\n                        if (n < 1) {defaultIndex = slides.length}\n                        for (i = 0; i < slides.length; i++) {\n                            slides[i].classList.add(\"slideshow-none\");\n                        }\n                        for (i = 0; i < info.length; i++) {\n                            info[i].className = info[i].className.replace(\" slideshow-active\", \"\");\n                        }\n                        if(slides[defaultIndex - 1]) slides[defaultIndex-1].classList.toggle(\"slideshow-none\");\n                        if(info[defaultIndex - 1]) info[defaultIndex-1].className += \" slideshow-active\";\n                }\n                var marquee = document.querySelectorAll('marquee');\n                var i, x;\n                for(i=0; i<marquee.length; i++){\n                    marquee[i].setAttribute('scrollamount', '10');\n                }\n                for(x=0; x<marquee.length; x++){\n                    if(marquee[x].hasAttribute('data-speed')){\n                        var speed = document.getElementsByTagName('marquee')[x].getAttribute('data-speed');\n                        document.getElementsByTagName('marquee')[x].setAttribute('scrollamount', speed);\n                    }\n                }"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, _this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pb-2",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        dangerouslySetInnerHTML: {
          __html: content
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, _this);
};

_s(Docs, "pu2mTNKrHSebDutBRHz+dwP8mS0=");

_c = Docs;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Docs);

var _c;

$RefreshReg$(_c, "Docs");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2RvY3MvW3NsdWddLnRzeCJdLCJuYW1lcyI6WyJsYXN0UmVuZGVyIiwiRG9jcyIsImNvbnRlbnQiLCJkYXRhIiwic2x1Z3MiLCJhbGxEYXRhIiwidXNlU3RhdGUiLCJwYXRoIiwic2V0UGF0aCIsInVzZUVmZmVjdCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImRvU3R1ZmYiLCJwYXRobmFtZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsImxlbmd0aCIsImpvaW4iLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFNQTtBQUVBO0FBRUE7QUFRQSxJQUFJQSxVQUFrQixHQUFHLEVBQXpCOztBQUNBLElBQU1DLElBQXFCLEdBQUcsU0FBeEJBLElBQXdCLE9BQXVDO0FBQUE7O0FBQUEsTUFBcENDLE9BQW9DLFFBQXBDQSxPQUFvQztBQUFBLE1BQTNCQyxJQUEyQixRQUEzQkEsSUFBMkI7QUFBQSxNQUFyQkMsS0FBcUIsUUFBckJBLEtBQXFCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUFBLGtCQUN6Q0Msc0RBQVEsQ0FBQyxFQUFELENBRGlDO0FBQUEsTUFDMURDLElBRDBEO0FBQUEsTUFDcERDLE9BRG9EOztBQUdqRUMseURBQVMsQ0FBQyxZQUFNO0FBQ1pULGNBQVUsR0FBR1UsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUE3QjtBQUNILEdBRlEsRUFFTixFQUZNLENBQVQ7QUFHQUgseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBR1QsVUFBVSxLQUFLVSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWxDLEVBQXVDO0FBQ25DQyx3RUFBTztBQUNQYixnQkFBVSxHQUFHVSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQTdCO0FBQ0g7QUFDSixHQUxRLENBQVQ7QUFNQUgseURBQVMsQ0FBQyxZQUFNO0FBQ1pELFdBQU8sQ0FBQ0UsTUFBTSxDQUFDQyxRQUFQLENBQWdCRyxRQUFqQixDQUFQO0FBQ0gsR0FGUSxDQUFUO0FBR0Esc0JBQ0kscUVBQUMsNkRBQUQ7QUFBUSxTQUFLLEVBQUVWLEtBQWY7QUFBc0IsV0FBTyxFQUFFQyxPQUEvQjtBQUFBLDRCQUNJLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0k7QUFBQSw0QkFBV0YsSUFBSSxDQUFDWSxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQU0sWUFBSSxFQUFDLE9BQVg7QUFBbUIsZUFBTyxFQUFJWixJQUFJLENBQUNZO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUdJO0FBQU0sZ0JBQVEsRUFBQyxVQUFmO0FBQTBCLGVBQU8sRUFBSVosSUFBSSxDQUFDWTtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEosZUFJSTtBQUFNLGdCQUFRLEVBQUMsZUFBZjtBQUErQixlQUFPLEVBQUlaLElBQUksQ0FBQ1k7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKLGVBS0k7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUVaLElBQUksQ0FBQ2E7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKLGVBTUk7QUFBTSxnQkFBUSxFQUFDLGdCQUFmO0FBQWdDLGVBQU8sRUFBSWIsSUFBSSxDQUFDYTtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkosZUFPSTtBQUFNLGdCQUFRLEVBQUMscUJBQWY7QUFBcUMsZUFBTyxFQUFJYixJQUFJLENBQUNhO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQSixFQVFLLENBQUNiLElBQUksQ0FBQ2MsUUFBTixJQUFrQmQsSUFBSSxDQUFDYyxRQUFMLENBQWNDLE1BQWQsS0FBeUIsQ0FBM0MsR0FBK0MsSUFBL0MsZ0JBQXNEO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFFZixJQUFJLENBQUNjLFFBQUwsQ0FBY0UsSUFBZCxDQUFtQixHQUFuQjtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUjNELEVBU0taLElBQUksS0FBSyxpQkFBVCxnQkFDRDtBQUFRLFlBQUksRUFBRyxpQkFBZjtBQUFpQywrQkFBdUIsRUFBSztBQUFDYSxnQkFBTTtBQUFQO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQyxHQW1DQSxJQTVDTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQStDSTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsNkJBQ0k7QUFBSywrQkFBdUIsRUFBRTtBQUFFQSxnQkFBTSxFQUFFbEI7QUFBVjtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQS9DSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXFESCxDQXBFRDs7R0FBTUQsSTs7S0FBQUEsSTs7QUE0R1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvY3MvW3NsdWddLmQxYzY3YTdmNWNhMGVmYWNkZDk2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgR2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBtYXR0ZXIgZnJvbSAnZ3JheS1tYXR0ZXInO1xyXG5pbXBvcnQgbWFya2VkIGZyb20gJ21hcmtlZCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IE1ldGFkYXRhIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ3NyYy9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7IHJlYWRGaWxlc01ldGFkYXRhIH0gZnJvbSAnc3JjL3V0aWxzL3JlYWRGaWxlcyc7XHJcbmltcG9ydCB7IGRvU3R1ZmYgfSBmcm9tIFwic3JjL3V0aWxzL0ZpcmVVSUpTXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgYWxsRGF0YTogTWV0YWRhdGFbXTtcclxuICAgIHNsdWdzOiBzdHJpbmdbXTtcclxuICAgIGNvbnRlbnQ6IHN0cmluZztcclxuICAgIGRhdGE6IE1ldGFkYXRhO1xyXG59XHJcbmxldCBsYXN0UmVuZGVyOiBTdHJpbmcgPSBcIlwiO1xyXG5jb25zdCBEb2NzOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBjb250ZW50LCBkYXRhLCBzbHVncywgYWxsRGF0YSB9KSA9PiB7XHJcbiAgICBjb25zdCBbcGF0aCwgc2V0UGF0aF0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxhc3RSZW5kZXIgPSB3aW5kb3cubG9jYXRpb24uaHJlZlxyXG4gICAgfSwgW10pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGxhc3RSZW5kZXIgIT09IHdpbmRvdy5sb2NhdGlvbi5ocmVmKXtcclxuICAgICAgICAgICAgZG9TdHVmZigpXHJcbiAgICAgICAgICAgIGxhc3RSZW5kZXIgPSB3aW5kb3cubG9jYXRpb24uaHJlZlxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFBhdGgod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKVxyXG4gICAgfSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dCBzbHVncz17c2x1Z3N9IGFsbERhdGE9e2FsbERhdGF9PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57YCR7ZGF0YS50aXRsZX0gfiBGaXJlIFVJYH08L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInRpdGxlXCIgY29udGVudCA9IHtkYXRhLnRpdGxlfSAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQgPSB7ZGF0YS50aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQgPSB7ZGF0YS50aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2RhdGEuZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudCA9IHtkYXRhLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudCA9IHtkYXRhLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgeyFkYXRhLmtleXdvcmRzIHx8IGRhdGEua2V5d29yZHMubGVuZ3RoID09PSAwID8gbnVsbCA6IDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9e2RhdGEua2V5d29yZHMuam9pbignLCcpfSAvPn1cclxuICAgICAgICAgICAgICAgIHtwYXRoID09PSBcIi9kb2NzL3NsaWRlc2hvd1wiP1xyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCB0eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTCA9IHsoe19faHRtbDogXHJcbiAgICAgICAgICAgICAgICBgdmFyIGRlZmF1bHRJbmRleCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlU2xpZGUoZGVmYXVsdEluZGV4KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGJ0blNsaWRlKG4pIHsgYWN0aXZlU2xpZGUoZGVmYXVsdEluZGV4ICs9IG4pOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gY3VycmVudFNsaWRlKG4pIHsgYWN0aXZlU2xpZGUoZGVmYXVsdEluZGV4ID0gbik7IH1cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBhY3RpdmVTbGlkZShuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNsaWRlc2hvd1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2xpZGVzaG93LWRvdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4gPiBzbGlkZXMubGVuZ3RoKSB7ZGVmYXVsdEluZGV4ID0gMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4gPCAxKSB7ZGVmYXVsdEluZGV4ID0gc2xpZGVzLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzW2ldLmNsYXNzTGlzdC5hZGQoXCJzbGlkZXNob3ctbm9uZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaW5mby5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mb1tpXS5jbGFzc05hbWUgPSBpbmZvW2ldLmNsYXNzTmFtZS5yZXBsYWNlKFwiIHNsaWRlc2hvdy1hY3RpdmVcIiwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2xpZGVzW2RlZmF1bHRJbmRleCAtIDFdKSBzbGlkZXNbZGVmYXVsdEluZGV4LTFdLmNsYXNzTGlzdC50b2dnbGUoXCJzbGlkZXNob3ctbm9uZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaW5mb1tkZWZhdWx0SW5kZXggLSAxXSkgaW5mb1tkZWZhdWx0SW5kZXgtMV0uY2xhc3NOYW1lICs9IFwiIHNsaWRlc2hvdy1hY3RpdmVcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBtYXJxdWVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbWFycXVlZScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGksIHg7XHJcbiAgICAgICAgICAgICAgICBmb3IoaT0wOyBpPG1hcnF1ZWUubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcnF1ZWVbaV0uc2V0QXR0cmlidXRlKCdzY3JvbGxhbW91bnQnLCAnMTAnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvcih4PTA7IHg8bWFycXVlZS5sZW5ndGg7IHgrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobWFycXVlZVt4XS5oYXNBdHRyaWJ1dGUoJ2RhdGEtc3BlZWQnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcGVlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYXJxdWVlJylbeF0uZ2V0QXR0cmlidXRlKCdkYXRhLXNwZWVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYXJxdWVlJylbeF0uc2V0QXR0cmlidXRlKCdzY3JvbGxhbW91bnQnLCBzcGVlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfWBcclxuICAgICAgICAgICAgICAgIH0pfT5cclxuICAgICAgICAgICAgICAgIDwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgOm51bGx9XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29udGVudCB9fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtczogeyBzbHVnIH0gfTogYW55KSA9PiB7XHJcbiAgICBjb25zdCByYXdDb250ZW50cyA9IGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4oXCJzcmNcIiwgXCJwb3N0c1wiLCBzbHVnICsgXCIubWRcIikpLnRvU3RyaW5nKCk7XHJcbiAgICBjb25zdCB7IGRhdGEsIGNvbnRlbnQgfSA9IG1hdHRlcihyYXdDb250ZW50cyk7XHJcbiAgICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKHBhdGguam9pbihcInNyY1wiLCBcInBvc3RzXCIpKTtcclxuICAgIGNvbnN0IGFsbERhdGEgPSByZWFkRmlsZXNNZXRhZGF0YShwYXRoLmpvaW4oXCJzcmNcIiwgXCJwb3N0c1wiKSk7XHJcbiAgICBjb25zdCBzbHVncyA9IGZpbGVzLm1hcChmaWxlID0+IGZpbGUucmVwbGFjZSgnLm1kJywgJycpKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImFsbERhdGE6IFwiLCBhbGxEYXRhKVxyXG4gICAgLy8gY29uc29sZS5sb2coXCJzbHVnczogXCIsIHNsdWdzKVxyXG5cclxuICAgIGNvbnN0IHBhcnNlZENvbnRlbnQgPSBtYXJrZWQoY29udGVudCk7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgYWxsRGF0YSxcclxuICAgICAgICAgICAgc2x1Z3MsXHJcbiAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHBhcnNlZENvbnRlbnRcclxuICAgICAgICB9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKHBhdGguam9pbignc3JjJywgJ3Bvc3RzJykpO1xyXG4gICAgY29uc3QgcGF0aHMgPSBmaWxlcy5tYXAoZmlsZSA9PiAoe1xyXG4gICAgICAgIHBhcmFtczogeyBzbHVnOiBmaWxlLnJlcGxhY2UoJy5tZCcsICcnKSB9XHJcbiAgICB9KSk7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhmaWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRocyxcclxuICAgICAgICBmYWxsYmFjazogZmFsc2UgLy8gU2VlIHRoZSBcImZhbGxiYWNrXCIgc2VjdGlvbiBiZWxvd1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG9jc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
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
          __html: "var defaultIndex = 1;\n                    activeSlide(defaultIndex);\n                \n                    function btnSlide(n) { activeSlide(defaultIndex += n); }\n                    function currentSlide(n) { activeSlide(defaultIndex = n); }\n                    function activeSlide(n) {\n                        var i;\n                        var slides = document.getElementsByClassName(\"slideshow\");\n                        var info = document.getElementsByClassName(\"slideshow-dot\");\n                        if (n > slides.length) {defaultIndex = 1}\n                        if (n < 1) {defaultIndex = slides.length}\n                        for (i = 0; i < slides.length; i++) {\n                            slides[i].classList.add(\"slideshow-none\");\n                        }\n                        for (i = 0; i < info.length; i++) {\n                            info[i].className = info[i].className.replace(\" slideshow-active\", \"\");\n                        }\n                        if(slides[defaultIndex - 1]) slides[defaultIndex-1].classList.toggle(\"slideshow-none\");\n                        if(info[defaultIndex - 1]) info[defaultIndex-1].className += \" slideshow-active\";\n                };"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, _this) : null, path === "/docs/marquee" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        type: "text/javascript",
        dangerouslySetInnerHTML: {
          __html: "\n                    var marquee = document.querySelectorAll('marquee');\n                    var i, x;\n                    for(i=0; i<marquee.length; i++){\n                        marquee[i].setAttribute('scrollamount', '10');\n                    }\n                    for(x=0; x<marquee.length; x++){\n                        if(marquee[x].hasAttribute('data-speed')){\n                            var speed = document.getElementsByTagName('marquee')[x].getAttribute('data-speed');\n                            document.getElementsByTagName('marquee')[x].setAttribute('scrollamount', speed);\n                        }\n                    }"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
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
        lineNumber: 89,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2RvY3MvW3NsdWddLnRzeCJdLCJuYW1lcyI6WyJsYXN0UmVuZGVyIiwiRG9jcyIsImNvbnRlbnQiLCJkYXRhIiwic2x1Z3MiLCJhbGxEYXRhIiwidXNlU3RhdGUiLCJwYXRoIiwic2V0UGF0aCIsInVzZUVmZmVjdCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImRvU3R1ZmYiLCJwYXRobmFtZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsImxlbmd0aCIsImpvaW4iLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFNQTtBQUVBO0FBRUE7QUFRQSxJQUFJQSxVQUFrQixHQUFHLEVBQXpCOztBQUNBLElBQU1DLElBQXFCLEdBQUcsU0FBeEJBLElBQXdCLE9BQXVDO0FBQUE7O0FBQUEsTUFBcENDLE9BQW9DLFFBQXBDQSxPQUFvQztBQUFBLE1BQTNCQyxJQUEyQixRQUEzQkEsSUFBMkI7QUFBQSxNQUFyQkMsS0FBcUIsUUFBckJBLEtBQXFCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUFBLGtCQUN6Q0Msc0RBQVEsQ0FBQyxFQUFELENBRGlDO0FBQUEsTUFDMURDLElBRDBEO0FBQUEsTUFDcERDLE9BRG9EOztBQUdqRUMseURBQVMsQ0FBQyxZQUFNO0FBQ1pULGNBQVUsR0FBR1UsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUE3QjtBQUNILEdBRlEsRUFFTixFQUZNLENBQVQ7QUFHQUgseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBR1QsVUFBVSxLQUFLVSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWxDLEVBQXVDO0FBQ25DQyx3RUFBTztBQUNQYixnQkFBVSxHQUFHVSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQTdCO0FBQ0g7QUFDSixHQUxRLENBQVQ7QUFNQUgseURBQVMsQ0FBQyxZQUFNO0FBQ1pELFdBQU8sQ0FBQ0UsTUFBTSxDQUFDQyxRQUFQLENBQWdCRyxRQUFqQixDQUFQO0FBQ0gsR0FGUSxDQUFUO0FBR0Esc0JBQ0kscUVBQUMsNkRBQUQ7QUFBUSxTQUFLLEVBQUVWLEtBQWY7QUFBc0IsV0FBTyxFQUFFQyxPQUEvQjtBQUFBLDRCQUNJLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0k7QUFBQSw0QkFBV0YsSUFBSSxDQUFDWSxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQU0sWUFBSSxFQUFDLE9BQVg7QUFBbUIsZUFBTyxFQUFJWixJQUFJLENBQUNZO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUdJO0FBQU0sZ0JBQVEsRUFBQyxVQUFmO0FBQTBCLGVBQU8sRUFBSVosSUFBSSxDQUFDWTtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEosZUFJSTtBQUFNLGdCQUFRLEVBQUMsZUFBZjtBQUErQixlQUFPLEVBQUlaLElBQUksQ0FBQ1k7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKLGVBS0k7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUVaLElBQUksQ0FBQ2E7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKLGVBTUk7QUFBTSxnQkFBUSxFQUFDLGdCQUFmO0FBQWdDLGVBQU8sRUFBSWIsSUFBSSxDQUFDYTtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkosZUFPSTtBQUFNLGdCQUFRLEVBQUMscUJBQWY7QUFBcUMsZUFBTyxFQUFJYixJQUFJLENBQUNhO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQSixFQVFLLENBQUNiLElBQUksQ0FBQ2MsUUFBTixJQUFrQmQsSUFBSSxDQUFDYyxRQUFMLENBQWNDLE1BQWQsS0FBeUIsQ0FBM0MsR0FBK0MsSUFBL0MsZ0JBQXNEO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFFZixJQUFJLENBQUNjLFFBQUwsQ0FBY0UsSUFBZCxDQUFtQixHQUFuQjtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUjNELEVBU0taLElBQUksS0FBSyxpQkFBVCxnQkFDRDtBQUFRLFlBQUksRUFBRyxpQkFBZjtBQUFpQywrQkFBdUIsRUFBSztBQUFDYSxnQkFBTTtBQUFQO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQyxHQXVCQSxJQWhDTCxFQWlDS2IsSUFBSSxLQUFLLGVBQVQsZ0JBQ0Q7QUFBUSxZQUFJLEVBQUcsaUJBQWY7QUFBaUMsK0JBQXVCLEVBQUs7QUFBQ2EsZ0JBQU07QUFBUDtBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREMsR0FnQkEsSUFqREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFvREk7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLDZCQUNJO0FBQUssK0JBQXVCLEVBQUU7QUFBRUEsZ0JBQU0sRUFBRWxCO0FBQVY7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUEwREgsQ0F6RUQ7O0dBQU1ELEk7O0tBQUFBLEk7O0FBaUhTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzL1tzbHVnXS5jNWE0ZmM1MmE1M2EwYWI4M2Q2OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7IEdldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJztcclxuaW1wb3J0IG1hcmtlZCBmcm9tICdtYXJrZWQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBNZXRhZGF0YSB9IGZyb20gJy4uLy4uL3R5cGVzJztcclxuaW1wb3J0IExheW91dCBmcm9tICdzcmMvY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgeyByZWFkRmlsZXNNZXRhZGF0YSB9IGZyb20gJ3NyYy91dGlscy9yZWFkRmlsZXMnO1xyXG5pbXBvcnQgeyBkb1N0dWZmIH0gZnJvbSBcInNyYy91dGlscy9GaXJlVUlKU1wiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIGFsbERhdGE6IE1ldGFkYXRhW107XHJcbiAgICBzbHVnczogc3RyaW5nW107XHJcbiAgICBjb250ZW50OiBzdHJpbmc7XHJcbiAgICBkYXRhOiBNZXRhZGF0YTtcclxufVxyXG5sZXQgbGFzdFJlbmRlcjogU3RyaW5nID0gXCJcIjtcclxuY29uc3QgRG9jczogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY29udGVudCwgZGF0YSwgc2x1Z3MsIGFsbERhdGEgfSkgPT4ge1xyXG4gICAgY29uc3QgW3BhdGgsIHNldFBhdGhdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsYXN0UmVuZGVyID0gd2luZG93LmxvY2F0aW9uLmhyZWZcclxuICAgIH0sIFtdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihsYXN0UmVuZGVyICE9PSB3aW5kb3cubG9jYXRpb24uaHJlZil7XHJcbiAgICAgICAgICAgIGRvU3R1ZmYoKVxyXG4gICAgICAgICAgICBsYXN0UmVuZGVyID0gd2luZG93LmxvY2F0aW9uLmhyZWZcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRQYXRoKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQgc2x1Z3M9e3NsdWdzfSBhbGxEYXRhPXthbGxEYXRhfT5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+e2Ake2RhdGEudGl0bGV9IH4gRmlyZSBVSWB9PC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aXRsZVwiIGNvbnRlbnQgPSB7ZGF0YS50aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50ID0ge2RhdGEudGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50ID0ge2RhdGEudGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkYXRhLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQgPSB7ZGF0YS5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQgPSB7ZGF0YS5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgIHshZGF0YS5rZXl3b3JkcyB8fCBkYXRhLmtleXdvcmRzLmxlbmd0aCA9PT0gMCA/IG51bGwgOiA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PXtkYXRhLmtleXdvcmRzLmpvaW4oJywnKX0gLz59XHJcbiAgICAgICAgICAgICAgICB7cGF0aCA9PT0gXCIvZG9jcy9zbGlkZXNob3dcIj9cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgdHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgPSB7KHtfX2h0bWw6IFxyXG4gICAgICAgICAgICAgICAgYHZhciBkZWZhdWx0SW5kZXggPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVNsaWRlKGRlZmF1bHRJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBidG5TbGlkZShuKSB7IGFjdGl2ZVNsaWRlKGRlZmF1bHRJbmRleCArPSBuKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGN1cnJlbnRTbGlkZShuKSB7IGFjdGl2ZVNsaWRlKGRlZmF1bHRJbmRleCA9IG4pOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gYWN0aXZlU2xpZGUobikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzbGlkZXNob3dcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNsaWRlc2hvdy1kb3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuID4gc2xpZGVzLmxlbmd0aCkge2RlZmF1bHRJbmRleCA9IDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuIDwgMSkge2RlZmF1bHRJbmRleCA9IHNsaWRlcy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1tpXS5jbGFzc0xpc3QuYWRkKFwic2xpZGVzaG93LW5vbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGluZm8ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZm9baV0uY2xhc3NOYW1lID0gaW5mb1tpXS5jbGFzc05hbWUucmVwbGFjZShcIiBzbGlkZXNob3ctYWN0aXZlXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNsaWRlc1tkZWZhdWx0SW5kZXggLSAxXSkgc2xpZGVzW2RlZmF1bHRJbmRleC0xXS5jbGFzc0xpc3QudG9nZ2xlKFwic2xpZGVzaG93LW5vbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGluZm9bZGVmYXVsdEluZGV4IC0gMV0pIGluZm9bZGVmYXVsdEluZGV4LTFdLmNsYXNzTmFtZSArPSBcIiBzbGlkZXNob3ctYWN0aXZlXCI7XHJcbiAgICAgICAgICAgICAgICB9O2B9KX0+XHJcbiAgICAgICAgICAgICAgICA8L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIDpudWxsfVxyXG4gICAgICAgICAgICAgICAge3BhdGggPT09IFwiL2RvY3MvbWFycXVlZVwiP1xyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCB0eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTCA9IHsoe19faHRtbDpcclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWFycXVlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ21hcnF1ZWUnKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaSwgeDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IoaT0wOyBpPG1hcnF1ZWUubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJxdWVlW2ldLnNldEF0dHJpYnV0ZSgnc2Nyb2xsYW1vdW50JywgJzEwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcih4PTA7IHg8bWFycXVlZS5sZW5ndGg7IHgrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1hcnF1ZWVbeF0uaGFzQXR0cmlidXRlKCdkYXRhLXNwZWVkJykpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNwZWVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21hcnF1ZWUnKVt4XS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3BlZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYXJxdWVlJylbeF0uc2V0QXR0cmlidXRlKCdzY3JvbGxhbW91bnQnLCBzcGVlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9YFxyXG4gICAgICAgICAgICAgICAgfSl9PlxyXG4gICAgICAgICAgICAgICAgPC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA6bnVsbH1cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjb250ZW50IH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zOiB7IHNsdWcgfSB9OiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHJhd0NvbnRlbnRzID0gZnMucmVhZEZpbGVTeW5jKHBhdGguam9pbihcInNyY1wiLCBcInBvc3RzXCIsIHNsdWcgKyBcIi5tZFwiKSkudG9TdHJpbmcoKTtcclxuICAgIGNvbnN0IHsgZGF0YSwgY29udGVudCB9ID0gbWF0dGVyKHJhd0NvbnRlbnRzKTtcclxuICAgIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMocGF0aC5qb2luKFwic3JjXCIsIFwicG9zdHNcIikpO1xyXG4gICAgY29uc3QgYWxsRGF0YSA9IHJlYWRGaWxlc01ldGFkYXRhKHBhdGguam9pbihcInNyY1wiLCBcInBvc3RzXCIpKTtcclxuICAgIGNvbnN0IHNsdWdzID0gZmlsZXMubWFwKGZpbGUgPT4gZmlsZS5yZXBsYWNlKCcubWQnLCAnJykpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwiYWxsRGF0YTogXCIsIGFsbERhdGEpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInNsdWdzOiBcIiwgc2x1Z3MpXHJcblxyXG4gICAgY29uc3QgcGFyc2VkQ29udGVudCA9IG1hcmtlZChjb250ZW50KTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBhbGxEYXRhLFxyXG4gICAgICAgICAgICBzbHVncyxcclxuICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgY29udGVudDogcGFyc2VkQ29udGVudFxyXG4gICAgICAgIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMocGF0aC5qb2luKCdzcmMnLCAncG9zdHMnKSk7XHJcbiAgICBjb25zdCBwYXRocyA9IGZpbGVzLm1hcChmaWxlID0+ICh7XHJcbiAgICAgICAgcGFyYW1zOiB7IHNsdWc6IGZpbGUucmVwbGFjZSgnLm1kJywgJycpIH1cclxuICAgIH0pKTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKGZpbGVzKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGhzLFxyXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZSAvLyBTZWUgdGhlIFwiZmFsbGJhY2tcIiBzZWN0aW9uIGJlbG93XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb2NzXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
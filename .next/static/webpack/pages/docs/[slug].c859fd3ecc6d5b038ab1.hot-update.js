webpackHotUpdate_N_E("pages/docs/[slug]",{

/***/ "./src/utils/FireUIJS.js":
/*!*******************************!*\
  !*** ./src/utils/FireUIJS.js ***!
  \*******************************/
/*! exports provided: doStuff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doStuff", function() { return doStuff; });
var doStuff = function doStuff() {
  if (localStorage.getItem('theme-color')) {
    document.body.setAttribute('data-theme', localStorage.getItem('theme-color'));
  } // Searching all attributes with switch-theme attribute


  document.querySelectorAll("[data-switch-theme]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (btn.dataset.switchTheme && btn.dataset.switchTheme !== "") {
        var availableTheme = btn.dataset.switchTheme.split(',').map(function (i) {
          return i.trim();
        }); //Check if current theme is in availableTheme array

        if (availableTheme.indexOf(document.body.getAttribute("data-theme")) === -1) localStorage.setItem('theme-color', availableTheme[0]);else {
          if (availableTheme.indexOf(document.body.getAttribute('data-theme')) + 1 === availableTheme.length) localStorage.setItem('theme-color', availableTheme[0]);else localStorage.setItem('theme-color', availableTheme[availableTheme.indexOf(document.body.getAttribute('data-theme')) + 1]);
        }
      } else {
        if (document.body.getAttribute('data-theme') === "dark") localStorage.setItem('theme-color', "light");else localStorage.setItem('theme-color', "dark");
      }

      document.body.setAttribute('data-theme', localStorage.getItem('theme-color'));
    });
  });
  document.querySelectorAll(".topnav-hamburger-menu").forEach(function (menu) {
    document.getElementById(menu.dataset.target).classList.add('topnav-list');
    menu.addEventListener("click", function () {
      if (window.getComputedStyle(document.getElementById(menu.dataset.target)).getPropertyValue('display') === "block") {
        menu.innerHTML = "&#x2630;";
        document.getElementById(menu.dataset.target).style.display = "none";
      } else {
        menu.innerHTML = "&times;";
        document.getElementById(menu.dataset.target).style.display = "block";
      }
    });
  });
  document.querySelectorAll(".sidenav-menu-btn").forEach(function (menu) {
    menu.addEventListener("click", function () {
      document.querySelectorAll(".sidenav-close-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          document.getElementById(btn.dataset.target).style.width = "0%";
        });
      });
      if (window.innerWidth <= 768) document.getElementById(menu.dataset.target).style.width = "100%";else document.getElementById(menu.dataset.target).style.width = "250px";
    });
  });
  document.querySelectorAll("[open-modal]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var modal = document.getElementById(btn.dataset.modal);

      window.onclick = function (e) {
        if (e.target == modal) modal.style.display = "none";
      };

      if (window.getComputedStyle(modal).getPropertyValue('display') === "block") {
        modal.style.display = "none";
      } else modal.style.display = "block";
    });
  });
  document.querySelectorAll(".modal-close-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.getElementById(btn.dataset.modal).style.display = "none";
    });
  });
  document.querySelectorAll(".fixed-sidenav-dropdown-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (window.getComputedStyle(document.getElementById(btn.dataset.dropdown)).getPropertyValue('display') === "block") {
        document.getElementById(btn.dataset.dropdown).style.display = "none";
      } else {
        document.getElementById(btn.dataset.dropdown).style.display = "block";
      }
    });
  });
  document.querySelectorAll(".tab").forEach(function (tab) {
    tab.childNodes.forEach(function (btn) {
      //Checking if btn is a valid element containing tab-btn class
      if (btn.classList && btn.classList.contains("tab-btn")) {
        btn.addEventListener("click", function () {
          document.querySelectorAll(".tab-content").forEach(function (content) {
            if (content.parentElement.id === tab.dataset.tab) {
              content.style.display = "none";
            }
          });
          document.getElementById(btn.dataset.content).style.display = "block";
        });
      }
    });
  });
  document.querySelectorAll(".accordion").forEach(function (accordion) {
    accordion.addEventListener("click", function () {
      accordion.classList.toggle("accordion-active");
      var panel = document.getElementById(accordion.dataset.panel);
      if (panel.style.maxHeight) panel.style.maxHeight = null;else panel.style.maxHeight = panel.scrollHeight + 'px';
    });
  });
  document.querySelectorAll(".textarea-auto-adjust").forEach(function (textarea) {
    textarea.addEventListener("input", function () {
      textarea.style.height = "5px";
      textarea.style.height = textarea.scrollHeight + 'px';
    });
  });
  document.querySelectorAll("pre").forEach(function (pre) {
    if (Boolean(pre.getElementsByTagName('code').length) && !(pre.hasAttribute('data-copyable') && pre.dataset.copyable === "false")) {
      var copyBtn = document.createElement('button');
      copyBtn.classList.add('code-copyBtn');
      copyBtn.innerText = "Copy";
      pre.insertBefore(copyBtn, pre.firstChild);
      copyBtn.addEventListener('click', function () {
        var code = pre.querySelector('code').innerText;
        var textarea = document.createElement("textarea");
        textarea.value = code;
        textarea.style.opacity = '0';
        textarea.setAttribute('readonly', '');
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        copyBtn.innerText = "Copied";
      });
    }
  });
  var marquee = document.querySelectorAll('marquee');
  var i, x;

  for (i = 0; i < marquee.length; i++) {
    marquee[i].setAttribute('scrollamount', '10');
  }

  for (x = 0; x < marquee.length; x++) {
    if (marquee[x].hasAttribute('data-speed')) {
      var speed = document.getElementsByTagName('marquee')[x].getAttribute('data-speed');
      document.getElementsByTagName('marquee')[x].setAttribute('scrollamount', speed);
    }
  }
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL0ZpcmVVSUpTLmpzIl0sIm5hbWVzIjpbImRvU3R1ZmYiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZG9jdW1lbnQiLCJib2R5Iiwic2V0QXR0cmlidXRlIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidG4iLCJhZGRFdmVudExpc3RlbmVyIiwiZGF0YXNldCIsInN3aXRjaFRoZW1lIiwiYXZhaWxhYmxlVGhlbWUiLCJzcGxpdCIsIm1hcCIsImkiLCJ0cmltIiwiaW5kZXhPZiIsImdldEF0dHJpYnV0ZSIsInNldEl0ZW0iLCJsZW5ndGgiLCJtZW51IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImlubmVySFRNTCIsInN0eWxlIiwiZGlzcGxheSIsIndpZHRoIiwiaW5uZXJXaWR0aCIsIm1vZGFsIiwib25jbGljayIsImUiLCJkcm9wZG93biIsInRhYiIsImNoaWxkTm9kZXMiLCJjb250YWlucyIsImNvbnRlbnQiLCJwYXJlbnRFbGVtZW50IiwiaWQiLCJhY2NvcmRpb24iLCJ0b2dnbGUiLCJwYW5lbCIsIm1heEhlaWdodCIsInNjcm9sbEhlaWdodCIsInRleHRhcmVhIiwiaGVpZ2h0IiwicHJlIiwiQm9vbGVhbiIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaGFzQXR0cmlidXRlIiwiY29weWFibGUiLCJjb3B5QnRuIiwiY3JlYXRlRWxlbWVudCIsImlubmVyVGV4dCIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJjb2RlIiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwib3BhY2l0eSIsImFwcGVuZENoaWxkIiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJyZW1vdmVDaGlsZCIsIm1hcnF1ZWUiLCJ4Iiwic3BlZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtB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RUFBT3VELENBQVA7O0FBQ0EsT0FBSXZELENBQUMsR0FBQyxDQUFOLEVBQVNBLENBQUMsR0FBQ3NELE9BQU8sQ0FBQ2pELE1BQW5CLEVBQTJCTCxDQUFDLEVBQTVCLEVBQStCO0FBQzNCc0QsV0FBTyxDQUFDdEQsQ0FBRCxDQUFQLENBQVdWLFlBQVgsQ0FBd0IsY0FBeEIsRUFBd0MsSUFBeEM7QUFDSDs7QUFDRCxPQUFJaUUsQ0FBQyxHQUFDLENBQU4sRUFBU0EsQ0FBQyxHQUFDRCxPQUFPLENBQUNqRCxNQUFuQixFQUEyQmtELENBQUMsRUFBNUIsRUFBK0I7QUFDM0IsUUFBR0QsT0FBTyxDQUFDQyxDQUFELENBQVAsQ0FBV2hCLFlBQVgsQ0FBd0IsWUFBeEIsQ0FBSCxFQUF5QztBQUNyQyxVQUFJaUIsS0FBSyxHQUFHcEUsUUFBUSxDQUFDa0Qsb0JBQVQsQ0FBOEIsU0FBOUIsRUFBeUNpQixDQUF6QyxFQUE0Q3BELFlBQTVDLENBQXlELFlBQXpELENBQVo7QUFDQWYsY0FBUSxDQUFDa0Qsb0JBQVQsQ0FBOEIsU0FBOUIsRUFBeUNpQixDQUF6QyxFQUE0Q2pFLFlBQTVDLENBQXlELGNBQXpELEVBQXlFa0UsS0FBekU7QUFDSDtBQUNKO0FBQ0osQ0EvSE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9bc2x1Z10uYzg1OWZkM2VjYzZkNWIwMzhhYjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBkb1N0dWZmID0gKCkgPT4ge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZS1jb2xvcicpKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUtY29sb3InKSlcclxuICAgIH1cclxuICAgIC8vIFNlYXJjaGluZyBhbGwgYXR0cmlidXRlcyB3aXRoIHN3aXRjaC10aGVtZSBhdHRyaWJ1dGVcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1zd2l0Y2gtdGhlbWVdXCIpLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYoYnRuLmRhdGFzZXQuc3dpdGNoVGhlbWUgJiYgYnRuLmRhdGFzZXQuc3dpdGNoVGhlbWUgIT09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGF2YWlsYWJsZVRoZW1lID0gYnRuLmRhdGFzZXQuc3dpdGNoVGhlbWUuc3BsaXQoJywnKS5tYXAoaSA9PiBpLnRyaW0oKSlcclxuICAgICAgICAgICAgICAgIC8vQ2hlY2sgaWYgY3VycmVudCB0aGVtZSBpcyBpbiBhdmFpbGFibGVUaGVtZSBhcnJheVxyXG4gICAgICAgICAgICAgICAgaWYoYXZhaWxhYmxlVGhlbWUuaW5kZXhPZihkb2N1bWVudC5ib2R5LmdldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIikpID09PSAtMSkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lLWNvbG9yJywgYXZhaWxhYmxlVGhlbWVbMF0pXHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGF2YWlsYWJsZVRoZW1lLmluZGV4T2YoZG9jdW1lbnQuYm9keS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnKSkgKyAxID09PSBhdmFpbGFibGVUaGVtZS5sZW5ndGgpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZS1jb2xvcicsIGF2YWlsYWJsZVRoZW1lWzBdKVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lLWNvbG9yJywgYXZhaWxhYmxlVGhlbWVbYXZhaWxhYmxlVGhlbWUuaW5kZXhPZihkb2N1bWVudC5ib2R5LmdldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScpKSArIDFdKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LmJvZHkuZ2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJykgPT09IFwiZGFya1wiKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUtY29sb3InLCBcImxpZ2h0XCIpXHJcbiAgICAgICAgICAgICAgICBlbHNlIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZS1jb2xvcicsIFwiZGFya1wiKVxyXG4gICAgICAgICAgICB9ZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUtY29sb3InKSlcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9wbmF2LWhhbWJ1cmdlci1tZW51XCIpLmZvckVhY2gobWVudSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWVudS5kYXRhc2V0LnRhcmdldCkuY2xhc3NMaXN0LmFkZCgndG9wbmF2LWxpc3QnKVxyXG4gICAgICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1lbnUuZGF0YXNldC50YXJnZXQpKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5JykgPT09IFwiYmxvY2tcIikge1xyXG4gICAgICAgICAgICAgICAgbWVudS5pbm5lckhUTUwgPSBcIiYjeDI2MzA7XCI7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtZW51LmRhdGFzZXQudGFyZ2V0KS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtZW51LmlubmVySFRNTCA9IFwiJnRpbWVzO1wiO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWVudS5kYXRhc2V0LnRhcmdldCkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlbmF2LW1lbnUtYnRuXCIpLmZvckVhY2gobWVudSA9PiB7XHJcbiAgICAgICAgbWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZGVuYXYtY2xvc2UtYnRuXCIpLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJ0bi5kYXRhc2V0LnRhcmdldCkuc3R5bGUud2lkdGggPSBcIjAlXCI7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gNzY4KSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtZW51LmRhdGFzZXQudGFyZ2V0KS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiXHJcbiAgICAgICAgICAgIGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWVudS5kYXRhc2V0LnRhcmdldCkuc3R5bGUud2lkdGggPSBcIjI1MHB4XCJcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbb3Blbi1tb2RhbF1cIikuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChidG4uZGF0YXNldC5tb2RhbCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vbmNsaWNrID0gZSA9PiB7IGlmIChlLnRhcmdldCA9PSBtb2RhbCkgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiIH1cclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG1vZGFsKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5JykgPT09IFwiYmxvY2tcIikge1xyXG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9kYWwtY2xvc2UtYnRuXCIpLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnRuLmRhdGFzZXQubW9kYWwpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZml4ZWQtc2lkZW5hdi1kcm9wZG93bi1idG5cIikuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnRuLmRhdGFzZXQuZHJvcGRvd24pKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5JykgPT09IFwiYmxvY2tcIikge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnRuLmRhdGFzZXQuZHJvcGRvd24pLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnRuLmRhdGFzZXQuZHJvcGRvd24pLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFiXCIpLmZvckVhY2godGFiID0+IHtcclxuICAgICAgICB0YWIuY2hpbGROb2Rlcy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgICAgIC8vQ2hlY2tpbmcgaWYgYnRuIGlzIGEgdmFsaWQgZWxlbWVudCBjb250YWluaW5nIHRhYi1idG4gY2xhc3NcclxuICAgICAgICAgICAgaWYgKGJ0bi5jbGFzc0xpc3QgJiYgYnRuLmNsYXNzTGlzdC5jb250YWlucyhcInRhYi1idG5cIikpIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFiLWNvbnRlbnRcIikuZm9yRWFjaChjb250ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQucGFyZW50RWxlbWVudC5pZCA9PT0gdGFiLmRhdGFzZXQudGFiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnRuLmRhdGFzZXQuY29udGVudCkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY2NvcmRpb25cIikuZm9yRWFjaChhY2NvcmRpb24gPT4ge1xyXG4gICAgICAgIGFjY29yZGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBhY2NvcmRpb24uY2xhc3NMaXN0LnRvZ2dsZShcImFjY29yZGlvbi1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIHZhciBwYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFjY29yZGlvbi5kYXRhc2V0LnBhbmVsKTtcclxuICAgICAgICAgICAgaWYgKHBhbmVsLnN0eWxlLm1heEhlaWdodCkgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcclxuICAgICAgICAgICAgZWxzZSBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBwYW5lbC5zY3JvbGxIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50ZXh0YXJlYS1hdXRvLWFkanVzdFwiKS5mb3JFYWNoKHRleHRhcmVhID0+IHtcclxuICAgICAgICB0ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0ZXh0YXJlYS5zdHlsZS5oZWlnaHQgPSBcIjVweFwiO1xyXG4gICAgICAgICAgICB0ZXh0YXJlYS5zdHlsZS5oZWlnaHQgPSB0ZXh0YXJlYS5zY3JvbGxIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInByZVwiKS5mb3JFYWNoKHByZSA9PiB7XHJcbiAgICAgICAgaWYoQm9vbGVhbihwcmUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NvZGUnKS5sZW5ndGgpICYmICEocHJlLmhhc0F0dHJpYnV0ZSgnZGF0YS1jb3B5YWJsZScpICYmIHByZS5kYXRhc2V0LmNvcHlhYmxlID09PSBcImZhbHNlXCIpKXtcclxuICAgICAgICAgICAgdmFyIGNvcHlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgY29weUJ0bi5jbGFzc0xpc3QuYWRkKCdjb2RlLWNvcHlCdG4nKTtcclxuICAgICAgICAgICAgY29weUJ0bi5pbm5lclRleHQgPSBcIkNvcHlcIjtcclxuICAgICAgICAgICAgcHJlLmluc2VydEJlZm9yZShjb3B5QnRuLCBwcmUuZmlyc3RDaGlsZClcclxuICAgICAgICAgICAgY29weUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvZGUgPSBwcmUucXVlcnlTZWxlY3RvcignY29kZScpLmlubmVyVGV4dDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgICAgICAgICAgICAgdGV4dGFyZWEudmFsdWUgPSBjb2RlO1xyXG4gICAgICAgICAgICAgICAgdGV4dGFyZWEuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgICAgICAgICAgICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAnJyk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHRhcmVhKTtcclxuICAgICAgICAgICAgICAgIHRleHRhcmVhLnNlbGVjdCgpXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZXh0YXJlYSk7XHJcbiAgICAgICAgICAgICAgICBjb3B5QnRuLmlubmVyVGV4dCA9IFwiQ29waWVkXCI7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIHZhciBtYXJxdWVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbWFycXVlZScpO1xyXG4gICAgdmFyIGksIHg7XHJcbiAgICBmb3IoaT0wOyBpPG1hcnF1ZWUubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIG1hcnF1ZWVbaV0uc2V0QXR0cmlidXRlKCdzY3JvbGxhbW91bnQnLCAnMTAnKTtcclxuICAgIH1cclxuICAgIGZvcih4PTA7IHg8bWFycXVlZS5sZW5ndGg7IHgrKyl7XHJcbiAgICAgICAgaWYobWFycXVlZVt4XS5oYXNBdHRyaWJ1dGUoJ2RhdGEtc3BlZWQnKSl7XHJcbiAgICAgICAgICAgIHZhciBzcGVlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYXJxdWVlJylbeF0uZ2V0QXR0cmlidXRlKCdkYXRhLXNwZWVkJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYXJxdWVlJylbeF0uc2V0QXR0cmlidXRlKCdzY3JvbGxhbW91bnQnLCBzcGVlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
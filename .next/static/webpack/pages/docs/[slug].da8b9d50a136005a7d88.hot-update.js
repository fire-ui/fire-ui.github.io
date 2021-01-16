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
  var i;
  var x;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL0ZpcmVVSUpTLmpzIl0sIm5hbWVzIjpbImRvU3R1ZmYiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZG9jdW1lbnQiLCJib2R5Iiwic2V0QXR0cmlidXRlIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidG4iLCJhZGRFdmVudExpc3RlbmVyIiwiZGF0YXNldCIsInN3aXRjaFRoZW1lIiwiYXZhaWxhYmxlVGhlbWUiLCJzcGxpdCIsIm1hcCIsImkiLCJ0cmltIiwiaW5kZXhPZiIsImdldEF0dHJpYnV0ZSIsInNldEl0ZW0iLCJsZW5ndGgiLCJtZW51IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImlubmVySFRNTCIsInN0eWxlIiwiZGlzcGxheSIsIndpZHRoIiwiaW5uZXJXaWR0aCIsIm1vZGFsIiwib25jbGljayIsImUiLCJkcm9wZG93biIsInRhYiIsImNoaWxkTm9kZXMiLCJjb250YWlucyIsImNvbnRlbnQiLCJwYXJlbnRFbGVtZW50IiwiaWQiLCJhY2NvcmRpb24iLCJ0b2dnbGUiLCJwYW5lbCIsIm1heEhlaWdodCIsInNjcm9sbEhlaWdodCIsInRleHRhcmVhIiwiaGVpZ2h0IiwicHJlIiwiQm9vbGVhbiIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaGFzQXR0cmlidXRlIiwiY29weWFibGUiLCJjb3B5QnRuIiwiY3JlYXRlRWxlbWVudCIsImlubmVyVGV4dCIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJjb2RlIiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwib3BhY2l0eSIsImFwcGVuZENoaWxkIiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJyZW1vdmVDaGlsZCIsIm1hcnF1ZWUiLCJ4Iiwic3BlZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtB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QUFDQSxNQUFJdUQsQ0FBSjs7QUFDQSxPQUFJdkQsQ0FBQyxHQUFDLENBQU4sRUFBU0EsQ0FBQyxHQUFDc0QsT0FBTyxDQUFDakQsTUFBbkIsRUFBMkJMLENBQUMsRUFBNUIsRUFBK0I7QUFDM0JzRCxXQUFPLENBQUN0RCxDQUFELENBQVAsQ0FBV1YsWUFBWCxDQUF3QixjQUF4QixFQUF3QyxJQUF4QztBQUNIOztBQUNELE9BQUlpRSxDQUFDLEdBQUMsQ0FBTixFQUFTQSxDQUFDLEdBQUNELE9BQU8sQ0FBQ2pELE1BQW5CLEVBQTJCa0QsQ0FBQyxFQUE1QixFQUErQjtBQUMzQixRQUFHRCxPQUFPLENBQUNDLENBQUQsQ0FBUCxDQUFXaEIsWUFBWCxDQUF3QixZQUF4QixDQUFILEVBQXlDO0FBQ3JDLFVBQUlpQixLQUFLLEdBQUdwRSxRQUFRLENBQUNrRCxvQkFBVCxDQUE4QixTQUE5QixFQUF5Q2lCLENBQXpDLEVBQTRDcEQsWUFBNUMsQ0FBeUQsWUFBekQsQ0FBWjtBQUNBZixjQUFRLENBQUNrRCxvQkFBVCxDQUE4QixTQUE5QixFQUF5Q2lCLENBQXpDLEVBQTRDakUsWUFBNUMsQ0FBeUQsY0FBekQsRUFBeUVrRSxLQUF6RTtBQUNIO0FBQ0o7QUFDSixDQWhJTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzL1tzbHVnXS5kYThiOWQ1MGExMzYwMDVhN2Q4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGRvU3R1ZmYgPSAoKSA9PiB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lLWNvbG9yJykpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZS1jb2xvcicpKVxyXG4gICAgfVxyXG4gICAgLy8gU2VhcmNoaW5nIGFsbCBhdHRyaWJ1dGVzIHdpdGggc3dpdGNoLXRoZW1lIGF0dHJpYnV0ZVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXN3aXRjaC10aGVtZV1cIikuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihidG4uZGF0YXNldC5zd2l0Y2hUaGVtZSAmJiBidG4uZGF0YXNldC5zd2l0Y2hUaGVtZSAhPT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXZhaWxhYmxlVGhlbWUgPSBidG4uZGF0YXNldC5zd2l0Y2hUaGVtZS5zcGxpdCgnLCcpLm1hcChpID0+IGkudHJpbSgpKVxyXG4gICAgICAgICAgICAgICAgLy9DaGVjayBpZiBjdXJyZW50IHRoZW1lIGlzIGluIGF2YWlsYWJsZVRoZW1lIGFycmF5XHJcbiAgICAgICAgICAgICAgICBpZihhdmFpbGFibGVUaGVtZS5pbmRleE9mKGRvY3VtZW50LmJvZHkuZ2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiKSkgPT09IC0xKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUtY29sb3InLCBhdmFpbGFibGVUaGVtZVswXSlcclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYXZhaWxhYmxlVGhlbWUuaW5kZXhPZihkb2N1bWVudC5ib2R5LmdldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScpKSArIDEgPT09IGF2YWlsYWJsZVRoZW1lLmxlbmd0aCkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lLWNvbG9yJywgYXZhaWxhYmxlVGhlbWVbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUtY29sb3InLCBhdmFpbGFibGVUaGVtZVthdmFpbGFibGVUaGVtZS5pbmRleE9mKGRvY3VtZW50LmJvZHkuZ2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJykpICsgMV0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQuYm9keS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnKSA9PT0gXCJkYXJrXCIpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZS1jb2xvcicsIFwibGlnaHRcIilcclxuICAgICAgICAgICAgICAgIGVsc2UgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lLWNvbG9yJywgXCJkYXJrXCIpXHJcbiAgICAgICAgICAgIH1kb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZS1jb2xvcicpKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b3BuYXYtaGFtYnVyZ2VyLW1lbnVcIikuZm9yRWFjaChtZW51ID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtZW51LmRhdGFzZXQudGFyZ2V0KS5jbGFzc0xpc3QuYWRkKCd0b3BuYXYtbGlzdCcpXHJcbiAgICAgICAgbWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWVudS5kYXRhc2V0LnRhcmdldCkpLmdldFByb3BlcnR5VmFsdWUoJ2Rpc3BsYXknKSA9PT0gXCJibG9ja1wiKSB7XHJcbiAgICAgICAgICAgICAgICBtZW51LmlubmVySFRNTCA9IFwiJiN4MjYzMDtcIjtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1lbnUuZGF0YXNldC50YXJnZXQpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1lbnUuaW5uZXJIVE1MID0gXCImdGltZXM7XCI7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtZW51LmRhdGFzZXQudGFyZ2V0KS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZGVuYXYtbWVudS1idG5cIikuZm9yRWFjaChtZW51ID0+IHtcclxuICAgICAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkZW5hdi1jbG9zZS1idG5cIikuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnRuLmRhdGFzZXQudGFyZ2V0KS5zdHlsZS53aWR0aCA9IFwiMCVcIjtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA3NjgpIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1lbnUuZGF0YXNldC50YXJnZXQpLnN0eWxlLndpZHRoID0gXCIxMDAlXCJcclxuICAgICAgICAgICAgZWxzZSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtZW51LmRhdGFzZXQudGFyZ2V0KS5zdHlsZS53aWR0aCA9IFwiMjUwcHhcIlxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltvcGVuLW1vZGFsXVwiKS5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJ0bi5kYXRhc2V0Lm1vZGFsKTtcclxuICAgICAgICAgICAgd2luZG93Lm9uY2xpY2sgPSBlID0+IHsgaWYgKGUudGFyZ2V0ID09IG1vZGFsKSBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIgfVxyXG4gICAgICAgICAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUobW9kYWwpLmdldFByb3BlcnR5VmFsdWUoJ2Rpc3BsYXknKSA9PT0gXCJibG9ja1wiKSB7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbC1jbG9zZS1idG5cIikuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChidG4uZGF0YXNldC5tb2RhbCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maXhlZC1zaWRlbmF2LWRyb3Bkb3duLWJ0blwiKS5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChidG4uZGF0YXNldC5kcm9wZG93bikpLmdldFByb3BlcnR5VmFsdWUoJ2Rpc3BsYXknKSA9PT0gXCJibG9ja1wiKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChidG4uZGF0YXNldC5kcm9wZG93bikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChidG4uZGF0YXNldC5kcm9wZG93bikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJcIikuZm9yRWFjaCh0YWIgPT4ge1xyXG4gICAgICAgIHRhYi5jaGlsZE5vZGVzLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICAgICAgLy9DaGVja2luZyBpZiBidG4gaXMgYSB2YWxpZCBlbGVtZW50IGNvbnRhaW5pbmcgdGFiLWJ0biBjbGFzc1xyXG4gICAgICAgICAgICBpZiAoYnRuLmNsYXNzTGlzdCAmJiBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFiLWJ0blwiKSkge1xyXG4gICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWItY29udGVudFwiKS5mb3JFYWNoKGNvbnRlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudC5wYXJlbnRFbGVtZW50LmlkID09PSB0YWIuZGF0YXNldC50YWIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChidG4uZGF0YXNldC5jb250ZW50KS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjY29yZGlvblwiKS5mb3JFYWNoKGFjY29yZGlvbiA9PiB7XHJcbiAgICAgICAgYWNjb3JkaW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGFjY29yZGlvbi5jbGFzc0xpc3QudG9nZ2xlKFwiYWNjb3JkaW9uLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgdmFyIHBhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYWNjb3JkaW9uLmRhdGFzZXQucGFuZWwpO1xyXG4gICAgICAgICAgICBpZiAocGFuZWwuc3R5bGUubWF4SGVpZ2h0KSBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xyXG4gICAgICAgICAgICBlbHNlIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IHBhbmVsLnNjcm9sbEhlaWdodCArICdweCc7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRleHRhcmVhLWF1dG8tYWRqdXN0XCIpLmZvckVhY2godGV4dGFyZWEgPT4ge1xyXG4gICAgICAgIHRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRleHRhcmVhLnN0eWxlLmhlaWdodCA9IFwiNXB4XCI7XHJcbiAgICAgICAgICAgIHRleHRhcmVhLnN0eWxlLmhlaWdodCA9IHRleHRhcmVhLnNjcm9sbEhlaWdodCArICdweCc7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwicHJlXCIpLmZvckVhY2gocHJlID0+IHtcclxuICAgICAgICBpZihCb29sZWFuKHByZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY29kZScpLmxlbmd0aCkgJiYgIShwcmUuaGFzQXR0cmlidXRlKCdkYXRhLWNvcHlhYmxlJykgJiYgcHJlLmRhdGFzZXQuY29weWFibGUgPT09IFwiZmFsc2VcIikpe1xyXG4gICAgICAgICAgICB2YXIgY29weUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBjb3B5QnRuLmNsYXNzTGlzdC5hZGQoJ2NvZGUtY29weUJ0bicpO1xyXG4gICAgICAgICAgICBjb3B5QnRuLmlubmVyVGV4dCA9IFwiQ29weVwiO1xyXG4gICAgICAgICAgICBwcmUuaW5zZXJ0QmVmb3JlKGNvcHlCdG4sIHByZS5maXJzdENoaWxkKVxyXG4gICAgICAgICAgICBjb3B5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29kZSA9IHByZS5xdWVyeVNlbGVjdG9yKCdjb2RlJykuaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYS52YWx1ZSA9IGNvZGU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICAgICAgICAgICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICcnKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xyXG4gICAgICAgICAgICAgICAgdGV4dGFyZWEuc2VsZWN0KClcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRleHRhcmVhKTtcclxuICAgICAgICAgICAgICAgIGNvcHlCdG4uaW5uZXJUZXh0ID0gXCJDb3BpZWRcIjtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgdmFyIG1hcnF1ZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdtYXJxdWVlJyk7XHJcbiAgICB2YXIgaTtcclxuICAgIHZhciB4O1xyXG4gICAgZm9yKGk9MDsgaTxtYXJxdWVlLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBtYXJxdWVlW2ldLnNldEF0dHJpYnV0ZSgnc2Nyb2xsYW1vdW50JywgJzEwJyk7XHJcbiAgICB9XHJcbiAgICBmb3IoeD0wOyB4PG1hcnF1ZWUubGVuZ3RoOyB4Kyspe1xyXG4gICAgICAgIGlmKG1hcnF1ZWVbeF0uaGFzQXR0cmlidXRlKCdkYXRhLXNwZWVkJykpe1xyXG4gICAgICAgICAgICB2YXIgc3BlZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFycXVlZScpW3hdLmdldEF0dHJpYnV0ZSgnZGF0YS1zcGVlZCcpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFycXVlZScpW3hdLnNldEF0dHJpYnV0ZSgnc2Nyb2xsYW1vdW50Jywgc3BlZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=
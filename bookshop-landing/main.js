
/*! For license information please see main.js.LICENSE.txt */
(()=>{var e={"./src/style.scss":(e,t,r)=>{"use strict";r.r(t)},"./src/slider.js":(e,t,r)=>{let s=[{url:r("./src/img/banner (1).png")},{url:r("./src/img/business-competition-concept-vector-illustration-businessman-top-pf-mountain-competitive-businessmen-climb-up-people-178097024 1.png")},{url:r("./src/img/autumn-seamless-pattern-with-colorful-leaves-vector-repeated-elements-cartoon-style_505988-77 1.png")}];document.addEventListener("DOMContentLoaded",(()=>{!function(e,t){if(!e||!e.length)return;t=t||{dots:!1,autoplay:!1,autoplayInterval:3e3};const r=document.querySelector(".slider"),s=r.querySelector(".slider__images");function a(e){if(s.querySelector(".active").classList.remove("active"),s.querySelector(`.n${e}`).classList.add("active"),t.dots){let t=document.querySelector(".slider__dots");t.querySelector(".active").classList.remove("active"),t.querySelector(`.n${e}`).classList.add("active")}}e.forEach(((e,t)=>{let r=document.createElement("div");r.className=`image n${t} ${t?"":"active"}`,r.dataset.index=t,r.style.backgroundImage=`url(${e.url})`,s.appendChild(r)})),t.dots&&function(){let t=document.createElement("div");t.className="slider__dots",e.forEach(((e,r)=>{let s=document.createElement("div");s.className=`slider__dots-item n${r} ${r?"":"active"}`,s.dataset.index=r,s.addEventListener("click",(function(){a(this.dataset.index)})),t.appendChild(s)})),r.appendChild(t)}(),t.autoplay&&setInterval((()=>{let t=+s.querySelector(".active").dataset.index;a(t===e.length-1?0:t+1)}),t.autoplayInterval)}(s,{dots:!0,autoplay:!0,autoplayInterval:5e3})}))},"./src/img/black-friday-sale.svg":(e,t,r)=>{"use strict";e.exports=r.p+"img/a04a20ede1031ba27b49.svg"},"./src/img/check-out.png":(e,t,r)=>{"use strict";e.exports=r.p+"img/e19a21ad134385df4cd5.png"},"./src/img/for-entrepreneurs.png":(e,t,r)=>{"use strict";e.exports=r.p+"img/8afcd3048e7021e9efd2.png"}},t={};function r(s){var a=t[s];if(void 0!==a)return a.exports;var c=t[s]={exports:{}};return e[s](c,c.exports,r),c.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var s=t.getElementsByTagName("script");s.length&&(e=s[s.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})();var s={};(()=>{"use strict";r.r(s);r("./src/style.scss"),r("./src/slider.js")})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWZDLFdBQXlCLE9BQU9BLFdBQzNDLElBQ0MsT0FBTzFCLE1BQVEsSUFBSTJCLFNBQVMsY0FBYixFQUNoQixDQUFFLE1BQU9DLEdBQ1IsR0FBc0IsaUJBQVhDLE9BQXFCLE9BQU9BLE1BQ3hDLENBQ0EsQ0FQdUIsR0NBeEJ2QixFQUFvQmMsRUFBSSxDQUFDVSxFQUFLQyxJQUFVVixPQUFPVyxVQUFVQyxlQUFlQyxLQUFLSixFQUFLQyxHQ0NsRnpCLEVBQW9CNkIsRUFBS3pCLElBQ0gsb0JBQVgwQixRQUEwQkEsT0FBT0MsYUFDMUNoQixPQUFPQyxlQUFlWixFQUFTMEIsT0FBT0MsWUFBYSxDQUFFQyxNQUFPLFdBRTdEakIsT0FBT0MsZUFBZVosRUFBUyxhQUFjLENBQUU0QixPQUFPLEdBQU8sUUNMOUQsSUFBSUMsRUFDQWpDLEVBQW9CbUIsRUFBRWUsZ0JBQWVELEVBQVlqQyxFQUFvQm1CLEVBQUVnQixTQUFXLElBQ3RGLElBQUlwRSxFQUFXaUMsRUFBb0JtQixFQUFFcEQsU0FDckMsSUFBS2tFLEdBQWFsRSxJQUNiQSxFQUFTcUUsZ0JBQ1pILEVBQVlsRSxFQUFTcUUsY0FBY0MsTUFDL0JKLEdBQVcsQ0FDZixJQUFJSyxFQUFVdkUsRUFBU3dFLHFCQUFxQixVQUN6Q0QsRUFBUXBFLFNBQVErRCxFQUFZSyxFQUFRQSxFQUFRcEUsT0FBUyxHQUFHbUUsSUFDNUQsQ0FJRCxJQUFLSixFQUFXLE1BQU0sSUFBSU8sTUFBTSx5REFDaENQLEVBQVlBLEVBQVVRLFFBQVEsT0FBUSxJQUFJQSxRQUFRLFFBQVMsSUFBSUEsUUFBUSxZQUFhLEtBQ3BGekMsRUFBb0IwQyxFQUFJVCIsInNvdXJjZXMiOlsid2VicGFjazovL2Jvb2tzaG9wLy4vc3JjL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9ib29rc2hvcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ib29rc2hvcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ib29rc2hvcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYm9va3Nob3Avd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9ib29rc2hvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Jvb2tzaG9wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYm9va3Nob3Avd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGltYWdlcyA9IFt7XHJcbiAgICB1cmw6IHJlcXVpcmUoXCIuLi9zcmMvaW1nL2JsYWNrLWZyaWRheS1zYWxlLnN2Z1wiKVxyXG4gIH0sIHtcclxuICAgIHVybDogcmVxdWlyZShcIi4uL3NyYy9pbWcvZm9yLWVudHJlcHJlbmV1cnMucG5nXCIpXHJcbiAgfSwge1xyXG4gICAgdXJsOiByZXF1aXJlKFwiLi4vc3JjL2ltZy9jaGVjay1vdXQucG5nXCIpXHJcbiAgfV07XHJcblxyXG5mdW5jdGlvbiBpbml0U2xpZGVyKGltYWdlcywgb3B0aW9ucykge1xyXG4gIGlmICghaW1hZ2VzIHx8ICFpbWFnZXMubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHtcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgYXV0b3BsYXlJbnRlcnZhbDogMzAwMFxyXG4gIH1cclxuICBcclxuICBjb25zdCBzbGlkZXJXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJcIik7XHJcbiAgY29uc3Qgc2xpZGVySW1hZ2VzID0gc2xpZGVyV3JhcHBlci5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlcl9faW1hZ2VzXCIpO1xyXG5cclxuICBpbml0SW1hZ2VzKCk7XHJcblxyXG4gIGlmIChvcHRpb25zLmRvdHMpIHtcclxuICAgIGluaXREb3RzKCk7XHJcbiAgfVxyXG5cclxuICBpZiAob3B0aW9ucy5hdXRvcGxheSkge1xyXG4gICAgaW5pdEF1dG9wbGF5KCk7XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIGluaXRJbWFnZXMoKSB7XHJcbiAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UsIGluZGV4KSA9PiB7XHJcbiAgICAgIGxldCBpbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBpbWFnZUVsZW1lbnQuY2xhc3NOYW1lID0gYGltYWdlIG4ke2luZGV4fSAke2luZGV4PyBcIlwiIDogXCJhY3RpdmVcIn1gO1xyXG4gICAgICBpbWFnZUVsZW1lbnQuZGF0YXNldC5pbmRleCA9IGluZGV4O1xyXG4gICAgICBpbWFnZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltYWdlLnVybH0pYDtcclxuICAgICAgc2xpZGVySW1hZ2VzLmFwcGVuZENoaWxkKGltYWdlRWxlbWVudCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmVTbGlkZXIobnVtKSB7XHJcbiAgICBzbGlkZXJJbWFnZXMucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIHNsaWRlckltYWdlcy5xdWVyeVNlbGVjdG9yKGAubiR7bnVtfWApLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgaWYgKG9wdGlvbnMuZG90cykge1xyXG4gICAgICBsZXQgZG90c1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlcl9fZG90c1wiKTtcclxuICAgICAgZG90c1dyYXBwZXIucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgZG90c1dyYXBwZXIucXVlcnlTZWxlY3RvcihgLm4ke251bX1gKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBpbml0RG90cygpIHtcclxuICAgIGxldCBkb3RzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkb3RzV3JhcHBlci5jbGFzc05hbWUgPSBcInNsaWRlcl9fZG90c1wiO1xyXG4gICAgaW1hZ2VzLmZvckVhY2goKGltYWdlLCBpbmRleCkgPT4ge1xyXG4gICAgICBsZXQgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgZG90LmNsYXNzTmFtZSA9IGBzbGlkZXJfX2RvdHMtaXRlbSBuJHtpbmRleH0gJHtpbmRleD8gXCJcIiA6IFwiYWN0aXZlXCJ9YDtcclxuICAgICAgZG90LmRhdGFzZXQuaW5kZXggPSBpbmRleDtcclxuICAgICAgZG90LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBtb3ZlU2xpZGVyKHRoaXMuZGF0YXNldC5pbmRleCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBkb3RzV3JhcHBlci5hcHBlbmRDaGlsZChkb3QpO1xyXG4gICAgfSk7XHJcbiAgICBzbGlkZXJXcmFwcGVyLmFwcGVuZENoaWxkKGRvdHNXcmFwcGVyKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRBdXRvcGxheSgpIHtcclxuICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgbGV0IGN1cnJlbnROdW1iZXIgPSArc2xpZGVySW1hZ2VzLnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlXCIpLmRhdGFzZXQuaW5kZXg7XHJcbiAgICAgIGxldCBuZXh0TnVtYmVyID0gY3VycmVudE51bWJlciA9PT0gaW1hZ2VzLmxlbmd0aCAtIDE/IDAgOiBjdXJyZW50TnVtYmVyICsgMTtcclxuICAgICAgbW92ZVNsaWRlcihuZXh0TnVtYmVyKTtcclxuICAgIH0sIG9wdGlvbnMuYXV0b3BsYXlJbnRlcnZhbCk7XHJcbiAgfVxyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgbGV0IHNsaWRlck9wdGlvbnMgPSB7XHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBhdXRvcGxheUludGVydmFsOiA1MDAwXHJcbiAgfVxyXG4gIGluaXRTbGlkZXIoaW1hZ2VzLCBzbGlkZXJPcHRpb25zKTtcclxufSk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiXSwibmFtZXMiOlsiaW1hZ2VzIiwidXJsIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwib3B0aW9ucyIsImxlbmd0aCIsImRvdHMiLCJhdXRvcGxheSIsImF1dG9wbGF5SW50ZXJ2YWwiLCJzbGlkZXJXcmFwcGVyIiwicXVlcnlTZWxlY3RvciIsInNsaWRlckltYWdlcyIsIm1vdmVTbGlkZXIiLCJudW0iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJkb3RzV3JhcHBlciIsImZvckVhY2giLCJpbWFnZSIsImluZGV4IiwiaW1hZ2VFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImRhdGFzZXQiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImFwcGVuZENoaWxkIiwiZG90IiwidGhpcyIsImluaXREb3RzIiwic2V0SW50ZXJ2YWwiLCJjdXJyZW50TnVtYmVyIiwiaW5pdFNsaWRlciIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwibiIsImdldHRlciIsIl9fZXNNb2R1bGUiLCJkIiwiYSIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiZyIsImdsb2JhbFRoaXMiLCJGdW5jdGlvbiIsImUiLCJ3aW5kb3ciLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJzY3JpcHRVcmwiLCJpbXBvcnRTY3JpcHRzIiwibG9jYXRpb24iLCJjdXJyZW50U2NyaXB0Iiwic3JjIiwic2NyaXB0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiRXJyb3IiLCJyZXBsYWNlIiwicCJdLCJzb3VyY2VSb290IjoiIn0=
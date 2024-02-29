/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/binary-tree.js":
/*!****************************!*\
  !*** ./src/binary-tree.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   treeFactory: () => (/* binding */ treeFactory)
/* harmony export */ });
/* eslint-disable import/prefer-default-export */
class Node {
    constructor(root, left, right) {
      this.root = root;
      this.left = left;
      this.right = right;
    }
  }



const treeFactory = function() {


    function sortArray(arr) {
        const sortedArray = arr.sort((a, b) => a - b)
        return sortedArray
    } 

    function buildTree(arr, start, end) {

        if (start > end) {
            return null
        }

        const midpoint = Math.floor((start + end) / 2);
        const newNode = new Node(arr[midpoint])

        console.log(midpoint);
        console.log(newNode);

        newNode.left = buildTree(arr, start, midpoint-1);
        newNode.right = buildTree(arr, midpoint+1, end);

        console.log(newNode)
        return newNode

    }


    return {
        sortArray,
        buildTree
    }

}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _binary_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binary-tree */ "./src/binary-tree.js");




const testArray = [8, 6, 9, 10, 31, 45, 22, 23, 2, 15];
// const unsortedArray = [23, 4, 5, 7, 3, 20, 31, 22];

const testRun = (0,_binary_tree__WEBPACK_IMPORTED_MODULE_0__.treeFactory)();
const sortedArray = testRun.sortArray(testArray)
console.log(sortedArray);


testRun.buildTree(sortedArray, 0, sortedArray.length - 1)



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7VUM3Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ040Qzs7OztBQUk1QztBQUNBOztBQUVBLGdCQUFnQix5REFBVztBQUMzQjtBQUNBOzs7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvYmluYXJ5LXRyZWUuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3Iocm9vdCwgbGVmdCwgcmlnaHQpIHtcbiAgICAgIHRoaXMucm9vdCA9IHJvb3Q7XG4gICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIH1cbiAgfVxuXG5cblxuZXhwb3J0IGNvbnN0IHRyZWVGYWN0b3J5ID0gZnVuY3Rpb24oKSB7XG5cblxuICAgIGZ1bmN0aW9uIHNvcnRBcnJheShhcnIpIHtcbiAgICAgICAgY29uc3Qgc29ydGVkQXJyYXkgPSBhcnIuc29ydCgoYSwgYikgPT4gYSAtIGIpXG4gICAgICAgIHJldHVybiBzb3J0ZWRBcnJheVxuICAgIH0gXG5cbiAgICBmdW5jdGlvbiBidWlsZFRyZWUoYXJyLCBzdGFydCwgZW5kKSB7XG5cbiAgICAgICAgaWYgKHN0YXJ0ID4gZW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWlkcG9pbnQgPSBNYXRoLmZsb29yKChzdGFydCArIGVuZCkgLyAyKTtcbiAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKGFyclttaWRwb2ludF0pXG5cbiAgICAgICAgY29uc29sZS5sb2cobWlkcG9pbnQpO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdOb2RlKTtcblxuICAgICAgICBuZXdOb2RlLmxlZnQgPSBidWlsZFRyZWUoYXJyLCBzdGFydCwgbWlkcG9pbnQtMSk7XG4gICAgICAgIG5ld05vZGUucmlnaHQgPSBidWlsZFRyZWUoYXJyLCBtaWRwb2ludCsxLCBlbmQpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld05vZGUpXG4gICAgICAgIHJldHVybiBuZXdOb2RlXG5cbiAgICB9XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIHNvcnRBcnJheSxcbiAgICAgICAgYnVpbGRUcmVlXG4gICAgfVxuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB0cmVlRmFjdG9yeSB9IGZyb20gXCIuL2JpbmFyeS10cmVlXCI7XG5cblxuXG5jb25zdCB0ZXN0QXJyYXkgPSBbOCwgNiwgOSwgMTAsIDMxLCA0NSwgMjIsIDIzLCAyLCAxNV07XG4vLyBjb25zdCB1bnNvcnRlZEFycmF5ID0gWzIzLCA0LCA1LCA3LCAzLCAyMCwgMzEsIDIyXTtcblxuY29uc3QgdGVzdFJ1biA9IHRyZWVGYWN0b3J5KCk7XG5jb25zdCBzb3J0ZWRBcnJheSA9IHRlc3RSdW4uc29ydEFycmF5KHRlc3RBcnJheSlcbmNvbnNvbGUubG9nKHNvcnRlZEFycmF5KTtcblxuXG50ZXN0UnVuLmJ1aWxkVHJlZShzb3J0ZWRBcnJheSwgMCwgc29ydGVkQXJyYXkubGVuZ3RoIC0gMSlcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
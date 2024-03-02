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
/* eslint-disable no-else-return */
/* eslint-disable import/prefer-default-export */
class Node {
    constructor(root, left, right) {
      this.root = root;
      this.left = null;
      this.right = null;
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

        // console.log(midpoint);
        console.log(newNode);

        newNode.left = buildTree(arr, start, midpoint-1);
        newNode.right = buildTree(arr, midpoint+1, end);

        console.log(newNode)
        console.log(newNode.root);
        return newNode

    };

    function insert(val, node) {
        if (node === null) {
            node = new Node(val);
            return node
            // return new Node(val)
        };
        console.log(node);
        // console.log(val);

        if (val < node.root) {
            console.log('root bigger');
            node.left = insert(val, node.left);
        } else if (val > node.root) {
            console.log('val bigger');
            node.right = insert(val, node.right);
        }

        console.log(node);
        return node 

    }

    function deleteNode(val, node) {
        if (node === null) {
            console.log('not in this branch');
            return node
        }
        

        if (node.root > val) {
            node.left = deleteNode(val, node.left)
            console.log(node.left)
            return node
        } if (node.root < val) {
            node.right = deleteNode(val, node.right)
            console.log(node.right)
            return node
        }

        
        if (node.root === val) {
            // if node has NO or only ONE children:
            if (node.left === null && node.right === null) {
                node = null;
                console.log('deleted leaf node');
                return node 

            } else if (node.left === null && node.right !== null) {
                node = node.right;
                return node
            } else if (node.right === null && node.left !== null) {
                node = node.left
                return node
            }

            // if BOTH children exist:
            if (node.left !== null && node.right !== null) {
                let successorParent = node;
                let successor = node.right;
                console.log('both children')

                while (successor.left !== null) {
                    successorParent = successor
                    successor = successor.left
                    console.log(successor);
                };

                if (successorParent !== node) {
                    successorParent.left = successor.right;
                } else {
                    successorParent.right = successor.right;
                }
                node.root = successor.root
                console.log(node)
                return node
                

            }


        }
        console.log('value doesnt exist')

        
    }


    return {
        sortArray,
        buildTree,
        insert,
        deleteNode
    }

}

/***/ }),

/***/ "./src/supporting-functions.js":
/*!*************************************!*\
  !*** ./src/supporting-functions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prettyPrint: () => (/* binding */ prettyPrint)
/* harmony export */ });
/* eslint-disable import/prefer-default-export */
// class Tree {
//     constructor(root) {
//         this.root = root
//     }
// }


// visulaizes the tree:
const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.root}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

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
/* harmony import */ var _supporting_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supporting-functions */ "./src/supporting-functions.js");





const testArray = [8, 6, 9, 10, 31, 45, 22, 23, 2, 15];

const testRun = (0,_binary_tree__WEBPACK_IMPORTED_MODULE_0__.treeFactory)();
const sortedArray = testRun.sortArray(testArray)
console.log(sortedArray);


const treeResult = testRun.buildTree(sortedArray, 0, sortedArray.length - 1)
console.log(treeResult);



testRun.insert(3, treeResult);
testRun.insert(16, treeResult);

// prettyPrint(treeResult);


console.log(treeResult.root)
testRun.deleteNode(9, treeResult);

(0,_supporting_functions__WEBPACK_IMPORTED_MODULE_1__.prettyPrint)(treeResult);

testRun.deleteNode(6, treeResult);
(0,_supporting_functions__WEBPACK_IMPORTED_MODULE_1__.prettyPrint)(treeResult);

// testRun.deleteNode(17, treeResult);
// prettyPrint(treeResult);

// testRun.deleteNode(22, treeResult);
// prettyPrint(treeResult);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN2SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsT0FBTyxFQUFFLHlCQUF5QjtBQUNuRTtBQUNBLG1CQUFtQixPQUFPLEVBQUUseUJBQXlCLEVBQUUsVUFBVTtBQUNqRTtBQUNBLGdDQUFnQyxPQUFPLEVBQUUseUJBQXlCO0FBQ2xFO0FBQ0E7Ozs7OztVQ3BCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ040QztBQUNTOzs7O0FBSXJEOztBQUVBLGdCQUFnQix5REFBVztBQUMzQjtBQUNBOzs7QUFHQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQSxrRUFBVzs7QUFFWDtBQUNBLGtFQUFXOztBQUVYO0FBQ0E7O0FBRUE7QUFDQSwyQiIsInNvdXJjZXMiOlsid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvYmluYXJ5LXRyZWUuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9zdXBwb3J0aW5nLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1lbHNlLXJldHVybiAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3Iocm9vdCwgbGVmdCwgcmlnaHQpIHtcbiAgICAgIHRoaXMucm9vdCA9IHJvb3Q7XG4gICAgICB0aGlzLmxlZnQgPSBudWxsO1xuICAgICAgdGhpcy5yaWdodCA9IG51bGw7XG4gICAgfVxuICB9XG5cblxuXG5leHBvcnQgY29uc3QgdHJlZUZhY3RvcnkgPSBmdW5jdGlvbigpIHtcblxuXG4gICAgZnVuY3Rpb24gc29ydEFycmF5KGFycikge1xuICAgICAgICBjb25zdCBzb3J0ZWRBcnJheSA9IGFyci5zb3J0KChhLCBiKSA9PiBhIC0gYilcbiAgICAgICAgcmV0dXJuIHNvcnRlZEFycmF5XG4gICAgfSBcblxuICAgIGZ1bmN0aW9uIGJ1aWxkVHJlZShhcnIsIHN0YXJ0LCBlbmQpIHtcblxuICAgICAgICBpZiAoc3RhcnQgPiBlbmQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtaWRwb2ludCA9IE1hdGguZmxvb3IoKHN0YXJ0ICsgZW5kKSAvIDIpO1xuICAgICAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUoYXJyW21pZHBvaW50XSlcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhtaWRwb2ludCk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld05vZGUpO1xuXG4gICAgICAgIG5ld05vZGUubGVmdCA9IGJ1aWxkVHJlZShhcnIsIHN0YXJ0LCBtaWRwb2ludC0xKTtcbiAgICAgICAgbmV3Tm9kZS5yaWdodCA9IGJ1aWxkVHJlZShhcnIsIG1pZHBvaW50KzEsIGVuZCk7XG5cbiAgICAgICAgY29uc29sZS5sb2cobmV3Tm9kZSlcbiAgICAgICAgY29uc29sZS5sb2cobmV3Tm9kZS5yb290KTtcbiAgICAgICAgcmV0dXJuIG5ld05vZGVcblxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBpbnNlcnQodmFsLCBub2RlKSB7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICBub2RlID0gbmV3IE5vZGUodmFsKTtcbiAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgICAgICAvLyByZXR1cm4gbmV3IE5vZGUodmFsKVxuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyhub2RlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codmFsKTtcblxuICAgICAgICBpZiAodmFsIDwgbm9kZS5yb290KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncm9vdCBiaWdnZXInKTtcbiAgICAgICAgICAgIG5vZGUubGVmdCA9IGluc2VydCh2YWwsIG5vZGUubGVmdCk7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsID4gbm9kZS5yb290KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndmFsIGJpZ2dlcicpO1xuICAgICAgICAgICAgbm9kZS5yaWdodCA9IGluc2VydCh2YWwsIG5vZGUucmlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2cobm9kZSk7XG4gICAgICAgIHJldHVybiBub2RlIFxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlTm9kZSh2YWwsIG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub3QgaW4gdGhpcyBicmFuY2gnKTtcbiAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgaWYgKG5vZGUucm9vdCA+IHZhbCkge1xuICAgICAgICAgICAgbm9kZS5sZWZ0ID0gZGVsZXRlTm9kZSh2YWwsIG5vZGUubGVmdClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vZGUubGVmdClcbiAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgIH0gaWYgKG5vZGUucm9vdCA8IHZhbCkge1xuICAgICAgICAgICAgbm9kZS5yaWdodCA9IGRlbGV0ZU5vZGUodmFsLCBub2RlLnJpZ2h0KVxuICAgICAgICAgICAgY29uc29sZS5sb2cobm9kZS5yaWdodClcbiAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgICAgaWYgKG5vZGUucm9vdCA9PT0gdmFsKSB7XG4gICAgICAgICAgICAvLyBpZiBub2RlIGhhcyBOTyBvciBvbmx5IE9ORSBjaGlsZHJlbjpcbiAgICAgICAgICAgIGlmIChub2RlLmxlZnQgPT09IG51bGwgJiYgbm9kZS5yaWdodCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWxldGVkIGxlYWYgbm9kZScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlIFxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUubGVmdCA9PT0gbnVsbCAmJiBub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IG5vZGUucmlnaHQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS5yaWdodCA9PT0gbnVsbCAmJiBub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5sZWZ0XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgQk9USCBjaGlsZHJlbiBleGlzdDpcbiAgICAgICAgICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwgJiYgbm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxldCBzdWNjZXNzb3JQYXJlbnQgPSBub2RlO1xuICAgICAgICAgICAgICAgIGxldCBzdWNjZXNzb3IgPSBub2RlLnJpZ2h0O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdib3RoIGNoaWxkcmVuJylcblxuICAgICAgICAgICAgICAgIHdoaWxlIChzdWNjZXNzb3IubGVmdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzb3JQYXJlbnQgPSBzdWNjZXNzb3JcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc29yID0gc3VjY2Vzc29yLmxlZnRcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3VjY2Vzc29yKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3NvclBhcmVudCAhPT0gbm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzb3JQYXJlbnQubGVmdCA9IHN1Y2Nlc3Nvci5yaWdodDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzb3JQYXJlbnQucmlnaHQgPSBzdWNjZXNzb3IucmlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUucm9vdCA9IHN1Y2Nlc3Nvci5yb290XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobm9kZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCd2YWx1ZSBkb2VzbnQgZXhpc3QnKVxuXG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc29ydEFycmF5LFxuICAgICAgICBidWlsZFRyZWUsXG4gICAgICAgIGluc2VydCxcbiAgICAgICAgZGVsZXRlTm9kZVxuICAgIH1cblxufSIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbi8vIGNsYXNzIFRyZWUge1xuLy8gICAgIGNvbnN0cnVjdG9yKHJvb3QpIHtcbi8vICAgICAgICAgdGhpcy5yb290ID0gcm9vdFxuLy8gICAgIH1cbi8vIH1cblxuXG4vLyB2aXN1bGFpemVzIHRoZSB0cmVlOlxuZXhwb3J0IGNvbnN0IHByZXR0eVByaW50ID0gKG5vZGUsIHByZWZpeCA9IFwiXCIsIGlzTGVmdCA9IHRydWUpID0+IHtcbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgICAgcHJldHR5UHJpbnQobm9kZS5yaWdodCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilIIgICBcIiA6IFwiICAgIFwifWAsIGZhbHNlKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilJTilIDilIAgXCIgOiBcIuKUjOKUgOKUgCBcIn0ke25vZGUucm9vdH1gKTtcbiAgICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICBwcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwiICAgIFwiIDogXCLilIIgICBcIn1gLCB0cnVlKTtcbiAgICB9XG4gIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB0cmVlRmFjdG9yeSB9IGZyb20gXCIuL2JpbmFyeS10cmVlXCI7XG5pbXBvcnQgeyBwcmV0dHlQcmludCB9IGZyb20gXCIuL3N1cHBvcnRpbmctZnVuY3Rpb25zXCI7XG5cblxuXG5jb25zdCB0ZXN0QXJyYXkgPSBbOCwgNiwgOSwgMTAsIDMxLCA0NSwgMjIsIDIzLCAyLCAxNV07XG5cbmNvbnN0IHRlc3RSdW4gPSB0cmVlRmFjdG9yeSgpO1xuY29uc3Qgc29ydGVkQXJyYXkgPSB0ZXN0UnVuLnNvcnRBcnJheSh0ZXN0QXJyYXkpXG5jb25zb2xlLmxvZyhzb3J0ZWRBcnJheSk7XG5cblxuY29uc3QgdHJlZVJlc3VsdCA9IHRlc3RSdW4uYnVpbGRUcmVlKHNvcnRlZEFycmF5LCAwLCBzb3J0ZWRBcnJheS5sZW5ndGggLSAxKVxuY29uc29sZS5sb2codHJlZVJlc3VsdCk7XG5cblxuXG50ZXN0UnVuLmluc2VydCgzLCB0cmVlUmVzdWx0KTtcbnRlc3RSdW4uaW5zZXJ0KDE2LCB0cmVlUmVzdWx0KTtcblxuLy8gcHJldHR5UHJpbnQodHJlZVJlc3VsdCk7XG5cblxuY29uc29sZS5sb2codHJlZVJlc3VsdC5yb290KVxudGVzdFJ1bi5kZWxldGVOb2RlKDksIHRyZWVSZXN1bHQpO1xuXG5wcmV0dHlQcmludCh0cmVlUmVzdWx0KTtcblxudGVzdFJ1bi5kZWxldGVOb2RlKDYsIHRyZWVSZXN1bHQpO1xucHJldHR5UHJpbnQodHJlZVJlc3VsdCk7XG5cbi8vIHRlc3RSdW4uZGVsZXRlTm9kZSgxNywgdHJlZVJlc3VsdCk7XG4vLyBwcmV0dHlQcmludCh0cmVlUmVzdWx0KTtcblxuLy8gdGVzdFJ1bi5kZWxldGVOb2RlKDIyLCB0cmVlUmVzdWx0KTtcbi8vIHByZXR0eVByaW50KHRyZWVSZXN1bHQpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
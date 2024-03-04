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
/* harmony import */ var _supporting_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supporting-functions */ "./src/supporting-functions.js");
/* eslint-disable no-else-return */
/* eslint-disable import/prefer-default-export */


class Node {
    constructor(data, left, right) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }



const treeFactory = function(starterArray) {

    function sortArray(arr) {
        const orderedArray = arr.sort((a, b) => a - b)
        console.log(orderedArray);
        return orderedArray
    } 

    function buildTree(arr, start, end) {

        if (start > end) {
            return null
        }

        const midpoint = Math.floor((start + end) / 2);
        const newNode = new Node(arr[midpoint])

        // console.log(midpoint);
        // console.log(newNode);

        newNode.left = buildTree(arr, start, midpoint-1);
        newNode.right = buildTree(arr, midpoint+1, end);

        // console.log(newNode)
        // console.log(newNode.data);
        return newNode

    };

    const sortedArray = sortArray(starterArray);
    const root = buildTree(sortedArray, 0, sortedArray.length - 1)
    console.log(root);
    (0,_supporting_functions__WEBPACK_IMPORTED_MODULE_0__.prettyPrint)(root);


    function insert(val, node) {
        if (node === null) {
            node = new Node(val);
            return node
    
        };
        console.log(node);
        // console.log(val);

        if (val < node.data) {
            console.log('root bigger');
            node.left = insert(val, node.left);
        } else if (val > node.data) {
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
        

        if (node.data > val) {
            node.left = deleteNode(val, node.left)
            console.log(node.left)
            return node
        } if (node.data < val) {
            node.right = deleteNode(val, node.right)
            console.log(node.right)
            return node
        }

        
        if (node.data === val) {
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
                node.data = successor.data
                console.log(node)
                return node
                

            }


        }
        console.log('value doesnt exist')
        
    }

    function find(val, node) {
        if (node === null) {
            return node
        }

        if (val < node.data) {
            node.left = find(val, node.left)
            return node
        } else if(val > node.data) {
            node.right = find(val, node.right)
        }

        if (node.data === val) {
            console.log(node);
            console.log(`Here is your node: ${node.data}`);
            return node
        }

    }

    // function levelOrder(node) {
    //     if (node === null) {return node}

    //     const rootOrder =[];
    //     const queue = [];

    //     console.log(node)
    //     queue.push(node);
    //     const current = queue[0];
    //     console.log(queue)

    //     while (queue.length > 0) {
    //         console.log(current)
    //         console.log(queue)
    //         rootOrder.push(current.root)

    //         if (current.left !== null) {
    //             queue.push(current.left)
    //         }
    //         if (current.right !== null) {
    //             queue.push(current.right);
    //         }
    //         queue.shift();
    //         current = queue[0]
    //         console.log(queue);
    //     }
    //     return rootOrder
       
    // }

   

    return {
        sortArray,
        buildTree,
        insert,
        deleteNode,
        find,
        
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



// visulaizes the tree:
const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
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

const testRun = (0,_binary_tree__WEBPACK_IMPORTED_MODULE_0__.treeFactory)(testArray);
// const sortedArray = testRun.sortArray(testArray)
// console.log(sortedArray);


// const treeResult = testRun.buildTree(sortedArray, 0, sortedArray.length - 1)
// console.log(treeResult);




// testRun.insert(3, treeResult);
// testRun.insert(16, treeResult);

// // prettyPrint(treeResult);


// console.log(treeResult.root)
// testRun.deleteNode(9, treeResult);

// prettyPrint(treeResult);

// testRun.deleteNode(6, treeResult);
// prettyPrint(treeResult);


// testRun.find(22, treeResult);

// testRun.levelOrder(treeResult)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ3FEOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtFQUFXOzs7QUFHZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYztBQUNkO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhDQUE4QyxVQUFVO0FBQ3hEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwrQkFBK0I7O0FBRS9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNuTUE7Ozs7QUFJQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsT0FBTyxFQUFFLHlCQUF5QjtBQUNuRTtBQUNBLG1CQUFtQixPQUFPLEVBQUUseUJBQXlCLEVBQUUsVUFBVTtBQUNqRTtBQUNBLGdDQUFnQyxPQUFPLEVBQUUseUJBQXlCO0FBQ2xFO0FBQ0E7Ozs7OztVQ2hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ040QztBQUNTOzs7O0FBSXJEOztBQUVBLGdCQUFnQix5REFBVztBQUMzQjtBQUNBOzs7QUFHQTtBQUNBOzs7OztBQUtBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUEsaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4vc3JjL2JpbmFyeS10cmVlLmpzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvc3VwcG9ydGluZy1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tZWxzZS1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCB7IHByZXR0eVByaW50IH0gZnJvbSBcIi4vc3VwcG9ydGluZy1mdW5jdGlvbnNcIjtcblxuY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSwgbGVmdCwgcmlnaHQpIHtcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICB0aGlzLmxlZnQgPSBudWxsO1xuICAgICAgdGhpcy5yaWdodCA9IG51bGw7XG4gICAgfVxuICB9XG5cblxuXG5leHBvcnQgY29uc3QgdHJlZUZhY3RvcnkgPSBmdW5jdGlvbihzdGFydGVyQXJyYXkpIHtcblxuICAgIGZ1bmN0aW9uIHNvcnRBcnJheShhcnIpIHtcbiAgICAgICAgY29uc3Qgb3JkZXJlZEFycmF5ID0gYXJyLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICAgICAgICBjb25zb2xlLmxvZyhvcmRlcmVkQXJyYXkpO1xuICAgICAgICByZXR1cm4gb3JkZXJlZEFycmF5XG4gICAgfSBcblxuICAgIGZ1bmN0aW9uIGJ1aWxkVHJlZShhcnIsIHN0YXJ0LCBlbmQpIHtcblxuICAgICAgICBpZiAoc3RhcnQgPiBlbmQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtaWRwb2ludCA9IE1hdGguZmxvb3IoKHN0YXJ0ICsgZW5kKSAvIDIpO1xuICAgICAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUoYXJyW21pZHBvaW50XSlcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhtaWRwb2ludCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld05vZGUpO1xuXG4gICAgICAgIG5ld05vZGUubGVmdCA9IGJ1aWxkVHJlZShhcnIsIHN0YXJ0LCBtaWRwb2ludC0xKTtcbiAgICAgICAgbmV3Tm9kZS5yaWdodCA9IGJ1aWxkVHJlZShhcnIsIG1pZHBvaW50KzEsIGVuZCk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2cobmV3Tm9kZSlcbiAgICAgICAgLy8gY29uc29sZS5sb2cobmV3Tm9kZS5kYXRhKTtcbiAgICAgICAgcmV0dXJuIG5ld05vZGVcblxuICAgIH07XG5cbiAgICBjb25zdCBzb3J0ZWRBcnJheSA9IHNvcnRBcnJheShzdGFydGVyQXJyYXkpO1xuICAgIGNvbnN0IHJvb3QgPSBidWlsZFRyZWUoc29ydGVkQXJyYXksIDAsIHNvcnRlZEFycmF5Lmxlbmd0aCAtIDEpXG4gICAgY29uc29sZS5sb2cocm9vdCk7XG4gICAgcHJldHR5UHJpbnQocm9vdCk7XG5cblxuICAgIGZ1bmN0aW9uIGluc2VydCh2YWwsIG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUgPSBuZXcgTm9kZSh2YWwpO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICBcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2cobm9kZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbCk7XG5cbiAgICAgICAgaWYgKHZhbCA8IG5vZGUuZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jvb3QgYmlnZ2VyJyk7XG4gICAgICAgICAgICBub2RlLmxlZnQgPSBpbnNlcnQodmFsLCBub2RlLmxlZnQpO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbCA+IG5vZGUuZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZhbCBiaWdnZXInKTtcbiAgICAgICAgICAgIG5vZGUucmlnaHQgPSBpbnNlcnQodmFsLCBub2RlLnJpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKG5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZSBcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZU5vZGUodmFsLCBub2RlKSB7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm90IGluIHRoaXMgYnJhbmNoJyk7XG4gICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIGlmIChub2RlLmRhdGEgPiB2YWwpIHtcbiAgICAgICAgICAgIG5vZGUubGVmdCA9IGRlbGV0ZU5vZGUodmFsLCBub2RlLmxlZnQpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhub2RlLmxlZnQpXG4gICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICB9IGlmIChub2RlLmRhdGEgPCB2YWwpIHtcbiAgICAgICAgICAgIG5vZGUucmlnaHQgPSBkZWxldGVOb2RlKHZhbCwgbm9kZS5yaWdodClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vZGUucmlnaHQpXG4gICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIGlmIChub2RlLmRhdGEgPT09IHZhbCkge1xuICAgICAgICAgICAgLy8gaWYgbm9kZSBoYXMgTk8gb3Igb25seSBPTkUgY2hpbGRyZW46XG4gICAgICAgICAgICBpZiAobm9kZS5sZWZ0ID09PSBudWxsICYmIG5vZGUucmlnaHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlZCBsZWFmIG5vZGUnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZSBcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlLmxlZnQgPT09IG51bGwgJiYgbm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLnJpZ2h0O1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUucmlnaHQgPT09IG51bGwgJiYgbm9kZS5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IG5vZGUubGVmdFxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIEJPVEggY2hpbGRyZW4gZXhpc3Q6XG4gICAgICAgICAgICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsICYmIG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3VjY2Vzc29yUGFyZW50ID0gbm9kZTtcbiAgICAgICAgICAgICAgICBsZXQgc3VjY2Vzc29yID0gbm9kZS5yaWdodDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYm90aCBjaGlsZHJlbicpXG5cbiAgICAgICAgICAgICAgICB3aGlsZSAoc3VjY2Vzc29yLmxlZnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc29yUGFyZW50ID0gc3VjY2Vzc29yXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NvciA9IHN1Y2Nlc3Nvci5sZWZ0XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1Y2Nlc3Nvcik7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzb3JQYXJlbnQgIT09IG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc29yUGFyZW50LmxlZnQgPSBzdWNjZXNzb3IucmlnaHQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc29yUGFyZW50LnJpZ2h0ID0gc3VjY2Vzc29yLnJpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlLmRhdGEgPSBzdWNjZXNzb3IuZGF0YVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vZGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygndmFsdWUgZG9lc250IGV4aXN0JylcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmluZCh2YWwsIG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsIDwgbm9kZS5kYXRhKSB7XG4gICAgICAgICAgICBub2RlLmxlZnQgPSBmaW5kKHZhbCwgbm9kZS5sZWZ0KVxuICAgICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgfSBlbHNlIGlmKHZhbCA+IG5vZGUuZGF0YSkge1xuICAgICAgICAgICAgbm9kZS5yaWdodCA9IGZpbmQodmFsLCBub2RlLnJpZ2h0KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUuZGF0YSA9PT0gdmFsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhub2RlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBIZXJlIGlzIHlvdXIgbm9kZTogJHtub2RlLmRhdGF9YCk7XG4gICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyBmdW5jdGlvbiBsZXZlbE9yZGVyKG5vZGUpIHtcbiAgICAvLyAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtyZXR1cm4gbm9kZX1cblxuICAgIC8vICAgICBjb25zdCByb290T3JkZXIgPVtdO1xuICAgIC8vICAgICBjb25zdCBxdWV1ZSA9IFtdO1xuXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKG5vZGUpXG4gICAgLy8gICAgIHF1ZXVlLnB1c2gobm9kZSk7XG4gICAgLy8gICAgIGNvbnN0IGN1cnJlbnQgPSBxdWV1ZVswXTtcbiAgICAvLyAgICAgY29uc29sZS5sb2cocXVldWUpXG5cbiAgICAvLyAgICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnQpXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhxdWV1ZSlcbiAgICAvLyAgICAgICAgIHJvb3RPcmRlci5wdXNoKGN1cnJlbnQucm9vdClcblxuICAgIC8vICAgICAgICAgaWYgKGN1cnJlbnQubGVmdCAhPT0gbnVsbCkge1xuICAgIC8vICAgICAgICAgICAgIHF1ZXVlLnB1c2goY3VycmVudC5sZWZ0KVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgaWYgKGN1cnJlbnQucmlnaHQgIT09IG51bGwpIHtcbiAgICAvLyAgICAgICAgICAgICBxdWV1ZS5wdXNoKGN1cnJlbnQucmlnaHQpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgcXVldWUuc2hpZnQoKTtcbiAgICAvLyAgICAgICAgIGN1cnJlbnQgPSBxdWV1ZVswXVxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2cocXVldWUpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiByb290T3JkZXJcbiAgICAgICBcbiAgICAvLyB9XG5cbiAgIFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc29ydEFycmF5LFxuICAgICAgICBidWlsZFRyZWUsXG4gICAgICAgIGluc2VydCxcbiAgICAgICAgZGVsZXRlTm9kZSxcbiAgICAgICAgZmluZCxcbiAgICAgICAgXG4gICAgfVxuXG59IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuXG5cblxuLy8gdmlzdWxhaXplcyB0aGUgdHJlZTpcbmV4cG9ydCBjb25zdCBwcmV0dHlQcmludCA9IChub2RlLCBwcmVmaXggPSBcIlwiLCBpc0xlZnQgPSB0cnVlKSA9PiB7XG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICAgIHByZXR0eVByaW50KG5vZGUucmlnaHQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSCICAgXCIgOiBcIiAgICBcIn1gLCBmYWxzZSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSU4pSA4pSAIFwiIDogXCLilIzilIDilIAgXCJ9JHtub2RlLmRhdGF9YCk7XG4gICAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xuICAgICAgcHJldHR5UHJpbnQobm9kZS5sZWZ0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIiAgICBcIiA6IFwi4pSCICAgXCJ9YCwgdHJ1ZSk7XG4gICAgfVxuICB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgdHJlZUZhY3RvcnkgfSBmcm9tIFwiLi9iaW5hcnktdHJlZVwiO1xuaW1wb3J0IHsgcHJldHR5UHJpbnQgfSBmcm9tIFwiLi9zdXBwb3J0aW5nLWZ1bmN0aW9uc1wiO1xuXG5cblxuY29uc3QgdGVzdEFycmF5ID0gWzgsIDYsIDksIDEwLCAzMSwgNDUsIDIyLCAyMywgMiwgMTVdO1xuXG5jb25zdCB0ZXN0UnVuID0gdHJlZUZhY3RvcnkodGVzdEFycmF5KTtcbi8vIGNvbnN0IHNvcnRlZEFycmF5ID0gdGVzdFJ1bi5zb3J0QXJyYXkodGVzdEFycmF5KVxuLy8gY29uc29sZS5sb2coc29ydGVkQXJyYXkpO1xuXG5cbi8vIGNvbnN0IHRyZWVSZXN1bHQgPSB0ZXN0UnVuLmJ1aWxkVHJlZShzb3J0ZWRBcnJheSwgMCwgc29ydGVkQXJyYXkubGVuZ3RoIC0gMSlcbi8vIGNvbnNvbGUubG9nKHRyZWVSZXN1bHQpO1xuXG5cblxuXG4vLyB0ZXN0UnVuLmluc2VydCgzLCB0cmVlUmVzdWx0KTtcbi8vIHRlc3RSdW4uaW5zZXJ0KDE2LCB0cmVlUmVzdWx0KTtcblxuLy8gLy8gcHJldHR5UHJpbnQodHJlZVJlc3VsdCk7XG5cblxuLy8gY29uc29sZS5sb2codHJlZVJlc3VsdC5yb290KVxuLy8gdGVzdFJ1bi5kZWxldGVOb2RlKDksIHRyZWVSZXN1bHQpO1xuXG4vLyBwcmV0dHlQcmludCh0cmVlUmVzdWx0KTtcblxuLy8gdGVzdFJ1bi5kZWxldGVOb2RlKDYsIHRyZWVSZXN1bHQpO1xuLy8gcHJldHR5UHJpbnQodHJlZVJlc3VsdCk7XG5cblxuLy8gdGVzdFJ1bi5maW5kKDIyLCB0cmVlUmVzdWx0KTtcblxuLy8gdGVzdFJ1bi5sZXZlbE9yZGVyKHRyZWVSZXN1bHQpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
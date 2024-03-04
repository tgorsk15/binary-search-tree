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


    function insert(val, node = root) {
        console.log(root);
        if (node === null) {
            node = new Node(val);
            return node
    
        };

        if (val < node.data) {
            console.log('root bigger');
            node.left = insert(val, node.left);
        } else if (val > node.data) {
            console.log('val bigger');
            node.right = insert(val, node.right);
        }

        console.log(node);
        (0,_supporting_functions__WEBPACK_IMPORTED_MODULE_0__.prettyPrint)(root);
        return node 

    }

    function deleteNode(val, node = root) {
        console.log(root)
        if (node === null) {
            console.log('not in this branch');
            return node
        }
        

        if (node.data > val) {
            node.left = deleteNode(val, node.left)
            console.log(node.left)
            ;(0,_supporting_functions__WEBPACK_IMPORTED_MODULE_0__.prettyPrint)(root);
            return node
        } if (node.data < val) {
            node.right = deleteNode(val, node.right)
            console.log(node.right)
            ;(0,_supporting_functions__WEBPACK_IMPORTED_MODULE_0__.prettyPrint)(root);
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

    function find(val, node = root) {
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

    function levelOrder(callback) {
        console.log(root);

        const rootOrder =[];
        const queue = [root];
        console.log(queue);

        
        // const current = queue[0];
        if (!callback) {
            callback = (node) => {
                console.log('callback ran');

                if (node.data !== null) {
                    rootOrder.push(node.data);
                }
                
                console.log(rootOrder);
            }
        }

        while (queue.length > 0) {
            const node = queue.shift();
            console.log(queue);
            console.log(node);

            if (node.left !== null) {
                console.log(node.left)
                queue.push(node.left)
            } 
            if (node.right !== null) {
                console.log(node.right)
                queue.push(node.right);
            }
            
            callback(node)
        }
        console.log(rootOrder);
        return rootOrder
       
    }

   

    return {
        sortArray,
        buildTree,
        insert,
        deleteNode,
        find,
        levelOrder
        
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




testRun.insert(3);
testRun.insert(16);

testRun.deleteNode(9);

testRun.deleteNode(6);


testRun.find(22);

// testRun.levelOrder()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ3FEOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtFQUFXOzs7QUFHZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxrRUFBVztBQUNuQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1FQUFXO0FBQ3ZCO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxZQUFZLG1FQUFXO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYztBQUNkO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhDQUE4QyxVQUFVO0FBQ3hEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ25OQTs7OztBQUlBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxPQUFPLEVBQUUseUJBQXlCO0FBQ25FO0FBQ0EsbUJBQW1CLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxVQUFVO0FBQ2pFO0FBQ0EsZ0NBQWdDLE9BQU8sRUFBRSx5QkFBeUI7QUFDbEU7QUFDQTs7Ozs7O1VDaEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQ1M7Ozs7QUFJckQ7O0FBRUEsZ0JBQWdCLHlEQUFXO0FBQzNCO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7O0FBS0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUEsdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4vc3JjL2JpbmFyeS10cmVlLmpzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvc3VwcG9ydGluZy1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tZWxzZS1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCB7IHByZXR0eVByaW50IH0gZnJvbSBcIi4vc3VwcG9ydGluZy1mdW5jdGlvbnNcIjtcblxuY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSwgbGVmdCwgcmlnaHQpIHtcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICB0aGlzLmxlZnQgPSBudWxsO1xuICAgICAgdGhpcy5yaWdodCA9IG51bGw7XG4gICAgfVxuICB9XG5cblxuXG5leHBvcnQgY29uc3QgdHJlZUZhY3RvcnkgPSBmdW5jdGlvbihzdGFydGVyQXJyYXkpIHtcblxuICAgIGZ1bmN0aW9uIHNvcnRBcnJheShhcnIpIHtcbiAgICAgICAgY29uc3Qgb3JkZXJlZEFycmF5ID0gYXJyLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICAgICAgICBjb25zb2xlLmxvZyhvcmRlcmVkQXJyYXkpO1xuICAgICAgICByZXR1cm4gb3JkZXJlZEFycmF5XG4gICAgfSBcblxuICAgIGZ1bmN0aW9uIGJ1aWxkVHJlZShhcnIsIHN0YXJ0LCBlbmQpIHtcblxuICAgICAgICBpZiAoc3RhcnQgPiBlbmQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtaWRwb2ludCA9IE1hdGguZmxvb3IoKHN0YXJ0ICsgZW5kKSAvIDIpO1xuICAgICAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUoYXJyW21pZHBvaW50XSlcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhtaWRwb2ludCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld05vZGUpO1xuXG4gICAgICAgIG5ld05vZGUubGVmdCA9IGJ1aWxkVHJlZShhcnIsIHN0YXJ0LCBtaWRwb2ludC0xKTtcbiAgICAgICAgbmV3Tm9kZS5yaWdodCA9IGJ1aWxkVHJlZShhcnIsIG1pZHBvaW50KzEsIGVuZCk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2cobmV3Tm9kZSlcbiAgICAgICAgLy8gY29uc29sZS5sb2cobmV3Tm9kZS5kYXRhKTtcbiAgICAgICAgcmV0dXJuIG5ld05vZGVcblxuICAgIH07XG5cbiAgICBjb25zdCBzb3J0ZWRBcnJheSA9IHNvcnRBcnJheShzdGFydGVyQXJyYXkpO1xuICAgIGNvbnN0IHJvb3QgPSBidWlsZFRyZWUoc29ydGVkQXJyYXksIDAsIHNvcnRlZEFycmF5Lmxlbmd0aCAtIDEpXG4gICAgY29uc29sZS5sb2cocm9vdCk7XG4gICAgcHJldHR5UHJpbnQocm9vdCk7XG5cblxuICAgIGZ1bmN0aW9uIGluc2VydCh2YWwsIG5vZGUgPSByb290KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJvb3QpO1xuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbm9kZSA9IG5ldyBOb2RlKHZhbCk7XG4gICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgIFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh2YWwgPCBub2RlLmRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyb290IGJpZ2dlcicpO1xuICAgICAgICAgICAgbm9kZS5sZWZ0ID0gaW5zZXJ0KHZhbCwgbm9kZS5sZWZ0KTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWwgPiBub2RlLmRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2YWwgYmlnZ2VyJyk7XG4gICAgICAgICAgICBub2RlLnJpZ2h0ID0gaW5zZXJ0KHZhbCwgbm9kZS5yaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhub2RlKTtcbiAgICAgICAgcHJldHR5UHJpbnQocm9vdCk7XG4gICAgICAgIHJldHVybiBub2RlIFxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlTm9kZSh2YWwsIG5vZGUgPSByb290KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJvb3QpXG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm90IGluIHRoaXMgYnJhbmNoJyk7XG4gICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIGlmIChub2RlLmRhdGEgPiB2YWwpIHtcbiAgICAgICAgICAgIG5vZGUubGVmdCA9IGRlbGV0ZU5vZGUodmFsLCBub2RlLmxlZnQpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhub2RlLmxlZnQpXG4gICAgICAgICAgICBwcmV0dHlQcmludChyb290KTtcbiAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgIH0gaWYgKG5vZGUuZGF0YSA8IHZhbCkge1xuICAgICAgICAgICAgbm9kZS5yaWdodCA9IGRlbGV0ZU5vZGUodmFsLCBub2RlLnJpZ2h0KVxuICAgICAgICAgICAgY29uc29sZS5sb2cobm9kZS5yaWdodClcbiAgICAgICAgICAgIHByZXR0eVByaW50KHJvb3QpO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgICAgICBpZiAobm9kZS5kYXRhID09PSB2YWwpIHtcbiAgICAgICAgICAgIC8vIGlmIG5vZGUgaGFzIE5PIG9yIG9ubHkgT05FIGNoaWxkcmVuOlxuICAgICAgICAgICAgaWYgKG5vZGUubGVmdCA9PT0gbnVsbCAmJiBub2RlLnJpZ2h0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlbGV0ZWQgbGVhZiBub2RlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUgXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS5sZWZ0ID09PSBudWxsICYmIG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5yaWdodDtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlLnJpZ2h0ID09PSBudWxsICYmIG5vZGUubGVmdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLmxlZnRcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiBCT1RIIGNoaWxkcmVuIGV4aXN0OlxuICAgICAgICAgICAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCAmJiBub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN1Y2Nlc3NvclBhcmVudCA9IG5vZGU7XG4gICAgICAgICAgICAgICAgbGV0IHN1Y2Nlc3NvciA9IG5vZGUucmlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2JvdGggY2hpbGRyZW4nKVxuXG4gICAgICAgICAgICAgICAgd2hpbGUgKHN1Y2Nlc3Nvci5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NvclBhcmVudCA9IHN1Y2Nlc3NvclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzb3IgPSBzdWNjZXNzb3IubGVmdFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdWNjZXNzb3IpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZiAoc3VjY2Vzc29yUGFyZW50ICE9PSBub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NvclBhcmVudC5sZWZ0ID0gc3VjY2Vzc29yLnJpZ2h0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NvclBhcmVudC5yaWdodCA9IHN1Y2Nlc3Nvci5yaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbm9kZS5kYXRhID0gc3VjY2Vzc29yLmRhdGFcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhub2RlKVxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbHVlIGRvZXNudCBleGlzdCcpXG4gICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbmQodmFsLCBub2RlID0gcm9vdCkge1xuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWwgPCBub2RlLmRhdGEpIHtcbiAgICAgICAgICAgIG5vZGUubGVmdCA9IGZpbmQodmFsLCBub2RlLmxlZnQpXG4gICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICB9IGVsc2UgaWYodmFsID4gbm9kZS5kYXRhKSB7XG4gICAgICAgICAgICBub2RlLnJpZ2h0ID0gZmluZCh2YWwsIG5vZGUucmlnaHQpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZS5kYXRhID09PSB2YWwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vZGUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEhlcmUgaXMgeW91ciBub2RlOiAke25vZGUuZGF0YX1gKTtcbiAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxldmVsT3JkZXIoY2FsbGJhY2spIHtcbiAgICAgICAgY29uc29sZS5sb2cocm9vdCk7XG5cbiAgICAgICAgY29uc3Qgcm9vdE9yZGVyID1bXTtcbiAgICAgICAgY29uc3QgcXVldWUgPSBbcm9vdF07XG4gICAgICAgIGNvbnNvbGUubG9nKHF1ZXVlKTtcblxuICAgICAgICBcbiAgICAgICAgLy8gY29uc3QgY3VycmVudCA9IHF1ZXVlWzBdO1xuICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IChub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhbGxiYWNrIHJhbicpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuZGF0YSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByb290T3JkZXIucHVzaChub2RlLmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyb290T3JkZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocXVldWUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhub2RlLmxlZnQpXG4gICAgICAgICAgICAgICAgcXVldWUucHVzaChub2RlLmxlZnQpXG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhub2RlLnJpZ2h0KVxuICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2gobm9kZS5yaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhbGxiYWNrKG5vZGUpXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cocm9vdE9yZGVyKTtcbiAgICAgICAgcmV0dXJuIHJvb3RPcmRlclxuICAgICAgIFxuICAgIH1cblxuICAgXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzb3J0QXJyYXksXG4gICAgICAgIGJ1aWxkVHJlZSxcbiAgICAgICAgaW5zZXJ0LFxuICAgICAgICBkZWxldGVOb2RlLFxuICAgICAgICBmaW5kLFxuICAgICAgICBsZXZlbE9yZGVyXG4gICAgICAgIFxuICAgIH1cblxufSIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cblxuXG5cbi8vIHZpc3VsYWl6ZXMgdGhlIHRyZWU6XG5leHBvcnQgY29uc3QgcHJldHR5UHJpbnQgPSAobm9kZSwgcHJlZml4ID0gXCJcIiwgaXNMZWZ0ID0gdHJ1ZSkgPT4ge1xuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICBwcmV0dHlQcmludChub2RlLnJpZ2h0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUgiAgIFwiIDogXCIgICAgXCJ9YCwgZmFsc2UpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUlOKUgOKUgCBcIiA6IFwi4pSM4pSA4pSAIFwifSR7bm9kZS5kYXRhfWApO1xuICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICAgIHByZXR0eVByaW50KG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCIgICAgXCIgOiBcIuKUgiAgIFwifWAsIHRydWUpO1xuICAgIH1cbiAgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHRyZWVGYWN0b3J5IH0gZnJvbSBcIi4vYmluYXJ5LXRyZWVcIjtcbmltcG9ydCB7IHByZXR0eVByaW50IH0gZnJvbSBcIi4vc3VwcG9ydGluZy1mdW5jdGlvbnNcIjtcblxuXG5cbmNvbnN0IHRlc3RBcnJheSA9IFs4LCA2LCA5LCAxMCwgMzEsIDQ1LCAyMiwgMjMsIDIsIDE1XTtcblxuY29uc3QgdGVzdFJ1biA9IHRyZWVGYWN0b3J5KHRlc3RBcnJheSk7XG4vLyBjb25zdCBzb3J0ZWRBcnJheSA9IHRlc3RSdW4uc29ydEFycmF5KHRlc3RBcnJheSlcbi8vIGNvbnNvbGUubG9nKHNvcnRlZEFycmF5KTtcblxuXG4vLyBjb25zdCB0cmVlUmVzdWx0ID0gdGVzdFJ1bi5idWlsZFRyZWUoc29ydGVkQXJyYXksIDAsIHNvcnRlZEFycmF5Lmxlbmd0aCAtIDEpXG4vLyBjb25zb2xlLmxvZyh0cmVlUmVzdWx0KTtcblxuXG5cblxudGVzdFJ1bi5pbnNlcnQoMyk7XG50ZXN0UnVuLmluc2VydCgxNik7XG5cbnRlc3RSdW4uZGVsZXRlTm9kZSg5KTtcblxudGVzdFJ1bi5kZWxldGVOb2RlKDYpO1xuXG5cbnRlc3RSdW4uZmluZCgyMik7XG5cbi8vIHRlc3RSdW4ubGV2ZWxPcmRlcigpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
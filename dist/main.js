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
/* eslint-disable arrow-body-style */
/* eslint-disable radix */
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
        const uniqueArray = orderedArray.filter((val, index) => {
            return orderedArray.indexOf(val) === index
        })
        console.log(uniqueArray);
        return uniqueArray
    } 

    function buildTree(arr, start, end) {

        if (start > end) {
            return null
        }

        const midpoint = parseInt(Math.floor((start + end) / 2));
        const newNode = new Node(arr[midpoint])

        newNode.left = buildTree(arr, start, midpoint-1);
        newNode.right = buildTree(arr, midpoint+1, end);

        return newNode

    };

    const sortedArray = sortArray(starterArray);
    let root = buildTree(sortedArray, 0, sortedArray.length - 1)
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

    // eslint-disable-next-line consistent-return
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
            return node
        }

        if (node.data === val) {
            console.log(node);
            // console.log(`Here is your node: ${node.data}`);
            return node
        }

    }

    function levelOrder(callback) {
        console.log(root)

        const rootOrder =[];
        const queue = [root];

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
            // console.log(queue);

            if (node.left !== null) {
                queue.push(node.left)
            } 
            if (node.right !== null) {
                queue.push(node.right);
            }
            
            callback(node)
        }
        console.log(rootOrder);
        return rootOrder
       
    }

    function preOrder(callback, node = root) {
        const rootOrder = [];

        if (node === null) {return rootOrder};

        if (!callback) {
            callback = (node) => {

                console.log('callback ran');
                rootOrder.push(node.data);
                console.log(rootOrder);
            }
        };

        callback(node);
        preOrder(callback, node.left);
        preOrder(callback, node.right);

        console.log(rootOrder);
        return rootOrder

    }

    function inOrder(callback, node = root) {
        const rootOrder = [];

        if (node === null) {return rootOrder};

        if (!callback) {

            callback = (node) => {
                rootOrder.push(node.data);
                console.log(rootOrder);
            }
        };

        inOrder(callback, node.left);
        callback(node);
        inOrder(callback, node.right);

        return rootOrder
    }

    function postOrder(callback, node = root) {
        const rootOrder = [];

        if (node === null) {return rootOrder};

        if (!callback) {

            callback = (node) => {
                rootOrder.push(node.data);
                console.log(rootOrder);
            }
        };

        postOrder(callback, node.left);
        postOrder(callback, node.right);
        callback(node);

        return rootOrder
    }

    function height(node = root) {
        if (node === null) {
            return 0
        } else {
            const currentHeight = Math.max(height(node.left) + 1, height(node.right) + 1)
            console.log(currentHeight);
            return currentHeight 
        }

    }

    function depth(val, node = root) {
        const foundNode = find(val)
        if (foundNode === null) {
            console.log('doesnt exist yo')
        }
        if (node === null) {
            console.log('end reached');
            return -1
        }

        console.log(node.data)
        if (val < node.data) {
            const currentDepth = depth(val, node.left) +1
            console.log(currentDepth);
            return currentDepth
        } else if (val > node.data) {
            const currentDepth = depth(val, node.right) +1
            console.log(currentDepth);
            return currentDepth
        }
        return 0

    }

    function isBalanced(node = root) {
        const leftSide = height(node.left)
        console.log(leftSide);
        const rightSide = height(node.right);
        console.log(rightSide);

        if (leftSide + 1 < rightSide) {
            console.log('left side too short');
            return false
        } else if (rightSide + 1 < leftSide) {
            console.log('right side too short')
            return false
        } else {
            console.log('tree is balanced')
            return true
        }


    }

    function rebalance() {
        const rebalanceArray = inOrder()
        console.log(rebalanceArray);
        root = buildTree(rebalanceArray, 0, rebalanceArray.length - 1)
        ;(0,_supporting_functions__WEBPACK_IMPORTED_MODULE_0__.prettyPrint)(root);
    }

    return {
        sortArray,
        buildTree,
        insert,
        deleteNode,
        find,
        levelOrder,
        preOrder,
        inOrder,
        postOrder,
        height,
        depth,
        isBalanced,
        rebalance
        
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



const testArray = [8, 6, 9, 9, 9, 10, 31, 45, 22, 23, 2, 14];
const testRun = (0,_binary_tree__WEBPACK_IMPORTED_MODULE_0__.treeFactory)(testArray);


testRun.deleteNode(6);

testRun.insert(7);
testRun.insert(4);
testRun.insert(5);
testRun.insert(3);
testRun.insert(6);


testRun.find(22);

// testRun.levelOrder()

// testRun.height();
// testRun.depth(16);

testRun.isBalanced();

// testRun.preOrder();
// testRun.inOrder();
// testRun.postOrder();
testRun.rebalance();

testRun.insert(52);
testRun.isBalanced();

// testRun.insert(60);
// testRun.isBalanced()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNxRDs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0VBQVc7OztBQUdmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLGtFQUFXO0FBQ25COztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtRUFBVztBQUN2QjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsWUFBWSxtRUFBVztBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlEQUFpRCxVQUFVO0FBQzNEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNEJBQTRCOztBQUU1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSw0QkFBNEI7O0FBRTVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw0QkFBNEI7O0FBRTVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtRUFBVztBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNqVkE7Ozs7QUFJQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsT0FBTyxFQUFFLHlCQUF5QjtBQUNuRTtBQUNBLG1CQUFtQixPQUFPLEVBQUUseUJBQXlCLEVBQUUsVUFBVTtBQUNqRTtBQUNBLGdDQUFnQyxPQUFPLEVBQUUseUJBQXlCO0FBQ2xFO0FBQ0E7Ozs7OztVQ2hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjRDOzs7QUFHNUM7QUFDQSxnQkFBZ0IseURBQVc7OztBQUczQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx1QiIsInNvdXJjZXMiOlsid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvYmluYXJ5LXRyZWUuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9zdXBwb3J0aW5nLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBhcnJvdy1ib2R5LXN0eWxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSByYWRpeCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tZWxzZS1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCB7IHByZXR0eVByaW50IH0gZnJvbSBcIi4vc3VwcG9ydGluZy1mdW5jdGlvbnNcIjtcblxuY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSwgbGVmdCwgcmlnaHQpIHtcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICB0aGlzLmxlZnQgPSBudWxsO1xuICAgICAgdGhpcy5yaWdodCA9IG51bGw7XG4gICAgfVxuICB9XG5cblxuXG5leHBvcnQgY29uc3QgdHJlZUZhY3RvcnkgPSBmdW5jdGlvbihzdGFydGVyQXJyYXkpIHtcblxuICAgIGZ1bmN0aW9uIHNvcnRBcnJheShhcnIpIHtcbiAgICAgICAgY29uc3Qgb3JkZXJlZEFycmF5ID0gYXJyLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICAgICAgICBjb25zb2xlLmxvZyhvcmRlcmVkQXJyYXkpO1xuICAgICAgICBjb25zdCB1bmlxdWVBcnJheSA9IG9yZGVyZWRBcnJheS5maWx0ZXIoKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvcmRlcmVkQXJyYXkuaW5kZXhPZih2YWwpID09PSBpbmRleFxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyh1bmlxdWVBcnJheSk7XG4gICAgICAgIHJldHVybiB1bmlxdWVBcnJheVxuICAgIH0gXG5cbiAgICBmdW5jdGlvbiBidWlsZFRyZWUoYXJyLCBzdGFydCwgZW5kKSB7XG5cbiAgICAgICAgaWYgKHN0YXJ0ID4gZW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWlkcG9pbnQgPSBwYXJzZUludChNYXRoLmZsb29yKChzdGFydCArIGVuZCkgLyAyKSk7XG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZShhcnJbbWlkcG9pbnRdKVxuXG4gICAgICAgIG5ld05vZGUubGVmdCA9IGJ1aWxkVHJlZShhcnIsIHN0YXJ0LCBtaWRwb2ludC0xKTtcbiAgICAgICAgbmV3Tm9kZS5yaWdodCA9IGJ1aWxkVHJlZShhcnIsIG1pZHBvaW50KzEsIGVuZCk7XG5cbiAgICAgICAgcmV0dXJuIG5ld05vZGVcblxuICAgIH07XG5cbiAgICBjb25zdCBzb3J0ZWRBcnJheSA9IHNvcnRBcnJheShzdGFydGVyQXJyYXkpO1xuICAgIGxldCByb290ID0gYnVpbGRUcmVlKHNvcnRlZEFycmF5LCAwLCBzb3J0ZWRBcnJheS5sZW5ndGggLSAxKVxuICAgIGNvbnNvbGUubG9nKHJvb3QpO1xuICAgIHByZXR0eVByaW50KHJvb3QpO1xuXG5cbiAgICBmdW5jdGlvbiBpbnNlcnQodmFsLCBub2RlID0gcm9vdCkge1xuICAgICAgICBjb25zb2xlLmxvZyhyb290KTtcbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUgPSBuZXcgTm9kZSh2YWwpO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICBcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodmFsIDwgbm9kZS5kYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncm9vdCBiaWdnZXInKTtcbiAgICAgICAgICAgIG5vZGUubGVmdCA9IGluc2VydCh2YWwsIG5vZGUubGVmdCk7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsID4gbm9kZS5kYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndmFsIGJpZ2dlcicpO1xuICAgICAgICAgICAgbm9kZS5yaWdodCA9IGluc2VydCh2YWwsIG5vZGUucmlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2cobm9kZSk7XG4gICAgICAgIHByZXR0eVByaW50KHJvb3QpO1xuICAgICAgICByZXR1cm4gbm9kZSBcblxuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICAgIGZ1bmN0aW9uIGRlbGV0ZU5vZGUodmFsLCBub2RlID0gcm9vdCkge1xuICAgICAgICBjb25zb2xlLmxvZyhyb290KVxuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdCBpbiB0aGlzIGJyYW5jaCcpO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICBpZiAobm9kZS5kYXRhID4gdmFsKSB7XG4gICAgICAgICAgICBub2RlLmxlZnQgPSBkZWxldGVOb2RlKHZhbCwgbm9kZS5sZWZ0KVxuICAgICAgICAgICAgY29uc29sZS5sb2cobm9kZS5sZWZ0KVxuICAgICAgICAgICAgcHJldHR5UHJpbnQocm9vdCk7XG4gICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICB9IGlmIChub2RlLmRhdGEgPCB2YWwpIHtcbiAgICAgICAgICAgIG5vZGUucmlnaHQgPSBkZWxldGVOb2RlKHZhbCwgbm9kZS5yaWdodClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vZGUucmlnaHQpXG4gICAgICAgICAgICBwcmV0dHlQcmludChyb290KTtcbiAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgICAgaWYgKG5vZGUuZGF0YSA9PT0gdmFsKSB7XG4gICAgICAgICAgICAvLyBpZiBub2RlIGhhcyBOTyBvciBvbmx5IE9ORSBjaGlsZHJlbjpcbiAgICAgICAgICAgIGlmIChub2RlLmxlZnQgPT09IG51bGwgJiYgbm9kZS5yaWdodCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWxldGVkIGxlYWYgbm9kZScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlIFxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUubGVmdCA9PT0gbnVsbCAmJiBub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IG5vZGUucmlnaHQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS5yaWdodCA9PT0gbnVsbCAmJiBub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5sZWZ0XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgQk9USCBjaGlsZHJlbiBleGlzdDpcbiAgICAgICAgICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwgJiYgbm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxldCBzdWNjZXNzb3JQYXJlbnQgPSBub2RlO1xuICAgICAgICAgICAgICAgIGxldCBzdWNjZXNzb3IgPSBub2RlLnJpZ2h0O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdib3RoIGNoaWxkcmVuJylcblxuICAgICAgICAgICAgICAgIHdoaWxlIChzdWNjZXNzb3IubGVmdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzb3JQYXJlbnQgPSBzdWNjZXNzb3JcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc29yID0gc3VjY2Vzc29yLmxlZnRcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3VjY2Vzc29yKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3NvclBhcmVudCAhPT0gbm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzb3JQYXJlbnQubGVmdCA9IHN1Y2Nlc3Nvci5yaWdodDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzb3JQYXJlbnQucmlnaHQgPSBzdWNjZXNzb3IucmlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUuZGF0YSA9IHN1Y2Nlc3Nvci5kYXRhXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobm9kZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCd2YWx1ZSBkb2VzbnQgZXhpc3QnKVxuICAgICAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaW5kKHZhbCwgbm9kZSA9IHJvb3QpIHtcbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsIDwgbm9kZS5kYXRhKSB7XG4gICAgICAgICAgICBub2RlLmxlZnQgPSBmaW5kKHZhbCwgbm9kZS5sZWZ0KVxuICAgICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgfSBlbHNlIGlmKHZhbCA+IG5vZGUuZGF0YSkge1xuICAgICAgICAgICAgbm9kZS5yaWdodCA9IGZpbmQodmFsLCBub2RlLnJpZ2h0KVxuICAgICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlLmRhdGEgPT09IHZhbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobm9kZSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgSGVyZSBpcyB5b3VyIG5vZGU6ICR7bm9kZS5kYXRhfWApO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGV2ZWxPcmRlcihjYWxsYmFjaykge1xuICAgICAgICBjb25zb2xlLmxvZyhyb290KVxuXG4gICAgICAgIGNvbnN0IHJvb3RPcmRlciA9W107XG4gICAgICAgIGNvbnN0IHF1ZXVlID0gW3Jvb3RdO1xuXG4gICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gKG5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2FsbGJhY2sgcmFuJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAobm9kZS5kYXRhICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvb3RPcmRlci5wdXNoKG5vZGUuZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvb3RPcmRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhxdWV1ZSk7XG5cbiAgICAgICAgICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKG5vZGUubGVmdClcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2gobm9kZS5yaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhbGxiYWNrKG5vZGUpXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cocm9vdE9yZGVyKTtcbiAgICAgICAgcmV0dXJuIHJvb3RPcmRlclxuICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByZU9yZGVyKGNhbGxiYWNrLCBub2RlID0gcm9vdCkge1xuICAgICAgICBjb25zdCByb290T3JkZXIgPSBbXTtcblxuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge3JldHVybiByb290T3JkZXJ9O1xuXG4gICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gKG5vZGUpID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYWxsYmFjayByYW4nKTtcbiAgICAgICAgICAgICAgICByb290T3JkZXIucHVzaChub2RlLmRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvb3RPcmRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY2FsbGJhY2sobm9kZSk7XG4gICAgICAgIHByZU9yZGVyKGNhbGxiYWNrLCBub2RlLmxlZnQpO1xuICAgICAgICBwcmVPcmRlcihjYWxsYmFjaywgbm9kZS5yaWdodCk7XG5cbiAgICAgICAgY29uc29sZS5sb2cocm9vdE9yZGVyKTtcbiAgICAgICAgcmV0dXJuIHJvb3RPcmRlclxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5PcmRlcihjYWxsYmFjaywgbm9kZSA9IHJvb3QpIHtcbiAgICAgICAgY29uc3Qgcm9vdE9yZGVyID0gW107XG5cbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtyZXR1cm4gcm9vdE9yZGVyfTtcblxuICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XG5cbiAgICAgICAgICAgIGNhbGxiYWNrID0gKG5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICByb290T3JkZXIucHVzaChub2RlLmRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvb3RPcmRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaW5PcmRlcihjYWxsYmFjaywgbm9kZS5sZWZ0KTtcbiAgICAgICAgY2FsbGJhY2sobm9kZSk7XG4gICAgICAgIGluT3JkZXIoY2FsbGJhY2ssIG5vZGUucmlnaHQpO1xuXG4gICAgICAgIHJldHVybiByb290T3JkZXJcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3N0T3JkZXIoY2FsbGJhY2ssIG5vZGUgPSByb290KSB7XG4gICAgICAgIGNvbnN0IHJvb3RPcmRlciA9IFtdO1xuXG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7cmV0dXJuIHJvb3RPcmRlcn07XG5cbiAgICAgICAgaWYgKCFjYWxsYmFjaykge1xuXG4gICAgICAgICAgICBjYWxsYmFjayA9IChub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgcm9vdE9yZGVyLnB1c2gobm9kZS5kYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyb290T3JkZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHBvc3RPcmRlcihjYWxsYmFjaywgbm9kZS5sZWZ0KTtcbiAgICAgICAgcG9zdE9yZGVyKGNhbGxiYWNrLCBub2RlLnJpZ2h0KTtcbiAgICAgICAgY2FsbGJhY2sobm9kZSk7XG5cbiAgICAgICAgcmV0dXJuIHJvb3RPcmRlclxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhlaWdodChub2RlID0gcm9vdCkge1xuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRIZWlnaHQgPSBNYXRoLm1heChoZWlnaHQobm9kZS5sZWZ0KSArIDEsIGhlaWdodChub2RlLnJpZ2h0KSArIDEpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50SGVpZ2h0KTtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50SGVpZ2h0IFxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZXB0aCh2YWwsIG5vZGUgPSByb290KSB7XG4gICAgICAgIGNvbnN0IGZvdW5kTm9kZSA9IGZpbmQodmFsKVxuICAgICAgICBpZiAoZm91bmROb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZG9lc250IGV4aXN0IHlvJylcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VuZCByZWFjaGVkJyk7XG4gICAgICAgICAgICByZXR1cm4gLTFcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKG5vZGUuZGF0YSlcbiAgICAgICAgaWYgKHZhbCA8IG5vZGUuZGF0YSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudERlcHRoID0gZGVwdGgodmFsLCBub2RlLmxlZnQpICsxXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50RGVwdGgpO1xuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnREZXB0aFxuICAgICAgICB9IGVsc2UgaWYgKHZhbCA+IG5vZGUuZGF0YSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudERlcHRoID0gZGVwdGgodmFsLCBub2RlLnJpZ2h0KSArMVxuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudERlcHRoKTtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50RGVwdGhcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMFxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNCYWxhbmNlZChub2RlID0gcm9vdCkge1xuICAgICAgICBjb25zdCBsZWZ0U2lkZSA9IGhlaWdodChub2RlLmxlZnQpXG4gICAgICAgIGNvbnNvbGUubG9nKGxlZnRTaWRlKTtcbiAgICAgICAgY29uc3QgcmlnaHRTaWRlID0gaGVpZ2h0KG5vZGUucmlnaHQpO1xuICAgICAgICBjb25zb2xlLmxvZyhyaWdodFNpZGUpO1xuXG4gICAgICAgIGlmIChsZWZ0U2lkZSArIDEgPCByaWdodFNpZGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsZWZ0IHNpZGUgdG9vIHNob3J0Jyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSBlbHNlIGlmIChyaWdodFNpZGUgKyAxIDwgbGVmdFNpZGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyaWdodCBzaWRlIHRvbyBzaG9ydCcpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0cmVlIGlzIGJhbGFuY2VkJylcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmViYWxhbmNlKCkge1xuICAgICAgICBjb25zdCByZWJhbGFuY2VBcnJheSA9IGluT3JkZXIoKVxuICAgICAgICBjb25zb2xlLmxvZyhyZWJhbGFuY2VBcnJheSk7XG4gICAgICAgIHJvb3QgPSBidWlsZFRyZWUocmViYWxhbmNlQXJyYXksIDAsIHJlYmFsYW5jZUFycmF5Lmxlbmd0aCAtIDEpXG4gICAgICAgIHByZXR0eVByaW50KHJvb3QpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHNvcnRBcnJheSxcbiAgICAgICAgYnVpbGRUcmVlLFxuICAgICAgICBpbnNlcnQsXG4gICAgICAgIGRlbGV0ZU5vZGUsXG4gICAgICAgIGZpbmQsXG4gICAgICAgIGxldmVsT3JkZXIsXG4gICAgICAgIHByZU9yZGVyLFxuICAgICAgICBpbk9yZGVyLFxuICAgICAgICBwb3N0T3JkZXIsXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgZGVwdGgsXG4gICAgICAgIGlzQmFsYW5jZWQsXG4gICAgICAgIHJlYmFsYW5jZVxuICAgICAgICBcbiAgICB9XG5cbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5cblxuXG4vLyB2aXN1bGFpemVzIHRoZSB0cmVlOlxuZXhwb3J0IGNvbnN0IHByZXR0eVByaW50ID0gKG5vZGUsIHByZWZpeCA9IFwiXCIsIGlzTGVmdCA9IHRydWUpID0+IHtcbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgICAgcHJldHR5UHJpbnQobm9kZS5yaWdodCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilIIgICBcIiA6IFwiICAgIFwifWAsIGZhbHNlKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilJTilIDilIAgXCIgOiBcIuKUjOKUgOKUgCBcIn0ke25vZGUuZGF0YX1gKTtcbiAgICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICBwcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwiICAgIFwiIDogXCLilIIgICBcIn1gLCB0cnVlKTtcbiAgICB9XG4gIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB0cmVlRmFjdG9yeSB9IGZyb20gXCIuL2JpbmFyeS10cmVlXCI7XG5cblxuY29uc3QgdGVzdEFycmF5ID0gWzgsIDYsIDksIDksIDksIDEwLCAzMSwgNDUsIDIyLCAyMywgMiwgMTRdO1xuY29uc3QgdGVzdFJ1biA9IHRyZWVGYWN0b3J5KHRlc3RBcnJheSk7XG5cblxudGVzdFJ1bi5kZWxldGVOb2RlKDYpO1xuXG50ZXN0UnVuLmluc2VydCg3KTtcbnRlc3RSdW4uaW5zZXJ0KDQpO1xudGVzdFJ1bi5pbnNlcnQoNSk7XG50ZXN0UnVuLmluc2VydCgzKTtcbnRlc3RSdW4uaW5zZXJ0KDYpO1xuXG5cbnRlc3RSdW4uZmluZCgyMik7XG5cbi8vIHRlc3RSdW4ubGV2ZWxPcmRlcigpXG5cbi8vIHRlc3RSdW4uaGVpZ2h0KCk7XG4vLyB0ZXN0UnVuLmRlcHRoKDE2KTtcblxudGVzdFJ1bi5pc0JhbGFuY2VkKCk7XG5cbi8vIHRlc3RSdW4ucHJlT3JkZXIoKTtcbi8vIHRlc3RSdW4uaW5PcmRlcigpO1xuLy8gdGVzdFJ1bi5wb3N0T3JkZXIoKTtcbnRlc3RSdW4ucmViYWxhbmNlKCk7XG5cbnRlc3RSdW4uaW5zZXJ0KDUyKTtcbnRlc3RSdW4uaXNCYWxhbmNlZCgpO1xuXG4vLyB0ZXN0UnVuLmluc2VydCg2MCk7XG4vLyB0ZXN0UnVuLmlzQmFsYW5jZWQoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
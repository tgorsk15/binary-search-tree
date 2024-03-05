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
        return orderedArray
    } 

    function buildTree(arr, start, end) {

        if (start > end) {
            return null
        }

        const midpoint = parseInt(Math.floor((start + end) / 2));
        const newNode = new Node(arr[midpoint])

        // console.log(newNode);

        newNode.left = buildTree(arr, start, midpoint-1);
        newNode.right = buildTree(arr, midpoint+1, end);

        // console.log(`Node value: ${newNode.data}, Start: ${start}, End: ${end}, Midpoint: ${midpoint}`);
        // prettyPrint(newNode);
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
            // console.log(node);

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

// import { prettyPrint } from "./supporting-functions";



const testArray = [8, 6, 9, 10, 31, 45, 22, 23, 2, 14];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDcUQ7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHNDQUFzQyxhQUFhLFdBQVcsTUFBTSxTQUFTLElBQUksY0FBYyxTQUFTO0FBQ3hHO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrRUFBVzs7O0FBR2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsa0VBQVc7QUFDbkI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1FQUFXO0FBQ3ZCO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxZQUFZLG1FQUFXO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYztBQUNkO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaURBQWlELFVBQVU7QUFDM0Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDRCQUE0Qjs7QUFFNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsNEJBQTRCOztBQUU1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNEJBQTRCOztBQUU1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbUVBQVc7QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDalZBOzs7O0FBSUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLE9BQU8sRUFBRSx5QkFBeUI7QUFDbkU7QUFDQSxtQkFBbUIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFVBQVU7QUFDakU7QUFDQSxnQ0FBZ0MsT0FBTyxFQUFFLHlCQUF5QjtBQUNsRTtBQUNBOzs7Ozs7VUNoQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ040QztBQUM1QyxZQUFZLGNBQWM7Ozs7QUFJMUI7QUFDQSxnQkFBZ0IseURBQVc7OztBQUczQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx1QiIsInNvdXJjZXMiOlsid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvYmluYXJ5LXRyZWUuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9zdXBwb3J0aW5nLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByYWRpeCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tZWxzZS1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCB7IHByZXR0eVByaW50IH0gZnJvbSBcIi4vc3VwcG9ydGluZy1mdW5jdGlvbnNcIjtcblxuY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSwgbGVmdCwgcmlnaHQpIHtcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICB0aGlzLmxlZnQgPSBudWxsO1xuICAgICAgdGhpcy5yaWdodCA9IG51bGw7XG4gICAgfVxuICB9XG5cblxuXG5leHBvcnQgY29uc3QgdHJlZUZhY3RvcnkgPSBmdW5jdGlvbihzdGFydGVyQXJyYXkpIHtcblxuICAgIGZ1bmN0aW9uIHNvcnRBcnJheShhcnIpIHtcbiAgICAgICAgY29uc3Qgb3JkZXJlZEFycmF5ID0gYXJyLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICAgICAgICBjb25zb2xlLmxvZyhvcmRlcmVkQXJyYXkpO1xuICAgICAgICByZXR1cm4gb3JkZXJlZEFycmF5XG4gICAgfSBcblxuICAgIGZ1bmN0aW9uIGJ1aWxkVHJlZShhcnIsIHN0YXJ0LCBlbmQpIHtcblxuICAgICAgICBpZiAoc3RhcnQgPiBlbmQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtaWRwb2ludCA9IHBhcnNlSW50KE1hdGguZmxvb3IoKHN0YXJ0ICsgZW5kKSAvIDIpKTtcbiAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKGFyclttaWRwb2ludF0pXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2cobmV3Tm9kZSk7XG5cbiAgICAgICAgbmV3Tm9kZS5sZWZ0ID0gYnVpbGRUcmVlKGFyciwgc3RhcnQsIG1pZHBvaW50LTEpO1xuICAgICAgICBuZXdOb2RlLnJpZ2h0ID0gYnVpbGRUcmVlKGFyciwgbWlkcG9pbnQrMSwgZW5kKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgTm9kZSB2YWx1ZTogJHtuZXdOb2RlLmRhdGF9LCBTdGFydDogJHtzdGFydH0sIEVuZDogJHtlbmR9LCBNaWRwb2ludDogJHttaWRwb2ludH1gKTtcbiAgICAgICAgLy8gcHJldHR5UHJpbnQobmV3Tm9kZSk7XG4gICAgICAgIHJldHVybiBuZXdOb2RlXG5cbiAgICB9O1xuXG4gICAgY29uc3Qgc29ydGVkQXJyYXkgPSBzb3J0QXJyYXkoc3RhcnRlckFycmF5KTtcbiAgICBsZXQgcm9vdCA9IGJ1aWxkVHJlZShzb3J0ZWRBcnJheSwgMCwgc29ydGVkQXJyYXkubGVuZ3RoIC0gMSlcbiAgICBjb25zb2xlLmxvZyhyb290KTtcbiAgICBwcmV0dHlQcmludChyb290KTtcblxuXG4gICAgZnVuY3Rpb24gaW5zZXJ0KHZhbCwgbm9kZSA9IHJvb3QpIHtcbiAgICAgICAgY29uc29sZS5sb2cocm9vdCk7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICBub2RlID0gbmV3IE5vZGUodmFsKTtcbiAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHZhbCA8IG5vZGUuZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jvb3QgYmlnZ2VyJyk7XG4gICAgICAgICAgICBub2RlLmxlZnQgPSBpbnNlcnQodmFsLCBub2RlLmxlZnQpO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbCA+IG5vZGUuZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZhbCBiaWdnZXInKTtcbiAgICAgICAgICAgIG5vZGUucmlnaHQgPSBpbnNlcnQodmFsLCBub2RlLnJpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKG5vZGUpO1xuICAgICAgICBwcmV0dHlQcmludChyb290KTtcbiAgICAgICAgcmV0dXJuIG5vZGUgXG5cbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgICBmdW5jdGlvbiBkZWxldGVOb2RlKHZhbCwgbm9kZSA9IHJvb3QpIHtcbiAgICAgICAgY29uc29sZS5sb2cocm9vdClcbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub3QgaW4gdGhpcyBicmFuY2gnKTtcbiAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgaWYgKG5vZGUuZGF0YSA+IHZhbCkge1xuICAgICAgICAgICAgbm9kZS5sZWZ0ID0gZGVsZXRlTm9kZSh2YWwsIG5vZGUubGVmdClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vZGUubGVmdClcbiAgICAgICAgICAgIHByZXR0eVByaW50KHJvb3QpO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgfSBpZiAobm9kZS5kYXRhIDwgdmFsKSB7XG4gICAgICAgICAgICBub2RlLnJpZ2h0ID0gZGVsZXRlTm9kZSh2YWwsIG5vZGUucmlnaHQpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhub2RlLnJpZ2h0KVxuICAgICAgICAgICAgcHJldHR5UHJpbnQocm9vdCk7XG4gICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIGlmIChub2RlLmRhdGEgPT09IHZhbCkge1xuICAgICAgICAgICAgLy8gaWYgbm9kZSBoYXMgTk8gb3Igb25seSBPTkUgY2hpbGRyZW46XG4gICAgICAgICAgICBpZiAobm9kZS5sZWZ0ID09PSBudWxsICYmIG5vZGUucmlnaHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlZCBsZWFmIG5vZGUnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZSBcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlLmxlZnQgPT09IG51bGwgJiYgbm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLnJpZ2h0O1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUucmlnaHQgPT09IG51bGwgJiYgbm9kZS5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IG5vZGUubGVmdFxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIEJPVEggY2hpbGRyZW4gZXhpc3Q6XG4gICAgICAgICAgICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsICYmIG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3VjY2Vzc29yUGFyZW50ID0gbm9kZTtcbiAgICAgICAgICAgICAgICBsZXQgc3VjY2Vzc29yID0gbm9kZS5yaWdodDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYm90aCBjaGlsZHJlbicpXG5cbiAgICAgICAgICAgICAgICB3aGlsZSAoc3VjY2Vzc29yLmxlZnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc29yUGFyZW50ID0gc3VjY2Vzc29yXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NvciA9IHN1Y2Nlc3Nvci5sZWZ0XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1Y2Nlc3Nvcik7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzb3JQYXJlbnQgIT09IG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc29yUGFyZW50LmxlZnQgPSBzdWNjZXNzb3IucmlnaHQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc29yUGFyZW50LnJpZ2h0ID0gc3VjY2Vzc29yLnJpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlLmRhdGEgPSBzdWNjZXNzb3IuZGF0YVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vZGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygndmFsdWUgZG9lc250IGV4aXN0JylcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmluZCh2YWwsIG5vZGUgPSByb290KSB7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbCA8IG5vZGUuZGF0YSkge1xuICAgICAgICAgICAgbm9kZS5sZWZ0ID0gZmluZCh2YWwsIG5vZGUubGVmdClcbiAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgIH0gZWxzZSBpZih2YWwgPiBub2RlLmRhdGEpIHtcbiAgICAgICAgICAgIG5vZGUucmlnaHQgPSBmaW5kKHZhbCwgbm9kZS5yaWdodClcbiAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZS5kYXRhID09PSB2YWwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vZGUpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYEhlcmUgaXMgeW91ciBub2RlOiAke25vZGUuZGF0YX1gKTtcbiAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxldmVsT3JkZXIoY2FsbGJhY2spIHtcbiAgICAgICAgY29uc29sZS5sb2cocm9vdClcblxuICAgICAgICBjb25zdCByb290T3JkZXIgPVtdO1xuICAgICAgICBjb25zdCBxdWV1ZSA9IFtyb290XTtcblxuICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IChub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhbGxiYWNrIHJhbicpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuZGF0YSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByb290T3JkZXIucHVzaChub2RlLmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyb290T3JkZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocXVldWUpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKG5vZGUubGVmdClcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2gobm9kZS5yaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhbGxiYWNrKG5vZGUpXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cocm9vdE9yZGVyKTtcbiAgICAgICAgcmV0dXJuIHJvb3RPcmRlclxuICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByZU9yZGVyKGNhbGxiYWNrLCBub2RlID0gcm9vdCkge1xuICAgICAgICBjb25zdCByb290T3JkZXIgPSBbXTtcblxuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge3JldHVybiByb290T3JkZXJ9O1xuXG4gICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gKG5vZGUpID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYWxsYmFjayByYW4nKTtcbiAgICAgICAgICAgICAgICByb290T3JkZXIucHVzaChub2RlLmRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvb3RPcmRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY2FsbGJhY2sobm9kZSk7XG4gICAgICAgIHByZU9yZGVyKGNhbGxiYWNrLCBub2RlLmxlZnQpO1xuICAgICAgICBwcmVPcmRlcihjYWxsYmFjaywgbm9kZS5yaWdodCk7XG5cbiAgICAgICAgY29uc29sZS5sb2cocm9vdE9yZGVyKTtcbiAgICAgICAgcmV0dXJuIHJvb3RPcmRlclxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5PcmRlcihjYWxsYmFjaywgbm9kZSA9IHJvb3QpIHtcbiAgICAgICAgY29uc3Qgcm9vdE9yZGVyID0gW107XG5cbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtyZXR1cm4gcm9vdE9yZGVyfTtcblxuICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XG5cbiAgICAgICAgICAgIGNhbGxiYWNrID0gKG5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICByb290T3JkZXIucHVzaChub2RlLmRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvb3RPcmRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaW5PcmRlcihjYWxsYmFjaywgbm9kZS5sZWZ0KTtcbiAgICAgICAgY2FsbGJhY2sobm9kZSk7XG4gICAgICAgIGluT3JkZXIoY2FsbGJhY2ssIG5vZGUucmlnaHQpO1xuXG4gICAgICAgIHJldHVybiByb290T3JkZXJcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3N0T3JkZXIoY2FsbGJhY2ssIG5vZGUgPSByb290KSB7XG4gICAgICAgIGNvbnN0IHJvb3RPcmRlciA9IFtdO1xuXG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7cmV0dXJuIHJvb3RPcmRlcn07XG5cbiAgICAgICAgaWYgKCFjYWxsYmFjaykge1xuXG4gICAgICAgICAgICBjYWxsYmFjayA9IChub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgcm9vdE9yZGVyLnB1c2gobm9kZS5kYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyb290T3JkZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHBvc3RPcmRlcihjYWxsYmFjaywgbm9kZS5sZWZ0KTtcbiAgICAgICAgcG9zdE9yZGVyKGNhbGxiYWNrLCBub2RlLnJpZ2h0KTtcbiAgICAgICAgY2FsbGJhY2sobm9kZSk7XG5cbiAgICAgICAgcmV0dXJuIHJvb3RPcmRlclxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhlaWdodChub2RlID0gcm9vdCkge1xuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRIZWlnaHQgPSBNYXRoLm1heChoZWlnaHQobm9kZS5sZWZ0KSArIDEsIGhlaWdodChub2RlLnJpZ2h0KSArIDEpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50SGVpZ2h0KTtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50SGVpZ2h0IFxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZXB0aCh2YWwsIG5vZGUgPSByb290KSB7XG4gICAgICAgIGNvbnN0IGZvdW5kTm9kZSA9IGZpbmQodmFsKVxuICAgICAgICBpZiAoZm91bmROb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZG9lc250IGV4aXN0IHlvJylcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VuZCByZWFjaGVkJyk7XG4gICAgICAgICAgICByZXR1cm4gLTFcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKG5vZGUuZGF0YSlcbiAgICAgICAgaWYgKHZhbCA8IG5vZGUuZGF0YSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudERlcHRoID0gZGVwdGgodmFsLCBub2RlLmxlZnQpICsxXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50RGVwdGgpO1xuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnREZXB0aFxuICAgICAgICB9IGVsc2UgaWYgKHZhbCA+IG5vZGUuZGF0YSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudERlcHRoID0gZGVwdGgodmFsLCBub2RlLnJpZ2h0KSArMVxuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudERlcHRoKTtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50RGVwdGhcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMFxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNCYWxhbmNlZChub2RlID0gcm9vdCkge1xuICAgICAgICBjb25zdCBsZWZ0U2lkZSA9IGhlaWdodChub2RlLmxlZnQpXG4gICAgICAgIGNvbnNvbGUubG9nKGxlZnRTaWRlKTtcbiAgICAgICAgY29uc3QgcmlnaHRTaWRlID0gaGVpZ2h0KG5vZGUucmlnaHQpO1xuICAgICAgICBjb25zb2xlLmxvZyhyaWdodFNpZGUpO1xuXG4gICAgICAgIGlmIChsZWZ0U2lkZSArIDEgPCByaWdodFNpZGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsZWZ0IHNpZGUgdG9vIHNob3J0Jyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSBlbHNlIGlmIChyaWdodFNpZGUgKyAxIDwgbGVmdFNpZGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyaWdodCBzaWRlIHRvbyBzaG9ydCcpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0cmVlIGlzIGJhbGFuY2VkJylcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmViYWxhbmNlKCkge1xuICAgICAgICBjb25zdCByZWJhbGFuY2VBcnJheSA9IGluT3JkZXIoKVxuICAgICAgICBjb25zb2xlLmxvZyhyZWJhbGFuY2VBcnJheSk7XG4gICAgICAgIHJvb3QgPSBidWlsZFRyZWUocmViYWxhbmNlQXJyYXksIDAsIHJlYmFsYW5jZUFycmF5Lmxlbmd0aCAtIDEpXG4gICAgICAgIHByZXR0eVByaW50KHJvb3QpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHNvcnRBcnJheSxcbiAgICAgICAgYnVpbGRUcmVlLFxuICAgICAgICBpbnNlcnQsXG4gICAgICAgIGRlbGV0ZU5vZGUsXG4gICAgICAgIGZpbmQsXG4gICAgICAgIGxldmVsT3JkZXIsXG4gICAgICAgIHByZU9yZGVyLFxuICAgICAgICBpbk9yZGVyLFxuICAgICAgICBwb3N0T3JkZXIsXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgZGVwdGgsXG4gICAgICAgIGlzQmFsYW5jZWQsXG4gICAgICAgIHJlYmFsYW5jZVxuICAgICAgICBcbiAgICB9XG5cbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5cblxuXG4vLyB2aXN1bGFpemVzIHRoZSB0cmVlOlxuZXhwb3J0IGNvbnN0IHByZXR0eVByaW50ID0gKG5vZGUsIHByZWZpeCA9IFwiXCIsIGlzTGVmdCA9IHRydWUpID0+IHtcbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgICAgcHJldHR5UHJpbnQobm9kZS5yaWdodCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilIIgICBcIiA6IFwiICAgIFwifWAsIGZhbHNlKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilJTilIDilIAgXCIgOiBcIuKUjOKUgOKUgCBcIn0ke25vZGUuZGF0YX1gKTtcbiAgICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICBwcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwiICAgIFwiIDogXCLilIIgICBcIn1gLCB0cnVlKTtcbiAgICB9XG4gIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB0cmVlRmFjdG9yeSB9IGZyb20gXCIuL2JpbmFyeS10cmVlXCI7XG4vLyBpbXBvcnQgeyBwcmV0dHlQcmludCB9IGZyb20gXCIuL3N1cHBvcnRpbmctZnVuY3Rpb25zXCI7XG5cblxuXG5jb25zdCB0ZXN0QXJyYXkgPSBbOCwgNiwgOSwgMTAsIDMxLCA0NSwgMjIsIDIzLCAyLCAxNF07XG5jb25zdCB0ZXN0UnVuID0gdHJlZUZhY3RvcnkodGVzdEFycmF5KTtcblxuXG50ZXN0UnVuLmRlbGV0ZU5vZGUoNik7XG5cbnRlc3RSdW4uaW5zZXJ0KDcpO1xudGVzdFJ1bi5pbnNlcnQoNCk7XG50ZXN0UnVuLmluc2VydCg1KTtcbnRlc3RSdW4uaW5zZXJ0KDMpO1xudGVzdFJ1bi5pbnNlcnQoNik7XG5cblxudGVzdFJ1bi5maW5kKDIyKTtcblxuLy8gdGVzdFJ1bi5sZXZlbE9yZGVyKClcblxuLy8gdGVzdFJ1bi5oZWlnaHQoKTtcbi8vIHRlc3RSdW4uZGVwdGgoMTYpO1xuXG50ZXN0UnVuLmlzQmFsYW5jZWQoKTtcblxuLy8gdGVzdFJ1bi5wcmVPcmRlcigpO1xuLy8gdGVzdFJ1bi5pbk9yZGVyKCk7XG4vLyB0ZXN0UnVuLnBvc3RPcmRlcigpO1xudGVzdFJ1bi5yZWJhbGFuY2UoKTtcblxudGVzdFJ1bi5pbnNlcnQoNTIpO1xudGVzdFJ1bi5pc0JhbGFuY2VkKCk7XG5cbi8vIHRlc3RSdW4uaW5zZXJ0KDYwKTtcbi8vIHRlc3RSdW4uaXNCYWxhbmNlZCgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
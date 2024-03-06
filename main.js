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


// driver script:

const testArray = [8, 6, 9, 9, 9, 10, 12, 13, 31, 45, 22, 23, 2, 14];
const testRun = (0,_binary_tree__WEBPACK_IMPORTED_MODULE_0__.treeFactory)(testArray);


// testRun.deleteNode(6);

testRun.insert(7);
testRun.insert(4);
testRun.insert(5);
testRun.insert(3);

// testRun.find(22);

testRun.isBalanced();  // logs "right side too short"

testRun.levelOrder()
testRun.preOrder();
testRun.inOrder();
testRun.postOrder();
// testRun.height();

testRun.rebalance();
testRun.isBalanced();

// testRun.levelOrder()
// testRun.preOrder();
// testRun.inOrder();
// testRun.postOrder();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7Ozs7OztVQ2hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjRDOztBQUU1Qzs7QUFFQTtBQUNBLGdCQUFnQix5REFBVzs7O0FBRzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHVCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9iaW5hcnktdHJlZS5qcyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4vc3JjL3N1cHBvcnRpbmctZnVuY3Rpb25zLmpzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGFycm93LWJvZHktc3R5bGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJhZGl4ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1lbHNlLXJldHVybiAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IHsgcHJldHR5UHJpbnQgfSBmcm9tIFwiLi9zdXBwb3J0aW5nLWZ1bmN0aW9uc1wiO1xuXG5jbGFzcyBOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhLCBsZWZ0LCByaWdodCkge1xuICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgIHRoaXMubGVmdCA9IG51bGw7XG4gICAgICB0aGlzLnJpZ2h0ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuXG5cbmV4cG9ydCBjb25zdCB0cmVlRmFjdG9yeSA9IGZ1bmN0aW9uKHN0YXJ0ZXJBcnJheSkge1xuXG4gICAgZnVuY3Rpb24gc29ydEFycmF5KGFycikge1xuICAgICAgICBjb25zdCBvcmRlcmVkQXJyYXkgPSBhcnIuc29ydCgoYSwgYikgPT4gYSAtIGIpXG4gICAgICAgIGNvbnNvbGUubG9nKG9yZGVyZWRBcnJheSk7XG4gICAgICAgIGNvbnN0IHVuaXF1ZUFycmF5ID0gb3JkZXJlZEFycmF5LmZpbHRlcigodmFsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG9yZGVyZWRBcnJheS5pbmRleE9mKHZhbCkgPT09IGluZGV4XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKHVuaXF1ZUFycmF5KTtcbiAgICAgICAgcmV0dXJuIHVuaXF1ZUFycmF5XG4gICAgfSBcblxuICAgIGZ1bmN0aW9uIGJ1aWxkVHJlZShhcnIsIHN0YXJ0LCBlbmQpIHtcblxuICAgICAgICBpZiAoc3RhcnQgPiBlbmQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtaWRwb2ludCA9IHBhcnNlSW50KE1hdGguZmxvb3IoKHN0YXJ0ICsgZW5kKSAvIDIpKTtcbiAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKGFyclttaWRwb2ludF0pXG5cbiAgICAgICAgbmV3Tm9kZS5sZWZ0ID0gYnVpbGRUcmVlKGFyciwgc3RhcnQsIG1pZHBvaW50LTEpO1xuICAgICAgICBuZXdOb2RlLnJpZ2h0ID0gYnVpbGRUcmVlKGFyciwgbWlkcG9pbnQrMSwgZW5kKTtcblxuICAgICAgICByZXR1cm4gbmV3Tm9kZVxuXG4gICAgfTtcblxuICAgIGNvbnN0IHNvcnRlZEFycmF5ID0gc29ydEFycmF5KHN0YXJ0ZXJBcnJheSk7XG4gICAgbGV0IHJvb3QgPSBidWlsZFRyZWUoc29ydGVkQXJyYXksIDAsIHNvcnRlZEFycmF5Lmxlbmd0aCAtIDEpXG4gICAgY29uc29sZS5sb2cocm9vdCk7XG4gICAgcHJldHR5UHJpbnQocm9vdCk7XG5cblxuICAgIGZ1bmN0aW9uIGluc2VydCh2YWwsIG5vZGUgPSByb290KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJvb3QpO1xuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbm9kZSA9IG5ldyBOb2RlKHZhbCk7XG4gICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgIFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh2YWwgPCBub2RlLmRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyb290IGJpZ2dlcicpO1xuICAgICAgICAgICAgbm9kZS5sZWZ0ID0gaW5zZXJ0KHZhbCwgbm9kZS5sZWZ0KTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWwgPiBub2RlLmRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2YWwgYmlnZ2VyJyk7XG4gICAgICAgICAgICBub2RlLnJpZ2h0ID0gaW5zZXJ0KHZhbCwgbm9kZS5yaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhub2RlKTtcbiAgICAgICAgcHJldHR5UHJpbnQocm9vdCk7XG4gICAgICAgIHJldHVybiBub2RlIFxuXG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gICAgZnVuY3Rpb24gZGVsZXRlTm9kZSh2YWwsIG5vZGUgPSByb290KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJvb3QpXG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm90IGluIHRoaXMgYnJhbmNoJyk7XG4gICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIGlmIChub2RlLmRhdGEgPiB2YWwpIHtcbiAgICAgICAgICAgIG5vZGUubGVmdCA9IGRlbGV0ZU5vZGUodmFsLCBub2RlLmxlZnQpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhub2RlLmxlZnQpXG4gICAgICAgICAgICBwcmV0dHlQcmludChyb290KTtcbiAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgIH0gaWYgKG5vZGUuZGF0YSA8IHZhbCkge1xuICAgICAgICAgICAgbm9kZS5yaWdodCA9IGRlbGV0ZU5vZGUodmFsLCBub2RlLnJpZ2h0KVxuICAgICAgICAgICAgY29uc29sZS5sb2cobm9kZS5yaWdodClcbiAgICAgICAgICAgIHByZXR0eVByaW50KHJvb3QpO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgICAgICBpZiAobm9kZS5kYXRhID09PSB2YWwpIHtcbiAgICAgICAgICAgIC8vIGlmIG5vZGUgaGFzIE5PIG9yIG9ubHkgT05FIGNoaWxkcmVuOlxuICAgICAgICAgICAgaWYgKG5vZGUubGVmdCA9PT0gbnVsbCAmJiBub2RlLnJpZ2h0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlbGV0ZWQgbGVhZiBub2RlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUgXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS5sZWZ0ID09PSBudWxsICYmIG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5yaWdodDtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlLnJpZ2h0ID09PSBudWxsICYmIG5vZGUubGVmdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLmxlZnRcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiBCT1RIIGNoaWxkcmVuIGV4aXN0OlxuICAgICAgICAgICAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCAmJiBub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN1Y2Nlc3NvclBhcmVudCA9IG5vZGU7XG4gICAgICAgICAgICAgICAgbGV0IHN1Y2Nlc3NvciA9IG5vZGUucmlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2JvdGggY2hpbGRyZW4nKVxuXG4gICAgICAgICAgICAgICAgd2hpbGUgKHN1Y2Nlc3Nvci5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NvclBhcmVudCA9IHN1Y2Nlc3NvclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzb3IgPSBzdWNjZXNzb3IubGVmdFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdWNjZXNzb3IpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZiAoc3VjY2Vzc29yUGFyZW50ICE9PSBub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NvclBhcmVudC5sZWZ0ID0gc3VjY2Vzc29yLnJpZ2h0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NvclBhcmVudC5yaWdodCA9IHN1Y2Nlc3Nvci5yaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbm9kZS5kYXRhID0gc3VjY2Vzc29yLmRhdGFcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhub2RlKVxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbHVlIGRvZXNudCBleGlzdCcpXG4gICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbmQodmFsLCBub2RlID0gcm9vdCkge1xuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWwgPCBub2RlLmRhdGEpIHtcbiAgICAgICAgICAgIG5vZGUubGVmdCA9IGZpbmQodmFsLCBub2RlLmxlZnQpXG4gICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICB9IGVsc2UgaWYodmFsID4gbm9kZS5kYXRhKSB7XG4gICAgICAgICAgICBub2RlLnJpZ2h0ID0gZmluZCh2YWwsIG5vZGUucmlnaHQpXG4gICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUuZGF0YSA9PT0gdmFsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhub2RlKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBIZXJlIGlzIHlvdXIgbm9kZTogJHtub2RlLmRhdGF9YCk7XG4gICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsZXZlbE9yZGVyKGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJvb3QpXG5cbiAgICAgICAgY29uc3Qgcm9vdE9yZGVyID1bXTtcbiAgICAgICAgY29uc3QgcXVldWUgPSBbcm9vdF07XG5cbiAgICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSAobm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYWxsYmFjayByYW4nKTtcblxuICAgICAgICAgICAgICAgIGlmIChub2RlLmRhdGEgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcm9vdE9yZGVyLnB1c2gobm9kZS5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocm9vdE9yZGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHF1ZXVlKTtcblxuICAgICAgICAgICAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2gobm9kZS5sZWZ0KVxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcXVldWUucHVzaChub2RlLnJpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FsbGJhY2sobm9kZSlcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhyb290T3JkZXIpO1xuICAgICAgICByZXR1cm4gcm9vdE9yZGVyXG4gICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJlT3JkZXIoY2FsbGJhY2ssIG5vZGUgPSByb290KSB7XG4gICAgICAgIGNvbnN0IHJvb3RPcmRlciA9IFtdO1xuXG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7cmV0dXJuIHJvb3RPcmRlcn07XG5cbiAgICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSAobm9kZSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhbGxiYWNrIHJhbicpO1xuICAgICAgICAgICAgICAgIHJvb3RPcmRlci5wdXNoKG5vZGUuZGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocm9vdE9yZGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjYWxsYmFjayhub2RlKTtcbiAgICAgICAgcHJlT3JkZXIoY2FsbGJhY2ssIG5vZGUubGVmdCk7XG4gICAgICAgIHByZU9yZGVyKGNhbGxiYWNrLCBub2RlLnJpZ2h0KTtcblxuICAgICAgICBjb25zb2xlLmxvZyhyb290T3JkZXIpO1xuICAgICAgICByZXR1cm4gcm9vdE9yZGVyXG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbk9yZGVyKGNhbGxiYWNrLCBub2RlID0gcm9vdCkge1xuICAgICAgICBjb25zdCByb290T3JkZXIgPSBbXTtcblxuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge3JldHVybiByb290T3JkZXJ9O1xuXG4gICAgICAgIGlmICghY2FsbGJhY2spIHtcblxuICAgICAgICAgICAgY2FsbGJhY2sgPSAobm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJvb3RPcmRlci5wdXNoKG5vZGUuZGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocm9vdE9yZGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpbk9yZGVyKGNhbGxiYWNrLCBub2RlLmxlZnQpO1xuICAgICAgICBjYWxsYmFjayhub2RlKTtcbiAgICAgICAgaW5PcmRlcihjYWxsYmFjaywgbm9kZS5yaWdodCk7XG5cbiAgICAgICAgcmV0dXJuIHJvb3RPcmRlclxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvc3RPcmRlcihjYWxsYmFjaywgbm9kZSA9IHJvb3QpIHtcbiAgICAgICAgY29uc3Qgcm9vdE9yZGVyID0gW107XG5cbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtyZXR1cm4gcm9vdE9yZGVyfTtcblxuICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XG5cbiAgICAgICAgICAgIGNhbGxiYWNrID0gKG5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICByb290T3JkZXIucHVzaChub2RlLmRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvb3RPcmRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcG9zdE9yZGVyKGNhbGxiYWNrLCBub2RlLmxlZnQpO1xuICAgICAgICBwb3N0T3JkZXIoY2FsbGJhY2ssIG5vZGUucmlnaHQpO1xuICAgICAgICBjYWxsYmFjayhub2RlKTtcblxuICAgICAgICByZXR1cm4gcm9vdE9yZGVyXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGVpZ2h0KG5vZGUgPSByb290KSB7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEhlaWdodCA9IE1hdGgubWF4KGhlaWdodChub2RlLmxlZnQpICsgMSwgaGVpZ2h0KG5vZGUucmlnaHQpICsgMSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRIZWlnaHQpO1xuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRIZWlnaHQgXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlcHRoKHZhbCwgbm9kZSA9IHJvb3QpIHtcbiAgICAgICAgY29uc3QgZm91bmROb2RlID0gZmluZCh2YWwpXG4gICAgICAgIGlmIChmb3VuZE5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkb2VzbnQgZXhpc3QgeW8nKVxuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZW5kIHJlYWNoZWQnKTtcbiAgICAgICAgICAgIHJldHVybiAtMVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2cobm9kZS5kYXRhKVxuICAgICAgICBpZiAodmFsIDwgbm9kZS5kYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RGVwdGggPSBkZXB0aCh2YWwsIG5vZGUubGVmdCkgKzFcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnREZXB0aCk7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudERlcHRoXG4gICAgICAgIH0gZWxzZSBpZiAodmFsID4gbm9kZS5kYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RGVwdGggPSBkZXB0aCh2YWwsIG5vZGUucmlnaHQpICsxXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50RGVwdGgpO1xuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnREZXB0aFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwXG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0JhbGFuY2VkKG5vZGUgPSByb290KSB7XG4gICAgICAgIGNvbnN0IGxlZnRTaWRlID0gaGVpZ2h0KG5vZGUubGVmdClcbiAgICAgICAgY29uc29sZS5sb2cobGVmdFNpZGUpO1xuICAgICAgICBjb25zdCByaWdodFNpZGUgPSBoZWlnaHQobm9kZS5yaWdodCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJpZ2h0U2lkZSk7XG5cbiAgICAgICAgaWYgKGxlZnRTaWRlICsgMSA8IHJpZ2h0U2lkZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xlZnQgc2lkZSB0b28gc2hvcnQnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9IGVsc2UgaWYgKHJpZ2h0U2lkZSArIDEgPCBsZWZ0U2lkZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JpZ2h0IHNpZGUgdG9vIHNob3J0JylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RyZWUgaXMgYmFsYW5jZWQnKVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWJhbGFuY2UoKSB7XG4gICAgICAgIGNvbnN0IHJlYmFsYW5jZUFycmF5ID0gaW5PcmRlcigpXG4gICAgICAgIGNvbnNvbGUubG9nKHJlYmFsYW5jZUFycmF5KTtcbiAgICAgICAgcm9vdCA9IGJ1aWxkVHJlZShyZWJhbGFuY2VBcnJheSwgMCwgcmViYWxhbmNlQXJyYXkubGVuZ3RoIC0gMSlcbiAgICAgICAgcHJldHR5UHJpbnQocm9vdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc29ydEFycmF5LFxuICAgICAgICBidWlsZFRyZWUsXG4gICAgICAgIGluc2VydCxcbiAgICAgICAgZGVsZXRlTm9kZSxcbiAgICAgICAgZmluZCxcbiAgICAgICAgbGV2ZWxPcmRlcixcbiAgICAgICAgcHJlT3JkZXIsXG4gICAgICAgIGluT3JkZXIsXG4gICAgICAgIHBvc3RPcmRlcixcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICBkZXB0aCxcbiAgICAgICAgaXNCYWxhbmNlZCxcbiAgICAgICAgcmViYWxhbmNlXG4gICAgICAgIFxuICAgIH1cblxufSIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cblxuXG5cbi8vIHZpc3VsYWl6ZXMgdGhlIHRyZWU6XG5leHBvcnQgY29uc3QgcHJldHR5UHJpbnQgPSAobm9kZSwgcHJlZml4ID0gXCJcIiwgaXNMZWZ0ID0gdHJ1ZSkgPT4ge1xuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICBwcmV0dHlQcmludChub2RlLnJpZ2h0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUgiAgIFwiIDogXCIgICAgXCJ9YCwgZmFsc2UpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUlOKUgOKUgCBcIiA6IFwi4pSM4pSA4pSAIFwifSR7bm9kZS5kYXRhfWApO1xuICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICAgIHByZXR0eVByaW50KG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCIgICAgXCIgOiBcIuKUgiAgIFwifWAsIHRydWUpO1xuICAgIH1cbiAgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHRyZWVGYWN0b3J5IH0gZnJvbSBcIi4vYmluYXJ5LXRyZWVcIjtcblxuLy8gZHJpdmVyIHNjcmlwdDpcblxuY29uc3QgdGVzdEFycmF5ID0gWzgsIDYsIDksIDksIDksIDEwLCAxMiwgMTMsIDMxLCA0NSwgMjIsIDIzLCAyLCAxNF07XG5jb25zdCB0ZXN0UnVuID0gdHJlZUZhY3RvcnkodGVzdEFycmF5KTtcblxuXG4vLyB0ZXN0UnVuLmRlbGV0ZU5vZGUoNik7XG5cbnRlc3RSdW4uaW5zZXJ0KDcpO1xudGVzdFJ1bi5pbnNlcnQoNCk7XG50ZXN0UnVuLmluc2VydCg1KTtcbnRlc3RSdW4uaW5zZXJ0KDMpO1xuXG4vLyB0ZXN0UnVuLmZpbmQoMjIpO1xuXG50ZXN0UnVuLmlzQmFsYW5jZWQoKTsgIC8vIGxvZ3MgXCJyaWdodCBzaWRlIHRvbyBzaG9ydFwiXG5cbnRlc3RSdW4ubGV2ZWxPcmRlcigpXG50ZXN0UnVuLnByZU9yZGVyKCk7XG50ZXN0UnVuLmluT3JkZXIoKTtcbnRlc3RSdW4ucG9zdE9yZGVyKCk7XG4vLyB0ZXN0UnVuLmhlaWdodCgpO1xuXG50ZXN0UnVuLnJlYmFsYW5jZSgpO1xudGVzdFJ1bi5pc0JhbGFuY2VkKCk7XG5cbi8vIHRlc3RSdW4ubGV2ZWxPcmRlcigpXG4vLyB0ZXN0UnVuLnByZU9yZGVyKCk7XG4vLyB0ZXN0UnVuLmluT3JkZXIoKTtcbi8vIHRlc3RSdW4ucG9zdE9yZGVyKCk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
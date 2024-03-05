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
            console.log(`Here is your node: ${node.data}`);
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

    // const rootOrder = [];
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

   

    return {
        sortArray,
        buildTree,
        insert,
        deleteNode,
        find,
        levelOrder,
        preOrder,
        inOrder,
        postOrder
        
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
// testRun.preOrder();
// testRun.inOrder();
testRun.postOrder();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFjOzs7O0FBSTFCOztBQUVBLGdCQUFnQix5REFBVztBQUMzQjtBQUNBOzs7QUFHQTtBQUNBOzs7OztBQUtBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9iaW5hcnktdHJlZS5qcyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4vc3JjL3N1cHBvcnRpbmctZnVuY3Rpb25zLmpzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJhZGl4ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1lbHNlLXJldHVybiAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IHsgcHJldHR5UHJpbnQgfSBmcm9tIFwiLi9zdXBwb3J0aW5nLWZ1bmN0aW9uc1wiO1xuXG5jbGFzcyBOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhLCBsZWZ0LCByaWdodCkge1xuICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgIHRoaXMubGVmdCA9IG51bGw7XG4gICAgICB0aGlzLnJpZ2h0ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuXG5cbmV4cG9ydCBjb25zdCB0cmVlRmFjdG9yeSA9IGZ1bmN0aW9uKHN0YXJ0ZXJBcnJheSkge1xuXG4gICAgZnVuY3Rpb24gc29ydEFycmF5KGFycikge1xuICAgICAgICBjb25zdCBvcmRlcmVkQXJyYXkgPSBhcnIuc29ydCgoYSwgYikgPT4gYSAtIGIpXG4gICAgICAgIGNvbnNvbGUubG9nKG9yZGVyZWRBcnJheSk7XG4gICAgICAgIHJldHVybiBvcmRlcmVkQXJyYXlcbiAgICB9IFxuXG4gICAgZnVuY3Rpb24gYnVpbGRUcmVlKGFyciwgc3RhcnQsIGVuZCkge1xuXG4gICAgICAgIGlmIChzdGFydCA+IGVuZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1pZHBvaW50ID0gcGFyc2VJbnQoTWF0aC5mbG9vcigoc3RhcnQgKyBlbmQpIC8gMikpO1xuICAgICAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUoYXJyW21pZHBvaW50XSlcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdOb2RlKTtcblxuICAgICAgICBuZXdOb2RlLmxlZnQgPSBidWlsZFRyZWUoYXJyLCBzdGFydCwgbWlkcG9pbnQtMSk7XG4gICAgICAgIG5ld05vZGUucmlnaHQgPSBidWlsZFRyZWUoYXJyLCBtaWRwb2ludCsxLCBlbmQpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBOb2RlIHZhbHVlOiAke25ld05vZGUuZGF0YX0sIFN0YXJ0OiAke3N0YXJ0fSwgRW5kOiAke2VuZH0sIE1pZHBvaW50OiAke21pZHBvaW50fWApO1xuICAgICAgICAvLyBwcmV0dHlQcmludChuZXdOb2RlKTtcbiAgICAgICAgcmV0dXJuIG5ld05vZGVcblxuICAgIH07XG5cbiAgICBjb25zdCBzb3J0ZWRBcnJheSA9IHNvcnRBcnJheShzdGFydGVyQXJyYXkpO1xuICAgIGNvbnN0IHJvb3QgPSBidWlsZFRyZWUoc29ydGVkQXJyYXksIDAsIHNvcnRlZEFycmF5Lmxlbmd0aCAtIDEpXG4gICAgY29uc29sZS5sb2cocm9vdCk7XG4gICAgcHJldHR5UHJpbnQocm9vdCk7XG5cblxuICAgIGZ1bmN0aW9uIGluc2VydCh2YWwsIG5vZGUgPSByb290KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJvb3QpO1xuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbm9kZSA9IG5ldyBOb2RlKHZhbCk7XG4gICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgIFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh2YWwgPCBub2RlLmRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyb290IGJpZ2dlcicpO1xuICAgICAgICAgICAgbm9kZS5sZWZ0ID0gaW5zZXJ0KHZhbCwgbm9kZS5sZWZ0KTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWwgPiBub2RlLmRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2YWwgYmlnZ2VyJyk7XG4gICAgICAgICAgICBub2RlLnJpZ2h0ID0gaW5zZXJ0KHZhbCwgbm9kZS5yaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhub2RlKTtcbiAgICAgICAgcHJldHR5UHJpbnQocm9vdCk7XG4gICAgICAgIHJldHVybiBub2RlIFxuXG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gICAgZnVuY3Rpb24gZGVsZXRlTm9kZSh2YWwsIG5vZGUgPSByb290KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJvb3QpXG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm90IGluIHRoaXMgYnJhbmNoJyk7XG4gICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIGlmIChub2RlLmRhdGEgPiB2YWwpIHtcbiAgICAgICAgICAgIG5vZGUubGVmdCA9IGRlbGV0ZU5vZGUodmFsLCBub2RlLmxlZnQpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhub2RlLmxlZnQpXG4gICAgICAgICAgICBwcmV0dHlQcmludChyb290KTtcbiAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgIH0gaWYgKG5vZGUuZGF0YSA8IHZhbCkge1xuICAgICAgICAgICAgbm9kZS5yaWdodCA9IGRlbGV0ZU5vZGUodmFsLCBub2RlLnJpZ2h0KVxuICAgICAgICAgICAgY29uc29sZS5sb2cobm9kZS5yaWdodClcbiAgICAgICAgICAgIHByZXR0eVByaW50KHJvb3QpO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgICAgICBpZiAobm9kZS5kYXRhID09PSB2YWwpIHtcbiAgICAgICAgICAgIC8vIGlmIG5vZGUgaGFzIE5PIG9yIG9ubHkgT05FIGNoaWxkcmVuOlxuICAgICAgICAgICAgaWYgKG5vZGUubGVmdCA9PT0gbnVsbCAmJiBub2RlLnJpZ2h0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlbGV0ZWQgbGVhZiBub2RlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUgXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS5sZWZ0ID09PSBudWxsICYmIG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5yaWdodDtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlLnJpZ2h0ID09PSBudWxsICYmIG5vZGUubGVmdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLmxlZnRcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiBCT1RIIGNoaWxkcmVuIGV4aXN0OlxuICAgICAgICAgICAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCAmJiBub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN1Y2Nlc3NvclBhcmVudCA9IG5vZGU7XG4gICAgICAgICAgICAgICAgbGV0IHN1Y2Nlc3NvciA9IG5vZGUucmlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2JvdGggY2hpbGRyZW4nKVxuXG4gICAgICAgICAgICAgICAgd2hpbGUgKHN1Y2Nlc3Nvci5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NvclBhcmVudCA9IHN1Y2Nlc3NvclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzb3IgPSBzdWNjZXNzb3IubGVmdFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdWNjZXNzb3IpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZiAoc3VjY2Vzc29yUGFyZW50ICE9PSBub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NvclBhcmVudC5sZWZ0ID0gc3VjY2Vzc29yLnJpZ2h0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NvclBhcmVudC5yaWdodCA9IHN1Y2Nlc3Nvci5yaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbm9kZS5kYXRhID0gc3VjY2Vzc29yLmRhdGFcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhub2RlKVxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbHVlIGRvZXNudCBleGlzdCcpXG4gICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbmQodmFsLCBub2RlID0gcm9vdCkge1xuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWwgPCBub2RlLmRhdGEpIHtcbiAgICAgICAgICAgIG5vZGUubGVmdCA9IGZpbmQodmFsLCBub2RlLmxlZnQpXG4gICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICB9IGVsc2UgaWYodmFsID4gbm9kZS5kYXRhKSB7XG4gICAgICAgICAgICBub2RlLnJpZ2h0ID0gZmluZCh2YWwsIG5vZGUucmlnaHQpXG4gICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUuZGF0YSA9PT0gdmFsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhub2RlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBIZXJlIGlzIHlvdXIgbm9kZTogJHtub2RlLmRhdGF9YCk7XG4gICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsZXZlbE9yZGVyKGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJvb3QpXG5cbiAgICAgICAgY29uc3Qgcm9vdE9yZGVyID1bXTtcbiAgICAgICAgY29uc3QgcXVldWUgPSBbcm9vdF07XG5cbiAgICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSAobm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYWxsYmFjayByYW4nKTtcblxuICAgICAgICAgICAgICAgIGlmIChub2RlLmRhdGEgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcm9vdE9yZGVyLnB1c2gobm9kZS5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocm9vdE9yZGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHF1ZXVlKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcXVldWUucHVzaChub2RlLmxlZnQpXG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKG5vZGUucmlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYWxsYmFjayhub2RlKVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHJvb3RPcmRlcik7XG4gICAgICAgIHJldHVybiByb290T3JkZXJcbiAgICAgICBcbiAgICB9XG5cbiAgICAvLyBjb25zdCByb290T3JkZXIgPSBbXTtcbiAgICBmdW5jdGlvbiBwcmVPcmRlcihjYWxsYmFjaywgbm9kZSA9IHJvb3QpIHtcbiAgICAgICAgY29uc3Qgcm9vdE9yZGVyID0gW107XG5cbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtyZXR1cm4gcm9vdE9yZGVyfTtcblxuICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IChub2RlKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2FsbGJhY2sgcmFuJyk7XG4gICAgICAgICAgICAgICAgcm9vdE9yZGVyLnB1c2gobm9kZS5kYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyb290T3JkZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNhbGxiYWNrKG5vZGUpO1xuICAgICAgICBwcmVPcmRlcihjYWxsYmFjaywgbm9kZS5sZWZ0KTtcbiAgICAgICAgcHJlT3JkZXIoY2FsbGJhY2ssIG5vZGUucmlnaHQpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHJvb3RPcmRlcik7XG4gICAgICAgIHJldHVybiByb290T3JkZXJcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluT3JkZXIoY2FsbGJhY2ssIG5vZGUgPSByb290KSB7XG4gICAgICAgIGNvbnN0IHJvb3RPcmRlciA9IFtdO1xuXG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7cmV0dXJuIHJvb3RPcmRlcn07XG5cbiAgICAgICAgaWYgKCFjYWxsYmFjaykge1xuXG4gICAgICAgICAgICBjYWxsYmFjayA9IChub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgcm9vdE9yZGVyLnB1c2gobm9kZS5kYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyb290T3JkZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGluT3JkZXIoY2FsbGJhY2ssIG5vZGUubGVmdCk7XG4gICAgICAgIGNhbGxiYWNrKG5vZGUpO1xuICAgICAgICBpbk9yZGVyKGNhbGxiYWNrLCBub2RlLnJpZ2h0KTtcblxuICAgICAgICByZXR1cm4gcm9vdE9yZGVyXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9zdE9yZGVyKGNhbGxiYWNrLCBub2RlID0gcm9vdCkge1xuICAgICAgICBjb25zdCByb290T3JkZXIgPSBbXTtcblxuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge3JldHVybiByb290T3JkZXJ9O1xuXG4gICAgICAgIGlmICghY2FsbGJhY2spIHtcblxuICAgICAgICAgICAgY2FsbGJhY2sgPSAobm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJvb3RPcmRlci5wdXNoKG5vZGUuZGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocm9vdE9yZGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBwb3N0T3JkZXIoY2FsbGJhY2ssIG5vZGUubGVmdCk7XG4gICAgICAgIHBvc3RPcmRlcihjYWxsYmFjaywgbm9kZS5yaWdodCk7XG4gICAgICAgIGNhbGxiYWNrKG5vZGUpO1xuXG4gICAgICAgIHJldHVybiByb290T3JkZXJcbiAgICB9XG5cbiAgIFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc29ydEFycmF5LFxuICAgICAgICBidWlsZFRyZWUsXG4gICAgICAgIGluc2VydCxcbiAgICAgICAgZGVsZXRlTm9kZSxcbiAgICAgICAgZmluZCxcbiAgICAgICAgbGV2ZWxPcmRlcixcbiAgICAgICAgcHJlT3JkZXIsXG4gICAgICAgIGluT3JkZXIsXG4gICAgICAgIHBvc3RPcmRlclxuICAgICAgICBcbiAgICB9XG5cbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5cblxuXG4vLyB2aXN1bGFpemVzIHRoZSB0cmVlOlxuZXhwb3J0IGNvbnN0IHByZXR0eVByaW50ID0gKG5vZGUsIHByZWZpeCA9IFwiXCIsIGlzTGVmdCA9IHRydWUpID0+IHtcbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgICAgcHJldHR5UHJpbnQobm9kZS5yaWdodCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilIIgICBcIiA6IFwiICAgIFwifWAsIGZhbHNlKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilJTilIDilIAgXCIgOiBcIuKUjOKUgOKUgCBcIn0ke25vZGUuZGF0YX1gKTtcbiAgICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICBwcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwiICAgIFwiIDogXCLilIIgICBcIn1gLCB0cnVlKTtcbiAgICB9XG4gIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB0cmVlRmFjdG9yeSB9IGZyb20gXCIuL2JpbmFyeS10cmVlXCI7XG4vLyBpbXBvcnQgeyBwcmV0dHlQcmludCB9IGZyb20gXCIuL3N1cHBvcnRpbmctZnVuY3Rpb25zXCI7XG5cblxuXG5jb25zdCB0ZXN0QXJyYXkgPSBbOCwgNiwgOSwgMTAsIDMxLCA0NSwgMjIsIDIzLCAyLCAxNF07XG5cbmNvbnN0IHRlc3RSdW4gPSB0cmVlRmFjdG9yeSh0ZXN0QXJyYXkpO1xuLy8gY29uc3Qgc29ydGVkQXJyYXkgPSB0ZXN0UnVuLnNvcnRBcnJheSh0ZXN0QXJyYXkpXG4vLyBjb25zb2xlLmxvZyhzb3J0ZWRBcnJheSk7XG5cblxuLy8gY29uc3QgdHJlZVJlc3VsdCA9IHRlc3RSdW4uYnVpbGRUcmVlKHNvcnRlZEFycmF5LCAwLCBzb3J0ZWRBcnJheS5sZW5ndGggLSAxKVxuLy8gY29uc29sZS5sb2codHJlZVJlc3VsdCk7XG5cblxuXG5cbnRlc3RSdW4uaW5zZXJ0KDMpO1xudGVzdFJ1bi5pbnNlcnQoMTYpO1xuXG50ZXN0UnVuLmRlbGV0ZU5vZGUoOSk7XG5cbnRlc3RSdW4uZGVsZXRlTm9kZSg2KTtcblxuXG50ZXN0UnVuLmZpbmQoMjIpO1xuXG4vLyB0ZXN0UnVuLmxldmVsT3JkZXIoKVxuLy8gdGVzdFJ1bi5wcmVPcmRlcigpO1xuLy8gdGVzdFJ1bi5pbk9yZGVyKCk7XG50ZXN0UnVuLnBvc3RPcmRlcigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
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
            return -1
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
        depth
        
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


testRun.insert(3);
testRun.insert(16);

testRun.deleteNode(9);

testRun.deleteNode(6);


testRun.find(22);

// testRun.levelOrder()
// testRun.preOrder();
// testRun.inOrder();
// testRun.postOrder();

testRun.height();


testRun.depth(16);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQzVDLFlBQVksY0FBYzs7OztBQUkxQjs7QUFFQSxnQkFBZ0IseURBQVc7OztBQUczQjtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0Esa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4vc3JjL2JpbmFyeS10cmVlLmpzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvc3VwcG9ydGluZy1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmFkaXggKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWVsc2UtcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgeyBwcmV0dHlQcmludCB9IGZyb20gXCIuL3N1cHBvcnRpbmctZnVuY3Rpb25zXCI7XG5cbmNsYXNzIE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEsIGxlZnQsIHJpZ2h0KSB7XG4gICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgdGhpcy5sZWZ0ID0gbnVsbDtcbiAgICAgIHRoaXMucmlnaHQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG5cblxuZXhwb3J0IGNvbnN0IHRyZWVGYWN0b3J5ID0gZnVuY3Rpb24oc3RhcnRlckFycmF5KSB7XG5cbiAgICBmdW5jdGlvbiBzb3J0QXJyYXkoYXJyKSB7XG4gICAgICAgIGNvbnN0IG9yZGVyZWRBcnJheSA9IGFyci5zb3J0KChhLCBiKSA9PiBhIC0gYilcbiAgICAgICAgY29uc29sZS5sb2cob3JkZXJlZEFycmF5KTtcbiAgICAgICAgcmV0dXJuIG9yZGVyZWRBcnJheVxuICAgIH0gXG5cbiAgICBmdW5jdGlvbiBidWlsZFRyZWUoYXJyLCBzdGFydCwgZW5kKSB7XG5cbiAgICAgICAgaWYgKHN0YXJ0ID4gZW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWlkcG9pbnQgPSBwYXJzZUludChNYXRoLmZsb29yKChzdGFydCArIGVuZCkgLyAyKSk7XG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZShhcnJbbWlkcG9pbnRdKVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld05vZGUpO1xuXG4gICAgICAgIG5ld05vZGUubGVmdCA9IGJ1aWxkVHJlZShhcnIsIHN0YXJ0LCBtaWRwb2ludC0xKTtcbiAgICAgICAgbmV3Tm9kZS5yaWdodCA9IGJ1aWxkVHJlZShhcnIsIG1pZHBvaW50KzEsIGVuZCk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coYE5vZGUgdmFsdWU6ICR7bmV3Tm9kZS5kYXRhfSwgU3RhcnQ6ICR7c3RhcnR9LCBFbmQ6ICR7ZW5kfSwgTWlkcG9pbnQ6ICR7bWlkcG9pbnR9YCk7XG4gICAgICAgIC8vIHByZXR0eVByaW50KG5ld05vZGUpO1xuICAgICAgICByZXR1cm4gbmV3Tm9kZVxuXG4gICAgfTtcblxuICAgIGNvbnN0IHNvcnRlZEFycmF5ID0gc29ydEFycmF5KHN0YXJ0ZXJBcnJheSk7XG4gICAgY29uc3Qgcm9vdCA9IGJ1aWxkVHJlZShzb3J0ZWRBcnJheSwgMCwgc29ydGVkQXJyYXkubGVuZ3RoIC0gMSlcbiAgICBjb25zb2xlLmxvZyhyb290KTtcbiAgICBwcmV0dHlQcmludChyb290KTtcblxuXG4gICAgZnVuY3Rpb24gaW5zZXJ0KHZhbCwgbm9kZSA9IHJvb3QpIHtcbiAgICAgICAgY29uc29sZS5sb2cocm9vdCk7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICBub2RlID0gbmV3IE5vZGUodmFsKTtcbiAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHZhbCA8IG5vZGUuZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jvb3QgYmlnZ2VyJyk7XG4gICAgICAgICAgICBub2RlLmxlZnQgPSBpbnNlcnQodmFsLCBub2RlLmxlZnQpO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbCA+IG5vZGUuZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZhbCBiaWdnZXInKTtcbiAgICAgICAgICAgIG5vZGUucmlnaHQgPSBpbnNlcnQodmFsLCBub2RlLnJpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKG5vZGUpO1xuICAgICAgICBwcmV0dHlQcmludChyb290KTtcbiAgICAgICAgcmV0dXJuIG5vZGUgXG5cbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgICBmdW5jdGlvbiBkZWxldGVOb2RlKHZhbCwgbm9kZSA9IHJvb3QpIHtcbiAgICAgICAgY29uc29sZS5sb2cocm9vdClcbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub3QgaW4gdGhpcyBicmFuY2gnKTtcbiAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgaWYgKG5vZGUuZGF0YSA+IHZhbCkge1xuICAgICAgICAgICAgbm9kZS5sZWZ0ID0gZGVsZXRlTm9kZSh2YWwsIG5vZGUubGVmdClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vZGUubGVmdClcbiAgICAgICAgICAgIHByZXR0eVByaW50KHJvb3QpO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgfSBpZiAobm9kZS5kYXRhIDwgdmFsKSB7XG4gICAgICAgICAgICBub2RlLnJpZ2h0ID0gZGVsZXRlTm9kZSh2YWwsIG5vZGUucmlnaHQpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhub2RlLnJpZ2h0KVxuICAgICAgICAgICAgcHJldHR5UHJpbnQocm9vdCk7XG4gICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIGlmIChub2RlLmRhdGEgPT09IHZhbCkge1xuICAgICAgICAgICAgLy8gaWYgbm9kZSBoYXMgTk8gb3Igb25seSBPTkUgY2hpbGRyZW46XG4gICAgICAgICAgICBpZiAobm9kZS5sZWZ0ID09PSBudWxsICYmIG5vZGUucmlnaHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlZCBsZWFmIG5vZGUnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZSBcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlLmxlZnQgPT09IG51bGwgJiYgbm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLnJpZ2h0O1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUucmlnaHQgPT09IG51bGwgJiYgbm9kZS5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IG5vZGUubGVmdFxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIEJPVEggY2hpbGRyZW4gZXhpc3Q6XG4gICAgICAgICAgICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsICYmIG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3VjY2Vzc29yUGFyZW50ID0gbm9kZTtcbiAgICAgICAgICAgICAgICBsZXQgc3VjY2Vzc29yID0gbm9kZS5yaWdodDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYm90aCBjaGlsZHJlbicpXG5cbiAgICAgICAgICAgICAgICB3aGlsZSAoc3VjY2Vzc29yLmxlZnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc29yUGFyZW50ID0gc3VjY2Vzc29yXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NvciA9IHN1Y2Nlc3Nvci5sZWZ0XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1Y2Nlc3Nvcik7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzb3JQYXJlbnQgIT09IG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc29yUGFyZW50LmxlZnQgPSBzdWNjZXNzb3IucmlnaHQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc29yUGFyZW50LnJpZ2h0ID0gc3VjY2Vzc29yLnJpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlLmRhdGEgPSBzdWNjZXNzb3IuZGF0YVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vZGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygndmFsdWUgZG9lc250IGV4aXN0JylcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmluZCh2YWwsIG5vZGUgPSByb290KSB7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbCA8IG5vZGUuZGF0YSkge1xuICAgICAgICAgICAgbm9kZS5sZWZ0ID0gZmluZCh2YWwsIG5vZGUubGVmdClcbiAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgIH0gZWxzZSBpZih2YWwgPiBub2RlLmRhdGEpIHtcbiAgICAgICAgICAgIG5vZGUucmlnaHQgPSBmaW5kKHZhbCwgbm9kZS5yaWdodClcbiAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZS5kYXRhID09PSB2YWwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vZGUpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYEhlcmUgaXMgeW91ciBub2RlOiAke25vZGUuZGF0YX1gKTtcbiAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxldmVsT3JkZXIoY2FsbGJhY2spIHtcbiAgICAgICAgY29uc29sZS5sb2cocm9vdClcblxuICAgICAgICBjb25zdCByb290T3JkZXIgPVtdO1xuICAgICAgICBjb25zdCBxdWV1ZSA9IFtyb290XTtcblxuICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IChub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhbGxiYWNrIHJhbicpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuZGF0YSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByb290T3JkZXIucHVzaChub2RlLmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyb290T3JkZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocXVldWUpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKG5vZGUubGVmdClcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2gobm9kZS5yaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhbGxiYWNrKG5vZGUpXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cocm9vdE9yZGVyKTtcbiAgICAgICAgcmV0dXJuIHJvb3RPcmRlclxuICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByZU9yZGVyKGNhbGxiYWNrLCBub2RlID0gcm9vdCkge1xuICAgICAgICBjb25zdCByb290T3JkZXIgPSBbXTtcblxuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge3JldHVybiByb290T3JkZXJ9O1xuXG4gICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gKG5vZGUpID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYWxsYmFjayByYW4nKTtcbiAgICAgICAgICAgICAgICByb290T3JkZXIucHVzaChub2RlLmRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvb3RPcmRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY2FsbGJhY2sobm9kZSk7XG4gICAgICAgIHByZU9yZGVyKGNhbGxiYWNrLCBub2RlLmxlZnQpO1xuICAgICAgICBwcmVPcmRlcihjYWxsYmFjaywgbm9kZS5yaWdodCk7XG5cbiAgICAgICAgY29uc29sZS5sb2cocm9vdE9yZGVyKTtcbiAgICAgICAgcmV0dXJuIHJvb3RPcmRlclxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5PcmRlcihjYWxsYmFjaywgbm9kZSA9IHJvb3QpIHtcbiAgICAgICAgY29uc3Qgcm9vdE9yZGVyID0gW107XG5cbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtyZXR1cm4gcm9vdE9yZGVyfTtcblxuICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XG5cbiAgICAgICAgICAgIGNhbGxiYWNrID0gKG5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICByb290T3JkZXIucHVzaChub2RlLmRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvb3RPcmRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaW5PcmRlcihjYWxsYmFjaywgbm9kZS5sZWZ0KTtcbiAgICAgICAgY2FsbGJhY2sobm9kZSk7XG4gICAgICAgIGluT3JkZXIoY2FsbGJhY2ssIG5vZGUucmlnaHQpO1xuXG4gICAgICAgIHJldHVybiByb290T3JkZXJcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3N0T3JkZXIoY2FsbGJhY2ssIG5vZGUgPSByb290KSB7XG4gICAgICAgIGNvbnN0IHJvb3RPcmRlciA9IFtdO1xuXG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7cmV0dXJuIHJvb3RPcmRlcn07XG5cbiAgICAgICAgaWYgKCFjYWxsYmFjaykge1xuXG4gICAgICAgICAgICBjYWxsYmFjayA9IChub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgcm9vdE9yZGVyLnB1c2gobm9kZS5kYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyb290T3JkZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHBvc3RPcmRlcihjYWxsYmFjaywgbm9kZS5sZWZ0KTtcbiAgICAgICAgcG9zdE9yZGVyKGNhbGxiYWNrLCBub2RlLnJpZ2h0KTtcbiAgICAgICAgY2FsbGJhY2sobm9kZSk7XG5cbiAgICAgICAgcmV0dXJuIHJvb3RPcmRlclxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhlaWdodChub2RlID0gcm9vdCkge1xuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SGVpZ2h0ID0gTWF0aC5tYXgoaGVpZ2h0KG5vZGUubGVmdCkgKyAxLCBoZWlnaHQobm9kZS5yaWdodCkgKyAxKVxuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudEhlaWdodCk7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEhlaWdodCBcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVwdGgodmFsLCBub2RlID0gcm9vdCkge1xuICAgICAgICBjb25zdCBmb3VuZE5vZGUgPSBmaW5kKHZhbClcbiAgICAgICAgaWYgKGZvdW5kTm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvZXNudCBleGlzdCB5bycpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbmQgcmVhY2hlZCcpO1xuICAgICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhub2RlLmRhdGEpXG4gICAgICAgIGlmICh2YWwgPCBub2RlLmRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREZXB0aCA9IGRlcHRoKHZhbCwgbm9kZS5sZWZ0KSArMVxuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudERlcHRoKTtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50RGVwdGhcbiAgICAgICAgfSBlbHNlIGlmICh2YWwgPiBub2RlLmRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREZXB0aCA9IGRlcHRoKHZhbCwgbm9kZS5yaWdodCkgKzFcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnREZXB0aCk7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudERlcHRoXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMFxuXG4gICAgfVxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzb3J0QXJyYXksXG4gICAgICAgIGJ1aWxkVHJlZSxcbiAgICAgICAgaW5zZXJ0LFxuICAgICAgICBkZWxldGVOb2RlLFxuICAgICAgICBmaW5kLFxuICAgICAgICBsZXZlbE9yZGVyLFxuICAgICAgICBwcmVPcmRlcixcbiAgICAgICAgaW5PcmRlcixcbiAgICAgICAgcG9zdE9yZGVyLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIGRlcHRoXG4gICAgICAgIFxuICAgIH1cblxufSIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cblxuXG5cbi8vIHZpc3VsYWl6ZXMgdGhlIHRyZWU6XG5leHBvcnQgY29uc3QgcHJldHR5UHJpbnQgPSAobm9kZSwgcHJlZml4ID0gXCJcIiwgaXNMZWZ0ID0gdHJ1ZSkgPT4ge1xuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICBwcmV0dHlQcmludChub2RlLnJpZ2h0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUgiAgIFwiIDogXCIgICAgXCJ9YCwgZmFsc2UpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUlOKUgOKUgCBcIiA6IFwi4pSM4pSA4pSAIFwifSR7bm9kZS5kYXRhfWApO1xuICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICAgIHByZXR0eVByaW50KG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCIgICAgXCIgOiBcIuKUgiAgIFwifWAsIHRydWUpO1xuICAgIH1cbiAgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHRyZWVGYWN0b3J5IH0gZnJvbSBcIi4vYmluYXJ5LXRyZWVcIjtcbi8vIGltcG9ydCB7IHByZXR0eVByaW50IH0gZnJvbSBcIi4vc3VwcG9ydGluZy1mdW5jdGlvbnNcIjtcblxuXG5cbmNvbnN0IHRlc3RBcnJheSA9IFs4LCA2LCA5LCAxMCwgMzEsIDQ1LCAyMiwgMjMsIDIsIDE0XTtcblxuY29uc3QgdGVzdFJ1biA9IHRyZWVGYWN0b3J5KHRlc3RBcnJheSk7XG5cblxudGVzdFJ1bi5pbnNlcnQoMyk7XG50ZXN0UnVuLmluc2VydCgxNik7XG5cbnRlc3RSdW4uZGVsZXRlTm9kZSg5KTtcblxudGVzdFJ1bi5kZWxldGVOb2RlKDYpO1xuXG5cbnRlc3RSdW4uZmluZCgyMik7XG5cbi8vIHRlc3RSdW4ubGV2ZWxPcmRlcigpXG4vLyB0ZXN0UnVuLnByZU9yZGVyKCk7XG4vLyB0ZXN0UnVuLmluT3JkZXIoKTtcbi8vIHRlc3RSdW4ucG9zdE9yZGVyKCk7XG5cbnRlc3RSdW4uaGVpZ2h0KCk7XG5cblxudGVzdFJ1bi5kZXB0aCgxNik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
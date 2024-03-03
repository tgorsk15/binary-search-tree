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
    constructor(data, left, right) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }



const treeFactory = function() {

    function sortArray(arr) {
        const orderedArray = arr.sort((a, b) => a - b)
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

        console.log(newNode)
        console.log(newNode.data);
        return newNode

    };


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

testRun.find(22, treeResult);

// testRun.levelOrder(treeResult)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4Q0FBOEMsVUFBVTtBQUN4RDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsK0JBQStCOztBQUUvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDN0xBOzs7O0FBSUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLE9BQU8sRUFBRSx5QkFBeUI7QUFDbkU7QUFDQSxtQkFBbUIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFVBQVU7QUFDakU7QUFDQSxnQ0FBZ0MsT0FBTyxFQUFFLHlCQUF5QjtBQUNsRTtBQUNBOzs7Ozs7VUNoQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONEM7QUFDUzs7OztBQUlyRDs7QUFFQSxnQkFBZ0IseURBQVc7QUFDM0I7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQSxrRUFBVzs7QUFFWDtBQUNBLGtFQUFXOztBQUVYO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxpQyIsInNvdXJjZXMiOlsid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvYmluYXJ5LXRyZWUuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9zdXBwb3J0aW5nLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1lbHNlLXJldHVybiAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSwgbGVmdCwgcmlnaHQpIHtcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICB0aGlzLmxlZnQgPSBudWxsO1xuICAgICAgdGhpcy5yaWdodCA9IG51bGw7XG4gICAgfVxuICB9XG5cblxuXG5leHBvcnQgY29uc3QgdHJlZUZhY3RvcnkgPSBmdW5jdGlvbigpIHtcblxuICAgIGZ1bmN0aW9uIHNvcnRBcnJheShhcnIpIHtcbiAgICAgICAgY29uc3Qgb3JkZXJlZEFycmF5ID0gYXJyLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICAgICAgICByZXR1cm4gb3JkZXJlZEFycmF5XG4gICAgfSBcblxuICAgIGZ1bmN0aW9uIGJ1aWxkVHJlZShhcnIsIHN0YXJ0LCBlbmQpIHtcblxuXG5cbiAgICAgICAgaWYgKHN0YXJ0ID4gZW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWlkcG9pbnQgPSBNYXRoLmZsb29yKChzdGFydCArIGVuZCkgLyAyKTtcbiAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKGFyclttaWRwb2ludF0pXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2cobWlkcG9pbnQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdOb2RlKTtcblxuICAgICAgICBuZXdOb2RlLmxlZnQgPSBidWlsZFRyZWUoYXJyLCBzdGFydCwgbWlkcG9pbnQtMSk7XG4gICAgICAgIG5ld05vZGUucmlnaHQgPSBidWlsZFRyZWUoYXJyLCBtaWRwb2ludCsxLCBlbmQpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld05vZGUpXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld05vZGUuZGF0YSk7XG4gICAgICAgIHJldHVybiBuZXdOb2RlXG5cbiAgICB9O1xuXG5cbiAgICBmdW5jdGlvbiBpbnNlcnQodmFsLCBub2RlKSB7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICBub2RlID0gbmV3IE5vZGUodmFsKTtcbiAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgXG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKG5vZGUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWwpO1xuXG4gICAgICAgIGlmICh2YWwgPCBub2RlLmRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyb290IGJpZ2dlcicpO1xuICAgICAgICAgICAgbm9kZS5sZWZ0ID0gaW5zZXJ0KHZhbCwgbm9kZS5sZWZ0KTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWwgPiBub2RlLmRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2YWwgYmlnZ2VyJyk7XG4gICAgICAgICAgICBub2RlLnJpZ2h0ID0gaW5zZXJ0KHZhbCwgbm9kZS5yaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhub2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGUgXG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVOb2RlKHZhbCwgbm9kZSkge1xuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdCBpbiB0aGlzIGJyYW5jaCcpO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICBpZiAobm9kZS5kYXRhID4gdmFsKSB7XG4gICAgICAgICAgICBub2RlLmxlZnQgPSBkZWxldGVOb2RlKHZhbCwgbm9kZS5sZWZ0KVxuICAgICAgICAgICAgY29uc29sZS5sb2cobm9kZS5sZWZ0KVxuICAgICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgfSBpZiAobm9kZS5kYXRhIDwgdmFsKSB7XG4gICAgICAgICAgICBub2RlLnJpZ2h0ID0gZGVsZXRlTm9kZSh2YWwsIG5vZGUucmlnaHQpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhub2RlLnJpZ2h0KVxuICAgICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgICAgICBpZiAobm9kZS5kYXRhID09PSB2YWwpIHtcbiAgICAgICAgICAgIC8vIGlmIG5vZGUgaGFzIE5PIG9yIG9ubHkgT05FIGNoaWxkcmVuOlxuICAgICAgICAgICAgaWYgKG5vZGUubGVmdCA9PT0gbnVsbCAmJiBub2RlLnJpZ2h0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlbGV0ZWQgbGVhZiBub2RlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUgXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS5sZWZ0ID09PSBudWxsICYmIG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5yaWdodDtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlLnJpZ2h0ID09PSBudWxsICYmIG5vZGUubGVmdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLmxlZnRcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiBCT1RIIGNoaWxkcmVuIGV4aXN0OlxuICAgICAgICAgICAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCAmJiBub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN1Y2Nlc3NvclBhcmVudCA9IG5vZGU7XG4gICAgICAgICAgICAgICAgbGV0IHN1Y2Nlc3NvciA9IG5vZGUucmlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2JvdGggY2hpbGRyZW4nKVxuXG4gICAgICAgICAgICAgICAgd2hpbGUgKHN1Y2Nlc3Nvci5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NvclBhcmVudCA9IHN1Y2Nlc3NvclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzb3IgPSBzdWNjZXNzb3IubGVmdFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdWNjZXNzb3IpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZiAoc3VjY2Vzc29yUGFyZW50ICE9PSBub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NvclBhcmVudC5sZWZ0ID0gc3VjY2Vzc29yLnJpZ2h0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NvclBhcmVudC5yaWdodCA9IHN1Y2Nlc3Nvci5yaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbm9kZS5kYXRhID0gc3VjY2Vzc29yLmRhdGFcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhub2RlKVxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbHVlIGRvZXNudCBleGlzdCcpXG4gICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbmQodmFsLCBub2RlKSB7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbCA8IG5vZGUuZGF0YSkge1xuICAgICAgICAgICAgbm9kZS5sZWZ0ID0gZmluZCh2YWwsIG5vZGUubGVmdClcbiAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgIH0gZWxzZSBpZih2YWwgPiBub2RlLmRhdGEpIHtcbiAgICAgICAgICAgIG5vZGUucmlnaHQgPSBmaW5kKHZhbCwgbm9kZS5yaWdodClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlLmRhdGEgPT09IHZhbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobm9kZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgSGVyZSBpcyB5b3VyIG5vZGU6ICR7bm9kZS5kYXRhfWApO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gZnVuY3Rpb24gbGV2ZWxPcmRlcihub2RlKSB7XG4gICAgLy8gICAgIGlmIChub2RlID09PSBudWxsKSB7cmV0dXJuIG5vZGV9XG5cbiAgICAvLyAgICAgY29uc3Qgcm9vdE9yZGVyID1bXTtcbiAgICAvLyAgICAgY29uc3QgcXVldWUgPSBbXTtcblxuICAgIC8vICAgICBjb25zb2xlLmxvZyhub2RlKVxuICAgIC8vICAgICBxdWV1ZS5wdXNoKG5vZGUpO1xuICAgIC8vICAgICBjb25zdCBjdXJyZW50ID0gcXVldWVbMF07XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHF1ZXVlKVxuXG4gICAgLy8gICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50KVxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2cocXVldWUpXG4gICAgLy8gICAgICAgICByb290T3JkZXIucHVzaChjdXJyZW50LnJvb3QpXG5cbiAgICAvLyAgICAgICAgIGlmIChjdXJyZW50LmxlZnQgIT09IG51bGwpIHtcbiAgICAvLyAgICAgICAgICAgICBxdWV1ZS5wdXNoKGN1cnJlbnQubGVmdClcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGlmIChjdXJyZW50LnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgLy8gICAgICAgICAgICAgcXVldWUucHVzaChjdXJyZW50LnJpZ2h0KTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIHF1ZXVlLnNoaWZ0KCk7XG4gICAgLy8gICAgICAgICBjdXJyZW50ID0gcXVldWVbMF1cbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHF1ZXVlKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICByZXR1cm4gcm9vdE9yZGVyXG4gICAgICAgXG4gICAgLy8gfVxuXG4gICBcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNvcnRBcnJheSxcbiAgICAgICAgYnVpbGRUcmVlLFxuICAgICAgICBpbnNlcnQsXG4gICAgICAgIGRlbGV0ZU5vZGUsXG4gICAgICAgIGZpbmQsXG4gICAgICAgIFxuICAgIH1cblxufSIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cblxuXG5cbi8vIHZpc3VsYWl6ZXMgdGhlIHRyZWU6XG5leHBvcnQgY29uc3QgcHJldHR5UHJpbnQgPSAobm9kZSwgcHJlZml4ID0gXCJcIiwgaXNMZWZ0ID0gdHJ1ZSkgPT4ge1xuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICBwcmV0dHlQcmludChub2RlLnJpZ2h0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUgiAgIFwiIDogXCIgICAgXCJ9YCwgZmFsc2UpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUlOKUgOKUgCBcIiA6IFwi4pSM4pSA4pSAIFwifSR7bm9kZS5kYXRhfWApO1xuICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICAgIHByZXR0eVByaW50KG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCIgICAgXCIgOiBcIuKUgiAgIFwifWAsIHRydWUpO1xuICAgIH1cbiAgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHRyZWVGYWN0b3J5IH0gZnJvbSBcIi4vYmluYXJ5LXRyZWVcIjtcbmltcG9ydCB7IHByZXR0eVByaW50IH0gZnJvbSBcIi4vc3VwcG9ydGluZy1mdW5jdGlvbnNcIjtcblxuXG5cbmNvbnN0IHRlc3RBcnJheSA9IFs4LCA2LCA5LCAxMCwgMzEsIDQ1LCAyMiwgMjMsIDIsIDE1XTtcblxuY29uc3QgdGVzdFJ1biA9IHRyZWVGYWN0b3J5KCk7XG5jb25zdCBzb3J0ZWRBcnJheSA9IHRlc3RSdW4uc29ydEFycmF5KHRlc3RBcnJheSlcbmNvbnNvbGUubG9nKHNvcnRlZEFycmF5KTtcblxuXG5jb25zdCB0cmVlUmVzdWx0ID0gdGVzdFJ1bi5idWlsZFRyZWUoc29ydGVkQXJyYXksIDAsIHNvcnRlZEFycmF5Lmxlbmd0aCAtIDEpXG5jb25zb2xlLmxvZyh0cmVlUmVzdWx0KTtcblxuXG50ZXN0UnVuLmluc2VydCgzLCB0cmVlUmVzdWx0KTtcbnRlc3RSdW4uaW5zZXJ0KDE2LCB0cmVlUmVzdWx0KTtcblxuLy8gcHJldHR5UHJpbnQodHJlZVJlc3VsdCk7XG5cblxuY29uc29sZS5sb2codHJlZVJlc3VsdC5yb290KVxudGVzdFJ1bi5kZWxldGVOb2RlKDksIHRyZWVSZXN1bHQpO1xuXG5wcmV0dHlQcmludCh0cmVlUmVzdWx0KTtcblxudGVzdFJ1bi5kZWxldGVOb2RlKDYsIHRyZWVSZXN1bHQpO1xucHJldHR5UHJpbnQodHJlZVJlc3VsdCk7XG5cbi8vIHRlc3RSdW4uZGVsZXRlTm9kZSgxNywgdHJlZVJlc3VsdCk7XG4vLyBwcmV0dHlQcmludCh0cmVlUmVzdWx0KTtcblxuLy8gdGVzdFJ1bi5kZWxldGVOb2RlKDIyLCB0cmVlUmVzdWx0KTtcbi8vIHByZXR0eVByaW50KHRyZWVSZXN1bHQpO1xuXG50ZXN0UnVuLmZpbmQoMjIsIHRyZWVSZXN1bHQpO1xuXG4vLyB0ZXN0UnVuLmxldmVsT3JkZXIodHJlZVJlc3VsdCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
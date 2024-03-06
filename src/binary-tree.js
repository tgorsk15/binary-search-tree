/* eslint-disable arrow-body-style */
/* eslint-disable radix */
/* eslint-disable no-else-return */
/* eslint-disable import/prefer-default-export */
import { prettyPrint } from "./supporting-functions";

class Node {
    constructor(data, left, right) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }



export const treeFactory = function(starterArray) {

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
    prettyPrint(root);


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
        prettyPrint(root);
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
            prettyPrint(root);
            return node
        } if (node.data < val) {
            node.right = deleteNode(val, node.right)
            console.log(node.right)
            prettyPrint(root);
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
        prettyPrint(root);
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
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
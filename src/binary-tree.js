/* eslint-disable no-else-return */
/* eslint-disable import/prefer-default-export */
class Node {
    constructor(root, left, right) {
      this.root = root;
      this.left = null;
      this.right = null;
    }
  }



export const treeFactory = function() {


    function sortArray(arr) {
        const sortedArray = arr.sort((a, b) => a - b)
        return sortedArray
    } 

    function buildTree(arr, start, end) {

        if (start > end) {
            return null
        }

        const midpoint = Math.floor((start + end) / 2);
        const newNode = new Node(arr[midpoint])

        // console.log(midpoint);
        console.log(newNode);

        newNode.left = buildTree(arr, start, midpoint-1);
        newNode.right = buildTree(arr, midpoint+1, end);

        console.log(newNode)
        console.log(newNode.root);
        return newNode

    };

    function insert(val, node) {
        if (node === null) {
            node = new Node(val);
            return node
            // return new Node(val)
        };
        console.log(node);
        // console.log(val);

        if (val < node.root) {
            console.log('root bigger');
            node.left = insert(val, node.left);
        } else if (val > node.root) {
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
        

        if (node.root > val) {
            node.left = deleteNode(val, node.left)
            console.log(node.left)
            return node
        } if (node.root < val) {
            node.right = deleteNode(val, node.right)
            console.log(node.right)
            return node
        }

        
        if (node.root === val) {
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
                node.root = successor.root
                console.log(node)
                return node
                

            }


        }
        console.log('value doesnt exist')

        
    }


    return {
        sortArray,
        buildTree,
        insert,
        deleteNode
    }

}
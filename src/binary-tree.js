/* eslint-disable no-else-return */
/* eslint-disable import/prefer-default-export */
class Node {
    constructor(data, left, right) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }



export const treeFactory = function() {

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
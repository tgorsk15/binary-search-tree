/* eslint-disable import/prefer-default-export */
class Node {
    constructor(root, left, right) {
      this.root = root;
      this.left = left;
      this.right = right;
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

        console.log(midpoint);
        console.log(newNode);

        newNode.left = buildTree(arr, start, midpoint-1);
        newNode.right = buildTree(arr, midpoint+1, end);

        console.log(newNode)
        return newNode

    }


    return {
        sortArray,
        buildTree
    }

}
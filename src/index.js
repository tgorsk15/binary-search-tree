import { treeFactory } from "./binary-tree";



const testArray = [8, 6, 9, 10, 31, 45, 22, 23, 2, 15];
// const unsortedArray = [23, 4, 5, 7, 3, 20, 31, 22];

const testRun = treeFactory();
const sortedArray = testRun.sortArray(testArray)
console.log(sortedArray);


testRun.buildTree(sortedArray, 0, sortedArray.length - 1)



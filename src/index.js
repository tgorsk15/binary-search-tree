import { treeFactory } from "./binary-tree";
import { prettyPrint } from "./supporting-functions";



const testArray = [8, 6, 9, 10, 31, 45, 22, 23, 2, 15];

const testRun = treeFactory();
const sortedArray = testRun.sortArray(testArray)
console.log(sortedArray);


const treeResult = testRun.buildTree(sortedArray, 0, sortedArray.length - 1)
console.log(treeResult);

// prettyPrint(treeResult);

testRun.insert(3, treeResult);



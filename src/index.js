import { treeFactory } from "./binary-tree";
// import { prettyPrint } from "./supporting-functions";



const testArray = [8, 6, 9, 10, 31, 45, 22, 23, 2, 14];

const testRun = treeFactory(testArray);
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
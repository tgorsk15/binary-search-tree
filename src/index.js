import { treeFactory } from "./binary-tree";

// driver script:

const testArray = [8, 6, 9, 9, 9, 10, 12, 13, 31, 45, 22, 23, 2, 14];
const testRun = treeFactory(testArray);


// testRun.deleteNode(6);

testRun.insert(7);
testRun.insert(4);
testRun.insert(5);
testRun.insert(3);

// testRun.find(22);

testRun.isBalanced();  // logs "right side too short"

testRun.levelOrder()
testRun.preOrder();
testRun.inOrder();
testRun.postOrder();
// testRun.height();

testRun.rebalance();
testRun.isBalanced();

// testRun.levelOrder()
// testRun.preOrder();
// testRun.inOrder();
// testRun.postOrder();



import { treeFactory } from "./binary-tree";


const testArray = [8, 6, 9, 9, 9, 10, 31, 45, 22, 23, 2, 14];
const testRun = treeFactory(testArray);


testRun.deleteNode(6);

testRun.insert(7);
testRun.insert(4);
testRun.insert(5);
testRun.insert(3);
testRun.insert(6);


testRun.find(22);

// testRun.levelOrder()

// testRun.height();
// testRun.depth(16);

testRun.isBalanced();

// testRun.preOrder();
// testRun.inOrder();
// testRun.postOrder();
testRun.rebalance();

testRun.insert(52);
testRun.isBalanced();

// testRun.insert(60);
// testRun.isBalanced()
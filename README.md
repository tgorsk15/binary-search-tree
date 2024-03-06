In this project I built a fully functioning and in-depth binary search tree, one of the most relevant and useful core data structures in Computer Science. I significantly increased my knowledge of how data structures/algorithms work by doing this exercise and now have a deep understanding of binary search trees. Below is some information on some of the functionailities of the program:  


- class Node: provides the blueprint to add new nodes to the Tree. The node.data is where the actual number of that node is stored

- sortArray(): not only sorts the array, but removes any duplicate numbers as well

- buildTree(): the function responsible for taking the array as an input and generating the respective nodes to create the actual tree

- prettyPrint(): very useful function that helps to visualize the entire tree in the console itself

- insert(): allows the user to insert any number they want as a node into the tree.The function will automatically place the node in it's proper place, by comparing it to the values of the neighboring and ancestral nodes

- deleteNode(): if the input number given exists on the tree, that exact node will be deleted, and the remaining nodes will adjust to the proper positions to ensure the order of the tree is kept

- find(): allows the user to input a number, and if it exists in the tree, its precise location will be returned

- levelOrder(): allows a BFS traversal of the tree

- preOrder(), inOrder(), postOrder(): each allow a varying method of DFS traversal through the tree

- height(): returns the height of the given node... in other words, gives the number of edges based on the longest path possible from the given node, to a leaf node

- depth(): returns the given node's depth... which is the number of edges the given node is from the root

- isBalanced(): checks to see if the overall structure of the tree is balanced (the left side of tree isn't too much deeper than the right side... and vice versa)

- rebalance(): rebalances the tree if the tree is not balanced. This involves redistributing the nodes in a way so that the right and left side balance
#include "binary_tree_array.h" // Make sure this path is correct for your project setup

int main() {
    binary_tree_array<int> tree;

    // Insert elements into the binary tree to match the specified structure.
    // Non-existent nodes are represented as '-1' to maintain proper indexing.
    tree.insert(2);    // root
    tree.insert(7);    // root's left child
    tree.insert(5);    // root's right child
    tree.insert(10);   // left child of node 7
    tree.insert(6);    // right child of node 7
    tree.insert(-1);   // left child of node 5 (non-existent)
    tree.insert(9);    // right child of node 5
    tree.insert(-1);   // left child of node 10 (non-existent)
    tree.insert(-1);   // right child of node 10 (non-existent)
    tree.insert(5);    // left child of node 6
    tree.insert(11);   // right child of node 6
    tree.insert(-1);   // left child of node 9 (non-existent)
    tree.insert(4);    // right child of node 9

    // Now, print the tree in pre-order, in-order, and post-order
    std::cout << "Pre-order traversal: ";
    tree.pre_order();

    std::cout << "In-order traversal: ";
    tree.in_order();

    std::cout << "Post-order traversal: ";
    tree.post_order();

    return 0;
}
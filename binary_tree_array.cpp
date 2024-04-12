#include <iostream>

template <typename T>
class binary_tree_array {
private:
    T* tree;
    int capacity; // Total capacity of the tree
    int count;    // Number of elements inserted into the tree

    // Ensure the capacity of the tree
    void ensure_capacity(int index) {
        if (index >= capacity) {
            // Calculate the new capacity required
            int new_capacity = capacity;
            while (index >= new_capacity) {
                new_capacity = new_capacity * 2 + 1;
            }

            // Create a new array with the new capacity and copy old values
            T* new_tree = new T[new_capacity]{0}; // Initialize with default values
            for (int i = 0; i < capacity; ++i) {
                new_tree[i] = tree[i];
            }

            // Delete old tree and assign new tree
            delete[] tree;
            tree = new_tree;
            capacity = new_capacity;
        }
    }

    // Function to print the tree in preorder
    void preorder_print(int index) const {
        if (index < count && tree[index] != T()) { // Replace NULL with default-constructed T
            std::cout << tree[index] << " ";
            preorder_print(index * 2 + 1);
            preorder_print(index * 2 + 2);
        }
    }

    // Function to print the tree in inorder
    void inorder_print(int index) const {
        if (index < count && tree[index] != T()) {
            inorder_print(index * 2 + 1);
            std::cout << tree[index] << " ";
            inorder_print(index * 2 + 2);
        }
    }

    // Function to print the tree in postorder
    void postorder_print(int index) const {
        if (index < count && tree[index] != T()) {
            postorder_print(index * 2 + 1);
            postorder_print(index * 2 + 2);
            std::cout << tree[index] << " ";
        }
    }

public:
    binary_tree_array() : tree(nullptr), capacity(0), count(0) {}

    ~binary_tree_array() {
        delete[] tree;
    }

    void insert(const T& value) {
        ensure_capacity(count);
        tree[count++] = value;
    }

    void pre_order() const {
        preorder_print(0);
        std::cout << "\n";
    }

    void in_order() const {
        inorder_print(0);
        std::cout << "\n";
    }

    void post_order() const {
        postorder_print(0);
        std::cout << "\n";
    }
};
class Tree{
    constructor(){
        this.head = null;
        this.tail = null;
    };
    
    addAtHead(val) {
    this.head = new TreeNode(val);
    this.tail = this.head;
    };
    
    addToTail(val){
        this.tail.right = new TreeNode(val);
        this.tail = this.tail.right;
    };
}


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * Definition for a binary tree node.
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

const inorderTraversal = function(node){
        if(node === null){
        return;
    };
    
    inorderTraversal(node.left);
    if(new_root.head === null){
        new_root.addAtHead(node.val);
    }
    else{
        new_root.addToTail(node.val);
    };
    inorderTraversal(node.right);
}

let new_root = new Tree();
const root = {"val":5,"right":{"val":6,"right":{"val":8,"right":{"val":9,"right":null,"left":null},"left":{"val":7,"right":null,"left":null}},"left":null},"left":{"val":3,"right":{"val":4,"right":null,"left":null},"left":{"val":2,"right":null,"left":{"val":1,"right":null,"left":null}}}};
var increasingBST = function(root) {
    inorderTraversal(root);
    console.log(JSON.stringify(new_root));
};

increasingBST(root);
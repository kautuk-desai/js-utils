const inorderTraversal = function(node, k, count){
    if(node === null){
        return;
    };
    return inorderTraversal(node.left, k, count++);
    
    if(k === count){
        return node.val;
    };
    return inorderTraversal(node.right, k, count++);
};



const root = {"val":3,"right":{"val":4,"right":null,"left":null},"left":{"val":1,"right":{"val":2,"right":null,"left":null},"left":null}};


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const result = inorderTraversal(root, k, 0);
    
    console.log(result);
};

kthSmallest(root, 1);
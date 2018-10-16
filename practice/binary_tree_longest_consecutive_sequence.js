let count;

const dfs = function(node, prevVal){
    if(node === null){
        return;
    }
    
    dfs(node.left, node.val);
    console.log("l-", node.val);
    dfs(node.right, node.val);
    console.log("r-", node.val);
}


/**
 * @param root: the root of binary tree
 * @return: the length of the longest consecutive sequence path
 */
const longestConsecutive = function (root) {
    // write your code here
    if(root === null){
        return 0;
    }
    count = 1;
    dfs(root, null);
}

const root = {"right":{"right":{"right":{"right":null,"left":null,"val":5},"left":null,"val":-4},"left":{"right":null,"left":null,"val":2},"val":3},"left":null,"val":1};
longestConsecutive(root);


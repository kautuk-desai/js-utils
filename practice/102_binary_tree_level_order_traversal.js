const bfs = function(node, arr){
    if(node === null){
        return;
    };
    
    let queue = [];
    node.level = 0;
    queue.push(node);
    while(queue.length > 0){
        let node  = queue.shift();
        if(arr[node.level] !== undefined && node.val !== undefined){
            arr[node.level].push(node.val);
        }
        else if(node.val !== undefined){
            arr.push([node.val])
        };
        
        if(node.left !== null){
            node.left.level = node.level + 1;
            queue.push(node.left);
        }
        
        if(node.right !== null){
            node.right.level = node.level + 1;
            queue.push(node.right);
        }
    };
    
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let arr = [];
    if(root === null){
        return arr;
    };
    
    // console.log(JSON.stringify(root));
    
    bfs(root, arr);
    return arr;
};


const root = {"val":3,"right":{"val":20,"right":{"val":7,"right":null,"left":null},"left":{"val":15,"right":null,"left":null}},"left":{"val":9,"right":{"val":1,"right":null,"left":null},"left":{"val":2,"right":null,"left":null}}};

levelOrder(root);
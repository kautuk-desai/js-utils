var isValidBST = function(root) {
    if(root === null){
        return false;
    }
    root.min = -Infinity;
    root.max = Infinity;
    let stack = [];
    stack.push(root);
    
    while(stack.length > 0){
        let node = stack.pop();
        if(node.val < node.min || node.val > node.max){
            return false;
        }
        
        if(node.left !== null){
            node.left.min = node.min;
            node.left.max = node.val;
            stack.push(node.left);
        }
        
        if(node.right !== null){
            node.right.min = node.val;
            node.right.max = node.max;
            stack.push(node.right);
        }
    }
    
    return true;
};

var root = {"val":5,"right":{"val":4,"right":{"val":6,"right":null,"left":null},"left":{"val":3,"right":null,"left":null}},"left":{"val":1,"right":null,"left":null}};
let result = isValidBST(root);
console.log(result);
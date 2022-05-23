/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
//DFS iterative
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
    let stack = [];
    if(root != null) {
       stack.push([root, 1]);
    }
    let res = 0;
    
    while (stack.length != 0) {
        const firstNode = stack.pop();
        if(firstNode) {
            res = Math.max(res, firstNode[1]);
            if (firstNode[0].left != null) { 
                stack.push([firstNode[0].left, firstNode[1] + 1]);
            }
            if (firstNode[0].right != null) { 
                stack.push([firstNode[0].right, firstNode[1] + 1]);
            }
        }
    }
    return res;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
    if (root == null) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
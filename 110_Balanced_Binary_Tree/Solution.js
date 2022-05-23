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
 * @return {boolean}
 */
 var isBalanced = function(root) {
    let isBalanced = true;

    let dfs = function(root) {
        if (!root) return 0;
        
        let leftHeight = 1 + dfs(root.left);
        let rightHeight = 1 + dfs(root.right);

        
        if (Math.abs(leftHeight - rightHeight) > 1) {
            isBalanced = false;
        }
        
        return Math.max(leftHeight, rightHeight);
    }
    
    dfs(root);
    
    return isBalanced;
    
};
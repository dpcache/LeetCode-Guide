/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    let rootCopy = root;
    while(rootCopy) {
        if ( q.val < rootCopy.val && p.val < rootCopy.val) {
            rootCopy = rootCopy.left;
        } else if ( q.val > rootCopy.val && p.val > rootCopy.val) {
            rootCopy = rootCopy.right;
        } else {
            return rootCopy;
        }
     }
};
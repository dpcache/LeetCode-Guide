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

//BFS
var minDepth = function(root) {
    if (root == null) {return 0}; 
    
    const queue = [[root, 1]];
    
    while(queue.length !== 0) {
        const node = queue.shift();
        
        if (node[0]?.left == null && node[0]?.right == null) {
            return (node[1]);
        } 
        
        if (node[0]?.left != null) {  
            queue.push([node[0].left, node[1] + 1]);
        }
        
        if (node[0]?.right != null) { 
            queue.push([node[0].right, node[1] + 1]);
        }
        
    }
    
};
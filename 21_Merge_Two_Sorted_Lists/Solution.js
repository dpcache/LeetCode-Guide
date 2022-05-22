/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    let tail = new ListNode();
    const head = tail;
    
    // Splice and merge
    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        
        tail = tail.next;
    }
    
    // If one of the list is used up empty/null
    if (list1) {
        tail.next = list1;
    } else if (list2) {
        tail.next = list2;
    }
    
    return head.next;
};
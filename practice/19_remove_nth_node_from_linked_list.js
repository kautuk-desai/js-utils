/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let slow = head,
        fast = head;
    
    while(n > 0){
        fast = fast.next;
        n--;
    }
    
    while(fast.next !== null){
        fast = fast.next;
        slow = slow.next;
    }
    
    slow.next = slow.next.next;
    return head;
};


head = {"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":4,"next":{"val":5,"next":null}}}}};
let result = removeNthFromEnd(head , 2);
console.log(JSON.stringify(result));
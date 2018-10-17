
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let carry = 0;
    let sum = 0, digit;
    let head = new ListNode();
    let curr = head;
    while (l1 !== null && l2 !== null) {
        sum = (l1.val + l2.val + carry);
        digit = sum % 10;
        if (head.val === undefined) {
            head.val = digit;
        }
        else {
            curr.next = new ListNode(digit);
            curr = curr.next;
        }
        carry = parseInt(sum / 10);
        console.log(carry);
        l1 = l1.next;
        l2 = l2.next;
    }

    while (l1) {
        sum = (l1.val + carry);
        digit = sum % 10;
        curr.next = new ListNode(digit);
        curr = curr.next;
        carry = parseInt(sum / 10);
        l1 = l1.next;
    }

    while (l2) {
        sum = (l2.val + carry);
        digit = sum % 10;
        curr.next = new ListNode(digit);
        curr = curr.next;
        carry = parseInt(sum / 10);
        l2 = l2.next;
    }

    if(carry > 0){
        curr.next = new ListNode(carry);
        curr = curr.next;
    }

    return head;

};

// l1 = { val: 2, next: { val: 4, next: { val: 3, next: null } } };
// l2 = { val: 5, next: { val: 6, next: { val: 4, next: null } } };

// l1 = { val: 2, next: { val: 4, next: null } };
// l2 = { val: 5, next: { val: 6, next: { val: 4, next: null } } };

// l1 = { val: 1, next: null};
// l2 = {val:1, next: {val: 9, next: { val: 9, next: { val: 9, next: null } }}};

l1 = { val: 9, next: {val: 9, next:null }};
l2 = { val: 9, next: null};

let result = addTwoNumbers(l1, l2);
console.log(JSON.stringify(result));
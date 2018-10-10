function Node(val){
    this.val = val;
    this.next = null;
};

var MyLinkedList = function() {
    this.head = null;
    this.tail = null;
    this.length = 0;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const new_node = new Node(val);
    new_node.next = this.head;
    if(this.head === null){
        this.tail = new_node;
    }
    
    this.head = new_node;
    this.length++;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 **/
MyLinkedList.prototype.addAtTail = function(val) {
    const new_node = new Node(val);
    if(this.tail === null){
        this.head = new_node;
    }
    else {
        this.tail.next = new_node;
    }
    
    this.tail = new_node;
    this.length++;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 **/
var obj = new MyLinkedList();
obj.addAtHead(1);
let arr = [1,2,3,4,5];
for(let i = 1; i < arr.length; i++){
    obj.addAtTail(arr[i]);
};

var oddEvenList = function(head) {
    let current = head;
    console.log(head);
    if(current === null){
        return head;
    };
    
    let even = head.next, evenHead = even;
    while(even && even.next !== null){
        current.next = even.next;
        current = current.next;
        even.next = current.next;
        even = even.next;
    };

    current.next = evenHead;
    
    return head;
};

oddEvenList(obj.head);

console.log(JSON.stringify(obj.head));
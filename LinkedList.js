/**
 * Initialize data structure.
 */
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
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(this.length <= index || index < 0){
        return -1;
    }
    else if(index === 0){
        return this.head.val;
    }
    
    let node = this.head;
    while(index > 0){
        node = node.next;
        index--;
    }
    
    return node.val;
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
 */
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
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list,
 * the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(this.length === index){
        this.addAtTail(val);
    }
    else if(index === 0){
        this.addAtHead(val);
    }
    else if(index < this.length && index > 0){
        let current = this.head;
        while(index > 1){
            current = current.next;
            index--;
        }
        const new_node = new Node(val);
        new_node.next = current.next;
        current.next = new_node;
        this.length++;
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index === 0){
        this.head = this.head.next;
    }
    else if(index > 0 && index < this.length){
        let current = this.head;
        while(index > 1){
            current = current.next;
            index--;
        }
        current.next = current.next.next;

        this.length--;
    }
};


MyLinkedList.prototype.printHead = function(){
    let current = this.head;
    let list = "";
    while(current){
        list += current.val;
            list += "-> ";
        current = current.next;
    }

    list += "null";
    console.log(list);
}

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 **/
var obj = new MyLinkedList();
["MyLinkedList","addAtHead","addAtIndex","get","get","get"]
[[],[1],[1,2],[1],[0],[2]]
obj.addAtHead(1);
obj.addAtIndex(1, 2);
obj.printHead();
console.log(obj.get(1));
console.log(obj.get(0));
obj.get(2);
// obj.deleteAtIndex(1);  // now the linked list is 1->3
// obj.get(1);
// obj.printHead();
// console.log(obj.length);
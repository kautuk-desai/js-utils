/**
 * Node data structure.
 */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
};

/**
 * Linked List class
 */
class MyLinkedList extends Node {
    constructor() {
        super();
        this.head = null;
        this.tail = null;
        this.length = 0;
    };

    /**
     * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (this.length <= index || index < 0 || this.head === null) {
            return -1;
        }
        else if (index === 0) {
            return this.head.val;
        }

        let node = this.head;
        while (index > 0) {
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
    addAtHead(val) {
        const new_node = new Node(val);
        new_node.next = this.head;
        if (this.head === null) {
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
    addAtTail(val) {
        const new_node = new Node(val);
        if (this.head === null) {
            this.addAtHead(val);
        }
        else {
            this.tail.next = new_node;
            this.length++;
        }

        this.tail = new_node;
    };


    /**
     * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list,
     * the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
     * @param {number} index 
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index > this.length) {
            return;
        }

        if (this.length === index) {
            this.addAtTail(val);
        }
        else if (index === 0) {
            this.addAtHead(val);
        }
        else if (index < this.length && index > 0) {
            let current = this.head;
            while (index > 1) {
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
    deleteAtIndex(index) {
        if (index === 0) {
            this.head = this.head.next;
            this.length--;
        }
        else if (index === this.length - 1) {
            let curr = this.head;
            while (curr.next && curr.next.next !== null) {
                curr = curr.next;
            }
            curr.next = null;
            this.tail = curr;
            this.length--;
        }
        else if (index > 0 && index < this.length) {
            let current = this.head;
            while (index > 1) {
                current = current.next;
                index--;
            }
            current.next = current.next.next;

            this.length--;
        }
    };


    printHead() {
        let current = this.head;
        let list = "";
        while (current) {
            list += current.val;
            list += "-> ";
            current = current.next;
        }

        list += "null";
        console.log(list);
    };
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 **/
// var obj = new MyLinkedList();
// ["MyLinkedList","addAtHead","addAtIndex","get","get","get"]
// [[],[1],[1,2],[1],[0],[2]]
// obj.addAtHead(1);
// obj.addAtIndex(1, 2);
// obj.printHead();
// console.log(obj.get(1));
// console.log(obj.get(0));
// obj.get(2);
// obj.deleteAtIndex(1);  // now the linked list is 1->3
// obj.get(1);
// obj.printHead();
// console.log(obj.length);
// methods = ["MyLinkedList","addAtHead","get","addAtTail","deleteAtIndex","addAtHead","deleteAtIndex","get","addAtTail","addAtHead","addAtTail","addAtTail","addAtTail","addAtIndex","get","addAtIndex","addAtHead","deleteAtIndex","addAtIndex","addAtHead","addAtIndex","deleteAtIndex","get","addAtTail","deleteAtIndex","deleteAtIndex","addAtTail","addAtTail","addAtIndex","addAtHead","get","get","addAtTail","addAtTail","addAtTail","addAtTail","addAtIndex","addAtIndex","addAtHead","addAtIndex","addAtTail","addAtHead","addAtHead","addAtHead","addAtHead","addAtHead","addAtHead","addAtTail","addAtHead","deleteAtIndex","addAtHead","get","addAtHead","get","addAtHead","addAtHead","addAtHead","addAtIndex","deleteAtIndex","addAtTail","deleteAtIndex","get","addAtIndex","addAtHead","addAtTail","deleteAtIndex","addAtHead","addAtIndex","deleteAtIndex","deleteAtIndex","deleteAtIndex","addAtHead","addAtTail","addAtTail","addAtHead","addAtTail","addAtIndex","deleteAtIndex","deleteAtIndex","addAtIndex","addAtHead","addAtHead","addAtTail","get","addAtIndex","get","addAtHead","addAtHead","addAtHead","addAtIndex","addAtIndex","get","addAtHead","get","get","addAtTail","addAtHead","addAtHead","addAtTail","addAtTail","get","addAtTail"]
// data = [[],[8],[1],[81],[2],[26],[2],[1],[24],[15],[0],[13],[1],[6,33],[6],[2,91],[82],[6],[4,11],[3],[7,14],[1],[6],[99],[11],[7],[5],[92],[7,92],[57],[2],[6],[39],[51],[3],[22],[5,26],[9,52],[69],[5,58],[79],[7],[41],[33],[88],[44],[8],[72],[93],[18],[1],[9],[46],[9],[92],[71],[69],[11,54],[27],[83],[12],[20],[19,97],[77],[36],[3],[35],[16,68],[22],[36],[17],[62],[89],[61],[6],[92],[28,69],[23],[28],[7,4],[0],[24],[52],[1],[23,3],[7],[6],[68],[79],[45,90],[41,52],[28],[25],[9],[32],[11],[90],[24],[98],[36],[34],[26]];

methods = ["MyLinkedList", "get", "addAtIndex", "get", "get", "addAtIndex", "get", "get"]
data = [[], [0], [1, 2], [0], [1], [0, 1], [0], [1]]

// console.log(methods[14])
// console.log(data[14])
var obj, m, d;
const len = methods.length;
for (let i = 0; i < len; i++) {
    m = methods[i];
    d = data[i];
    console.log(m, " : ", d);
    if (m === "MyLinkedList") {
        obj = new MyLinkedList();
    }
    else if (m === "addAtHead") {
        obj.addAtHead(d[0])
    }
    else if (m === "addAtTail") {
        obj.addAtTail(d[0])
    }
    else if (m === "addAtIndex") {
        obj.addAtIndex(d[0], d[1]);
    }
    else if (m === "get") {
        let result = obj.get(d[0]);
        console.log(result);
    }
    else if (m === "deleteAtIndex") {
        obj.deleteAtIndex(d[0]);
    }
    else {
        console.log(m);
    }
}

// obj.printHead();
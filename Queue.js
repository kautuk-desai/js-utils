class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    };
};

class Queue extends Node {
    constructor() {
        super();
        this.length = 0;     
        this.head = null;
        this.tail = null;
    };

   

    enqueue(val) {
        const new_node = new Node(val);
        if (this.tail === null) {
            this.head = new_node;
        }
        else {
            this.tail.next = new_node;
        };

        this.tail = new_node;
        this.length++;
    };


    dequeue(){
        if(this.length === 0){
            return null;
        };

        const head_val = this.head.val;
        this.head = this.head.next;
        this.length--;
        return head_val;
    };

    peek(){
        if(this.length === 0){
            return null;
        };

        return this.head.val;
    }

    isEmpty(){
        return (this.length === 0 ? true : false);
    };
};

var obj = new Queue();
obj.enqueue(1);
obj.enqueue(2);
obj.enqueue(3);
console.log(obj.dequeue());
console.log(obj.isEmpty());
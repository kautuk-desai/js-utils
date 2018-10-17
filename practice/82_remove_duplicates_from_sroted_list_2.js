var deleteDuplicates = function(head) {
    let curr = head;
    // move head
    while(curr && (curr.val === head.val)){
        curr = curr.next;
    }
    
    
        // let curr = head;
    return curr;
};


head = {"val":1,"next":{"val":1,"next":{"val":1,"next":{"val":2,"next":{"val":3,"next":null}}}}};
let result = deleteDuplicates(head);
console.log(JSON.stringify(result));
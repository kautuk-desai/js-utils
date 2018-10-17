const recurse = function(head, curr){
    if(curr === null){
        return head;
    }
    head = recurse(head, curr.next);
    if(curr.val === head.val){
        console.log(head.val);
    }
    return head.next;
}



head = {"val":1,"next":{"val":2,"next":{"val":2,"next":{"val":1,"next":null}}}};
recurse(head, head);
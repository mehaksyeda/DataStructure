var middleNode = function(head) {
    var slow =head;
    var fast = head 
    while(fast!=null && fast.next!=null){
        slow = slow.next
        fast = fast.next.next;
    }
    return slow
    
};

var reverseList = function(head) {
    var prev = null;
    var next =null 
    while(head!=null){
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
    
    
};

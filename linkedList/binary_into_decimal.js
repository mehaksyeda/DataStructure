var getDecimalValue = function(head) {
    var result="";
    while(head!=null){
        result += head.val
    console.log(result)
        head=head.next
    }
    return parseInt(result, 2)
   
    
    
};

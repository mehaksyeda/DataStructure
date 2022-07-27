var isPalindrome = function(x) {
    var reverse= parseInt(x.toString().split('').reverse().join(''))
    if(x===reverse){
        return true;
    }else{
        return false;
    }
    
};
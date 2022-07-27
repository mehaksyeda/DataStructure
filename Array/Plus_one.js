var plusOne = function(digits) {
    var num=digits.join('')
    num=BigInt(num)+1n
    digits=num.toString().split('')
    for(var i in digits){
        digits[i]=parseInt(digits[i])
    }
    return digits
    
};

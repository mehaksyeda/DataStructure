var removeDuplicates = function(s) {
    for(var element of s){
        s=s.replace(element+element,"")
    }
    return s
    
};

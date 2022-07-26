var text="racecar"
var letters=[];
var string=""
for(var i in text){
    letters.push(text[i]);
   
}
for(var j of text){
    string+=letters.pop()
}

if(text==string){
    console.log(text+" is a palindrome")
}else{
    console.log(text+" is not a palindrome")
    
}

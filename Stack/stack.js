function stack(){
    this.storage=[]
    
    this.push1=function( value){
        this.storage.push(value)
        
    }
    this.pop1=function(){
        var temp=this.storage.pop();
        console.log("deleted value ="+temp)
        
    }
    this.peek1=function(){
        if(this.storage.length==0){
            console.log("Stack is empty");
        }else{
        var temp=this.storage[this.storage.length-1]
        console.log("last inserted Value is "+ temp)
        }
    }
}
var stack1=new stack();
stack1.push1(2);

stack1.pop1();
stack1.peek1()

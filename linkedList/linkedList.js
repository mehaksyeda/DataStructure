// linkedList code
// node class
class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}
// linkedList class
class linkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
// add function    
   add(element)
{
    // creates a new node
    var node = new Node(element);
 
    console.log(node.value)
    var current;
 
    // if list is Empty add the
    // element and make it head
    if (this.head == null)
       { this.head = node;
        }
    else {
        current = this.head;
 
        // iterate to the end of the
        // list
        while (current.next) {
            current = current.next;
        }
 
        // add node
        current.next = node;
    }
    this.size++;
}
    insertAt(value,index){
        if(index<0 || index >this.size){
             return console.log("Please enter a valid index.");
        }else{
            var node = new Node(value)
            if(index==0){
                node.next= this.head;
                this.head = node;
                
            }else{
                var current, prev;
                var it=0;
                current =this.head;
                while(it < index){
                    it++;
                    prev =current;
                    current = current.next;
                }
                node.next = current;
                prev.next =node;
            }
            this.size++;
            
        }
        
    }
    removeFrom(index){
        if(index<0 || index > this.size){
            return console.log("dd");
        }else{
            var current , prev ;
            current = this.head;
            prev = current;
            var it=0;
            if(index==0){
                this.head = current.next
            }else{
                while(it<index){
                    it++;
                    prev = current;
                    current = current.next;
                   
                }
                prev = current.next;
            }
            this.size--;

        }
    }
    removeElement(value){
        var current = this.head;
        var prev = null;
        while(current!=null){
            if(current.value==value){
                if(prev==null){
                    this.head=current.next
                }else{
                    prev.next = current.next
                }
                this.size--;
                return current.element
            }
            prev = current
            current= current.next
            
        }
        return -1
    }
    indexOf(element)
{
    var count = 0;
    var current = this.head;
 
    // iterate over the list
    while (current != null) {
        // compare each element of the list
        // with given element
        if (current.value === element)
            return count;
        count++;
        current = current.next;
    }
 
    // not found
    return -1;
}
isEmpty()
{
    return this.size == 0;
}
size_of_list()
{
    console.log(this.size);
}
printList()
{
    var curr = this.head;
    var str = "";
    while (curr) {
        str += curr.value + " ";
        curr = curr.next;
    }
    console.log(str);
}
}
const myList = new linkedList();
myList.add(10)
console.log(myList.indexOf(10))



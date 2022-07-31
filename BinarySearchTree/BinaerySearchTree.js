// Binary search tree
class Node{
    constructor(data){
        this.data = data;
        this.left =null
        this.right=null
        
    }
}
class BST1{
        constructor(){
            this.root=null
        }
        insert(data){
            var node = new Node(data)
            if(this.root==null){
                this.root = node;
            }else{
                this.insertNode(node, this.root)
                
            }
        }
        insertNode(newNode, node){
            if(newNode.data<node.data){
                if(node.left==null){
                    node.left = newNode;
                }else{
                    this.insertNode(newNode,node.left)
                }
            }else{
                if(node.right==null){
                    node.right = newNode;
                }else{
                    this.insertNode(newNode,node.right)
                }
                
            }
        }
        search(node, data)
{
   // if trees is empty return null
    if(node === null)
        return null;
 
    // if data is less than node's data
    // move left
    else if(data < node.data)
        return this.search(node.left, data);
 
    // if data is less than node's data
    // move left
    else if(data > node.data)
        return this.search(node.right, data);
 
    // if data is equal to the node data
    // return node
    else
        return node;
}
        getRootNode()
{
    return this.root;
}
inorder(node){
    if(node!=null){
        this.inorder(node.left)
        console.log(node.data)
        this.inorder(node.right)
    }
    
}
preorder(node){
    if(node!=null){
         this.preorder(node.left)
        console.log(node.data)
        this.preorder(node.right)
}
}
postorder(node){
    if(node!=null){
         this.postorder(node.left)
        console.log(node.data)
        this.postorder(node.right)
}
}
remove(data){
    this.root =this.removeNode(this.root,data)

}
removeNode(node, data){
     
    if(node==null){
        return null;
        
    }else if(data<node.data){
        node.left =this.removeNode(node.left,data)
        return node;
    }else if(data>node.data){
        node.right =this.removeNode(node.right,data)
        return node
    }else{
        if(node.left==null && node.right==null){
            node=null
            return null
        }else if(node.left =null){
            node=node.right
            return node
        }else if(node.right =null){
            node=node.left
            return node
        }
         var aux = this.findMinNode(node.right);
        node.data = aux.data;
 
        node.right = this.removeNode(node.right, aux.data);
        return node;
    }
}
findMinNode(node){
    if(node.left==null){
        return node;
    }else{
        return this.findMinNode(node.left)
    }
    
}
}
var BST = new BST1();
 
// Inserting nodes to the BinarySearchTree

BST.insert(5);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(9);
BST.insert(27);
                         

 
var root = BST.getRootNode();
            
BST.inorder(root);
             

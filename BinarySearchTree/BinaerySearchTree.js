// Binary search tree
class Node{
    constructor(data){
        this.data = data;
        this.left =null
        this.right=null
        
    }
}
class BST{
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

var zigzagLevelOrder = function(root) {
    let result=[]
    const lot=(root, level)=>{
        if(!root) return;
        if(result[level]){
            result[level].push(root.val)
        }else{
            result[level]=[root.val]
        }
        
        lot(root.left,level+1)
         lot(root.right,level+1)
        
    }
    lot(root,0)
    return result.map((b,i)=>
       (i%2)? b.reverse():b
    );
   
};

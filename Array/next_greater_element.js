var nextGreaterElement = function(nums1, nums2) {
    var result=[]
    var index=0;
    for(var element of nums1){
        var initialIndex = nums2.indexOf(element)
        for(var i = initialIndex; i<nums2.length;i++){
             if(nums2[i]>element){
                result[index]=nums2[i]
                  index++;
                 i=nums2.length-1;
            }else{
                if(i==nums2.length-1)
               { result[index]=-1
                index++;}
            }
           
            
        }
           
        
    }
    return result
    
};

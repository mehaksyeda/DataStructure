var removeElement = function(nums, val) {
    for(var index=0;index<nums.length;index++){
        if(nums[index]==val){
            nums.splice(index--,1)
        }
    }
    return nums.length
    
};

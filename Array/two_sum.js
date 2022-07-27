var twoSum = function(nums, target) {
    var arr=[];
    for(var i in nums){
        for(var j in nums){
            if(i!=j){
                if(nums[i]+nums[j]==target){
                    arr[0]=i;
                    arr[1]=j;
                    break;
                }
            }
        }
    }
    return arr;
    
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) 
{
    let res=0;
    for(let i=0;i<nums.length-1;i++)
        {
            if(nums[i]>=nums[i+1])
                {
                    let large=nums[i]+1;
                    res+=large-nums[i+1];
                    nums[i+1]=large;
                }
        }
    return res;
};




//https://leetcode.com/problems/find-peak-element/  LeetCode Link

var findPeakElement = function(nums) {
    let n=nums.length

    if(n===1) return 0

    if(nums[0]>nums[1]) return 0

    if(nums[n-1]>nums[n-2]) return n-1

    let s=1
    let e=n-2
    while(s<=e){
        let mid=Math.floor((s+e)/2)
        if(nums[mid]>nums[mid-1]&&nums[mid]>nums[mid+1]){
            return mid
        }else if(nums[mid]<nums[mid+1]){
            s=mid+1
        }else{
            e=mid-1
        }
    }
};
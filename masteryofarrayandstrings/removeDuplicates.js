function removeDuplicates(nums){
    let i=0
    for(let j=1;j<nums.length;j++){
        if(nums[i]!==nums[j]){
            i++
            nums[i]=nums[j]
        }
    }
    return i+1
}
let nums=[1,1,2]
let res=removeDuplicates(nums)
console.log(res)
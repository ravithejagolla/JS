function LongestConsecutiveSequence(arr) {
  if(nums.length===0){
        return 0
    }
     let res=new Set(nums)
     let ans=1
    for(let i=0;i<nums.length;i++){
      if(res.has(nums[i]-1)===false){
          let count=1
        while(res.has(nums[i]+count)){
            count++
            ans=Math.max(ans,count)
        }
      }
    }
    return ans
}
let arr=[100,4,200,1,3,2]
let res=LongestConsecutiveSequence(arr)
console.log(res)
function LongestSubarraywithK(arr, k) {
  let i=0;
  let res=0
  let sum=0
  for(let j=0;j<arr.length;j++){
    sum+=arr[j]
    
    while(sum>k&&i<=j){
      sum-=arr[i]
      i++
    }
    if(sum===k){
      res=Math.max(res,j-i+1)
    }
  }
  return res
    
}

let arr=[3,4,1,9,3,2]
let k=20

let res=LongestSubarraywithK(arr,k)
console.log(res)
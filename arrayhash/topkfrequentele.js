function TopKFrequentElements(arr, k) {
  let map={}
  for(let i=0;i<arr.length;i++){
    map[arr[i]]=(map[arr[i]]||0)+1
  }
  let res=[]
  for(let key in map){
    if(map[key]>=k){
      res.push(key)
    }
  }
  return res
}

let arr=[3,4,1,2,9,9,3,2]
let k=2

let res=TopKFrequentElements(arr,k)
console.log(res)
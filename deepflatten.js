

function deepFlatten(arr){
    let res=[]
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            res=res.concat(flatten(arr[i]))
        }else{
            res.push(arr[i])
        }
    }
    return res
}

let arr=[1,2,[3,4],5,6,[7,8,9]]

let ans=deepFlatten(arr)

console.log(ans)
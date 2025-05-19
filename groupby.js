


function groupBy(arr,key){
     let res={}
    for(let i=0;i<arr.length;i++){
        let group=arr[i][key]
        if(res[group]){
            res[group].push(arr[i])
        }else{
            res[group]=[arr[i]]
        }
    }
    return res
}


let ans=groupBy([{ type: 'fruit', name: 'apple' }, { type: 'veg', name: 'carrot' }], 'type');


console.log(ans)
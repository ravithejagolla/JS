

Array.prototype.myMap=function(callback){
    let newarr=[]
    for(let i=0;i<this.length;i++){
        newarr.push(callback(this[i],i,this))
    }
    return newarr
}

let arr=[1,2,3,4,5,6]

let res=arr.myMap(number=>number*2)

console.log(res)

function tappingRainwater(height){
    let n=height.length
    let lmax=[]
    lmax[0]=height[0]
    let res=0
    for(let i=1;i<n;i++){
        lmax[i]=Math.max(height[i],lmax[i-1])
    }
    let rmax=[]
    rmax[n-1]=height[n-1]
    for(let i=n-2;i>=0;i--){
        rmax[i]=Math.max(height[i],rmax[i+1])
    }
    for(let i=1;i<n-1;i++){
        res+=Math.min(lmax[i],rmax[i])-height[i]
    }
    return res
}

let height=[0,1,0,2,1,0,1,3,2,1,2,1]
let res=tappingRainwater(height)
console.log(res)
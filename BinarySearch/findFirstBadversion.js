


////https://leetcode.com/problems/first-bad-version/description/   LeetCode Link

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let s=0
        let e=n
        while(s<e){
            let mid=Math.floor((s+e)/2)
            if(isBadVersion(mid)){
                e=mid
            }else{
                s=mid+1
            }
        }
        return s
    };
};
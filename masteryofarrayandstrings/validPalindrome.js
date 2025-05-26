

function validPalindrome(s){
     s=s.toLowerCase().replace(/[^a-z0-9]/g,"")
    let S=0
    let E=s.length-1
    while(S<E){
        if(s[S]!==s[E]){
            return false
        }
        S++
        E--
    }
    return true
}
let s="A man, a plan, a canal: Panama"
let res=validPalindrome(s)
console.log(res)
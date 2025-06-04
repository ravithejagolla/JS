


function sanglassPattern(n) {
    for (let i=n;i>1; i--) {
        let bag=""
        for (let s=1;s<=n-i;s++) {
            bag=bag+" "
        }
        for (let j=1;j<=2*i-1;j++) {
            bag=bag+'*'
        }
    console.log(bag)
    }
    for (let i = 1; i <= n; i++) {
        let bag = ""
        for (let s = 1; s <= n - i; s++) {
            bag = bag + " "
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            bag = bag + '*'
        }
        console.log(bag)
    }
}

sanglassPattern(5)
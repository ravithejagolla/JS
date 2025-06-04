


function printAlphabetPyramid(n) {
    for (let i = 1; i <= n; i++) {
        let bag= "";
        for (let j= 1; j<= n - i; j++) {
            bag+= " ";
        }
        for (let ch = 0; ch < i; ch++) {
            bag+= String.fromCharCode(65 + ch);
        }

        for (let ch = i - 2; ch >= 0; ch--) {
            bag+= String.fromCharCode(65 + ch);
        }

        console.log(bag);
    }
}

printAlphabetPyramid(5);

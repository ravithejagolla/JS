function xPattern(n) {
    for (let i = 0; i < n; i++) {
        let bag= "";
        for (let j = 0; j < n; j++) {
            if (j === i || j === n - 1 - i) {
                bag+= "*";
            } else {
                bag+= " ";
            }
        }
        console.log(bag);
    }
}

xPattern(5);

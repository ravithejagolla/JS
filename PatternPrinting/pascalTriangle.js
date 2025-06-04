



function factorial(n) {
    let res = 1;
    for (let i = 2; i <= n; i++) {
        res *= i;
    }
    return res;
}

function binomialCoefficient(n, k) {
    return factorial(n) / (factorial(k) * factorial(n - k));
}

function printPascalsTriangle(rows) {
    for (let i = 0; i < rows; i++) {
        let bag = "";
        for (let s = 0; s < rows - i - 1; s++) {
            bag += " ";
        }
        for (let j = 0; j <= i; j++) {
            bag += binomialCoefficient(i, j) + " ";
        }

        console.log(bag);
    }
}

printPascalsTriangle(5);

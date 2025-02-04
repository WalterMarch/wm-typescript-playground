function factorial(n: number): number{
    let output = 1;
    if (n > 1) {
        output = n * factorial(n - 1);
    }

    return output;
}

console.log(factorial(6));
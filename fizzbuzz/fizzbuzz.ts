const n: number = 100;

for (let i = 1; i <= n; i++) {
    let output = "";
    if (i % 3 === 0) {
        output += "Fizz";
    }
    if (i % 5 === 0) {
        output += "Buzz";
    }
    if (output === "") {
        console.log(i);
    } else {
        console.log(output);
    }
}
const n : number = 100;

let setOfFactors = new Set<number>([1, n]);

for (let i = 2; i < n; i++) {
    if (n % i === 0) {
        setOfFactors.add(i);
        setOfFactors.add(n/i);
    }
}

let arrayOfFactors = [...setOfFactors.values()];
arrayOfFactors.sort((a, b) => a - b);

console.log(arrayOfFactors);
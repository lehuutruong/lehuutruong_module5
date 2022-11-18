function sumFibonacci() {
    let numberOne: number = 0;
    let numberTwo: number = 1;
    let arr: number[] = [0, 1];
    let check: number = 2;
    while (true) {
        let numberThree: number = numberOne + numberTwo;
        arr.push(numberThree);
        numberOne = numberTwo;
        numberTwo = numberThree;
        check++;
        if (check > 9) {
            break;
        }
    }
    let sum: number = 0;
    arr.forEach(function (value) {
        sum += value;
    })
    console.log(sum);
}

sumFibonacci();

// Cach 2//
function fibonacci(n: number) {
    let f0: number = 0;
    let f1: number = 1;
    let fn: number = 1;
    let i;

    if (n < 0) {
        return -1;
    } else if (n == 0 || n == 1) {
        return n;
    } else {
        for (i = 2; i < n; i++) {
            f0 = f1;
            f1 = fn;
            fn = f0 + f1;
        }
    }
    return fn;
}

for (let i = 0; i < 11; i++) {
    console.log(fibonacci(i));
}
let sum:number=0;
for (let i = 0; i < 10; i++) {
    sum += fibonacci(i);
}
console.log(sum);

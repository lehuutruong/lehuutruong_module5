function sumFibonacci() {
    var numberOne = 0;
    var numberTwo = 1;
    var arr = [0, 1];
    var check = 2;
    while (true) {
        var numberThree = numberOne + numberTwo;
        arr.push(numberThree);
        numberOne = numberTwo;
        numberTwo = numberThree;
        check++;
        if (check > 9) {
            break;
        }
    }
    var sum = 0;
    arr.forEach(function (value) {
        sum += value;
    });
    console.log(sum);
}
sumFibonacci();
// Cach 2
function fibonacci(n) {
    var f0 = 0;
    var f1 = 1;
    var fn = 1;
    var i;
    if (n < 0) {
        return -1;
    }
    else if (n == 0 || n == 1) {
        return n;
    }
    else {
        for (i = 2; i < n; i++) {
            f0 = f1;
            f1 = fn;
            fn = f0 + f1;
        }
    }
    return fn;
}
for (var i = 0; i < 11; i++) {
    console.log(fibonacci(i));
}
var sum = 0;
for (var i = 0; i < 10; i++) {
    sum += fibonacci(i);
}
console.log(sum);

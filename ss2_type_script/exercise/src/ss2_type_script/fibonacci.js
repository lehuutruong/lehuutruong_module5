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
        if (check > 15) {
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

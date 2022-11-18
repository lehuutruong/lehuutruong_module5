function sumFibonacci() {
    let numberOne:number=0;
    let numberTwo:number=1;
    let arr:number[]=[0,1];
    let check:number=2;
    while (true){
        let numberThree:number=numberOne+numberTwo;
        arr.push(numberThree);
        numberOne=numberTwo;
        numberTwo=numberThree;
        check++;
        if (check>15){
            break;
        }
    }
    let sum:number=0;
    arr.forEach(function (value) {
        sum+=value;
    })
    console.log(sum);
}
sumFibonacci();
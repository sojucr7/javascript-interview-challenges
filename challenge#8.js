function bigFunc() {
    let newArray = new Array(700).fill('♥');

    return function (element) {
        return newArray[element]
    }
}

let bigArr = bigFunc()

console.log(bigArr(599));
console.log(bigArr(670));

//closure is created
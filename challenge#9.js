function randomFunc() {
    for (var i = 0; i < 2; i++) {
        setTimeout(() => console.log(i), 1000);
    }
}

function randomFunc1() {
    for (let i = 0; i < 2; i++) {
        setTimeout(() => console.log(i), 1000);
    }
}


function randomFunc2() {
    for (let i = 0; i < 2; i++) {
        function helper(i) {
            setTimeout(() => console.log(i), 1000);
        }
        helper(i)
    }
}
randomFunc();
randomFunc1();
randomFunc2();
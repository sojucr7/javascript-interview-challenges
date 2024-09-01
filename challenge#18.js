function func2() {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 2000); //3 3 times
    }
}
func2();
// Outputs 3, three times since variable declared with var keyword does not have block scope. Also, inside the for loop, the variable i is incremented first and then checked.
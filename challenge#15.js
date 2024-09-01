function runFunc(){
    console.log("1" + 1); //11
    console.log("A" - 1); //NAN
    console.log(2 + "-2" + "2");2-22
    console.log("Hello" - "World" + 78);//NAN
    console.log("Hello"+ "78");//Hello78
  }
  runFunc();

  //JavaScript sees the - operator and tries to convert the operands "A" into numbers.

  //Since the conversion to number fails for "A", JavaScript returns NaN.


// The + operator is used for both addition and string concatenation in JavaScript.
// When one of the operands is a string, JavaScript converts the other operand to a string as well and then concatenates them.

// "1" + 1 results in the string "11" because JavaScript converts the number to a string and then concatenates them.
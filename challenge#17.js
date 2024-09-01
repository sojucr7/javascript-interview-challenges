
function func1() {

  setTimeout(() => {
    console.log(x); //2
    console.log(y);//12
  }, 3000);

  var x = 2;
  let y = 12;
}
func1();

//Outputs 2 and 12. Since, even though let variables are not hoisted, due to the async nature of javascript, the complete function code runs before the setTimeout function. Therefore, it has access to both x and y.
var x = 23;

(function () {
  var x = 43;
  (function random() {
    x++;
    console.log(x);//NaN
    var x = 21;
  })();
})(); 

//this is due to hoisting

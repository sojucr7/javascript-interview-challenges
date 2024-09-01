(function (a) {
  return (function () {
    console.log(a); //45 because of closure
    a = 23;
  })()
})(45);

//Even though a is defined in the outer function, due to closure the inner functions have access to it.
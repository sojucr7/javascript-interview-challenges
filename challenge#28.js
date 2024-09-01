const a = (
    function(a)
    { 
      delete a; 
      return a; 
    }
    )(5);
  
  console.log(a);

  //Delete Operation: The delete operator in JavaScript is used to remove properties from objects. It does not have any effect on local variables or function parameters. In this case, the parameter a is a local variable within the function, so delete a; does nothing.
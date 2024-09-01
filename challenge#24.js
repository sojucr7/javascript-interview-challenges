const myObject = {
    myArrowFunction: null,
    myMethod: function () {
      return {
        a:5,
        b:()=>{
          return this
        }
      }
    }
  };
  //Since b is an arrow function, this inside b refers to the this value from the myMethod context. 
  //In the context of myMethod, this refers to the myObject object.
  //The this inside b refers to myObject, because it is lexically bound to myMethod's this

  //b is an arrow function (() => { return this; }). Arrow functions do not have their own this context. Instead, they inherit this from the surrounding (lexical) context in which they are defined.

console.log(myObject.myMethod().b())
  
const myObject2 = {
    myArrowFunction: null,
    myMethod: function () {
      return {
        a:5,
        b:function(){
          return this
        }
      }
    }
  };

  console.log(myObject2.myMethod().b())

  //In JavaScript, this refers to the context in which a function is executed.

  //Global Context: In the global context (outside of any function), this refers to the global object. In browsers, this is window. In Node.js, it's global.

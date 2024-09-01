// 1) what is this in javascript

// The this keyword refers to different objects depending on how it is used:

// Global Context: In the global context (outside of any function), this refers to the global object. In browsers, this is window. In Node.js, it's global.

// Function Context: Inside a regular function, this refers to the object that invoked the function. If a function is called as a method of an object, this refers to that object. If a function is called on its own (not as a method), this will refer to the global object (or undefined in strict mode).

// Constructor Functions: When used in a constructor function, this refers to the newly created instance of the object.

// Arrow Functions: Arrow functions do not have their own this context. They inherit this from their enclosing context.

// Event Handlers: In event handlers, this refers to the element that triggered the event.

// 2) what is closure

//a closure gives you access to variables in its outer function's scope, even after the outer function has finished executing.

//Closures are commonly used for data encapsulation, creating private variables, and implementing callbacks and event handling.

// 3) what is hoisting in javascript

//Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope before code execution.

//Entire function declarations are hoisted, so you can call a function before it is defined in the code.

//Variables declared with var are hoisted to the top of their scope

//Use let and const: They are block-scoped and help avoid unexpected behavior from hoisting.

// 4) what is first class function

// A programming language is said to have First-class functions if functions in that language are treated like other variables

// It can be stored as a value in a variable.

// It can be returned by another function.

// It can be passed into another function as a argument.

// It can also stored in an array, queue, or stack.

// Also, It can have its own methods and property.


//5)what is higher order function

//A “higher-order function” is a function that accepts functions as parameters and/or returns a function.
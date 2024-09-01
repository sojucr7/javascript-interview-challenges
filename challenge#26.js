let a = 5
//a is a variable declared with let, and it is not added as a property to the global object.
//The this keyword does not automatically create properties on the global object for variables declared with let or const.
//let and const are block scoped.it can't access globally
console.log(this.a); //undefined
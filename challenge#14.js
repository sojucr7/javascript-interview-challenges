let x = {},
    y = { name: "Ronny" },
    z = { name: "John" };
x[y] = { name: "Vivek" };
x[z] = { name: "Akki" };
console.log(x[y]); // {name:"Akki"} because x["object object"]

console.log(y.toString())
//In JavaScript, the keys of a plain object ({}) are always strings (or symbols). When you attempt to use any non-string type (like an object) as a key, JavaScript automatically converts it to a string. This is part of the ECMAScript specification for plain objects.
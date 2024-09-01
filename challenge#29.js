const a = {}; 
const b = { key: 'b' }; 
const c = { key: 'c' };

a[b] = 123; a[c] = 456;

console.log(a); //a["object object"]=456

//keys of an object should be string,so when object is converted to string it become "Object object" 
let person = { name: 'Lydia' };
const members = [person];
person = null;

console.table(members); //[{ name: 'Lydia' }]

//person hold reference of object also members also hoild the same reference, 
//persons reference changed,but member still have the reference

//Objects and arrays (which are non-primitive data types) are stored in the heap. 
//The stack holds a reference (or pointer) to the location in the heap where the object or array is stored.
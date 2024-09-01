function changeAgeAndReference(person) {
    person = {
      name: 'John',
      age: 50
    };

    return person;
}


const personObj1 = {
    name: 'Alex',
    age: 30
};


changeAgeAndReference(personObj1)

console.log(personObj1) 

//o/p

// {
//     name: 'Alex',
//     age: 30
// }
// person inside changeAgeAndReference is a local variable inside function,that get allocated to new memory address,so personObj1 won't change
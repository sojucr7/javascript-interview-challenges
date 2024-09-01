let value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply(); //20
multiply(); //20
multiply(value);//20
multiply(value); //40

let value2 = { number: 10 };
const multiply2 = (x=value2) => {
    console.log((x.number *= 2));
  };

multiply2();//20
multiply2();//40
multiply2(value2);//80
multiply2(value2); //160

//o/p 1
// 20
// 20
// 20
// 40

//o/p 2
// 20
// 40
// 80
// 160
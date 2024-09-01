const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}


for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}

// 1)o/p from 1-10
// 2)undefined

//let is blocked scope
//var is global scoped

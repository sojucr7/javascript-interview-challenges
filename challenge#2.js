let obj = { id: "1", name: "user22", age: "26", work: "programmer" };

console.log(Object.keys(obj))

for (key of Object.keys(obj)) {
    console.log(obj[key])
}

for ([key, value] of Object.entries(obj)) {
    console.log(key, value)
}
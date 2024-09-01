function rotateRight(arr, rotations) {

    for (let i = 0; i < rotations; i++) {
        let tmp = arr.shift()
        arr.push(tmp)
    }
    return arr
}

console.log(rotateRight([2, 3, 4, 5, 7], 3))
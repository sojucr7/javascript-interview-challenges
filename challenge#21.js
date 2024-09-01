const array = [15, 19, 3, 4, 5]

if (!Array.prototype.customSort) {

    Array.prototype.customSort = function (cb) {
        const a=this
        for (let i = 0; i < a.length; i++) {
            for (let j = i + 1; j < a.length; j++) {
                if(cb(a[i],a[j])>0){
                    const tmp = a[i]
                    a[i] = a[j]
                    a[j] = tmp
                }
            }
        }
        return this
    }
}

console.log(array.customSort((a, b) => {
    return b-a
}))
const findVowel = (str) => {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (['a', 'e', 'i', 'o', 'u'].includes(str[i])) {
            count++
        }
    }
    return count
}

console.log(findVowel('abel'))


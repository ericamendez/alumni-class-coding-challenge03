let minMaxAges = (arr) => {
    const sortedAges = arr.sort((a, b) => a-b)
    return [sortedAges[0], sortedAges[sortedAges.length-1], sortedAges[sortedAges.length-1] - sortedAges[0]]
}

// console.log(minMaxAges([9, 10, 16, 42, 55]));

let combineString = (str1, str2, str3) => {
    return str1.split('').reduce((acc, char, i) => acc + char + str2[i] + str3[i], '')
}

console.log(combineString('aa', 'bb', 'cc'));
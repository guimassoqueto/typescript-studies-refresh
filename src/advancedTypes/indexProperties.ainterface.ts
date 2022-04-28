interface OnlyStrings {
    [p: string]: string
}

interface OnlyNumbers {
    [prop: number]: number
}

// when you declare a variable with type OnlyNumbers, it will only accept keys of the type string

const onlystr: OnlyStrings = {
    id: '213',
    bbc: 'guilherme',
    // 123: 321 // error
}
console.log(onlystr.id)

const onlynum: OnlyNumbers = {
    123: 123
}

console.log(onlynum[123])

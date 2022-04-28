

function extractAndCovert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key]
}

const getName = extractAndCovert({name: 'Guilherme', lname: 'Massoqueto'}, 'name')

console.log(getName)
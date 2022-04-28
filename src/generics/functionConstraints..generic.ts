function concat<TypeA extends object, TypeB extends object>(a: TypeA, b: TypeB) {
    return {...a, ...b}
}

// const concatObj = con({name: 'Guilherme'}, 3) // Error
const concatObj = concat({name: 'Guilherme'}, {lname: 'Massoqueto'})

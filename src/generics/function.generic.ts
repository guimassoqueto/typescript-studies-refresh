function conc<TypeA, TypeB>(a: TypeA, b: TypeB){
    return {...a, ...b}
}

const concat_object = conc({name: 'Guilherme'}, {lname: 'Massoqueto'});
console.log(concat_object.name, concat_object.lname);

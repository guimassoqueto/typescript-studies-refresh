type TypePerson = {
    fname: string;
    lname: string;
    age: number;
}

function createPerson(fname: string, lname: string, age: number): TypePerson{
    let type_person: Partial<TypePerson> = {};
    type_person.fname = fname;
    type_person.lname = lname;
    type_person.age = age;

    return <TypePerson>type_person
}
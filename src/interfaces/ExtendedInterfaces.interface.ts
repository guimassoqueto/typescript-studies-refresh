interface Person {
    name: string;
    lname: string;
    age: number;
}

interface PersonDetails extends Person {
    details: string;
}

interface PersonJob extends Person, PersonDetails {
    job: string;
}

class Tst implements PersonJob {
    constructor(
        readonly name: string, 
        readonly lname: string, 
        readonly age: number,
        readonly details: string,
        readonly job: string
    ) {}
}
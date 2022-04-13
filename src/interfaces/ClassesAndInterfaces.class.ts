interface PersonInterface {
    name: string;
    lname: string;
    age: number;
    greet(): void;
}

class PersonClass implements PersonInterface {
    readonly name: string;
    readonly lname: string;
    readonly age: number;

    constructor(
        name: string, 
        lname: string, 
        age: number
    ) {
        this.name = name;
        this.lname = lname;
        this.age = age
    }

    greet(): void {
        console.log(`Basic Info\nName: ${this.name}\nLast Name: ${this.lname}\nage: ${this.age}`);
    }
}
export { PersonClass };
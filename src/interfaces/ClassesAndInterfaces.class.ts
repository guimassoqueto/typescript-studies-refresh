interface PersonInterface {
    name: string;
    lname: string;
    age: number;
    greet(): void;
}

class PersonClass implements PersonInterface {
    constructor(
        readonly name: string, 
        readonly lname: string,
        readonly age: number
    ) {}

    greet(): void {
        console.log(`Basic Info\nName: ${this.name}\nLast Name: ${this.lname}\nage: ${this.age}`);
    }
}
export { PersonClass };
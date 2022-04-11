class Person {
    constructor(public readonly name: string, public readonly age: number) {}

    public getInfo(): void {
        console.log(`Name: ${this.name}\nAge: ${this.age}`);
    }
}

class PersonExtended extends Person {
    constructor(public readonly name: string, public readonly age: number, private readonly eyecolor: string) {
        super(name, age);
    }

    public getInfo(): void {
        console.log(`Name:${this.name}\nAge:${this.age}\nEyesColor:${this.eyecolor}`)
    }
}

export { Person, PersonExtended };
class Person {
    constructor(private readonly name: string) {}

    public nameFirstLetter(this: Person): string {
        const first_letter: string = this.name.charAt(0);
        return first_letter;
    }
    
    private nameLastLetter(this: Person): string {
        const last_letter: string = this.name.charAt(this.name.length - 1);
        return last_letter;
    }

    protected hello(this: Person): string {
        return `Hello ${this.name}`
    }
}

class PersonExtended extends Person {
    constructor(name: string, private readonly eyeColor: string) {
        super(name);
    }

    public callHelloFromPerson(this: PersonExtended): string {
        return this.hello()
    }
}

export {
    Person,
    PersonExtended
}
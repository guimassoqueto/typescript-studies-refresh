export default class ReadOnlyProperty {
    constructor(private readonly name: string, private age: number){}

    /**
     * Chage the age
     * @param new_age {number} The new age
     */
    public changeAge(new_age: number): void {
        this.age = new_age;
    }
}

// const a = new ReadOnlyProperty('Guillian', 28);
// a.changeAge(24);
export default class ConstructorSimplified {
    constructor(private name: string, private age: number, private sex: 'F' | 'M') {
    }

    public getInfo(): void {
        console.log(`${this.name} is a ${this.age} years old ${this.sex === 'F' ? 'female': 'male'}.`);
    }
}

// const a = new ConstructorSimplified('Guilherme', 51);
// console.log(a.age, a .name)
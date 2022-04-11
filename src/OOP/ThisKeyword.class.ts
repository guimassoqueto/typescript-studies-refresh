export default class ThisKeyword {
    public name: string;

    constructor(n: string) {
        this.name = n;
    }

    public hello(this: ThisKeyword) {
        console.log(`Hello ${this.name}`);
    }
}

// const test_original = new ThisKeyword('Guillian');
// const test_copy = {name: 'Person', hello: test_original.hello}
// test_copy.hello();
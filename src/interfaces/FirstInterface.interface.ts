interface FirstInterface {
    name: string;
    lname: string;
    greet(test_var: string): void;
}

let fff: FirstInterface = {
    name: 'Guilherme',
    lname: 'Massoqueto',
    greet(testvar: string) {
        console.log(`Hello ${this.name} ${this.lname}\n${testvar}!`)
    }
}

// fff.greet('Bibaman');
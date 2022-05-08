function Logger(constructor: Function) {
    console.log("Logging...");

    console.log(constructor);
}

@Logger
class P_erson {
    name = "Guilherme";

    constructor() {
        console.log("Person instance has been created.")
    }
}

// Decorator will always execute, you don't have to instantiate a class for the decorator to run

const p = new P_erson();
console.log(p);
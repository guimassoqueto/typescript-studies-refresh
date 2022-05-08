function Logger() {
    console.log('Logging in...')
    return function(constructor: Function) {
        console.log(constructor)
    }
}

@Logger
class Pers_on {
    name = "Guilherme";

    constructor() {
        console.log("Person instance has been created.")
    }
}

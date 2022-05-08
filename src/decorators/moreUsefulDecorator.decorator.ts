function Logger2(username: string) {
    console.log(`Logging in ${username}...`)
    return function(constructor: Function) {
        console.log(constructor)
    }
}

@Logger2('Guilherme')
class Pe_rson {
    name = "Guilherme";

    constructor() {
        console.log("Person instance has been created.")
    }
}
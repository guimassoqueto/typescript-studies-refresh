function Logger(constructor: Function) {
    console.log('Logging...')
    console.log(constructor)
}

@Logger
class BasicDecorator {
    name = 'Guilherme'
    constructor () {
        console.log('Creating object...')
    }
}

const per1 = new BasicDecorator()
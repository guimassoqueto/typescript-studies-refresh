function FirstDecorator(param: string): Function {
    console.log(`First Decorator. Parameter => ${param}`);
    return (_: Function) => {
        console.log('First decorator function.')
    }
}

function SecondDecorator(param: string) {
    console.log(`Second decorator. Parameter => ${param}`);
    return (_: Function) => {
        console.log('Second decorator function.')
    }
}

@FirstDecorator('Guilherme')
@SecondDecorator('Massoqueto')
class MDec {
    private name: string = 'Guilherme';

    constructor() {
        console.log('Class has been created.')
    }
}
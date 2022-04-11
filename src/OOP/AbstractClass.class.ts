abstract class Abs {
    abstract abs_property: string;

    constructor(public readonly value: string) {}

    abstract getInfo(): string;
}

class AbsExtended extends Abs {
    readonly abs_property: string = 'Gaymen';

    constructor(value: string, public readonly value2: string) {
        super(value);
    }

    getInfo(): string {
        return `Value: ${this.value}\nValue2: ${this.value2}`;
    }
}

export { Abs, AbsExtended };

// const t = new AbsExtended('Value', 'Value2');
// console.log(t.abs_property)
// console.log(t.getInfo())
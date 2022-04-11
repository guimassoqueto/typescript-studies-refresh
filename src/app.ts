export default class StaticMethodsProperties {
    public static readonly gui: string = 'Guilherme Massoqueto';

    public static get GuitoArray(): string[] {
        return this.gui.split(' ');
    }
}

// console.log(StaticMethodsProperties.gui)
// console.log(StaticMethodsProperties.GuitoArray)
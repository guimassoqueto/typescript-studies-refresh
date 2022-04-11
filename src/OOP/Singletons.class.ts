export class Singleton {
    static instance: Singleton;

    private constructor(public readonly value1: string, public readonly value2: number) {}

    static getInstance() {
        if (!Singleton.instance) Singleton.instance = new Singleton('Value 1', 3);;

        return this.instance;
    }
}
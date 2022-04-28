class People<T>{
    private array: Array<T> = [];

    set insertPeople(value: T) {
        this.array.push(value);
    }

    removePeople(value: T) {
        const value_index: number = this.array.indexOf(value);
        
        if (value_index > -1) this.array.splice(value_index, 1);
    }

    get getPeople() {
        return [...this.array];
    }
}

const p1 = new People<string>();
p1.insertPeople = 'Guilherme'
p1.insertPeople = 'Dirce'
//p1.insertPeople = 123 // error
p1.removePeople('Dirce')
console.log(p1.getPeople)
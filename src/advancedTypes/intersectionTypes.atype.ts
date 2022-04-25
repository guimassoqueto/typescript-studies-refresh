type TypeOne = {
    name: string;
    priviledges: string[];
}

type TypeTwo = {
    name: string;
    func: (a: string, b: string) => string;
}

type OneTwo = TypeOne & TypeTwo;

const ttt: OneTwo = {
    name: 'Guilherme',
    priviledges: ['ADMIN', 'EDITOR'],
    func: (a: string, b: string) => {
        return a + b
    }
}

console.log(ttt.func('Gaymen', 'Mega'))
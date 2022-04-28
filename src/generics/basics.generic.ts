interface Succ {
    status: 500;
    name: string;
    age: number;
}

interface Fail {
    status: 400;
    error: string;
}

const promise: Promise<Succ | Fail> = new Promise((resolve, reject) => {
    const num: number = Math.floor(Math.random() * 10);

    if (num % 2 === 0) resolve({status: 500, name: 'Guilherme', age: 29})
    else reject({status: 400, error: 'Error detected'})
})
let call_func: Function;

function hello(name: string): string {
    return `Hello ${name}`;
}

function square(num: number): number {
    return num ** 2;
}

call_func = hello;
console.log(call_func('Guilherme'))

call_func = square;
console.log(call_func(3))
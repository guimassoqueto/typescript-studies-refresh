let f: (a: number, b: number) => number;

function sum(a: number, b: number): number {
    return a + b;
}
f = sum; // works


function sub(a: number, b: number): number {
    return a - b;
}
f = sub; // works


function print(a: any): void {
    console.log(a)
}
// f = print // doesn't work
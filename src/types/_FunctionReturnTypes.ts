function return_void(name: string): void {
    // it does not have to return a value, but 
    console.log(`Hello ${name}`);
    return;
}

function return_undefined(name: string): undefined {
    // it must return
    console.log(`Hello ${name}`);
    return undefined;
}
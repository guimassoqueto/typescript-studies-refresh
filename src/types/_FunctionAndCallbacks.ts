function add_and_handle(a: number, b: number, callback: (result: number) => void) {
    const result = a + b;
    callback(result);
}

add_and_handle(2, 2, function (result) {
    if (result % 2 == 0) {
        console.log(`${result} is even.`);
    }
    else {
        console.log(`${result} is float or odd.`);
    }
})
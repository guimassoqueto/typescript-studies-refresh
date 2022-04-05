function generate_error(error_msg: string, code_number: number): never {
    throw {message: error_msg, code: code_number}
    // or while(true) {}
}

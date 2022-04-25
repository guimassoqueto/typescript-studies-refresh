type NullOrUndefined = null | undefined;

const null_undefined: NullOrUndefined = undefined // or null;
const test_null_undef = null_undefined ?? 'Only if it is null or undefined this will be shown';

console.log(test_null_undef)
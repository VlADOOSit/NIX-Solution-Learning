function substrCount(input, needle, offset, length) {
    if (!needle || !input || length < 1 
        || offset > input.length - needle.length 
        || length > input.length - offset) {

        return -1;
    }
    
    let counter = 0;

    for (let i = offset; i < length + offset - 1; i++) {
        if(input.slice(i, needle.length + i) === needle) {
            counter++;
        }
    }

    return counter;
}

console.log(substrCount('Good Golly Miss Molly', 'll', 7, 10)); // 1
console.log(substrCount('123111231132111111', '11', 0, 10)); // 3
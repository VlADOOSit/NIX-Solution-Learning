
function isEven(num) {
    if (num & 1) {
        return 'notEven';
    }

    return 'Even';
}

console.log(isEven(28));

function isPowOfTwo(num) {
    return ((num & (num - 1)) === 0) && (num !== 0); 
}

console.log(isPowOfTwo(16));
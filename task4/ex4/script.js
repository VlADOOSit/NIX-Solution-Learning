function testDate(str) {
    let re = /^([1-2]\d|0?[1-9]|3[0-1])-(0?[1-9]|1[0-2])-(\d{4})$/;

    return re.test(str);
}

console.log(testDate('25-5-2021'));//true
console.log(testDate('25-5-1921'));//true
console.log(testDate('2-25-2021'));//false
console.log(testDate('213-5-2021'));//false
console.log(testDate('2-5-2021'));//true
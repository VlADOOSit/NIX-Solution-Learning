let str = 'isu([syvstc]ts(crs))cs';

function getBrackets(str) {
    let newStr = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === ')' || str[i] === ']' || str[i] === '[') {
            newStr += str[i];
        }
    }
    return newStr;
}

function isClosed(bracket) {
    return (bracket === ')' || bracket === ']');
}

function testString(str) {
    let strBrackets = getBrackets(str);

    let bracketsArr = [];
    
    for (let i = 0; i < strBrackets.length; i++) {
        if (isClosed(strBrackets[i])) {
            
            let check = bracketsArr.pop();

            if(check === undefined) {
                return false;
            }
            
            if (strBrackets[i] === ')') {
                if (check !== '(') {
                    return false;
                }
            }
            else {
                if (check !== '[') {
                    return false
                }
            }
        } 
        
        else {
            bracketsArr.push(strBrackets[i]);
        }
    }
    return bracketsArr.length === 0;

}

console.log(testString(str));

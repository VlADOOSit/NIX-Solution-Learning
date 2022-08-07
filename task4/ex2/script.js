let str = 'Ми знаємо, що монохромний колір – це градації сірого';
let substr = 'хром';


function getWordWithSubstr(str, substr) {
    let resultArr = [];
    
    str.split(' ').forEach(element => {
        if (element.indexOf(substr) !== -1) {
            resultArr.push(element);
        }
    });

    return resultArr;

}

console.log(getWordWithSubstr(str, substr));

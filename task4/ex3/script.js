function setPad(input, fullLen, fillStr, fillType = 'FILL_RIGHT') {
    let resultStr = '';
    let fillStrCounter; 

    switch(fillType) {
        case 'FILL_RIGHT':
            fillStrCounter = 0;

            for(let i = input.length; i < fullLen; i++) {
                if (fillStrCounter === fillStr.length) {
                    fillStrCounter = 0;
                }
                input += fillStr[fillStrCounter];
                fillStrCounter++;
            }

            resultStr = input;
            
            break;

        case 'FILL_LEFT':
            fillStrCounter = 0;

            for(let i = 0; i < fullLen - input.length; i++) {
                if (fillStrCounter === fillStr.length) {
                    fillStrCounter = 0;
                }
                resultStr += fillStr[fillStrCounter];
                fillStrCounter++;
            }

            resultStr += input;

            break;

        case 'FILL_BOTH':
            
            resultStr += setPad(input, Math.ceil((fullLen - input.length) / 2) + input.length, fillStr, 'FILL_LEFT');

            resultStr = setPad(resultStr, fullLen, fillStr);

            break;

        default:
            return -1;
    }

    return resultStr;
}

console.log(setPad('star', 10, '_*_'));
console.log(setPad('star', 8, '_*_', 'FILL_LEFT'));
console.log(setPad('star', 8, '*', 'FILL_BOTH'));
/*
Я надеюсь правельно понял задание, посути эти функции идентичные, резве что поменять параметры местами.

*/

// № 1
function setMath (operator) {
    return (...num) => {
        let namToString = num.join(` ${operator} `);
        let calculationNum = new Number;
        switch (operator){
            case '+':
                calculationNum = num.reduce((sum, elem) => sum + elem);
                break
            case '-':
                calculationNum = num.reduce((sum, elem) => sum - elem);
                break
            case '*':
                calculationNum = num.reduce((sum, elem) => sum * elem);
                break
            case '/':
                calculationNum = num.reduce((sum, elem) => sum / elem);
                break
        }
        return namToString + ' = ' + calculationNum;
    }
}
let funcWithMath = setMath('/');
console.log(funcWithMath(100,2,5));

// № 2
function setNumbers(...num) {
    return operator => {
        let namToString = num.join(` ${operator} `);
        let calculationNum = new Number;
        switch (operator){
            case '+':
                calculationNum = num.reduce((sum, elem) => sum + elem);
                break
            case '-':
                calculationNum = num.reduce((sum, elem) => sum - elem);
                break
            case '*':
                calculationNum = num.reduce((sum, elem) => sum * elem);
                break
            case '/':
                calculationNum = num.reduce((sum, elem) => sum / elem);
                break
        }
        return namToString + ' = ' + calculationNum;
    }
}
let whatDo = setNumbers(100,2,5);
console.log(whatDo('/'));

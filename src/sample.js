const addFunc = (a, b, c) => {
    return a + b + c;
}

const isDivisibleBy5 = (num1) => {
    if (num1 % 5 == 0){
        return true;
    } else {
        return false;
    }
}

const isODDEven = (num2) => {
    if(num2 % 2 == 0){
        return "Even";
    }
    else
    {
        return "Odd";x
    }
}
//
module.exports = {
    addFunc,
    isDivisibleBy5,
    isODDEven
}
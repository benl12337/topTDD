function capitalise(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverse(string) {
    return string.split("").reverse().join("");
}

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b
};

function caesarCipher(string, factor) {
    let newString = "";
    // loop through string
    for (let i = 0; i < string.length; i++) {

        let letterCode = string[i].charCodeAt(0);

        if (letterCode > 96 && letterCode < 123) {
            // if lowercase letter
            letterCode = (letterCode + factor);
            letterCode = letterCode > 122 ? 97 + letterCode % 122 : letterCode;
            newString += String.fromCharCode(letterCode);
        } else if (letterCode > 64 && letterCode < 91) {
            // if uppercase letter
            letterCode = (letterCode + factor);
            letterCode = letterCode > 90 ? 65 + letterCode % 90 : letterCode;
            newString += String.fromCharCode(letterCode);
        } else {
            newString += string[i];
        }

    }
    return newString;
}

function analyseArray(array) {
    const obj = {};

    obj.average = array.reduce((a, b) => a + b) / array.length;
    obj.min = Math.min(...array);
    obj.max = Math.max(...array);
    obj.length = array.length;

    return obj;
}

module.exports = { capitalise, reverse, calculator, caesarCipher, analyseArray }
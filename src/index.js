module.exports = function toReadable (number) {
    const listNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const listNumberTen = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let newNumber = number.toString().split('');
    let result = '';

    if (number % 100 === 0 && number != 0) {
        result = `${listNumber[newNumber[0]]} hundred`;
    } else if (newNumber.length === 3) {
        let firstNumber = `${listNumber[newNumber[0]]} hundred `;
        let secondNumber;
        if (Number(newNumber[1] + newNumber[2]) < 20) {
            let potentialSecondNumber = Number(newNumber[1] + newNumber[2]);
            secondNumber = listNumber[potentialSecondNumber];
        } else if (Number(newNumber[1] + newNumber[2]) % 10 === 0) {
            secondNumber = `${listNumberTen[newNumber[1]]}`;
        } else {
            secondNumber = `${listNumberTen[newNumber[1]]} ${listNumber[newNumber[2]]}`;
        };
        result = `${result}${firstNumber}${secondNumber}`;
    } else if (newNumber.length === 2) {
        if (Number(newNumber[0] + newNumber[1]) < 20) {
            let potentialSecondNumber = Number(newNumber[0] + newNumber[1]);
            result = listNumber[potentialSecondNumber];
        } else if (Number(newNumber[0] + newNumber[1]) % 10 === 0) {
            result = `${listNumberTen[newNumber[0]]}`;
        } else {
            result = `${listNumberTen[newNumber[0]]} ${listNumber[newNumber[1]]}`;
        };
    } else if (number < 10) {
        result = listNumber[number];
    } else {
        result = 'We do not know this number';
    }
    return result;
}
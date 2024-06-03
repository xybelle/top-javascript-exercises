const reverseString = function(word) {
    let length = word.length;
    let reversed = [];
    for (let i = 0; i < length; i++) {
        reversed[i] = word[(length - 1) - i];
    }
    return reversed.join('');
};

// Do not edit below this line
module.exports = reverseString;

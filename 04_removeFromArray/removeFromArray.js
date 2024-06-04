const removeFromArray = function(array, ...theRestForRemoval) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (theRestForRemoval.includes(array[i])) {
            continue;
        }
        newArray.push(array[i]);
    }
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;

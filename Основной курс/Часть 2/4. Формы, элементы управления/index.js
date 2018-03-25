'use strict'
function partitionOn(pred, items) {
    let falseArray = [];
    let trueArray = [];
    for (let i = 0; i < items.length; i++) {
        if (pred(items[i])) {
            trueArray.push(items[i]);
        } else {
            falseArray.push(items[i]);
        }
    }
    let finalArray = [].concat(falseArray, trueArray);
    for (let i = 0; i < items.length; i++) {
        items[i] = finalArray[i];
    }
    return falseArray.length;
}
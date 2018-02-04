'use strict';
function sumTo1(n) {
    var result = 0;
    for (var i = n; i > 0; i--) {
        result = result + i;
    }
    return result;
}
function sumTo2(n) {
    if (n>0) {
        return n + sumTo2(n-1);
    } else {
        return n;
    }
}
function sumTo3(n) {
    return (1+n)/2*n;
}

console.time('sumTo1');
console.log(sumTo1(100000));
console.timeEnd('sumTo1');
console.time('sumTo2');
console.log(sumTo2(10000));
console.timeEnd('sumTo2');
console.time('sumTo3');
console.log(sumTo3(100000));
console.timeEnd('sumTo3');
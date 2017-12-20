/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    debugger;
    if (x === 0) {
        return 0;
    }

    let min_val_unsigned_32bit = -(Math.pow(2, 31));
    let max_val_unsigned_32bit = Math.pow(2, 31) - 1;
    let is_negative;
    if (x < 0) {
        is_negative = true;
        x = x * -1;
    }

    // convert the number to array of digits
    let digit_list = x.toString().split("").map(function(n) {
        return parseInt(n);
    });

    var result = 0;
    for (let i = digit_list.length - 1; i >= 0; i--) {
        result += Math.pow(10, i) * digit_list[i];
    }

    if (is_negative)
        result = result * -1;


    if (result < min_val_unsigned_32bit || result > max_val_unsigned_32bit)
        return 0;
    else
        return result;

};

var result = reverse(123);
console.log(result);
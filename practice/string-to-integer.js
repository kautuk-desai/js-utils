var to_integer = function(str) {
    // body... 
    debugger;
    var int_max = 2147483647;
    var int_min = -2147483648;

    var num = parseInt(str)
    if (num) {
        if (num > int_max) {
            return int_max;
        } else if (num < int_min) {
            return int_min
        } else {
            return num;
        }
    } else {
        return 0;
    }
}

to_integer('123124');
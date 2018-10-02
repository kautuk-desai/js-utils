var get_length = function(n) {
    var count = 0;

    if (n >= 1 || n === 0) {
        count++;
    }

    while (n / 10 >= 1) {
        count++;
        n = n / 10;
    }

    return count;
}

// test cases: n = -2147483648, -12321, -1, 0, 1, 11, 111, 12321, 123321, 1000021
var check_palindrome = function(n) {

	if(n < 0){
		n = n * -1;
	}

	var length = get_length(n);

	debugger;
    if (length < 1 || n < 0) {
        return false;
    }

    if (length === 1) {
        return true;
    }

    let first_digit = 0,
        i = 1;
    let last_digit = 0,
        j = length - 1;
    var is_palindrome = true;

    while (is_palindrome && (j >= 0)) {
        first_digit = parseInt(n / Math.pow(10, j));
        last_digit = n % Math.pow(10, i);

        if (first_digit !== last_digit) {
            is_palindrome = false;
        }
        else {
        	n = n % Math.pow(10, j);
        	n = parseInt(n / Math.pow(10, i));
        	//i++;
        	j -= 2;
        }
    }

    return is_palindrome;
}
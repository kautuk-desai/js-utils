function palindrome(str) {
    var len = str.length;

    var memo = new Array();
    var result = '';
    var max_length = 1;
    var palindrome_len = 3;
    var start_index = 0;
    let i = 0;
    let end_index = 0;

    for (let i = 0; i < len; i++) {
        memo.push(new Array(len));
        memo[i][i] = true;
        if (str[i] === str[i + 1]) {
            memo[i][i + 1] = true;
            start_index = i;
            max_length = 2;
            //result = str[i] + str[i+1];
        }
    }

    while (palindrome_len <= len) {
        i = 0;
        while (i < (len - palindrome_len + 1)) {
            end_index = i + palindrome_len - 1;

            if (str[i] === str[end_index] && memo[i + 1][end_index - 1]) {
                memo[i][end_index] = true;

                if (palindrome_len > max_length) {
                    start_index = i;
                    max_length = palindrome_len;
                }
            }

            i++;
        }

        palindrome_len++;
    }

    for (let i = start_index; i < start_index + max_length; i++) {
        result += str[i];
    }

    console.log(result);
    console.log(memo);
}
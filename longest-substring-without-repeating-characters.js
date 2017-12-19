function longest_substring(str) {
    var len = str.length;

    // corner case 1: if the given string is empty
    if(len<1){
        return 0;
    }

    // corner case 2: if given string contains only 1 character
    if(len < 2){
        return 1;
    }

    var memo = new Array(len);
    // fill all positions as 1. as any character can itself be a substring
    memo.fill(1);

    var prev_char = str[0];
    var result = '', temp = prev_char;
    var start_index = 0;
    var end_index = 1;
    var i = 1;
    var current_len = 1;
    var max_length = 0;
    var prev_index = 1;

    while(i < len){
        if(prev_char !== str[i] && temp.indexOf(str[i]) === -1){
            memo[i] = 1 + memo[i - 1];
            temp += str[i];
            current_len++;
            prev_index = i;
            i++;
            if (max_length < current_len){
                max_length = current_len;
            }
        }
        else {
            temp = '';
            i = prev_index;
        }
    }
}
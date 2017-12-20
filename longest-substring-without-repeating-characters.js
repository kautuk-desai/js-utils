function longest_substring(str) {
    var len = str.length;

    // corner case 1: if the given string is empty
    if (len < 1) {
        return 0;
    }

    // corner case 2: if given string contains only 1 character
    if (len < 2) {
        return 1;
    }

    debugger;
    var result = '';
    var max_length = 0;
    var hash_map = {};

    for (let i = 0, j = 0; j < len; j++) {
        if (hash_map.hasOwnProperty(str[j])) {
            i = Math.max(hash_map[str[j]], i);
        }

        if (max_length < j - i + 1) {
            max_length = j - i + 1;
        }
        hash_map[str[j]] = j + 1;
    }

    return max_length;
}
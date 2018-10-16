validWordAbbreviation = function (word, abbr) {
    const ascii_1 = 49;
    const ascii_9 = 57;
    const word_len = word.length;
    const abbr_len = abbr.length;
    let skip = 0;
    let i = 0, j = 0;
    while(i < word_len){
        while((ascii_1 <= abbr.charCodeAt(j)) && (abbr.charCodeAt(j) <= ascii_9)){
            skip += abbr.charAt(j);
            j++;
            
        }
        i += parseInt(skip);
        skip = 0;
        
        if(i > word_len || word.charAt(i) !== abbr.charAt(j)){
            return false;
        }
        i++;
        j++;
    }

    return true;
}

// let s = "internationalization", abbr = "i12iz4n";
let s = "apple", abbr = "6";
validWordAbbreviation(s, abbr);
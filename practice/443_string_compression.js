/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    const len = chars.length;
    let next = 1,
        k = 0,
        charCount = 0;
    
    while (next < len){
        while(chars[next-1] === chars[next]){
            next++;
            charCount++;
        }
        chars[k] = chars[next-1];
        if(charCount > 1){
            let diffStr = charCount.toString();
            for(let i = 0; i < diffStr.length; i++, k++){
                chars[k+1] = diffStr.charAt(i);
            }
            charCount = 0;
        };
        k++;
        if(next === len-1){
            chars[k] = chars[next];
            k++;
        }
        next++;
    }
    
    // console.log(k);
    return k;
};


// chars = ["a","a","b","b","c","c","c"];
// chars = ["a","b"]
chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"];
// chars = ["a","a","a","c"];
console.log(compress(chars));
console.log(...chars);
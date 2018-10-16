var generateHash = function(str){
    const strLen = str.length;
    const aCode = 97;

    let hash = new Array(26).fill(0);
    let code;
    for(let i = 0; i < strLen; i++){
        code = str.charCodeAt(i) - aCode;
        hash[code]++;
    };
    return hash.join("");
};

const groupAnagrams = function(arr){
    let map = {};
    let hash;
    for(let word of arr){
        hash = generateHash(word);
        if(map[hash] === undefined){
            map[hash] = [word];
        }
        else{
            map[hash].push(word);
        }
    };


    let result = [];
    for(let key in map){
        result.push(map[key]);
        // console.log(...map[key]);
    };
    
    return result;
};

// var arr = ["eat", "tea", "tan", "ate", "aat", "bat"];
var arr = ["cab","tin","pew","duh","may","ill","buy","bar","max","doc"]
groupAnagrams(arr);
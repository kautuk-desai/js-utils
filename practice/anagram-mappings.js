var anagramMappings = function (A, B) {
    var len = A.length;
    var ele = 0;
    var index = 0;
    var result = new Array();
    var map = new Object();
    for (let i = 0; i < len; i++) {
        ele = A[i]
        if (!map.hasOwnProperty(ele)) {
            index = B.indexOf(ele)
            map[ele] = index;
            result.push(index);
        }
        else {
            result.push(map[ele]);
        }
    }
    return result;
};

var A = [84,8,0,84,0,84];
var B = [84,84,8,0,0,84];
var result = anagramMappings(A, B);
console.log(result)
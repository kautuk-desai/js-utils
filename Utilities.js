class Utilities {
    constructor() {
    };

    static arrayConstructor(){
        return [].constructor;
    };

    static stringConstructor(){
        return "".constructor;
    };

    static objectConstructor(){
        return {}.constructor;
    }

    static arrayToCountMap(arr) {
        if (arr && arr.constructor !== this.arrayConstructor()) {
            throw "Parameter is not an array!";
        };

        const len = arr.length;
        let map = {};
        for (let i = 0; i < len; i++) {
            if (map.hasOwnProperty(arr[i])) {
                map[arr[i]]++;
            }
            else {
                map[arr[i]] = 1;
            }
        };

        return map;
    };

    static dictTo2dArray(dict) {
        if (dict && dict.constructor !== this.objectConstructor()) {
            throw "Parameter is not a dictionary object!";
        };

        let map_arr = [];
        for (let i in dict) {
            map_arr.push([i, dict[i]]);
        };

        return map_arr;
    };
};
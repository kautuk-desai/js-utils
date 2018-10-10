const arr = [1,0,0,0,0,1,0,0];
const days = 1;

const new_arr = [];
const len = arr.length;
for(let i = 0; i<len; i++) {
    let before = 0, after = 0;
    if(i-1 >= 0){
        before = arr[i-1];
    }
    if(i+1 < len){
        after = arr[i+1];
    }

    new_arr[i] = before ^ after;
};

console.log(new_arr);
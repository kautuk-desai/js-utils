// let forward = [[1,2000],[2,4000],[3,6000]];
// let return_path = [[1,2000]];
// const max_dist = 7000;

// let forward = [[1,8],[2,7],[3,14]];
// let return_path = [[1,5],[2,10],[3,14]];
// const max_dist = 20;

let forward = [[1,8],[2,15],[3,9]];
let return_path = [[1,8],[2,11],[3,12]];
const max_dist = 20;

let forward_sort = forward.sort(function(point1, point2){
    return point1[1] - point2[1];
});


let return_sort = return_path.sort(function(point1, point2){
    return point1[1] - point2[1];
});
let i = forward_sort.length - 1;
let j = return_sort.length - 1;
let max_sum;
let result = [];
while(i >=0){
    let sum = (forward_sort[i][1]+ return_sort[j][1]);
    if(sum <= max_dist && (sum == max_sum || max_sum == undefined)){
        result.push([i,j]);
        max_sum = sum;
    }
    
    j--;

    if(j < 0){
        i--;
        j = return_sort.length - 1;
    };
};

console.log(...result);


// const getMap = function(arr){
//     const arr_len = arr.length;
//     let map = {};
//     for(let i = 0; i<arr_len; i++){
//         let route = forward[i];
//         if(map.hasOwnProperty(route[1])){
//             map[route[1]].push(route[0]);
//         }
//         else {
//             map[route[1]] = [route[0]];
//         }
//     };
//     return map;
// };

// let forward_map = getMap(forward);
// let return_map = getMap(return_path);


// const contructRoutes = function(forward_idx, return_idx){
//     let routes = [];
//     const f = forward_idx.length;
//     const r = return_idx.length;

//         for(let i = 0; i < f; i++){
//             for(let j = 0; j < r; j++){
//                 routes.push([forward_idx[i],return_idx[j]])
//             }
//         };
//         return routes;
// }

// let output = [];

// for(let key in forward_map){
//     let diff = max_dist - key;
//     if(diff > 0){
//         if(return_map.hasOwnProperty(diff)){
//         }
//     }
// }


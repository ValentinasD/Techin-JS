
function merdgeArrays(arr1, arr2){
    let newArrays =arr2.concat (arr1);
    return newArrays;
}
let arr1 = [1, 2, 3];
let arr2 = [ 4, 5, 6];

let result = merdgeArrays(arr1,arr2);
console.log(result)
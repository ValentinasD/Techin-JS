
function merdgeArrays(arrays1, arrays2){
    let newArrays = [...arrays1, ...arrays2];
    return newArrays;
}

let arrays1 = [1, 2, 3];
let arrays2 = [ 4, 5, 6];

result = merdgeArrays(arrays1,arrays2);
console.log(result)
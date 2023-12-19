

function sumNumbers (...number){

    let result = 0;

        for (let num of number){
            result += num;
        };
        return result;
};

let sum = sumNumbers(1, 2, 3);
console.log(sum);


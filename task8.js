function delElement(arr, newelement){
    arr.pop(newelement);
    return arr.length;
}
const frutis = ["apple", "banana", "tomato"];
const newLength = delElement(frutis);
console.log(frutis);
console.log(newLength);
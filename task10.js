function delElement(arr, newelement){
    arr.shift(newelement);
    return arr.length;
}
const frutis = ["orange","apple", "banana", "tomato"];
const newLength = delElement(frutis);
console.log(frutis);
console.log(newLength);
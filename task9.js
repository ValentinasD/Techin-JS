function addElement(arr, newelement){
    arr.unshift(newelement);
    return arr.length;
}
const frutis = ["apple", "banana", "tomato"];
const newLength = addElement(frutis, "orange");
console.log(frutis);
console.log(newLength);
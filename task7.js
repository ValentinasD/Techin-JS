function addElement(arr, newelement){
    arr.push(newelement);
    return arr.length;
}
const frutis = ["apple", "banana"];
const newLength = addElement(frutis, "Tomato");
console.log(frutis);
console.log(newLength);



function greetPerson(name = 'Guest', message = 'Welcome'){
    let greeting = `${message}, ${name}!`;
    return greeting;
}


let defaultGreting = greetPerson();
console.log(defaultGreting);



let personGreting = greetPerson("Tadas");
console.log(personGreting);
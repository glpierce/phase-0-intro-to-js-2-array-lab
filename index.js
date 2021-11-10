let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    let newArray = [...cats, name];
    return newArray;
}

function prependCat(name) {
    let newArray = [name, ...cats];
    return newArray;
}

function removeLastCat() {
    let newArray = [...cats];
    newArray.pop()
    return newArray;
}

function removeFirstCat() {
    let newArray = [...cats];
    newArray.shift()
    return newArray;
}
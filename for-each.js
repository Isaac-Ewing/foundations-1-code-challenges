// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    const newArr = [];
    arr.forEach((name) => {
        newArr.push(name.name);
    });
    return (newArr);
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const newArr = [];
    arr.forEach((name) => {
        newArr.unshift(name.type);
    });
    return (newArr);
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    const newObj = [];
    arr.forEach((name) => {
        let obj = {
            nombre: name.name,
            tipo: name.type,
        }
        newObj.push(obj);
    });
    return (newObj);
}


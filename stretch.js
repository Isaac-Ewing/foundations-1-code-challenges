// solve these problems using any method you like!

/* 

Input:
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]

*/

/*
Output: 
{
    apple: 3,
    banana: 1,
    'dog food': 5,
    milk: 2,
    cheese: 4
}
*/

function check(arr) {
    let i = 0;
    while (i < arr.length - 1) {
        if (arr[i][0] > arr[i + 1][0])
            return (false);
        i++;
    }
    return (true);
}
function sortIds(array) {
    let i = 0;
    let temp = 0;
    while (i < array.length - 1) {
        if (array[i][0] > array[i + 1][0]) {
            temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
        }
        i++;
    }
    if (!check(array))
        return (sortIds(array));
    return (array);
}
export function organizePricesByKey(arr) {
    let idArr = [];
    const out = {};
    for (let i of arr) {
        idArr.push(i.id);
    }
    idArr = sortIds(idArr);
    for (let i of arr) {
        let j = 0;
        while (j < idArr.length) {
            if (idArr[j] === i.id)
                out[i.id] = i.price;
            j++;
        }
    }
    return (out);
}  //This was fun, it was probably inefficient as hell but who cares

/*
Output: 
{
    apple: { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    banana: { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    'dog food': { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    milk: { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
    cheese:    { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    }
}
*/

export function makeAHashMap(arr) {
    let objects = {};
    for (let i of arr) {
        objects[i.id] = {id: i.id, price: i.price, quantity: i.quantity, category: i.category};
    }
    return (objects);
}


/*
Output: 
{
    fruit: 2,
    other: 1,
    dairy: 2
}
*/

export function countByCategory(arr) {
    let objects = [];
    let out = {};
    let i = 1;
    let z = 0;
    objects[0] = {
        id: arr[0].category,
        count: 1,
    }
    while (arr[i]) {
        for (let j of objects) {
            if (arr[i].category === j.id) {
                j.count++;
                z = 1;
            }
        }
        if (z === 0) {
            objects[objects.length] = {
                id: arr[i].category,
                count: 1,
            }
        }
        i++;
        z = 0;
    }
    for (let k of objects) {
        out[k.id] = k.count;
    }
    return (out);
}
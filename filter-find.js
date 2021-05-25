// Use the filter or find array methods to solve these problems

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

Output: 
[
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


export function getAllDairy(arr) {
    const list = arr.filter(item => item.category === 'dairy')
    return (list);
}

/*
Output: 
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    }
]
*/

export function getAllFruitsThatCostMoreThanTwo(arr) {
    const list = arr.filter(item => (item.price > 2 && item.category === 'fruit'))
    return (list);
}


/*
Output: 
    { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
*/

export function findTheCheese(arr) {
    const list = arr.find(item => item.id === 'cheese')
    return (list);
}


/*
Output: 
['apple', 'banana']
*/

export function listNamesOfAllFruits(arr) {
    let newArr = [];
    const list = arr.filter(item => item.category === 'fruit')
    for (let i of list) {
        newArr.push(i.id);
    }
    return (newArr);
}
// user Object.values and Object.key to solve these problems!

/*
Input: 
{
    wheels: 8,
    type: 'truck',
    goes: 'vroom',
}
*/

/*
Output:
{
    WHEELS: 8,
    TYPE: 'truck',
    GOES: 'vroom',
}
*/

export function makeMoreScreamingKeys(someObject) {
    const newObj = {};
    Object.keys(someObject).forEach(element => {
        newObj[element.toUpperCase()] = someObject[element];
    });
    return (newObj);
}
/*
Output:
`8truckvroom`
or
`truckvroom8`
or
`truck8vroom`
,
etc

(we cannot control the order that these appear in without extra work, so any of these outputs are acceptable)
*/

export function makeWeirdStringFromKeys(someObject) {
    let str = '';
    Object.keys(someObject).forEach(element => {
        str = str + element;
    });
    return (str);
}


/*
Output:
[ 
    ['wheels', 8],
    ['type', 'truck'],
    ['goes', 'vroom'],
]
*/

export function makeTuples(someObject) {
    const keys = Object.keys(someObject);
    const values = Object.values(someObject);
    let newArr = [];
    let i = 0;
    while (keys[i]) {
        newArr[i] = [keys[i], values[i]];
        i++;
    }
    return (newArr);
}

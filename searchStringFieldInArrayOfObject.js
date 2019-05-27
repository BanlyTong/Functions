function searchString(stringValue, arrayOfObject) {
    const firstObj = arrayOfObject[0];
    const keys = Object.keys(firstObj);

    const searchKeys = keys.filter(key => typeof firstObj[key] === 'string');

    const result = arrayOfObject.filter(item => {
        let isMatch = false;

        for (let i = 0; i < searchKeys.length; i++) {
            isMatch = item[searchKeys[i]].includes(stringValue);
            if (isMatch) break;
        }
        return isMatch;
    });

    return result;
}

// TEST
const myArray = [{
        name: 'Dara',
        age: 23,
        gender: 'male',
        year: '4th',
        class: 'E3',
        room: '103'
    },
    {
        name: 'Dany',
        age: 23,
        gender: 'female',
        year: '4th',
        class: 'E5',
        room: '107'
    },
    {
        name: 'Nia',
        age: 23,
        gender: 'male',
        year: '3th',
        class: 'E1',
        room: '103'
    },
    {
        name: 'Kim',
        age: 23,
        gender: 'female',
        year: '4th',
        class: 'E1',
        room: '103'
    },
    {
        name: 'Sok',
        age: 43,
        gender: 'male',
        year: '4th',
        class: 'E3',
        room: '103'
    }
];

const test = searchString(43, myArray)

console.log(test);
/* RESULT
    

*/
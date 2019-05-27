function mapObjectToArray(object, originalArray) {
    const result = JSON.parse(JSON.stringify(originalArray));

    originalArray.forEach((value, i) => {
        if (Array.isArray(value)) {
            result[i] = mapObjectToArray(object, value);
        } else {
            result[i] = object[value];
        }
    })

    return result;
}


//Testing
const originObject = {
    name: 'Dara',
    age: 23,
    gender: 'male',
    year: '4th',
    class: 'E3',
    room: '103'
};
const originArray = [['name'], [['age']], [[['gender'], 'year'],'class'], 'room'];


console.log( mapObjectToArray( originObject, originArray ));

//Result
/* 
[ [ 'Dara' ], [ [ 23 ] ], [ [ ['male'], '4th' ], 'E3' ], '103' ]
*/
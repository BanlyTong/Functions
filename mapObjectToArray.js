function mapObjectToArray(object, array) {
    let result = array;

    array.forEach((value, i) => {
        if (Array.isArray(value)) {
            mapObjectToArray(object, value);
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
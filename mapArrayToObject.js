function mapArrayToObject(originalArray, array, result = {}) {
  const copiedArray = JSON.parse(JSON.stringify(originalArray));
    copiedArray.forEach((value, i) => {
        if (Array.isArray(value)) {
            mapArrayToObject(value, array[i], result);
        } else {
            result[value] = array[i];
        }
    })
    return result;
}


//Testing
const originArray = [['name'], [['age']], [[['gender'], 'year'],'class'], 'room'];
const modifyArray = [['Dara'], [[23]],    [[['male'],   '4th'],  'E3'],   '103'];

console.log( mapArrayToObject( originArray, modifyArray ));


//Result
/* 
{ name: 'Dara',
  age: 23,
  gender: 'male',
  year: '4th',
  class: 'E3',
  room: '103' 
  }
*/
function clearArrayData(originalArray) {
  const result = JSON.parse(JSON.stringify(originalArray));

    originalArray.forEach((value, i) => {
        if (Array.isArray(value)) {
            result[i] = clearArrayData(value);
        } else {
            result[i] = "";
        }
    })
    return result;
}


const oArray = [["Hello"], "Hi", ["How are you?", "I'm busy.", ["What's your name?"]]];

const test = clearArrayData(oArray);

console.log({oArray, test});


/* RESULT

{ oArray: [ [ 'Hello' ], 'Hi', [ 'How are you?', 'I\'m busy.', [Array] ] ],
  test: [ [ '' ], '', [ '', '', [Array] ] ] }
  
*/
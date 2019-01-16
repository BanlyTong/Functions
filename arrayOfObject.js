const data = [
    { name: "Nara", age: 13 },
    { name: "Mary", age: 21 },
    { name: "Dara", age: 34 },
]

const myobject = { name: "Nara", age: 13 };

const myoriginArray = [
    ['name', ['age']]
];

const myarray = [
    ['Nara', [13]]
];

const originArray1 = ['name', ['age']];
const myarray1 = ['Nara', [13]];

// const getOneProp = data.map(item => item["name"])
// const test = data.shift();
// const result = data.map(function(item, key) { 
// 	let obj = {}
// 	obj["name"] = item["name"];
// 	return obj;
// })

// console.log(result);
// // [ { name: 'Mary' }, { name: 'Dara' } ]
// console.log(test);
// // { name: 'Nara', age: 13 }

// console.log(getOneProp);
// myoriginArray.forEach(value => {console.log(value +'\n');});
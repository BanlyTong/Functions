var array1 = ['A', 'B', 'C', 'D', 'E'];
var array2 = ['B', 'C', 'E'];
var array3 = ['B', 'C', 'Z'];

var test1 = array1.includes( array2); // => true
var test2 = array1.includes( array3); // => false

console.log(test1, test2);
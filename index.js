var array1 = ['A', 'B', 'C', 'D', 'E'];
var array2 = ['B', 'C', 'E'];
var array3 = ['B', 'C', 'Z'];

var test1 = array1.includes(array2); // => true
var test2 = array1.includes(array3); // => false

// console.log(test1, test2);
const data = {
	danger_class: [
    { class_name: 'class1', caption: 'Class 1' },
    { class_name: 'class2', caption: 'Class 2' },
    { class_name: 'class3', caption: 'Class 3' },
    { class_name: 'class4', caption: 'Class 4' },
    { class_name: 'class5', caption: 'Class 5' },
    { class_name: 'class6', caption: 'Class 6' },
    { class_name: 'class7', caption: 'Class 7' }
],

type_of_company: [
        { type: 'private', caption: 'Private' },
        { type: 'company', caption: 'Company' }
    ],
    constran_loading_type: [
        { id: '1', caption: 'Indifferent' },
        { id: '2', caption: 'Top loading' },
        { id: '3', caption: 'Rear loading' },
        { id: '4', caption: 'Side loading' }
    ],
    constran_delivery_type: [
        { id: '1', caption: 'Indifferent' },
        { id: '2', caption: 'Top delivery' },
        { id: '3', caption: 'Rear delivery' },
        { id: '4', caption: 'Side delivery' }
    ],
    type_of_vehicle: [
        { id: '1', caption: 'Semi truck(28t max)' },
        { id: '2', caption: 'Semi truck(24t max)' },
        { id: '3', caption: 'Straight truck' },
        { id: '4', caption: 'Utility(20m³)' }
    ],
    vehicle_walls: [
        { id: '1', caption: 'Box' },
        { id: '2', caption: 'Curtainside' }
    ]
}

console.log(JSON.stringify(data));
/*


 */
function getRndInteger(max, min = 0) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function makeString() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(getRndInteger(possible.length));
  
    return text;
}

function createDateOfBirth() {
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const days = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13','14', '15', '16', '17','18', '19', '20', '21','22','23', '24','25','26','27', '28'];
    const years = [1990, 2000];

    const rMonth = months[getRndInteger(months.length)];
    const rDay = days[getRndInteger(days.length)];
    const rYear = getRndInteger(years[1], years[0]).toString();

    return `${rMonth}/${rDay}/${rYear}`;

}
/*
console.log(new Date(createDateOfBirth()).toString());
console.log(new Date(createDateOfBirth()).toString());
console.log(new Date(createDateOfBirth()).toString());
console.log(new Date(createDateOfBirth()).toString());
console.log(new Date(createDateOfBirth()).toString());
*/
/*
console.log(makeString());
console.log(makeString());
console.log(makeString());
console.log(makeString());
console.log(makeString());
*/
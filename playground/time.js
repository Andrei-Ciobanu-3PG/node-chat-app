const moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

// 10:35 am

let createdAt = 1234;
let date = moment(createdAt);
console.log(date.format('h:mm a'));


let someTimestamp = moment().valueOf();
console.log(someTimestamp);
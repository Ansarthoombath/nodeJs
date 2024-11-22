const moment = require('moment')
const read = (require('readline-sync'));
const yob =Number( read.question('Enter yob: '));

const currentyr=moment().format('yyyy')

console.log(currentyr-yob)


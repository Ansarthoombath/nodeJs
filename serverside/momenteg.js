const moment = require('moment')

const currentDateTime = moment()
console.log('Current date and Time ',currentDateTime.format('YYYY-MM-DD  HH:MM:SS'))

const futureDate = moment().add(7,'days')
console.log('date after 7 days',futureDate.format('YYYY-MM-DD'))

const pastDate = moment().subtract(3,'days')
console.log('date after 7 days',pastDate.format('YYYY-MM-DD'))

console.log(moment().format('dddd,MMMM Do YYYY, h:mm:ss a'))
console.log(moment().format('MMM Do YY'))
console.log(moment().format('[Today is] dddd'))

const date1=moment('2024-11-18')
const date2=moment('2024-11-20')

console.log('is date1 before date2?',date1.isBefore(date2))
console.log('is date1 after date2?',date1.isAfter(date2))
console.log(' date1 and date2 are same?',date1.isSame(date2))
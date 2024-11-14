// file system module
const fs = require('fs');

// reading a file text
// fs.readFileSync(path[, options])
const readtText = fs.readFileSync('./texts/read.txt', 'utf-8')

// writing a text
const writtenText = fs.writeFileSync('./texts/write.txt', readtText + 'This is my written text')

console.log(writtenText)
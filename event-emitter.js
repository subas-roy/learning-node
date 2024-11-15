// require events Class
const EventEmitter = require('node:events'); 

// create instance 
const myEmitter = new EventEmitter()

// listener
myEmitter.on('birthday', () => {
  console.log('HAPPY BIRTHDAY TO YOU')
})

// added another listener with recieving parameter
myEmitter.on('birthday', (gift) => {
  console.log(`I will send a ${gift}`)
})

// emit
myEmitter.emit('birthday', 'Watch')


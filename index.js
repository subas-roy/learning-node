// Requiring Local Modules we create

const { add } = require("./local-1");
const { add: add2 } = require("./local-2"); // name alias

console.log(add(5, 3))
console.log(add2(6, 4, 3))



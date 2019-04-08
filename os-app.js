const os = require('os');

var totalMemory = os.totalmem(),
	freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}`);	//Using ES6/ES2015 Template String style of writing.
console.log(`Free Memory: ${freeMemory}`);





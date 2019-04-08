var logger = require('./log-module');	//node assumes the file would have a .js extension, so .js is not required. But you can always write require('./log-module') as well

logger("This is a message to test log-module. If you see this on your console, it works!");
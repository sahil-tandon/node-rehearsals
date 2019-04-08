const path = require('path');		//When writing something like require('xyz'), node assumes we are trying to reference a built-in function. If it doesn't find a built-in function with the name xyz, it looks for packages with the name xyz in the relative path (i.e. './xyz')
//Its good practice to use const instead of var for module imports to prevent accidental overriding.
var pathObj = path.parse(__filename);

console.log("Path object obtained through built-in node path module:");
console.log(pathObj);
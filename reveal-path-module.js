/*(function(exports, require, module, __filename, __dirname) {*/
	/*Every file is considered as a module by node.*/
	/*The commented out wrapping IIFE represents what every file in node actually looks like. It gives an idea of how node works behind the scenes.*/
	
	function revealPath () {
		var file = __filename,	//Captures the filename
			directory = __dirname;	//Captures the directory path

		console.log("Name of this file: " + file);
		console.log("Name of the directory: " + directory);
	}
	/*exports is actually just a reference to module.exports. So you can always write just exports.xyz insted of module.exports.xyz. Though you cannot change exports reference, i.e. you cannot write exports = xyz instead of module.exports = xyz.*/
/*});*/
// Basic export
/*
function lol(){
	console.log("lol");
}

function lol1234(){
	console.log("lol1234");
}

module.exports.callMe = lol;

*/

// This is shared between every other module

module.exports = {

	num1 : function(){
		console.log("Trying the other way around");
	},
	num2 : function(){
		console.log(" hahahahha");
	}
}

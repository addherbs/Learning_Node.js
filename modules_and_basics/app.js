var movies = require('./movies');

/*
movies.callMe();	// Will print
movies.lol1234;		// wont print
*/

/*
movies.num1();
movies.num2();
*/

// Implement Object Factory
/*
var thisMovies = movies();
movies.num1 = "Yo my favourite movie is matrix"
console.log(movies.num1)
*/


// Implement core module FS
/*
var fs = require('fs');

fs.writeFileSync("ThisFile.txt", "This is the sentence that we go inside ThisFile.txt");	// File was created

console.log(fs.readFileSync("ThisFile.txt").toString());
*/

/*
var path = require('path');

var thisApp = "Desktop/tutorials/nodejs_basics/app.js";
var thisMovies = "Desktop/tutorials/nodejs_basics/movies.js";

console.log(path.normalize(thisApp));
console.log(path.normalize(thisMovies));
console.log(path.dirname(thisMovies));
console.log(path.basename(thisApp));
console.log(path.extname(thisMovies));

*/


console.log (__dirname);		//C:\Users\Cyther\Desktop\tutorials\nodejs_basics
console.log (__filename);		//C:\Users\Cyther\Desktop\tutorials\nodejs_basics\app.js



// This function sets interval and runs constantly
/*
setInterval(function (){
	console.log("This is going to be printed an X number of times mentioned below at every '2000' millisecond time");
}, 2000);

*/























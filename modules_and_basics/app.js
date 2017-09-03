var movies = require('./movies');

/*
movies.callMe();	// Will print
movies.lol1234;		// wont print
*/

/*
movies.num1();
movies.num2();
*/

/*
var thisMovies = movies();
movies.num1 = "Yo my favourite movie is matrix"
console.log(movies.num1)
*/


var fs = require('fs');

//fs.writeFileSync("ThisFile.txt", "This is the sentence that we go inside ThisFile.txt");	// File was created

console.log(fs.readFileSync("ThisFile.txt").toString());
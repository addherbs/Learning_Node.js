var movies = require('./movies');

/*
movies.callMe();	// Will print
movies.lol1234;		// wont print
*/

/*
movies.num1();
movies.num2();
*/

var thisMovies = movies();
movies.num1 = "Yo my favourite movie is matrix"
console.log(movies.num1)

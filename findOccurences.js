/*
 *
 *
 * 	Design a method to find the frequency of occurences of any given word in a book
 *
 *
 */


//	This function will find the frequency of a word
//	in a book
function findFrequency(book, word) {
	var re = '/' + word + '/g';
	console.log(book.match(/cat/g).length);
	
}

var book = "Hi my name is Hassan and I like cats. My mom is afraid of cats for some reason. I don't understand why she is afraid of cats because I love them...THE END";

var word = "cat";
findFrequency(book, word);

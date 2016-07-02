/*
 *	Write a function to reverse the order of words
 *	in a string in place
 *
 */

function reverseOrder(str) {
	var wordArray = str.split(' ');
	var result = "";
	var length = wordArray.length - 1;
	for(var i = length; i >= 0; i--) {
		if(i != length) {
			result += ' ';
		}
		result += wordArray[i];
	}
	return result;
}
console.log(reverseOrder("yahoo in san francisco"));


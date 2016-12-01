/*
 *	Given a list of words, write a program to find the longest word
 *	made of other words in the list.
 *
 */
const findLongestWord = (list) => {
	// Set longest word to first item as a starter
	let longestWord = { element: list[0], count: 0 };
	
	list.forEach(element => {
		let count = subwordCount(list, element);
		
		if (count > longestWord.count) {
			longestWord = { element, count };
		}
	});
	
	return longestWord.element;
};

/*
 * Given a list and a word, subwordCount returns the number of times the word appears
 * as a sub element of list
 */
const subwordCount = (list, word) => list.reduce((count, element) => {	
		return word.includes(element) ? count + 1 : count;
}, 0);
	
var list = ["wordA", "wordB","wordAwordBLakers", "wordAwordBLakersSnap", "Lakers", "test"];
console.log(findLongestWord(list));

/*
 * Write a function that determines if a given string is palindrome
 */
const isPalindrome = (str) => {
	let lPtr = 0;
	let rPtr = str.length - 1;

	for(; lPtr < rPtr; rPtr--) {
		if (str[rPtr] !==  str[lPtr]) {
			return false;
		}

		lPtr++;
	}
	
	return true;
};

console.log(isPalindrome('kayak'));

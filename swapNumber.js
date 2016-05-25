/*

	Write a function to swap a number in place (that is, without temporary
	variables

*/

function swapNumber(numberA, numberB) {
	
	first = Number(numberB.substring(0, numberB.length));
	second = Number( numberA.substring(0, numberA.length));
	console.log('a: ', first);
	console.log('b: ', second);

}
swapNumber(process.argv[2], process.argv[3]);

/*

	Write a function to swap a number in place (that is, without temporary
	variables

*/

function swapNumber(numberA, numberB) {
	var a = Number(numberA);
	var b = Number(numberB);
	var diff = Math.abs(a + b);
	console.log('diff: ', diff);

	b = a;
 	a = diff - b;
	console.log(a);				
	console.log(b);				
	
}
swapNumber(process.argv[2], process.argv[3]);

/*

	Write a function to swap a number in place (that is, without temporary
	variables

*/

function swapNumber(numberA, numberB) {
	var a = Number(numberA);
	var b = Number(numberB);
	var sum = Math.abs(a + b);

	b = a;
 	a = sum - b;
	console.log(a);				
	console.log(b);				
	
}
swapNumber(process.argv[2], process.argv[3]);

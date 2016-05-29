/*

	Write a method which finds the maximum of two numbers. You should not use if-else or any
	other comparison operator

*/

function getMaximum(numberA, numberB){
	//	If a - b > 0 then a is bigger than b
	//	since we cannot do any comparison at the end,
	//	the only way to return either a or b as the max, we will need to have
	//	a * x + b * y
	//	where x and y can either be 1 or 0
	//	x = not(y)
	var x = getSign(numberA, numberB);
	var y = x ^ 0x1;
	return numberA * x + numberB * y;
}

console.log(getMaximum(process.argv[2], process.argv[3]));

function getSign(numberA, numberB) {
	var diff = numberA - numberB;
	var sign = flip((diff >> 31) & 0x1);
	return sign;

	
}

function flip(number) {
	return number^1;
}

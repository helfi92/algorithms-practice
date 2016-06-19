/*
 *
 *	Write a method to count the number of 2s between 0 and n
 *
 */

var range = Number(process.argv[2]);
console.log(numberOf2sInRange(range));

//	Return the number of digit 2 given a range as a command line
function numberOf2sInRange(n) {
	var count = 0;
	for(var i = 2; i <= n ; i++) {
		count += numberOf2s(i);
	}
	return count;
}

//	Returns the number of digit 2 in one number
function numberOf2s(number) {
	var count = 0,
	    num = number;
	while(num > 1) {
		var remain = parseInt(num % 10, 10);
		if(remain == 2) {
			count =+ 1;
		}
		num = num / 10;
	}
	return count;
}

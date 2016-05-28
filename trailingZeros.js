/*

	Algorithm to compute the number of trailing zeros in n factorial
	
	Computing the factorial is a bad idea because you will quickly go over the range of integer

*/

function getTrailingZeros(n) {
	var counter = 0,
	    number;
	
	number = computeFactorial(n);	
	while(number % 10 == 0 && number > 0) {
		counter++;
		number /= 10;
	}
	console.log('There are: ' + counter + ' trailing zeros');	
	return counter;

}

function computeFactorial(n) {
	var number = n;
	while (n != 1 && n > 0) {
		number = number * (n - 1);
		n--;
	}
	return number;
}
getTrailingZeros(process.argv[2]);

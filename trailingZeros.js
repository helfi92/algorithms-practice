/*

	Algorithm to compute the number of trailing zeros in n factorial
	
	Computing the factorial is a bad idea because you will quickly go over the range of integer

*/

function getTrailingZeros(n) {
	//	Divide by 5
	var trailingZeros = 0;
	while(n >= 5) {
		trailingZeros = trailingZeros + parseInt(n / 5, 10);
		n /= 5;
	}
	return trailingZeros;
}

console.log(getTrailingZeros(process.argv[2]));

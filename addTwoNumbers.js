/*
 * Task: Write a sub-routine that adds two numbers without using +, -
 * Algorithm used: 
 * Get all the bits that needs to be carried
 * Shift that number
 * XOR with the bits that don't need to be carried
 * Repeat until all the carried bits have been treated
 */
const addTwoNumbers = (a, b) => {
	let carriedShifted = null;
	let carried = 0;
	let uncarried = 0;
		
	while (carriedShifted != 0) {
		// get all bits that needs to be carried
		carried = a & b;
		// sum of bits where at least 1 of the bits is not set
		uncarried = a ^ b;
		carriedShifted = carried << 1;
	}

	return uncarried;
};

console.log(addTwoNumbers(5, 10));

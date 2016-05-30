/*
 *
 *	You are given an array of integers (both positive and negative). Find the contiguous
 *	sequence with the largest sum. Return the sum
 *
 *
 */
var test = [2, 3, -8, -1, 2, 4, -2, 3, -2, -1, 1, 2];
getLargestSum(test);

function getLargestSum(arr) {
	var currentList = [];
	var maxObj = {
		sum : 0,
	};
	for(var i = 0, length = arr.length; i < length ; i++) {
		var isListPositive = isSumOfListPositive(currentList, maxObj);
		
		// Case 1: If you see a positive number and sum of currentList is negative
		// list is deleted and is now equal to positive number 
		if(arr[i] >= 0 && isListPositive == false) {
			currentList = [arr[i]];	
		} else {
			currentList.push(arr[i]);
		}
	}
	isSumOfListPositive(currentList, maxObj);
	console.log('Sum: ', maxObj.sum);
}

function isSumOfListPositive(list, maxObj) {
	// Compute sum of list
	var sum = 0;
	for(var i = 0, length = list.length; i < length ; i++) {
		sum += list[i];
	}
	// Set max value
	if(sum > maxObj.sum) {
		maxObj.sum = sum;
	}
	// Return 
	return sum < 0 ? false : true;
}

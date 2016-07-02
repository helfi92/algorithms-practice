/*
 *	Provide an algorithm for quicksort
 *
 */

let myArray = [1, 12, 5, 26, 7, 14, 2];

function quickSort(array, start, end) {
	if(start >= end) {
		return array;
	}
	var index = partition(array, start, end);
	quickSort(array, start, index -1);
	quickSort(array, index + 1, end);

}

function partition(array, start, end) {
	var left = start,
	    right = end,
	    pivot = array[Math.floor((start + end) / 2)];

	while(left < right) {
		while(array[left] < pivot) {
			left++;
		}
		while(array[right] > pivot) {
			right--;
		}

		if(left < right) {
			switchPlaces(array, left, right);
			left++;
			right--;
		}

	}
	return left;
}

function switchPlaces(array, indexA, indexB) {
	var temp = array[indexB];
	array[indexB] = array[indexA];
	array[indexA] = temp;
}

console.log(quickSort(myArray, 0, myArray.length - 1));

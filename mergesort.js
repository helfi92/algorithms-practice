/*
 * Implementing MergeSort
 */
const mergeSort = (list) => {
	const listLength = list.length;

	if (listLength < 2) {
		return list; 
	}

	const middle = listLength / 2;
	const listA = list.slice(0, middle);
	const listB = list.slice(middle);

	// merge 2 sorted list
	return merge(mergeSort(listA), mergeSort(listB));
};

/*
 * Merge 2 sorted arrays
 */
const merge = (arrA, arrB) => {
	let merged = [];

	while(arrA.length &&  arrB.length) {
		if(arrA[0] <= arrB[0]) {
			merged.push(arrA.shift());
		} else if (arrB[0] < arrA[0]) {
			merged.push(arrB.shift());
		}
	}

	while(arrA.length) {
		merged.push(arrA.shift());
	}

	while(arrB.length) {
		merged.push(arrB.shift());
	}
	
	return merged;
};

const unsorted = [4,3,6,1,9,12,7,9];
console.log(mergeSort(unsorted));

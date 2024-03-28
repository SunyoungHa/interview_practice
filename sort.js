// Question 1

function bubbleSort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		var noswap;
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				// Swap arr[j] and arr[j+1]
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				noswap = false;
			}
		}
		if (!noswap) break;
	}
	return arr;
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));

// Question 2:

function selectionSortWords(arr) {
	const n = arr.length;

	for (let i = 0; i < n - 1; i++) {
		// TODO: Find the index of the minimum word in the unsorted part
		// TODO: Swap the minimum word with the first unsorted word
	}

	return arr;
}

// Exercise: Sort the array using the selectionSortWords function
function selectionSortWords(arr) {
	const n = arr.length;

	for (let i = 0; i < n - 1; i++) {
		let min = i;
		for (let j = i + 1; j < n; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}
		// Swap arr[i] with the minimum value found
		let temp = arr[i];
		arr[i] = arr[min];
		arr[min] = temp;
	}

	return arr;
}

// Exercise: Sort the array using the selectionSortWords function
const arr = ["banana", "apple", "grape", "orange", "kiwi"];
// const arr = [9,8,7,66,1];

console.log(selectionSortWords(arr));

// Question 3

function insertionSortWords(arr) {
	const n = arr.length;

	// TODO: Implement the Insertion Sort algorithm

	return arr;
}

// Exercise: Sort the array using the insertionSortWords function
const unsortedNewWords = ["javascript", "python", "c++", "ruby", "go"];
console.log("Unsorted Words:", unsortedWords);

// TODO: Call the insertionSortWords function to sort the array

console.log("Sorted Words:", unsortedWords);

// Implement a function that merges two arrays of numbers into a single array and then sort the final array.

// 1. use concat method
// 2. use array method
// 3.result of [1, 3, 5], [2, 4, 6]  Output: [1, 2, 3, 4, 5, 6]

function mergerSortTwoArray(arr1, arr2) {
	return arr1.concat(arr2).sort((a, b) => a - b);
}

console.log(mergerSortTwoArray([1, 3, 5], [2, 4, 6]));

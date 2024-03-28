// source: AnnieCannons/searching-algorithms/blob/main/exercises.js

// Question 1
// Given an array of numbers, implement a function to perform linear search and find the index of a specific target number. If the target is not present in the array, return -1.

function linearSearch(arr, target) {
	// Your code here
}

// Example usage:
const numbers = [1, 3, 5, 7, 9, 11, 13];
const targetNumber = 7;

console.log(linearSearch(numbers, targetNumber)); // Should output the index 3

// Question 2
// Given a sorted array of numbers, implement a function to perform binary search and find the index of a specific target number. If the target is not present in the array, return -1.

function binarySearch(arr, target) {
	// Your code here
}

// Example usage:
const sortedNumbers = [1, 3, 5, 7, 9, 11, 13];
const targetNumber2 = 9;

console.log(binarySearch(sortedNumbers, targetNumber2)); // Should output the index 4

function binarySearch(arr, elem) {
	var start = 0;
	var end = arr.length - 1;
	var middle = Math.floor((start + end) / 2);
	while (arr[middle] !== elem && start <= end) {
		if (elem < arr[middle]) end = middle - 1;
		else start = middle + 1;
		middle = Math.floor((start + end) / 2);
	}
	return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch([1, 3, 5, 7, 9, 11, 13], 9));

// Question 3
// Consider a phone book with a large number of entries, each containing names and corresponding phone numbers. You want to find the phone number associated with a specific name. Write a search algorithm to efficiently find the correct data.

// The time complexity (Big O notation) of the binary search algorithm implemented in the provided JavaScript code is O(log n), where n is the number of entries in the phone book. This is because with each iteration of the binary search, the size of the search space is halved. As a result, even in the worst-case scenario, where you have to repeatedly halve the search space until only one element remains, the time complexity grows logarithmically with the number of entries.

// In each iteration of the binary search, the search space is halved.
// At worst, the search space will be halved log2(n) times until it reaches 1.
// Therefore, the time complexity is O(log n).
// The space complexity of the binary search algorithm is O(1) because it only uses a constant amount of extra space regardless of the size of the input (only a few variables are used for storing indices and the target name).

// Overall, this binary search algorithm provides efficient searching in large phone books with a time complexity that grows logarithmically as the size of the phone book increases.

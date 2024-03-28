// For each of the functions lised below, indicate the O notation as wll as your reasoning behind the answer.

// isEven
// Time Complexity: O(1)
// Reasoning: The function performs a single arithmetic operation and a comparison, regardless of the size of the input. The time it takes to determine whether a number is even does not depend on the size of the number.
function isEven(num) {
	if (num % 2 === 0) {
		return true;
	} else return false;
}
console.log(isEven(7));

// areYouHere
// Time Complexity: O(n * m)
// Reasoning: This function has two nested loops where arr1 and arr2 are iterated over. The outer loop has a time complexity of O(n) where n is the length of arr1, and the inner loop has a time complexity of O(m) where m is the length of arr2. As both loops are nested, the time complexity is O(n * m).
function areYouHere(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
		const element1 = arr1[i];
		console.log(element1);
		for (let j = 0; j < arr2.length; j++) {
			const element2 = arr2[j];
			if (element1 === element2) return true;
		}
	}
	return false;
}

console.log(areYouHere([1, 2, 3], [7, 4, 5]));

// doubleArrayValues
// Time Complexity: O(n)
// Reasoning: This function iterates through each element of the input array once and performs a constant-time operation (multiplying each element by 2). Therefore, the time complexity is directly proportional to the size of the input array, resulting in O(n).
function doubleArrayValues(arr) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] *= 2;
	}
	return arr;
}

console.log(doubleArrayValues([1, 2, 3]));

// newSearch

// Time Complexity: O(n)
// Reasoning: This function iterates through the entire input array once and performs a constant-time operation (comparing each element with the given item). Therefore, the time complexity is directly proportional to the size of the input array, resulting in O(n).
function newSearch(arr, item) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === item) {
			return item;
		}
	}
}

console.log(newSearch([1, 2, 3], 3));

// generateFibonacci
// Time Complexity: O(n)
// Reasoning: This function generates the Fibonacci sequence up to the given number num by iterating from 1 to num. As it iterates through the loop num times, the time complexity is O(n) where n is the value of num.
function generateFib(num) {
	let result = [];
	for (let i = 1; i <= num; i++) {
		if (i === 1) {
			result.push(0);
		} else if (i == 2) {
			result.push(1);
		} else {
			result.push(result[i - 2] + result[i - 3]);
		}
	}
	return result;
}

//   Fibonacci 2
// Time Complexity: O(2^n)
// Reasoning: This function recursively calculates the Fibonacci sequence. Each recursive call branches into two more calls, resulting in an exponential growth in the number of function calls. Therefore, the time complexity is O(2^n) where n is the input to the function.
function fibonacci(n) {
	if (n <= 1) {
		return n;
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
}

const n = 10;
for (let i = 0; i < n; i++) {
	console.log(fibonacci(i));
}

// efficientSearch

// findRandomElement
// Time Complexity: O(1)
// Reasoning: This function generates a random number within a given range. The time complexity is constant regardless of the size of the input because it performs a single operation.
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));

// isPrime
// Time Complexity: O(n)
// Reasoning: This function checks divisibility of n by all integers from 2 to n-1. Therefore, the time complexity is O(n) where n is the input number.
function isPrime(n) {
	if (n < 2 || n % 1 != 0) {
		return false;
	}
	for (let i = 2; i < n; ++i) {
		if (n % i == 0) return false;
	}
	return true;
}

// factorial
// Time Complexity: O(m * n)
// Reasoning: This function iterates through each element of the input array once, and for each element, it performs a loop from 1 to the value of that element. Therefore, the time complexity is O(m * n), where m is the number of elements in the input array and n is the maximum value among those elements.
function factorial(arr) {
	const factorialArray = [];

	for (let i = 0; i < arr.length; i++) {
		let result = 1;

		for (let j = 1; j <= arr[i]; j++) {
			result *= j;
		}

		factorialArray.push(result);
	}

	return factorialArray;
}

console.log(factorial([1, 2, 3]));

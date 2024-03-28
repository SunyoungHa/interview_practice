// source: udemy.com/course/js-algorithms-and-data-structures-masterclass/recursion

// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent.
function power(base, exponent) {
	if (exponent === 0) return 1;
	return base * power(base, exponent - 1);
}

function power2(base, exponent) {
	if (exponent === 0) return 1;
	return Math.pow(base, exponent);
}

console.log(power(2, 2));

// Write a function factorial which accepts a number and returns the factorial of that number.
function factorial(x) {
	if (x < 0) return 0;
	if (x <= 1) return 1;
	return x * factorial(x - 1);
}

console.log(factorial(2));

//  PRODUCT OF ARRAY
function productOfArray(arr) {
	if (arr.length === 0) {
		return 1;
	}
	return arr[0] * productOfArray(arr.slice(1));
}

// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
function recursiveRange(x) {
	if (x === 0) return 0;
	return x + recursiveRange(x - 1);
}

//  FIBONACCI
function fib(n) {
	if (n <= 2) return 1;
	return fib(n - 1) + fib(n - 2);
}

// Write a function that takes a string as input and returns the string reversed. For example, if the input is "hello", the function should return "olleh".

// 1. input String
// 2. e.g. hello
// 3. nomalize any chr
// 4. split all chr
// 5. reverse
// 6. join

function reverseStr(str) {
	// let inputStr = prompt("enter string:");
	return str
		.replace(/[^a-zA-Z0-9]/g, "")
		.toLowerCase()
		.split("")
		.reverse()
		.join("");
}
console.log(reverseStr("hello there!"));

// reverse the list (e.g. [1,-2,3,4,-5,4,3,-2,1])
// reference:  https://www.educative.io/courses/grokking-coding-interview-patterns-javascript/reverse-linked-list

// 1. initialize the prev and next to null
// 2. traverse the link until it reaches the end of list
function reverseList(loopList) {
	const reversed = [];
	for (let i = loopList.length - 1; i >= 0; i--) {
		reversed.push(loopList[i]);
	}
	return reversed;
}

const inputList = [6, -2, 3, 4, -5, 4, 7, -9, 0];
const reversedList = reverseList(inputList);
console.log(reversedList);

// reverse the list with method
function reverseList(list) {
	return list.reverse();
}

console.log(reverseList([1, -2, 3, 4, -5, 4, 3, -2, 1]));

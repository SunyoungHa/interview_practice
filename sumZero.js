function sumZero2(arr2) {
	const arr = arr2.sort();
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum === 0) {
			return [arr[left], arr[right]];
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
}

console.log(sumZero2([1, -1, 3, 0, -3]));

function sumZero3(arr3) {
	const arr = arr3.sort((a, b) => a - b);
	let left = 0;
	let right = arr.length - 1;
	const result = [];

	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum === 0) {
			result.push([arr[left], arr[right]]);
			left++;
			right--;
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}

	return result;
}

console.log(sumZero3([5, -5, 3, 0, -3]));

function sumZero(arr) {
	const sortedArr = arr.sort();

	for (let i = 0; i < sortedArr.length; i++) {
		for (let j = i + 1; j < sortedArr.length; j++) {
			if (sortedArr[i] + sortedArr[j] === 0) {
				return [sortedArr[i], sortedArr[j]];
			}
		}
	}
}

console.log(sumZero([1, 2, 3, -3, -5]));

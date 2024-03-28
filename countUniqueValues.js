// source: udemy js-algorithms-and-data-structures-masterclass

function countUniqueValues(arr1) {
	const arr = arr1.sort();

	var i = 0;
	for (var j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
		//     console.log(i,j)
	}
	return i + 1;
}

console.log(countUniqueValues([8, 1, 4, 8, 5, 1]));

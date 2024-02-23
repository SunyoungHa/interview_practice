function isAnagram(first, second) {
	if (first.length != second.length) {
		return false;
	}
	const obj = {};
	for (let i = 0; i < first.length; i++) {
		let letter = first[i];
		obj[letter] ? (obj[letter] += 1) : (obj[letter] = 1);
	}
	//       console.log(obj)

	for (let i = 0; i < second.length; i++) {
		let letter = second[i];
		if (!obj[letter]) {
			return false;
		} else {
			obj[letter] -= 1;
		}
	}

	return true;
}

console.log(isAnagram("cat", "act"));
console.log(isAnagram("fre", "act"));

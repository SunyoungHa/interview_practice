function isPalidrom(num) {
	const strNum = num.toString();

	let count = strNum.length - 1;
	for (let i = 0; i < strNum.length / 2; i++) {
		if (strNum[i] !== strNum[count]) {
			return false;
		}
		count--;
	}

	return true;
}

console.log(isPalidrom(121));
console.log(isPalidrom(200));

// https://app.coderpad.io/JMZXP9XC

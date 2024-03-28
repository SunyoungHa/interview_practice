// source: freeCodeCamp - Roman Numeral Converter

function IntToRoman(num) {
	const numeral = {
		1: "I",
		5: "V",
		10: "X",
		50: "L",
		100: "C",
		500: "D",
		1000: "M",
	};

	let result = "";
	const obj = Object.keys(numeral).reverse();
	//   console.log(obj)

	obj.forEach((key) => {
		while (key <= num) {
			result += numeral[key];
			num -= key;
		}
	});

	return result;
}

console.log(IntToRoman(56));
console.log(IntToRoman(34));

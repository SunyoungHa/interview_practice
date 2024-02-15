const items = [
	{ name: "a", price: 1 },
	{ name: "b", price: 2 },
	{ name: "c", price: 3 },
];

// let totalPrice = 0;
// items.forEach((item) => {
// 	totalPrice += item.price;
// });

const totalPrice = items.reduce((total, item) => {
	return total + item.price;
}, 0);
console.log(totalPrice);

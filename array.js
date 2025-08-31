let products = [
	{
		productName: "Wireless Mouse",
		productPrice: 29.99,
		discountPercentage: 15,
	},
	{
		productName: "Bluetooth Headphones",
		productPrice: 89.99,
		discountPercentage: 10,
	},
	{
		productName: "Mechanical Keyboard",
		productPrice: 120.0,
		discountPercentage: 20,
	},
	{
		productName: "USB-C Hub",
		productPrice: 45.5,
		discountPercentage: 5,
	},
	{
		productName: "4K Monitor",
		productPrice: 329.99,
		discountPercentage: 25,
	},
	{
		productName: "Laptop Stand",
		productPrice: 34.99,
		discountPercentage: 12,
	},
	{
		productName: "Webcam",
		productPrice: 59.0,
		discountPercentage: 18,
	},
	{
		productName: "Portable SSD",
		productPrice: 99.95,
		discountPercentage: 22,
	},
	{
		productName: "Smartwatch",
		productPrice: 199.99,
		discountPercentage: 30,
	},
	{
		productName: "Ergonomic Chair",
		productPrice: 249.99,
		discountPercentage: 28,
	},
];

let discountedPriceList = products.map((product) => {
	return {
		...product,
		discountedPrice: product.productPrice - (product.productPrice * product.discountPercentage) / 100,
	};
});

console.log(discountedPriceList);
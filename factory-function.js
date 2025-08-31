let programmer = {
	name: "Steven",
	preferreLanguage: "JavaScript",
	writeCode: function () {
		console.log(`${this.name} is writing code in ${this.preferreLanguage}`);
	},
	drinkCoffee: function () {
		console.log(`${this.name} is drinking coffee`);
	},
};

function createProgrammer(name, preferreLanguage) {
	return {
		name,
		preferreLanguage,
		write() {
			console.log(`${this.name} is writing code in ${this.preferreLanguage}`);
		},
		drinkCoffee() {
			console.log(`${this.name} is drinking coffee`);
		},
	};
}

function groceryListGenerator(name, quantity) {
	return {
		name,
		quantity,
		list() {
			console.log(`${this.name} ${this.quantity}`);
		},
	};
}

let newProgrammer = createProgrammer("John", "Python");
newProgrammer.write();

let newGrocceryList = groceryListGenerator("Apples", 5);
newGrocceryList.list();

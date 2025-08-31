// Lesson
function Programmer(name, preferredLanguage, drinksCoffee = true) {
	this.name = name;
	this.preferredLanguage = preferredLanguage;
	this.writeCode = function () {
		console.log(`${this.name} is writing code in ${this.preferredLanguage}`);
	};
	this.drinksCoffee = drinksCoffee;
}

let newProgrammer = new Programmer("John", "JavaScript", true);
newProgrammer.writeCode();

console.log(newProgrammer);
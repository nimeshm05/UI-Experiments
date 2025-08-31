const dropdownList = document.querySelector(".dropdown-list");
const buttonDropdown = document.querySelector(".button-dropdown");
const chevronPath = document.getElementById("chevron-path");
const body = document.body;

const chevronDownPath = "m6 9 6 6 6-6";
const chevronUpPath = "m18 15-6-6-6 6";

function setAnimation(isOpen) {
	anime({
		targets: chevronPath,
		d: [{ value: isOpen ? chevronUpPath : chevronDownPath }],
		duration: 150,
		easing: "linear",
		opacity: 1,
	});
}

function closeDropdown() {
	setAnimation(false);
	dropdownList.classList.add("hidden");
}

buttonDropdown.addEventListener("click", () => {
	const isOpen = dropdownList.classList.toggle("hidden") === false;
	setAnimation(isOpen);
});

body.addEventListener("click", (event) => {
	if (!buttonDropdown.contains(event.target)) {
		closeDropdown();
	}
});

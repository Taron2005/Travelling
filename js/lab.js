let darkModeIcon = document.querySelector(".fa-moon");
let body = document.querySelector("body");
let userIcon = document.querySelector(".fa-user");
let user = document.querySelector(".user");
let menuIcon = document.querySelector(".fa-bars");
let menu = document.querySelector("nav");
darkModeIcon.addEventListener("click", () => {
	body.classList.toggle("active");
	darkModeIcon.classList.toggle("active");
});
userIcon.addEventListener("click", () => {
	user.classList.toggle("active");
});
menuIcon.addEventListener("click", () => {
	menu.classList.toggle("active");
});

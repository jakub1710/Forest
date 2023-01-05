const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelector('.nav-mobile');
const allNavItems = document.querySelectorAll('.nav-item');
const footerYear = document.querySelector('.year');
const logo = document.querySelector('.logo');

const currentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerHTML = year;
};
currentYear();

hamburger.addEventListener('click', () => {
	const showMenu = (item) => {
		navItems.classList.toggle('active');
		hamburger.classList.toggle('active');

		allNavItems.forEach((item) => {
			item.addEventListener('click', () => {
				navItems.classList.remove('active');
				hamburger.classList.remove('active');
			});
		});
	};
	showMenu();
});

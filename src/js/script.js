const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelector('.nav-mobile');
const allNavItems = document.querySelectorAll('.nav-item');
const footerYear = document.querySelector('.year');

const formName = document.querySelector('#name');
const formMail = document.querySelector('#email');
const formMsg = document.querySelector('#message');
const sendBtn = document.querySelector('.sendBtn');
// const error = document.querySelector('.error');

const currentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerHTML = year;
};
currentYear();

hamburger.addEventListener('click', () => {
	const showMenu = (item) => {
		navItems.classList.toggle('active');
		hamburger.classList.toggle('is-open');

		allNavItems.forEach((item) => {
			item.addEventListener('click', () => {
				navItems.classList.remove('active');
				hamburger.classList.remove('is-open');
			});
		});
	};
	showMenu();
});

// FORM

const showError = (input, msg) => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector('.error-text');

	formBox.classList.add('error');
	errorMsg.textContent = msg;
};

const clearError = (input) => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector('.error-text');

	formBox.classList.remove('error');
	errorMsg.textContent = '';
};

const checkForm = (input) => {
	input.forEach((el) => {
		if (el.value === '') {
			showError(el, el.placeholder);
		} else {
			clearError(el);
		}
	});
};

sendBtn.addEventListener('click', (e) => {
	e.preventDefault();

	checkForm([formName, formMail, formMsg]);
});

// const showError = (input, msg) => {
// 	const formBox = input.parentElement;
// 	const errorMsg = formBox.querySelector('.error-text');

// 	formBox.classList.add('error');
// 	errorMsg.textContent = msg;
// };

// const clearError = (input) => {
// 	const formBox = input.parentElement;
// 	formBox.classList.remove('error');
// };

// const checkForm = (input) => {
// 	input.forEach((el) => {
// 		if (el.value === '') {
// 			showError(el, el.placeholder);
// 		} else {
// 			clearError(el);
// 		}
// 	});
// };

// sendBtn.addEventListener('click', (e) => {
// 	e.preventDefault();

// 	checkForm([formName, formMail, formMsg]);
// });

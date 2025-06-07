document.addEventListener('DOMContentLoaded', () => {
	const hamburger = document.querySelector('.hamburger');
	const closeBtn = document.querySelector('.close-btn');
	const navLinks = document.querySelector('.nav-links');

	if (hamburger && closeBtn && navLinks) {
		hamburger.addEventListener('click', () => {
			navLinks.classList.add('active');
			document.body.classList.add('menu-open');
		});

		closeBtn.addEventListener('click', () => {
			navLinks.classList.remove('active');
			document.body.classList.remove('menu-open');
		});
	}
});

// Testimonial slider active
const swiper = new Swiper('.swiper', {
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

// Scroll to top button
const scrollTopBtn = document.querySelector('#scrollTopBtn');
const rootElement = document.documentElement;

function scrollToTop() {
	// Scroll to top logic
	rootElement.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});
}
scrollTopBtn.addEventListener('click', scrollToTop);

/* Back to top Button ab Scrollposition 400px einblenden */
document.addEventListener("scroll", _=> {
	const bttb = document.querySelector("#backtotop");

	if(window.scrollY > 400) {
		bttb.style.opacity = "1";
	} else {
		bttb.style.opacity = "0";
	}
});

/* Scroll Animationen mit AOS */
AOS.init({
	duration: 600,
	offset: 300,
	easing: 'ease-in-out',
	disable: 'mobile'
});
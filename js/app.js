const toggle = document.getElementById('toggle');
const bar = document.getElementById('menu');

toggle.addEventListener('click', () => {
	bar.classList.toggle('shows');
});

const pin = document.getElementById('pin');
const pinshows = document.getElementById('pin_g');

pin.addEventListener('click', () => {
	pinshows.classList.toggle('showpin');
});

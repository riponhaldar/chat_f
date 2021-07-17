const toggle = document.getElementById('toggle');
const bar = document.getElementById('menu');

toggle.addEventListener('click', () => {
	bar.classList.toggle('shows');
});

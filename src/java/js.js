const menuButton = document.getElementById('botonm');
const dropdownMenu = document.getElementById('menub');

menuButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
});

window.addEventListener('click', (event) => {
    if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add('hidden');
    }
});
const carousel = document.getElementById('carousel');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const indicators = document.querySelectorAll('.carousel-indicator');
let currentIndex = 0;
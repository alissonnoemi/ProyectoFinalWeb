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

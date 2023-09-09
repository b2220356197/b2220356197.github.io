// Animate the header on page load
const header = document.querySelector('header');
header.style.transform = 'scale(0)';
header.style.opacity = '0';

window.addEventListener('load', () => {
    header.style.transition = 'transform 0.5s, opacity 0.5s';
    header.style.transform = 'scale(1)';
    header.style.opacity = '1';
});

// Add more JavaScript interactions as needed

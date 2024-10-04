const explanationButton = document.getElementById('explanation-button');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('close-button');

explanationButton.addEventListener('click', () => {
    popup.style.display = 'block';
    overlay.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

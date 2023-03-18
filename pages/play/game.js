const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

// Ustalamy szerokość i wysokość pola
canvas.width = 1920;
canvas.height = 1080;

// rysuje ci pole
c.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0.7;
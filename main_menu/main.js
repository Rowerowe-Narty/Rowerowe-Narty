var buttons = $('.btn');
var logo = $('img');

//Funkcja po kliknięciu na przycisk
function handleClick() {
    buttons.animate({
        opacity: 0,
        transform: 'scale(0.5) translateY(-100px)'
    }, {
        duration: 500, // czas trwania animacji
        easing: 'easeInBack', // funkcja ułatwiająca określenie przebiegu animacji
        queue: false // ustawiamy, aby animacja nie była dodawana do kolejki animacji
    });

    logo.animate({
        transform: 'translateX(-1000px)'
    }, {
        duration: 2000,
        easing: 'easiInOut',
        queue: false
    });
}

//Dodajemy nasłuchiwanie kliknięcia na każdym przycisku
buttons.click(handleClick);
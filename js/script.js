const button = document.getElementById('btn');
const spanEl = document.querySelector('.color');

const hex = ['0', '1', '2', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

button.addEventListener('click', () => {
    let randomColor = generateHexColor();
    document.body.style.backgroundColor = randomColor;
    spanEl.textContent = randomColor;
});

function generateHexColor() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    return hexColor;
}

function getRandomNumber() {
   return Math.floor(Math.random() * hex.length);
}
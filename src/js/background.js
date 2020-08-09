const section = document.querySelector('section');

const bgColors = [
    '#2196f3',
    '#e91e63',
    '#ffed3b',
    '#74ff1d',
    '#553119',
    '#9e136e',
]

function createSquare() {
    const square = document.createElement('span');
    const animatedSquare = square.classList.add("animatedSpan");
    const bg = bgColors[Math.floor(Math.random() * bgColors.length)]

    var size = Math.random() * 40;

    square.style.width = 20 + size + 'px';
    square.style.height = 20 + size + 'px';

    square.style.top = Math.random() * innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';

    square.style.background = bg;

    section.appendChild(square);

    setTimeout(() => {
        square.remove()
    }, 5000)


};

setInterval(createSquare, 150);

// Очистить setInterval при активации поиска, либо сделать анимацию для всей страницы.
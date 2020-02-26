const startBtn = document.querySelector('[data-action=start]');
const stopBtn = document.querySelector('[data-action=stop]');
const body = document.querySelector('body');
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBackgroundColors() {
    timerId = setInterval(() => {
        body.style.backgroundColor = colors[(randomIntegerFromInterval(colors.length, 0))]

    }, 100)
    startBtn.setAttribute('disabled', true)
}
startBtn.addEventListener("click", changeBackgroundColors)
stopBtn.addEventListener('click', () => {
    clearInterval(timerId)
    startBtn.removeAttribute('disabled')
})
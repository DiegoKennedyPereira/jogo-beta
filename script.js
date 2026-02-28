const gameArea = document.getElementById('game-area');
const target = document.getElementById('target');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
const message = document.getElementById('message');

let score = 0;
let timeLeft = 30;
let gameInterval;
let gameStarted = false;

function moveTarget() {
    const maxX = gameArea.clientWidth - target.clientWidth;
    const maxY = gameArea.clientHeight - target.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    target.style.left = `${randomX}px`;
    target.style.top = `${randomY}px`;
}

function startGame() {
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft;
    startBtn.disabled = true;
    message.classList.add('hidden');
    target.classList.remove('hidden');
    gameStarted = true;

    moveTarget();

    gameInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function endGame() {
    clearInterval(gameInterval);
    gameStarted = false;
    target.classList.add('hidden');
    startBtn.disabled = false;
    message.textContent = `Time is up! Final score: ${score}`;
    message.classList.remove('hidden');
}

target.addEventListener('click', () => {
    if (gameStarted) {
        score++;
        scoreDisplay.textContent = score;
        moveTarget();
    }
});

startBtn.addEventListener('click', startGame);

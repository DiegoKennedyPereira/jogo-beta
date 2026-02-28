const gameArea = document.getElementById('game-area');
const target = document.getElementById('target');
const bonusTarget = document.getElementById('target-bonus');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');

let score = 0;
let timeLeft = 30;
let gameInterval;
let bonusTimeout;
let gameStarted = false;
let correctClicks = 0;

function moveTarget() {
    const maxX = gameArea.clientWidth - (target.clientWidth || 40);
    const maxY = gameArea.clientHeight - (target.clientHeight || 40);

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    target.style.left = `${randomX}px`;
    target.style.top = `${randomY}px`;
}

function moveBonusTarget() {
    const maxX = gameArea.clientWidth - (bonusTarget.clientWidth || 40);
    const maxY = gameArea.clientHeight - (bonusTarget.clientHeight || 40);

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    bonusTarget.style.left = `${randomX}px`;
    bonusTarget.style.top = `${randomY}px`;
}

function spawnBonusTarget() {
    if (!gameStarted) return;

    // Se já houver um alvo verde, limpa o timeout dele antes de reposicionar (embora a regra diga apenas um por vez)
    clearTimeout(bonusTimeout);

    moveBonusTarget();
    bonusTarget.classList.remove('hidden');

    bonusTimeout = setTimeout(() => {
        bonusTarget.classList.add('hidden');
    }, 2000);
}

function startGame() {
    // Limpa qualquer intervalo e timeout existente se o jogo for reiniciado
    clearInterval(gameInterval);
    clearTimeout(bonusTimeout);

    score = 0;
    timeLeft = 30;
    correctClicks = 0;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft;

    startBtn.disabled = true;
    target.classList.remove('hidden');
    bonusTarget.classList.add('hidden');
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
    clearTimeout(bonusTimeout);
    gameStarted = false;
    target.classList.add('hidden');
    bonusTarget.classList.add('hidden');
    startBtn.disabled = false;

    // Timeout pequeno para garantir que o DOM atualizou antes do alert travar o thread
    setTimeout(() => {
        alert(`Fim de jogo! Sua pontuação final foi: ${score}`);
    }, 10);
}

target.addEventListener('click', () => {
    if (gameStarted) {
        score++;
        correctClicks++;
        scoreDisplay.textContent = score;

        if (correctClicks % 5 === 0) {
            spawnBonusTarget();
        }

        moveTarget();
    }
});

bonusTarget.addEventListener('click', () => {
    if (gameStarted && !bonusTarget.classList.contains('hidden')) {
        score += 3;
        scoreDisplay.textContent = score;
        bonusTarget.classList.add('hidden');
        clearTimeout(bonusTimeout);
    }
});

startBtn.addEventListener('click', startGame);

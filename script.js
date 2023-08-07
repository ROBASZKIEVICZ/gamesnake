const playBoard =
    document.querySelector(".play-board");
const scoreElement =
    document.querySelector(".score");
const highScoreElement =
    document.querySelector(".high-score");
const controls =
    document.querySelector(".controls i");

let gameOver = false;
let foodX, foodY;
let snakeX, snakeY = 5;
let velocityX = 0, velocityY = 0;
let snakeBody = [];
let setIntervalId;
let score = 0;

let highScore = localStorage.getItem("high-Score") || 0;
highScoreElement.innerText = 'High Score: ${highscore}';

const updateFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

const handGameOver = () => {
    clearInterval(setIntervalId);
    alert("Game Over!!!!");
    location.reload();
}

const changeDirection = e => {
    if (e.ket == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    } else if (e.key == "ArrowDown" && velocityY != 1) {
        velocityX = 0;
        velocityY = 1;
    } else if (e.key == "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    } else if (e.key == "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;


    }
}
const pong = document.getElementById('pong');
const leftPaddle = document.getElementById('leftPaddle');
const rightPaddle = document.getElementById('rightPaddle');
const ball = document.getElementById('ball');

let ballX = 400;
let ballY = 200;
let ballSpeedX = 5;
let ballSpeedY = 5;

let leftPaddleY = 150;
let rightPaddleY = 150;

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp' && rightPaddleY >= 10) {
        rightPaddleY -= 10;
    } else if (event.key === 'ArrowDown' && rightPaddleY <= 290) {
        rightPaddleY += 10;
    } else if (event.key === 'w' && leftPaddleY >= 10) {
        leftPaddleY -= 10;
    } else if (event.key === 's' && leftPaddleY <= 290) {
        leftPaddleY += 10;
    }
});

function update() {
    // Move the ball
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Check for collisions with walls
    if (ballY <= 0 || ballY >= 380) {
        ballSpeedY = -ballSpeedY;
    }

    // Check for collisions with paddles
    if ((ballX <= 40 && ballX >= 20 && ballY >= leftPaddleY && ballY <= leftPaddleY + 100) ||
        (ballX >= 740 && ballX <= 760 && ballY >= rightPaddleY && ballY <= rightPaddleY + 100)) {
        ballSpeedX = -ballSpeedX;
    }

    // Check for scoring
    if (ballX <= 0 || ballX >= 780) {
        ballX = 400;
        ballY = 200;
    }

    // Update ball position
    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';

    // Update paddle positions
    leftPaddle.style.top = leftPaddleY + 'px';
    rightPaddle.style.top = rightPaddleY + 'px';
}

setInterval(update, 1000 / 60); // Update the game 60 times per second

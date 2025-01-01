let countdownInterval;
let remainingTimeInSeconds;
let isPaused = false;

document.getElementById('startBtn').addEventListener('click', () => {
    if (!isPaused) {
        const minutes = parseInt(document.getElementById('minutesInput').value) || 0;
        const seconds = parseInt(document.getElementById('secondsInput').value) || 0;
        remainingTimeInSeconds = minutes * 60 + seconds;
    }

    isPaused = false;

    function updateTimerDisplay() {
        const minutesPart = Math.floor(remainingTimeInSeconds / 60);
        const secondsPart = remainingTimeInSeconds % 60;
        document.getElementById('timer').textContent = `${String(minutesPart).padStart(2, '0')}:${String(secondsPart).padStart(2, '0')}`;
    }

    countdownInterval = setInterval(() => {
        if (remainingTimeInSeconds > 0) {
            remainingTimeInSeconds--;
            updateTimerDisplay();
        } else {
            clearInterval(countdownInterval);
            alert('時間になりました！');
        }
    }, 1000);

    updateTimerDisplay();
});

document.getElementById('pauseBtn').addEventListener('click', () => {
    clearInterval(countdownInterval);
    isPaused = true;
});

document.getElementById('resetBtn').addEventListener('click', () => {
    clearInterval(countdownInterval);
    isPaused = false;
    remainingTimeInSeconds = 0;
    document.getElementById('timer').textContent = '00:00';
    document.getElementById('minutesInput').value = '';
    document.getElementById('secondsInput').value = '';
});
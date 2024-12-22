document.addEventListener('DOMContentLoaded', () => {
  const countdownDisplay = document.getElementById('countdown');

  // 2024年12月31日23:59:59をリミットとして設定
  const targetDate = new Date('2024-12-31T23:59:59');

  // 毎秒ごとに更新する
  setInterval(() => updateCountdown(targetDate), 1000);

  function updateCountdown(targetDate) {
    const now = new Date();
    const timeDifference = targetDate - now;

    // 時間差が0以下の場合、カウントダウンを終了する
    if (timeDifference <= 0) {
      countdownDisplay.textContent = "2024 has ended!";
      return;
    }

    // 残りの日数・時間・分・秒を計算する
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);

    // 時間・分・秒を2桁にする
    const hoursFormatted = String(hours).padStart(2, '0');
    const minutesFormatted = String(minutes).padStart(2, '0');
    const secondsFormatted = String(seconds).padStart(2, '0');

    // カウントダウンタイマーを表示させる
    countdownDisplay.innerHTML = `あと<br><span class="countdown-number">${days}</span>日 <span class="countdown-number">${hoursFormatted}</span>時間 <span class="countdown-number">${minutesFormatted}</span>分 <span class="countdown-number">${secondsFormatted}</span>秒`;
  }
});

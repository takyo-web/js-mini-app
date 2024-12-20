// ①現在時刻を取得して表示させる
function updateClock() {
  const now = new Date();

  const hours = now.getHours().toString().padStart(2,'0');
  const minutes = now.getMinutes().toString().padStart(2,'0');
  const seconds = now.getSeconds(). toString().padStart(2,'0');

  const currentTime = `${hours}時${minutes}分${seconds}秒`;

  document.getElementById('clock').textContent = currentTime;
}

//②初期表示させる
updateClock();

//③1秒ごとに時刻を更新する
setInterval(updateClock, 1000);
document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.getElementById('nameInput');
  const fortuneButton = document.getElementById('fortuneButton');
  const fortuneResult = document.getElementById('fortuneResult');

  const fortunes = [
    "ついにツインソウルに出会える約束された日です",
    "神からの祝福を受ける日です",
    "穏やかで自分の内面を見つめるのに適した日です",
  ];

  // ボタンをクリックした時の処理を書く
  fortuneButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (!name) {
      fortuneResult.textContent = "名前を入力してください";
      return;
    }

    // 占い結果をランダムに選択する
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const selectedFortune = fortunes[randomIndex];

    // 占い結果を表示させる
    fortuneResult.innerHTML = `<p>${name}さんの今日の運命は…<br>${selectedFortune}</p>`;
  });
});

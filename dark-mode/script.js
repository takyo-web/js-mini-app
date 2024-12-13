//② DOM要素を取得する
const toggleButton = document.getElementById('dark-mode-toggle');

//③ 設定がいちいちライトモードに変わらないように、ブラウザに設定を保存する
function applyDarkModeSetting() {
    const darkModeValue = localStorage.getItem('dark-mode');
    const isDarkMode = darkModeValue === 'enabled';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

//① ボタンを押したらダークモードに切り替えるための記述＝ボタンを押したら適用するクラス名を書き換える
toggleButton.addEventListener('click', () => {
    const isDarkMode = document.body.classList.contains('dark-mode');
    if (isDarkMode) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'disabled');
    } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'enabled');
    }
});

//④ ブラウザに設定を保存する関数を呼び出す
applyDarkModeSetting();
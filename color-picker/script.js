// ① 色選択の要素を取得
const colorPicker = document.getElementById('color-picker');
const colorPreview = document.getElementById('color-preview');
const colorCode = document.getElementById('color-code');

  // ④ 初期値だと文字と背景色が被るため、文字色を白にする
function updateTextColor(color) {
    if (color === '#000000') {
      colorCode.style.color = '#fff';
    } else {
      colorCode.style.color = '#000';
    }
  }

// ② 色選択時の挙動を指定
colorPicker.addEventListener('input', function(event) {
  const selectedColor = event.target.value;
  colorPreview.style.backgroundColor = selectedColor;
  colorCode.textContent = selectedColor;

  // ④ 初期値だと文字と背景色が被るため、文字色を白にする
  updateTextColor(selectedColor);
});

// ③ ページ読み込みしたら初期設定に戻す
window.addEventListener('load', function() {
  colorPreview.style.backgroundColor = colorPicker.value;
  colorCode.textContent = colorPicker.value;

  // ④ 初期値だと文字と背景色が被るため、文字色を白にする
  updateTextColor(colorPicker.value);
});

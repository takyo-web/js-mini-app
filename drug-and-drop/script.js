const dropArea = document.getElementById('drop-area');

// ドロップイベント発火
dropArea.addEventListener('dragover', (e) => {
    // デフォルト動作を無効化する
    e.preventDefault();
    dropArea.classList.add('dragover');
});

dropArea.addEventListener('dragleave', () => {
    dropArea.classList.remove('dragover');
});

dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    dropArea.classList.remove('dragover');

    // ドロップされたファイルを取得
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        // drop-areaの内容をクリア
        dropArea.innerHTML = '';
        // ドロップされたファイル名とサイズを表示
        Array.from(files).forEach((file) => {
            const fileInfo = document.createElement('p');
            fileInfo.innerHTML = `ファイル名: ${file.name}<br>サイズ: ${file.size} bytes`;
            dropArea.appendChild(fileInfo);
        });
    } else {
        dropArea.innerHTML = "<p>ファイルが見つかりません。</p>";
    }
});
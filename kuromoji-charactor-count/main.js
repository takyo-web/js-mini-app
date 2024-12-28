// kuromoji.jsをインポート
const kuromoji = require("kuromoji");

// kuromoji.jsの初期化
let tokenizer;

kuromoji.builder({
    dicPath: "node_modules/kuromoji/dict"
}).build((err, t) => {
    if (err) {
        console.error(err);
        return;
    }
    tokenizer = t;
});

// 文字数をカウントする関数
function countCharacters(text) {
    return text.length;
}

// 単語数をカウントする関数
function countWords(text) {
    if (!tokenizer) {
        return 0;
    }
    const tokens = tokenizer.tokenize(text);
    const words = tokens.filter(token => token.pos !== '記号'); // 記号を除外
    return words.length;
}

// テキストをカウントして結果を表示する
function countText() {
    const text = document.getElementById("inputText").value;

    // 文字数と単語数をカウントする
    const charCount = countCharacters(text);
    const wordCount = countWords(text);

    // 結果を表示する
    document.getElementById("charCount").textContent = charCount;
    document.getElementById("wordCount").textContent = wordCount;
}

// countTextをグローバルに公開する
window.countText = countText;
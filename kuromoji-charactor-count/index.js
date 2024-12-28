// kuromoji.js をインポート
const kuromoji = require("kuromoji");

// kuromoji.jsの辞書を使って形態素解析を行う
kuromoji.builder({
    dicPath: "node_modules/kuromoji/dict"
}).build((err, tokenizer) => {
    if (err) {
        console.error(err);
        return;
    }

    // テキストを形態素解析する
    const text = "私はプログラミングが好きです";
    const tokens = tokenizer.tokenize(text);

    // 結果を表示させる
    console.log("分かち書き結果:");
    console.log(tokens.map(token => token.surface_form).join(" ")); // 単語ごとに分割して表示
});
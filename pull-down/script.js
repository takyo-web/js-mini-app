// 都道府県データを定義する
const prefectures = [
    "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
    "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
    "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県",
    "静岡県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県",
    "奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県",
    "徳島県", "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県",
    "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"
];

// おすすめスポットデータを定義する
const spotsData = {
    "北海道": [{
            name: "札幌時計台",
            image: "img/sapporo-clock.jpg",
            description: "札幌のシンボルとなる時計台",
            url: "http://sapporoshi-tokeidai.jp/"
        },
        {
            name: "ニセコ",
            image: "img/niseko.jpg",
            description: "スキーにおすすめ",
            url: "https://www.niseko-ta.jp/"
        }
    ],
    "青森県": [{
            name: "ねぶた祭り",
            image: "img/nebuta.jpg",
            description: "青森の夏の風物詩、ねぶた祭り",
            url: "https://www.nebuta.jp/"
        },
        {
            name: "十和田湖",
            image: "img/towadako.jpg",
            description: "美しい湖と温泉街",
            url: "https://towadako.or.jp/"
        }
    ]
};

// プルダウンメニューを生成する
function createPrefectureDropdown() {
    const selectElement = document.getElementById('prefecture');
    prefectures.forEach(prefecture => {
        const option = document.createElement('option');
        option.value = prefecture;
        option.textContent = prefecture;
        selectElement.appendChild(option);
    });
}

// おすすめスポットを表示する
function displaySpots(prefecture) {
    const spotsContainer = document.getElementById('spots');
    // 内容をリセット
    spotsContainer.innerHTML = '';

    if (prefecture && spotsData[prefecture]) {
        spotsContainer.classList.remove('hidden');
        spotsData[prefecture].forEach(spot => {
            const spotDiv = document.createElement('div');
            spotDiv.classList.add('spot');

            // スポット名
            const spotName = document.createElement('h3');
            spotName.textContent = spot.name;

            // スポット画像
            const spotImage = document.createElement('img');
            spotImage.src = spot.image;
            spotImage.alt = spot.name;

            // スポット説明
            const spotDescription = document.createElement('p');
            spotDescription.textContent = spot.description;

            // 公式ページボタン
            const spotButton = document.createElement('a');
            spotButton.href = spot.url;
            spotButton.textContent = "公式ページを見る";
            spotButton.classList.add('spot-button');

            // 表示させたい順番に追加
            spotDiv.appendChild(spotName);
            spotDiv.appendChild(spotImage);
            spotDiv.appendChild(spotDescription);
            spotDiv.appendChild(spotButton);

            spotsContainer.appendChild(spotDiv);
        });
    } else {
        spotsContainer.classList.remove('hidden');
        spotsContainer.innerHTML = '<p>ごめんなさい、<br>データがありません</p>';
    }
}

// イベントリスナーを設定する
document.getElementById('prefecture').addEventListener('change', (event) => {
    displaySpots(event.target.value);
});

// ページ読み込み時の初期化処理
window.onload = createPrefectureDropdown;
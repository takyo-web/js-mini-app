// ① ランダム表示させる挨拶のリストを作成
const greetings = [
  "こんにちは",
  "Hello",
  "Hola",
  "Bonjour",
  "Hallo",
  "Ciao",
  "你好",
  "안녕하세요",
  "Привет",
  "नमस्ते",
];

// ② ボタンをクリックするとランダムに挨拶を選んで表示させる
const button = document.getElementById("generate-btn");
const greetingDisplay = document.getElementById("greeting");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * greetings.length);
  const randomGreeting = greetings[randomIndex];

  greetingDisplay.textContent = randomGreeting;
});
const quiz = [
  {
    question: "ゲーム市場最も売れたゲーム機はどれ？",
    answers: [
      "スーパーファミコン",
      "プレイステーション",
      "任天堂スウィッチ",
      "任天堂DS",
    ],
    correct: "任天堂DS",
  },

  {
    question: "糸井重里が企画に関わったニンテンドーの看板ゲームとは",
    answers: [
      "MOTHER2",
      "スーパーマリオブラザース",
      "スーパードンキーコング",
      "星のカービー",
    ],
    correct: "MOTHER2",
  },

  {
    question: "ファイナルファンタジーⅣの主人公は誰？",
    answers: ["フリオニール", "クラウド", "ディーダ", "セシル"],
    correct: "セシル",
  },
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;
//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question; //定数questionを代入する。
  // textContentはidを持つ要素の文章を取得するプロパテ
  //表示させたい場所のTag
  //定数の文字列をHTMLに反映させる。
  // $button[0].textContent = answers[0];
  // $button[1].textContent = answers[1];
  // $button[2].textContent = answers[2];
  // $button[3].textContent = answers[3];
  //上の4行を下にリファクタリング
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
// クイズの問題文や選択肢の書き換えを行なっている命令setupQuiz
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解！");
    score++;
  } else {
    window.alert("不正解！");
  }
  // 次の命令
  quizIndex++;

  if (quizIndex < quizLength) {
    // 問題がまだあればこちらを実行
    setupQuiz();
  } else {
    window.alert("終了!あなたの正解率は" + score + "/" + quizLength + "です");
  }
};
//ボタンクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}

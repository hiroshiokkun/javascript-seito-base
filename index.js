//変数
// let unko = "Hello World!";
// unko = "Hello World2";
// console.log(unko);
//定数  なるべく定数
// const bigUnko = "He..Hell...Hello World!";
// bigUnko = "HelloWorld2!!";エラーになる。上書きできない。

// let inoki = ["いーち", "にーい", "さーん", "だーー!"];
//ループ文
// let index = 0; //カウント開始の合図
// while (index < inoki.length) {
//   //条件を（）内に書く
//   console.log(inoki[index]); //繰り返したい命令
//   index++; //index=1 ,2,3,で終了する
// }
//if /
let inoki = ["いーち", "にーい", "さーん", "だーー!"];

//関数  設定しておくと使いまわせる,この場合はtest関数
const test = (arg) => {
  //アロー関数主流
  if (inoki.length > arg) {
    console.log("ボンバイエ！");
  } else {
    console.log("ボンバ！！っつ");
  }
};

//object：：：多数のプロパティ入れれる::データの塊
const unko2 = {
  color: "pink",
  size: "large",
  perfume: "mint",
  goToilet: () => {
    //関数もデータとして入れれる
    console.log("Hello Worldwide!");
  },
};
// console.log(unko2.goToilet());関数呼び出し
// console.log(window.innerWidth);ウィンドウの広がり
//window.alert("Unko!"); //ポップアップ出します関数
// console.log(document); //表示しているドムツリー
// console.log(document.getElementsByTagName("button"));
document.getElementsByTagName("button")[0].addEventListener("click", () => {
  window.alert("Hello World!");
});

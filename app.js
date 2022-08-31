//for文での繰り返し

//for文の記述
for(初期値; 条件式; 増減値) {
  繰り返し処理
}

//for文の記述　例
let num = 0;
for(let i = 1; i < 11; i++) {
  num = num + i;
}
console.log("1から10まで足し算した結果は" + num + "です");
//1から10まで足し算した結果は55です

//for...in文の記述
for(変数 in オブジェクト) {
  文1;
  文2;
  ...
}

//for...in文の記述
const fruit = {orange:170, apple:90, lemon:110};
for(let i in fruit) {
  console.log("fruit." + i + " = " + fruit[i]);
}
console.log("end");

//出力結果
fruit.orange = 170
fruit.apple = 90
fruit.lemon = 110
end


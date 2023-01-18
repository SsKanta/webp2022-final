const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

//ポケモンの図鑑No.をランダムで生成
var pokerandom = Math.floor(Math.random() * 905) + 1
function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

let insertX = ["さみしがりな","いじっぱりな","やんちゃな","ゆうかんな","ずぶとい","わんぱくな",
"のうてんきな","のんきな","ひかえめ","おっとりな","うっかりやな","れいせいな","おだやかな",
"おとなしい","しんちょうな","なまいきな","おくびょうな","せっかちな","ようきな","むじゃきな",
"てれやな","がんばりやな","すなおな","きまぐれな","まじめな"];
let insertY = ["絶好調","調子がいい","調子が悪い","絶不調"];
let insertZ = ["水遊びをしましょう","散歩しましょう","洗って綺麗にしましょう"
,"ポケモンバトルをしよう！","ファッションショーにでましょう",
"ご飯を食べましょう","ピクニックに行こう"];
let insertH = ["最高だね！これ以上ないくらい最高！","すんばらしい","そこそこいい","まぁまぁ普通",
"ちょっと悪いかな～","か、な、り！悪い！"]
randomize.addEventListener("click", result);

function result() {
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  let hItem = randomValueFromArray(insertH);
  let name = customName.placeholder;
  let number = pokerandom;
  if (customName.value !== "") {
    name = customName.value;
  }
  let storyText = `君の相棒(図鑑No.${number})の${name}は${xItem}性格で今日は${yItem}です。
  今日は相棒を連れて${zItem}。ちなみにあなたの運勢は${hItem}、そんな気がするよ。`;

  story.textContent = storyText;
  story.style.visibility = "visible";
}

async function display() {
  var ja_name;
  // APIでjsonを取得する
  var res = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokerandom);
  var data = await res.json();
  var img_src = data['sprites']['front_default'];
  // HTMLのimg要素を生成する
  img_elem = document.createElement('img');
  img_elem.src = img_src;

  // 画像を表示する
  var div = document.getElementById('image');
  div.appendChild(img_elem);
}

display();
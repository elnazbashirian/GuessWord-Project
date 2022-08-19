const MyWords = [
  { word: "python", hint: "programming language" },
  { word: "matrix", hint: "science fiction movie" },
  { word: "png", hint: "an image file format" },
  { word: "fesenjaan", hint: "a type of Iranian food" },
  { word: "kurdish", hint: "a type of language" },
  { word: "blue", hint: "a type of color" },
  { word: "apple", hint: "a fruit" },
];
let Gussesnumber, words;
(wrongs = []), (corrects = []);
let boxes = document.querySelector(".boxes");
let guess = document.querySelector(".guess-text");
let hint = document.querySelector(".hint-text");
let wrong = document.querySelector(".wrong-text");
let resetButton = document.querySelector(".reset-button");
boxes.appendChild(document.createTextNode("Press the button and Start!"));
resetButton.addEventListener("click", () => {
  wrongs = [];
  wrong.innerText = "";
  boxes.innerHTML = "";
  let random = MyWords[Math.floor(Math.random() * MyWords.length)];
  words = random.word;
  Gussesnumber = 8;
  hint.innerHTML = random.hint;
  guess.innerHTML = Gussesnumber;
  for (let i = 0; i < words.length; i++) {
    let box = document.createElement("div");
    box.className = "box";
    boxes.appendChild(box);
  }
});
document.body.addEventListener("keydown", (e) => {
  let keyValues = e.key;
  if (words.includes(keyValues) && !corrects.includes(keyValues)) {
    for (let i = 0; i < words.length; i++) {
      if (words[i] === keyValues) {
        corrects += keyValues;
        boxes.querySelectorAll(".box")[i].textContent = keyValues;
      }
    }
  } else {
    Gussesnumber--;
    wrongs += keyValues + ",";
    guess.innerText = Gussesnumber;
    wrong.innerText = wrongs;
  }
  if (corrects.length === words.length) {
    alert("Congrats!You found the word");
    corrects = [];
  } else if (Gussesnumber < 1) {
    alert("Game over! You don't have remaining guesses");
    wrong.innerText = "";
    wrongs = [];
  }
});

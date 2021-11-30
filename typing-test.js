const TIME_LIMIT = 60;
const TEXT =
  "سعی نکنید همه چیز را بدانید. شما ممکن است خیلی چیزها را دیده و انجام داده باشید، اما لزوما به این معنی نیست که شما می دانید بهترین است. سعی نکنید به مردم بگویید که چگونه می توانند کارها را به شیوه ای بهتر انجام دهند یا اینکه بهتر می توانند کاری انجام دهند.";

let wpmText = document.getElementById("wpm");
let errorText = document.getElementById("errors");
let timerText = document.getElementById("time");
let accuracyText = document.getElementById("accuracy");

let typeText = document.getElementById("type-text");

let textArea = document.getElementById("textarea");

let timeLeft = TIME_LIMIT;
let timeElapsed = 0;
let errors = 0;
let accuracy = 0;
let typedCharacter = 0;
let timer = null;
let hasStarted = false;

initializeTest({ timeLimit: TIME_LIMIT, text: TEXT });

textArea.addEventListener("input", update);

function initializeTest({ timeLimit, text }) {
  // TODO: Complete this function
}

function update() {
  if (!hasStarted) {
    timer = setInterval(updateTimer, 1000);
    hasStarted = true;
  }
  typedCharacter++;
  updateCharactersStatus();
  updateErrors();
  updateAccuracy();
}

function updateCharactersStatus() {
  let text = TEXT;
  let timeLimit= TIME_LIMIT
  errors = 0;
  textArea_array = textArea.value.split('')
  console.log(textArea_array);
  quoteSpanArray = typeText.querySelectorAll('span');
  quoteSpanArray.forEach((char, index) => {
    let typedChar = textArea_array[index]
 
    // character not currently typed
    if (typedChar == null) {
      char.classList.remove('correct_char');
      char.classList.remove('incorrect_char');
 
      // correct character
    } else if (typedChar === char.innerText) {
      char.classList.add('correct_char');
      char.classList.remove('incorrect_char');
 
      // incorrect character
    } else {
      char.classList.add('incorrect_char');
      char.classList.remove('correct_char');
 
      // increment number of errors
      errors++;
    }

    if (textArea.value.length == text.length) {
      // clear the input area
      textArea.value = "";
    }
  });
}

function updateAccuracy() {
  accuracy = (typedCharacter-errors)*100/typedCharacter;
  accuracyText.textContent = Math.round(accuracy)
}

function updateErrors() {
  errorText.textContent = errors;
}

function updateWpm() {
  // TODO: Complete this function
}

function updateTimer() {
  // TODO: Complete this function
}

function finishTest() {
  // TODO: Complete this function
}

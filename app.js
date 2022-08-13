let currentGuess;

const statusGuess = document.getElementById("status-guess");
const input = document.getElementById("input");
const sendButton = document.getElementById("send-button");
const newMatchButton = document.getElementById("new-match");
const firstDigit = document.getElementById("first-digit");
const secondDigit = document.getElementById("second-digit");
const thirdDigit = document.getElementById("third-digit");

const displayNumber = (number, id, color) => {
  let elements = [];
  for (let i = 0; i <= 6; i++) {
    const element = document.getElementById(`${id}-${i}`);
    elements.push(element);
  }

  elements.forEach((element, index) => {
    if (index === 6) {
      element.src = `assets/center-${color}-bar.svg`;
      return;
    }
    element.src = `assets/${color}-bar.svg`;
  });

  switch (number) {
    case 0:
      elements[6].src = "assets/center-light-bar.svg";
      break;
    case 1:
      elements[0].src = "assets/light-bar.svg";
      elements[1].src = "assets/light-bar.svg";
      elements[2].src = "assets/light-bar.svg";
      elements[3].src = "assets/light-bar.svg";
      elements[6].src = "assets/center-light-bar.svg";
      break;
    case 2:
      elements[1].src = "assets/light-bar.svg";
      elements[5].src = "assets/light-bar.svg";
      break;
    case 3:
      elements[1].src = "assets/light-bar.svg";
      elements[2].src = "assets/light-bar.svg";
      break;
    case 4:
      elements[0].src = "assets/light-bar.svg";
      elements[2].src = "assets/light-bar.svg";
      elements[3].src = "assets/light-bar.svg";
      break;
    case 5:
      elements[2].src = "assets/light-bar.svg";
      elements[4].src = "assets/light-bar.svg";
      break;
    case 6:
      elements[4].src = "assets/light-bar.svg";
      break;
    case 7:
      elements[1].src = "assets/light-bar.svg";
      elements[2].src = "assets/light-bar.svg";
      elements[3].src = "assets/light-bar.svg";
      elements[6].src = "assets/center-light-bar.svg";
      break;
    case 8:
      break;
    case 9:
      elements[2].src = "assets/light-bar.svg";
      elements[3].src = "assets/light-bar.svg";
      break;
    default:
      return;
  }
};

const updateValue = (value) => {
  currentGuess = Number(value);
  input.value = value;
};

const onInputHandle = (value) => {
  const numberPattern = /\d+/g;
  const onlyNumbersCheck = value.match(numberPattern);

  if (!onlyNumbersCheck) {
    updateValue("");
    return;
  }

  updateValue(onlyNumbersCheck.join(""));
};

const displayedNumbersToChange = (number, color) => {
  const elements = [];
  const numberToString = String(number);

  if (number < 10) {
    elements.push({ id: "first-digit", number, color });
    firstDigit.classList.remove("display-none");
    secondDigit.classList.add("display-none");
    thirdDigit.classList.add("display-none");
    return elements;
  }
  if (number < 100) {
    elements.push(
      { id: "first-digit", number: Number(numberToString[0]), color },
      { id: "second-digit", number: Number(numberToString[1]), color }
    );
    firstDigit.classList.remove("display-none");
    secondDigit.classList.remove("display-none");
    thirdDigit.classList.add("display-none");
    return elements;
  }

  firstDigit.classList.remove("display-none");
  secondDigit.classList.remove("display-none");
  thirdDigit.classList.remove("display-none");

  elements.push(
    { id: "first-digit", number: Number(numberToString[0]), color },
    { id: "second-digit", number: Number(numberToString[1]), color },
    { id: "third-digit", number: Number(numberToString[2]), color }
  );
  return elements;
};

const displayedNumbersHandle = (number, color) => {
  const displayNumbers = displayedNumbersToChange(number, color);
  displayNumbers.forEach((item) =>
    displayNumber(item.number, item.id, item.color)
  );
};

const onFecthDataHandle = (value, isError = false) => {
  const hasWon = currentGuess === value;
  const isLesser = currentGuess < value;

  input.value = "";
  statusGuess.classList.remove("display-none");

  if (!hasWon && !isError) {
    statusGuess.innerHTML = isLesser ? "É menor" : "É maior";

    displayedNumbersHandle(currentGuess, "black");

    input.disabled = false;
    currentGuess = "";
    return;
  }

  statusGuess.style.color = hasWon ? "#32BF00" : "#CC3300";
  statusGuess.innerHTML = hasWon ? "Você acertou!" : "Erro";
  displayedNumbersHandle(value, hasWon ? "green" : "red");
  newMatchButton.classList.remove("display-none");
  input.disabled = true;
  sendButton.disabled = true;
};

const hideDisplayedNumbers = () => {
  firstDigit.classList.add("display-none");
  secondDigit.classList.add("display-none");
  thirdDigit.classList.add("display-none");
};

const onNewMatchHandle = () => {
  hideDisplayedNumbers();
  updateValue("");
  statusGuess.innerHTML = 0;
  statusGuess.style.color = "#ff6600";
  statusGuess.classList.add("display-none");
  newMatchButton.classList.add("display-none");
  input.disabled = false;
  sendButton.disabled = false;
};

const fetchData = () => {
  fetch("https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300")
    .then((data) => data.json())
    .then((data) => {
      if (Object.keys(data).length > 1) {
        onFecthDataHandle(Number(data.StatusCode), true);
        return;
      }
      onFecthDataHandle(Number(data.value));
    })
    .catch((err) => console.error(err));
};

const onClickHandle = () => {
  if (currentGuess) {
    fetchData();
  }
};

let currentGuess;

const statusGuess = document.getElementById("status-guess");
const input = document.getElementById("input");
const sendButton = document.getElementById("send-button");
const newMatchButton = document.getElementById("new-match");
const firstDigit = document.getElementById("first-digit");
const secondDigit = document.getElementById("second-digit");
const thirdDigit = document.getElementById("third-digit");

const displayNumber = (number, id) => {
  let elements = [];
  for (let i = 0; i <= 6; i++) {
    const element = document.getElementById(`${id}-${i}`);
    elements.push(element);
  }

  elements.forEach((element) => (element.src = "assets/black-bar.svg"));

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

const displayedNumbersToChange = (number) => {
  const elements = [];
  const numberToString = String(number);

  if (number < 10) {
    elements.push({ id: "first-digit", number });
    firstDigit.classList.remove(`d-none`);
    secondDigit.classList.add(`d-none`);
    thirdDigit.classList.add(`d-none`);
    return elements;
  }
  if (number < 100) {
    elements.push(
      { id: "first-digit", number: Number(numberToString[0]) },
      { id: "second-digit", number: Number(numberToString[1]) }
    );
    firstDigit.classList.remove(`d-none`);
    secondDigit.classList.remove(`d-none`);
    thirdDigit.classList.add(`d-none`);
    return elements;
  }

  firstDigit.classList.remove(`d-none`);
  secondDigit.classList.remove(`d-none`);
  thirdDigit.classList.remove(`d-none`);

  elements.push(
    { id: "first-digit", number: Number(numberToString[0]) },
    { id: "second-digit", number: Number(numberToString[1]) },
    { id: "third-digit", number: Number(numberToString[2]) }
  );
  return elements;
};

const displayedNumbersHandle = (number) => {
  const displayNumbers = displayedNumbersToChange(number);
  console.log(displayNumbers);
  displayNumbers.forEach((item) => displayNumber(item.number, item.id));
};

const onFecthDataHandle = (value, isError = false) => {
  const hasWon = currentGuess === value;
  const isLesser = currentGuess < value;

  input.value = "";
  statusGuess.classList.remove("d-none");

  if (!hasWon && !isError) {
    displayedNumbersHandle(currentGuess);

    statusGuess.innerHTML = isLesser ? "É menor" : "É maior";
    input.disabled = false;
    currentGuess = "";
    return;
  }

  displayedNumbersHandle(value);
  statusGuess.innerHTML = hasWon ? "Você acertou!" : "Erro";
  newMatchButton.classList.remove("d-none");
  input.disabled = true;
  sendButton.disabled = true;
};

const hideDisplayedNumbers = () => {
  firstDigit.classList.add(`d-none`);
  secondDigit.classList.add(`d-none`);
  thirdDigit.classList.add(`d-none`);
};

const onNewMatchHandle = () => {
  hideDisplayedNumbers();
  updateValue("");
  statusGuess.innerHTML = 0;
  statusGuess.classList.add("d-none");
  newMatchButton.classList.add("d-none");
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

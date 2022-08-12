let currentGuess;

const userGuess = document.getElementById("user-guess");
const statusGuess = document.getElementById("status-guess");
const input = document.getElementById("input");
const sendButton = document.getElementById("send-button");
const newMatchButton = document.getElementById("new-match");

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

const onFecthDataHandle = (value, isError = false) => {
  const hasWon = currentGuess === value;
  const isLesser = currentGuess < value;

  input.value = "";
  userGuess.innerHTML = currentGuess;
  statusGuess.classList.remove("d-none");

  if (!hasWon && !isError) {
    statusGuess.innerHTML = isLesser ? "É menor" : "É maior";
    input.disabled = false;
    currentGuess = "";
    return;
  }

  statusGuess.innerHTML = hasWon ? "Você acertou!" : "Erro";
  newMatchButton.classList.remove("d-none");
  input.disabled = true;
  sendButton.disabled = true;
};

const onNewMatchHandle = () => {
  updateValue("");
  userGuess.innerHTML = "";
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

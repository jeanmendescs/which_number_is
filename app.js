let currentGuess;
const userGuess = document.getElementById("user-guess");
const input = document.getElementById("input");

const onInputHandle = (value) => {
  const numberPattern = /\d+/g;
  const onlyNumbersCheck = value.match(numberPattern);

  if (!onlyNumbersCheck) {
    input.value = "";
  }

  if (onlyNumbersCheck && value.length > onlyNumbersCheck.length) {
    input.value = onlyNumbersCheck.join("");
  }

  currentGuess = value;
  userGuess.innerHTML = value;
};

const fetchData = () => {
  fetch("https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300")
    .then((data) => data.json())
    .then((data) => console.log(data))
    .catch((err) => {
      console.log(err);
      console.log("erro");
    });
};

const onClickHandle = () => {
  if (currentGuess) {
    fetchData();
  }
};

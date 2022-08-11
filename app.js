let currentGuess;
const userGuess = document.getElementById("user-guess");
const input = document.getElementById("input");

input.addEventListener("input", (e) => {
  const value = e.target.value;
  const valueToNumber = value;

  if (valueToNumber > 999) {
    return (input.value = value.slice(0, 3));
  }
});

const onChangeHandle = (value) => {
  currentGuess = value;
};

document.addEventListener("change", () => {
  userGuess.innerHTML = currentGuess;
});

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

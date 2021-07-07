function randint(max) {
    return Math.round(Math.random() * max);
}

// Flags

// Declare Game Elements
const flagDisplay = document.getElementById("flagDisplay");
const gameForm = document.getElementById("user-answer-form");
var chosenCountryFlagPair = null;
const feedbackDisplay = document.getElementById("feedback");

const countryFlagPairs = [
    ["afghanistan", "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Afghanistan.svg"],
    ["albania", "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg"],
    ["algeria", "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg"],
    ["andorra", "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg"],
    ["angola", "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg"],
    ["antigua and barbuda", "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Antigua_and_Barbuda.svg"],
    ["argentina", "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg"],
    ["armenia", "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg"],
    ["australia", "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg"],
    ["austria", "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg"],
    ["azerbaijan", "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg"],
    ["bahamas", "https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas.svg"],
    ["bahrain", "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg"],
    ["bangladesh", "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg"],
    ["barbados", "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados.svg"],
    ["belarus", "https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg"],
    ["belgium", "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Belgium_%28civil%29.svg"],
    ["belize", "https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg"],
    ["benin", "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin.svg"],
    ["bhutan", "https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg"],
    ["bolivia", "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Bolivia.svg"],
    ["bosnia and herzegovina", "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg"],
    ["botswana", "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Botswana.svg"],
    ["brazil", "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg"],
    ["brunei", "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei.svg"],
    ["bulgaria", "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg"],
    ["burkina faso", "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg"],
    ["burundi", "https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi.svg"]
];

function chooseCountryFlagPair() {
    try {
        chosenCountryFlagPair = countryFlagPairs[randint(countryFlagPairs.length - 1)];
        flagDisplay.setAttribute("src", chosenCountryFlagPair[1]);
    } catch {
        flagDisplay.setAttribute("src", "https://image.freepik.com/free-vector/error-404-page-found-page-found-text-oops-looks-like-something-went-wrong_143407-2.jpg");
    }
}

chooseCountryFlagPair();

gameForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const userInput = document.getElementById("user-answer");
    const userAnswer = userInput.value;
    if (userAnswer.toLowerCase() === chosenCountryFlagPair[0]) {
        const successMessages = ["Good job!", "Wow!", "Great job!", "Amazing!", "Check!", "Correct!", "Smart!", "Boy, are you overtaught!", "Not bad!", "Not bad at all!", "Not bad. Not bad at all!"];

        userInput.value = "";
        chooseCountryFlagPair();
        feedbackDisplay.innerHTML = successMessages[randint(successMessages.length - 1)];
        feedbackDisplay.classList.remove("text-danger");
        feedbackDisplay.classList.add("text-success");
    } else {
        feedbackDisplay.innerHTML = "Nope, that's not it. Try again!";
        feedbackDisplay.classList.remove("text-success");
        feedbackDisplay.classList.add("text-danger");
    }
});
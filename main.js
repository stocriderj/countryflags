function randint(max) {
    return Math.round(Math.random() * max);
}

// Declare Game Elements
// Flags and their respective countries
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

// HTML Elements
const flagDisplay = document.getElementById("flagDisplay");
const gameForm = document.getElementById("user-answer-form");
var chosenCountryFlagPair = null;
const feedbackDisplay = document.getElementById("feedback");
const scoreDisplay = document.getElementById("score");
const streakDisplay = document.getElementById("streak");
// Sounds
const correct = [new Audio("sounds/correct/correct1.wav"), new Audio("sounds/correct/correct2.wav"), new Audio("sounds/correct/correct3.wav"), new Audio("sounds/correct/correct4.wav"), new Audio("sounds/correct/correct5.wav")];

// Declare Game Variables
var usedHint = false;
var score = 0;
var streak = 0;

// Functions to make my life ez-er
feedbackFormatFunctions = {
    red: () => {
        feedbackDisplay.classList.remove("text-success");
        feedbackDisplay.classList.add("text-danger");
    }
};

function incorrectAnswer() {
    scoreDisplay.classList.remove("text-success");
    streakDisplay.classList.remove("text-success");
    streak = 0;
    streakDisplay.innerText = "";
}

function chooseCountryFlagPair() {
    const oldCountryFlagPair = chosenCountryFlagPair;
    try {
        while (oldCountryFlagPair === chosenCountryFlagPair) {
            chosenCountryFlagPair = countryFlagPairs[randint(countryFlagPairs.length - 1)];
        }
        flagDisplay.setAttribute("src", chosenCountryFlagPair[1]);
    } catch {
        flagDisplay.setAttribute("src", "https://image.freepik.com/free-vector/error-404-page-found-page-found-text-oops-looks-like-something-went-wrong_143407-2.jpg");
    }
}

function giveUp() {
    const giveUpMessages = ["Aw, man, I really thought you'd get it!", "Dang!", "Aw man.", "Ha! I thought so!", ":(", "Don't worry, we learn something new every day."];

    usedHint = true;

    feedbackFormatFunctions.red();

    const oldFeedback = feedbackDisplay.innerText;
    var giveUpFeedback = feedbackDisplay.innerText;
    while (oldFeedback === giveUpFeedback) {
        giveUpFeedback = giveUpMessages[randint(giveUpMessages.length - 1)];
    }
    feedbackDisplay.innerHTML = giveUpFeedback + ` It was ${chosenCountryFlagPair[0].toUpperCase()}.`;
}

chooseCountryFlagPair();

gameForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const userInput = document.getElementById("user-answer");
    const userAnswer = userInput.value;
    if (userAnswer) {
        if (userAnswer.toLowerCase() === chosenCountryFlagPair[0]) {
            const successMessages = ["Good job!", "Wow!", "Great job!", "Amazing!", "Check!", "Correct!", "Smart!", "Boy, are you overtaught!", "Not bad!", "Not bad at all!", "Not bad. Not bad at all!"];
            const iToldYouMessages = ["Well, at least you learn from your mistakes.", "Don't ask me for answers all the time, por favor y gracias.", "See? I'm <em>never</em> wrong!"];

            userInput.value = "";
            chooseCountryFlagPair();

            const oldFeedback = feedbackDisplay.innerText;
            var successFeedback = feedbackDisplay.innerText;
            if (usedHint) {
                while (oldFeedback === successFeedback) {
                    successFeedback = iToldYouMessages[randint(iToldYouMessages.length - 1)];
                }
                feedbackDisplay.innerHTML = successFeedback;
                feedbackDisplay.classList.remove("text-danger");
                feedbackDisplay.classList.add("text-success");

                incorrectAnswer();
            } else {
                while (oldFeedback === successFeedback) {
                    successFeedback = successMessages[randint(successMessages.length - 1)];
                }
                feedbackDisplay.innerHTML = successFeedback;
                feedbackDisplay.classList.remove("text-danger");
                feedbackDisplay.classList.add("text-success");

                score++;
                streak++;
                scoreDisplay.innerText = score;

                if (streak > 1) {
                    scoreDisplay.classList.add("text-success");
                    streakDisplay.classList.add("text-success");
                    streakDisplay.innerText = streak;
                }

                correct[randint(correct.length - 1)].play();
            }
        } else {
            feedbackDisplay.innerHTML = "Nope, that's not it. Try again!";
            feedbackFormatFunctions.red();

            incorrectAnswer();
        }
        usedHint = false;
    }
});
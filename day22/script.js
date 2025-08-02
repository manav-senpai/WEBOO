let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreSpan = document.querySelector("#user-score");
const compScoreSpan = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game Draw!";
    msg.style.backgroundColor = "gray";
};

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "red";
    }
    userScoreSpan.innerText = userScore;
    compScoreSpan.innerText = compScore;
};

const playGame = (choiceId) => {
    const compChoice = genCompChoice();

    if (choiceId === compChoice) {
        drawGame();
    } else {
        let userWin = false;
        if (
            (choiceId === "rock" && compChoice === "scissors") ||
            (choiceId === "paper" && compChoice === "rock") ||
            (choiceId === "scissors" && compChoice === "paper")
        ) {
            userWin = true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        playGame(choiceId);
    });
});
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg     = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText = "Game was draw. Play again.";
    msg.style.backgroundColor = "rgb(72, 104, 72)";
}

const showWinner = (userWin, compChoice, userChoice) => {
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! Your ${compChoice} beats ${userChoice}.`;
        msg.style.backgroundColor = "Green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lose");
        msg.innerText = `You Lose! ${userChoice} beats your ${compChoice}.`;
        msg.style.backgroundColor = "rgb(180, 97, 97)";
    }
}

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (userChoice) => {
    console.log("User-Choice is :", userChoice);

    const compChoice = genCompChoice();
    console.log("Computer-Choice is :", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice==="Rock"){
            userWin = compChoice === "Paper" ? false : true;
        }
        else if (userChoice==="Paper"){
            userWin = compChoice === "Scissors" ? false : true;
        }
        else {
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener(("click"), () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
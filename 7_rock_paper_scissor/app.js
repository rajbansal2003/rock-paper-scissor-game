let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");
const user_score = document.querySelector("#user-score");
const comp_score = document.querySelector("#comp-score");

const getComputerChoice = () => {
    // rock, paper, scissor
    const options = ["rock", "paper", "scissor"];

    // random -> generate number from 0->1
    // floor -> give floor of that number
    const randIndex = Math.floor(Math.random()*3);

    return options[randIndex];
};

const drawGame = () => {
    // console.log("game was draw!");
    msg.innerText = "game was draw, Play again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        user_score.innerText = userScore;

        // console.log("you win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        comp_score.innerText = compScore;

        // console.log("You lose!");
        msg.innerText = `You lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const PlayGame = (userChoice) => {
    // console.log("user choice = ", userChoice);
    
    // generate computer choice
    const compChoice = getComputerChoice();
    // console.log("comp choice = ", compChoice);

    if(userChoice == compChoice){
        // draw
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice == "rock"){
            // scissor, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice == "paper"){
            // scissor, paper
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log(userChoice, "was clicked!");
        PlayGame(userChoice);
    });
});
let humanScore = 0;
let computerScore = 0;

const human_score_div = document.querySelector("#human-score");
human_score_div.textContent = humanScore;

const computer_score_div = document.querySelector("#robot-score");
computer_score_div.textContent = computerScore;

//Game
btn_rock = document.querySelector("btn-rock");
btn_rock.addEventListener("click", playRound("rock"));

btn_paper = document.querySelector("btn-paper");


btn_scissors = document.querySelector("btn-scissors");


function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice < 0.33) {
        return "rock";
    }
    else if (computerChoice > 0.33 && computerChoice < 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    while(true) {
        let humanChoice = prompt("Enter your choice: rock, paper or scissors");
        if (humanChoice.toLowerCase() == "rock" || humanChoice.toLowerCase() =="paper" || humanChoice.toLowerCase() == "scissors") {
            return humanChoice.toLowerCase();
        }
    }

}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("It is a draw.");
    }
    else if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            console.log("You win! Rock beats scissors!");
            humanScore++;
        }
        else {
            console.log("You lose. Paper beats rock.");
            computerScore++;
        }
    }

    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("You win! paper beats rock!");
            humanScore++;
        }
        else {
            console.log("You lose. Scissors beats paper.");
            computerScore++;
        }
    }

    else if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
            console.log("You win! Scissors beat paper.");
            humanScore++;
        }
        else {
            console.log("You lose. Rock beats scissors.");
            computerScore++;
        }
    }
 }

 function playGame(rounds) {
    for (let i = 0; i < rounds; i++) {
        console.log("ROUND " + parseInt(i+1));
        humanChoiceRound = getHumanChoice();
        computerChoiceRound = getComputerChoice();
        playRound(humanChoiceRound, computerChoiceRound);
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }
 }

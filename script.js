let humanScore = 0;
let computerScore = 0;
let isGameDone = false;

const human_score_div = document.querySelector("#human-score");
const computer_score_div = document.querySelector("#robot-score");
const round_result_div = document.querySelector("#round-result");
const player_choice_div = document.querySelector("#player-choice");
const robot_choice_div = document.querySelector("#robot-choice");
const player_choice_img = document.querySelector("#player-choice-img");
const robot_choice_img = document.querySelector("#robot-choice-img");

//Game
updateCounter();

btn_rock = document.querySelector("#btn-rock");
btn_rock.addEventListener("click", () => playRound("Rock"));

btn_paper = document.querySelector("#btn-paper");
btn_paper.addEventListener("click", () => playRound("Paper"));

btn_scissors = document.querySelector("#btn-scissors");
btn_scissors.addEventListener("click", ()=> playRound("Scissors"));


function updateCounter() {
    human_score_div.textContent = humanScore;
    computer_score_div.textContent = computerScore;
}

function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice < 0.33) {
        return "Rock";
    }
    else if (computerChoice > 0.33 && computerChoice < 0.66) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playRound(humanChoice) {
    if (isGameDone) {
        return;
    }

    var computerChoice = getComputerChoice();
    player_choice_div.textContent = humanChoice;
    robot_choice_div.textContent = computerChoice;
    player_choice_img.src = humanChoice + ".png";
    robot_choice_img.src = computerChoice + ".png";

    if (humanChoice == computerChoice) {
        round_result_div.textContent = "It is a draw.";
    }
    else if (humanChoice == "Rock") {
        if (computerChoice == "Scissors") {
            round_result_div.textContent = "You win! Rock beats scissors!";
            humanScore++;
        }
        else {
            round_result_div.textContent = "You lose. Paper beats rock.";
            computerScore++;
        }
    }

    else if (humanChoice == "Paper") {
        if (computerChoice == "Rock") {
            round_result_div.textContent = "You win! paper beats rock!";
            humanScore++;
        }
        else {
            round_result_div.textContent = "You lose. Scissors beats paper.";
            computerScore++;
        }
    }

    else if (humanChoice == "Scissors") {
        if (computerChoice == "Paper") {
            round_result_div.textContent = "You win! Scissors beat paper.";
            humanScore++;
        }
        else {
            round_result_div.textContent = "You lose. Rock beats scissors.";
            computerScore++;
        }
    }
    updateCounter();
    if (humanScore >= 5) {
        round_result_div.textContent = "You win! Restart the page to play again.";
        isGameDone = true;
        return;
    }
    else if (computerScore >= 5) {
        round_result_div.textContent = "You lose. Restart the page to play again.";
        isGameDone = true;
        return;
    }

 }
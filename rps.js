
function getComputerChoice()
{
    let idx = Math.floor(Math.random() * 3);
    let options = ["rock", "paper", "scissors"];

    return options[idx];
}


function playRound(playerSelection, computerSelection)
{   

    switch (playerSelection) 
    {
        case "rock":
            if (computerSelection === "rock")
            {
                return "Draw!";
            }
            else if (computerSelection === "paper")
            {
                return "You lose! Paper beats Rock";
            }
            else
            {
                return "You win! Rock beats Scissors";
            }
        
        case "paper":
            if (computerSelection === "paper")
            {
                return "Draw!";
            }
            else if (computerSelection === "rock")
            {
                return "You win! Paper beats Rock";
            }
            else
            {
                return "You lose! Scissors beats Paper";
            }
        
        case "scissors":
            if (computerSelection === "scissors")
            {
                return "Draw!";
            }
            else if (computerSelection === "paper")
            {
                return "You win! Scissors beats Paper";
            }
            else
            {
                return "You lose! Rock beats Scissors";
            }
            
    }
}

function game()
{   
    let computerSelection;
    let userInput;
    let result; 

    for (let i = 0; i < 5; i++)
    {
        userInput = prompt("Three.. Two.. One!");
        computerSelection = getComputerChoice();
        result = playRound(userInput.toLowerCase(), computerSelection);
        console.log(`Round ${i + 1}: `  + result);
    }
}

game()

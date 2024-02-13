//Hämta local.storage och sätta namn
let playerNameDisplay = document.getElementById("playerNameDisplay")
let storagePlayerName = localStorage.getItem("playerName")
playerNameDisplay.innerHTML = storagePlayerName


// Knappar för att välja hand
const rockBtn = document.getElementById("rock-button")
const paperBtn = document.getElementById("paper-button")
const scissorsBtn = document.getElementById("scissors-button")

let playerHandImg = document.getElementById("player-hand")
let computerHandImg = document.getElementById("computer-hand")

let playerChoice
let buttonCoolDown = true

rockBtn.addEventListener("click", () => {
    if(buttonCoolDown) {
        buttonCoolDown = false
        getBtnValue("rock")
        setTimeout(() => {
            buttonCoolDown = true
        }, 1500)
    }
    
})

paperBtn.addEventListener("click", () => {
    if(buttonCoolDown) {
        buttonCoolDown = false
        getBtnValue("paper")
        setTimeout(() => {
            buttonCoolDown = true
        }, 1500)
    }
    
})

scissorsBtn.addEventListener("click", () => {
    if(buttonCoolDown) {
        buttonCoolDown = false
        getBtnValue("scissors")
        setTimeout(() => {
            buttonCoolDown = true
        }, 1500)
    }
    
})

function getBtnValue(choice) {
    playerHandImg.src = "/img/rock.png"
    computerHandImg.src = "/img/rock.png"
    playerChoice = choice
    console.log("Player chose: " + playerChoice)

    animateHands()
    computerChoiceRandom()
    rpsScore(playerChoice, computerChoice)

    // Bild beroende på vald hand
    setTimeout(function () {
        if (playerChoice === "rock") {
            playerHandImg.src = "/img/rock.png"
        } else if (playerChoice === "paper") {
            playerHandImg.src = "/img/paper.png"
        } else if (playerChoice === "scissors") {
            playerHandImg.src = "/img/scissors.png"
        }
    }, 1500);
    setTimeout(function () {
        if (computerChoice === "rock") {
            computerHandImg.src = "/img/rock.png"
        } else if (computerChoice === "paper") {
            computerHandImg.src = "/img/paper.png"
        } else if (computerChoice === "scissors") {
            computerHandImg.src = "/img/scissors.png"
        }
    }, 1500);
}

// Lägga på animationer
function animateHands() {
    playerHandImg.classList.add("animation-left")
    computerHandImg.classList.add("animation-right")

    setTimeout(() => {
        playerHandImg.classList.remove("animation-left");
        computerHandImg.classList.remove("animation-right");
    }, 1500)
}

// Datorns drag
let computerChoice

function computerChoiceRandom() {
    let randomNumber = Math.floor(Math.random() * 3)

    switch(randomNumber){
        case 0:
            computerChoice = "rock"
            break
        case 1:
            computerChoice = "paper"
            break
        case 2:
            computerChoice = "scissors"
            break
    }
    console.log(computerChoice)
}

// Visa poängställning
let playerPoints = 0
let computerPoints = 0

let playerPointsElement = document.getElementById("player-points-h3")
let computerPointsElement = document.getElementById("computer-points-h3")

playerPointsElement.innerHTML = `Points: ${playerPoints}`
computerPointsElement.innerHTML = `Points: ${computerPoints}`


// Runda Resultat
let resultText = document.getElementById("result-text")

function rpsScore(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        setTimeout(() => {
            resultText.innerHTML = "It's a tie!"
        }, 1500);
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        setTimeout(() => {
            playerPoints += 1
            playerPointsElement.innerHTML = `Points: ${playerPoints}`
            resultText.innerHTML = `${storagePlayerName} won the round!`
        }, 1500);
    } else {
        setTimeout(() => {
            computerPoints += 1
            computerPointsElement.innerHTML = `Points: ${computerPoints}`
            resultText.innerHTML = "Computer won the round!"
        }, 1500);
    }
}





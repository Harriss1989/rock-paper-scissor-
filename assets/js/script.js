let mainContainer = `<div class="btn-container">
<button id="new-game" class="btn-new">New Game</button>
<button id="rules" class="rulesBtn">Game Rules</button>
<button id="settings" class="settingsBtn">Settings</button>
</div>`;

let modal = document.getElementById('player-input-modal'); // Get modal element
let gameModal = document.getElementById('selectionModal'); // Get game modal elements
let rulesModal = document.getElementById('rules-container-modal'); // get rules modal
let settingsModal = document.getElementById('game-settings-modal'); // get settings modal
let userName = ""; // User name input empty string
let startBtn = document.getElementById('start-game'); // start game button
let overallWinner = false;
let roundsNeeded = 5;
let playerChoice = "";
let computerChoice = "";
let roundWinner = '';
//main game function
function mainMenu() {
    document.getElementById('menu-container').innerHTML = mainContainer;
    console.log("loaded");
    let modalBtn = document.getElementById('new-game'); // Get open modal buttons
    let closeBtns = document.getElementsByClassName('closeBtn'); // Close modal 
    let rulesBtn = document.getElementById('rules'); // rules button
    let settingsBtn = document.getElementById('settings'); // settings button
    modalBtn.addEventListener('click', playerName); // listen for clicks

    for (let btn of closeBtns) {
        btn.addEventListener('click', closeModal);
    }
    window.addEventListener('click', outsideClick);
    //startBtn.addEventListener('click', startGameModal); //listen for start button click
    rulesBtn.addEventListener('click', openRulesModal); //listen for rules button click
    settingsBtn.addEventListener('click', openSettingsModal); // listen for settings button click
}

// Function to open modal and close modal
// function openModal() {

// }

function closeModal() {
    modal.style.display = 'none';
    rulesModal.style.display = 'none';
    settingsModal.style.display = 'none'
};

function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}
// function to open new game
function openRulesModal() {
    rulesModal.style.display = 'block';
}

function openSettingsModal() {
    settingsModal.style.display = 'block';
}

function playerName() {
    modal.style.display = 'block';
    let name = document.getElementById('name');
    let nameScreenStartBtn = document.getElementById('start-game');
    nameScreenStartBtn.addEventListener('click', captureUserName);

    function captureUserName(e) {
        e.preventDefault();
        if (name.value == '') {
            userName = 'Player';
            startGameScreen();
            modal.style.display = 'none';
        } else {
            userName = name.value + ':';
            startGameScreen();
            modal.style.display = 'none';
        }
    }
}

function startGameScreen() {
    document.getElementById('menu-container').innerHTML = `<div id="main-game">
    <h2>Computer:<span id="computer-choice"></span></h2>
    <h2>${userName}<span id="player-choice"></span></h2>
    <h2>Result of Last Round:<span id="results"></span></h2>
    <h2>Scores: <h3>Computer: <span id="computer-score">0</span></h3> <h3>${userName}: <span id="player-score">0</span></h3></h2>
    <span></span>

    <img class="selection" id="rock" src="/assets/images/rock-hand.png" alt="">
    <img class='selection' id="paper" src="/assets/images/paper-hand.png" alt="">
    <img class='selection' id="scissors" src="/assets/images/sicissor-hand.png" alt="">
</div>`;
    overallWinner = false;
    gameLoop();
}


function gameLoop() {
    // while (overallWinner == false) {
    //     console.log('game loop')
    //     getPlayerChoice();
    //     getComputerChoice();
    //     roundWinner = declareWinner(playerChoice, computerChoice);
    //     updateScore(roundWinner);
    //     checkForOverallWinner();
    // }
    console.log('gameloop')
    getPlayerChoice();
}

function updateScore() {
    console.log('started update score')
    if (roundWinner == 'player') {
        let currentPlayerScore = document.getElementById('player-score').innerText;
        let updatePlayerScore = parseInt(currentPlayerScore) + 1;
        document.getElementById('player-score').innerText = updatePlayerScore;
        document.getElementById('results').innerText = 'Player Win';
        checkForOverallWinner();
    } else if (roundWinner == 'computer') {
        let currentComputerScore = document.getElementById('computer-score').innerText;
        let updateComputerScore = parseInt(currentComputerScore) + 1;
        document.getElementById('computer-score').innerText = updateComputerScore;
        document.getElementById('results').innerText = 'Computer Win';
        checkForOverallWinner();
    } else {
        document.getElementById('results').innerText = 'Draw';
        checkForOverallWinner();
    }
};


function getPlayerChoice() {
    console.log('player choice')
    let playerOptions = document.getElementsByClassName('selection');
    for (let i = 0; i < playerOptions.length; i++) {
        playerOptions[i].addEventListener('click', identifyPlayerClick);
        console.log('add el' + i)
    }

    function identifyPlayerClick(e) {
        let userChoice = e.target.src
        let userMove = e.target.id
        document.getElementById('player-choice').innerHTML = `<img src="${userChoice}">`;
        playerChoice = userMove;
        console.log(playerChoice)
        removePlayerClick();
        getComputerChoice();
    };

    function removePlayerClick() {
        for (let i = 0; i < playerOptions.length; i++) {
            playerOptions[i].removeEventListener('click', identifyPlayerClick);
            console.log('- el' + i)
        };
    };
};

function declareWinner() {
    console.log(playerChoice);
    console.log(computerChoice);
    switch (playerChoice + computerChoice) {
        case 'rockpaper':
        case 'scissorsrock':
        case 'paperscissors':
            roundWinner = 'computer';
            console.log('comp is winner')
            updateScore();
            break;
        case 'rockscissors':
        case 'paperrock': 
        case 'scissorspaper':
            roundWinner = 'player';
            console.log('player is winner')
            updateScore();
            break;
        case 'rockrock':
        case 'scissorsscissors':
        case 'paperpaper':
            roundWinner = 'draw';
            console.log('its a draw')
            updateScore();
            break;
    }
};

function getComputerChoice() {
    console.log('started computer choice');
    let computerOptions = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * computerOptions.length);
    let computerMove = computerOptions[randomChoice];
    computerChoice = computerMove;
    console.log('computer chose ' + computerChoice)
    declareWinner();
};

function checkForOverallWinner() {
    let computerScore = document.getElementById('computer-score').innerText;
    let playerScore = document.getElementById('player-score').innerText;
    if (parseInt(computerScore) == roundsNeeded) {
        //what happens when computer wins
        overallWinner = true
        console.log('computer-wins')
    } else if (parseInt(playerScore) == roundsNeeded) {
        // what happens when player wins 
        overallWinner = true
        console.log('player-wins')
    } else {
        console.log('no winner yet')
        gameLoop();
    }
};

// //game logic 
// const computerChoice = document.getElementById('computer-choice');
// 
// const resultDisplay = document.getElementById('results');
// 
// let userChoice 
// let compare

// possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
//    userChoice = e.target.src 
//.   userMove = e.target.id
//    playerChoice.innerHTML = `<img src="${userChoice}">`;
//    removeEventListener.forEach(possibleChoice);
//.   return userChoice
// }))
// function getComputerMove(){
//     let computerOptions = ["rock", "paper", "scissors"];
//     let randomChoice = Math.floor(Math.random() * computerOptions.length);
//     let computerMove = computerOptions[randomChoice];
//     return computerMove;
// }
// //function compareResults()





window.onload = mainMenu();
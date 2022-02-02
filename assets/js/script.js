// Main screen veribale
let mainContainer= 
`<div class="btn-container">
<div class="game-title"><h1>Rock, Paper, Scissors</h1></div>
<button id="new-game" class="btn-main">New Game</button>
<button id="rules" class="btn-main">Game Rules</button>
<button id="settings" class="btn-main">Settings</button>
</div>`;
let beach = backgrounds[0];// Svg beach defalt background
let space = backgrounds[1];// Svg space ship background
let playground = backgrounds[2];// Svg basketball court backeground
let winnerModal = document.getElementById('winner-message');
let loserModal = document.getElementById('loser-message');
let modal = document.getElementById('player-input-modal'); // Get modal element
let rulesModal = document.getElementById('rules-container-modal'); // get rules modal
let settingsModal = document.getElementById('game-settings-modal'); // get settings modal
let userName = ""; // User name input empty string
let overallWinner = false;
let roundsNeeded = 5;
let playerChoice = "";
let computerChoice = "";
let roundWinner = '';


//main menu function
function mainMenu() {
    document.getElementById('menu-container').innerHTML = mainContainer;
    let modalBtn = document.getElementById('new-game'); // Get open modal buttons
    let closeBtns = document.getElementsByClassName('closeBtn'); // Close modal 
    let rulesBtn = document.getElementById('rules'); // rules button
    let settingsBtn = document.getElementById('settings'); // settings button
    modalBtn.addEventListener('click', playerName); // listen for clicks sais void??

    for (let btn of closeBtns) {
        btn.addEventListener('click', closeModal);
    }
    window.addEventListener('click', outsideClick); // listens for outside window click
    rulesBtn.addEventListener('click', openEachModal); //listen for rules button click
    settingsBtn.addEventListener('click', openEachModal); // listen for settings button click
}

function closeModal() {
    modal.style.display = 'none';
    rulesModal.style.display = 'none';
    settingsModal.style.display = 'none';
    winnerModal.style.display = 'none';
    loserModal.style.display = 'none';
}

function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    } else if (e.target == rulesModal) {
        rulesModal.style.display = 'none';
    } else if (e.target == settingsModal) {
        settingsModal.style.display = 'none';
    } else if (e.target == winnerModal) {
        winnerModal.style.display = 'none';
    } else if (e.target == loserModal) {
        loserModal.style.display = 'none';
    }
}

function openEachModal(e) {
    if (e.target == document.getElementById('rules')) {
        rulesModal.style.display = 'block';
    } else if (e.target == document.getElementById('settings')) {
        settingsModal.style.display = 'block';
        backgroundChange();
        roundWanted();
    }
}
 //Enter name fuction and key down functionallity
function playerName() {
    modal.style.display = 'block';
    let name = document.getElementById('name');
    let nameScreenStartBtn = document.getElementById('start-game');
    nameScreenStartBtn.addEventListener('click', captureUserName);
    let input = document.querySelector('.name');
    input.addEventListener('keydown', (e) => {
        if (e.keyCode === 13){
            captureUserName(e);
        }
    });

    function captureUserName(e) {
        e.preventDefault();

        if (name.value == '') {
            userName = 'Player';
            startGameScreen();
            modal.style.display = 'none';
        } else {
            userName = name.value;
            startGameScreen();
            modal.style.display = 'none';
        }
    }
}

// Change background funcion selects the color scheme for each background
function backgroundChange() {
    let arenaPick = document.getElementsByClassName("arena-img");
    for (let i = 0; i <arenaPick.length; i++) {
        arenaPick[i].addEventListener('click', selectedBackground);
    }

    function selectedBackground(e) {
        let arenaChoice = e.target.id;
        if (arenaChoice == 'court-bg') {
            let primary = '#f4b10b';
            let secondary = '#333333f7';
            let text = '#000000';
            applyBackground(playground, primary, secondary, text);

        } else if (arenaChoice == "beach-bg") {
            let primary = '#420707e0';
            let secondary = '#333333f7';
            let text = '#ffffff';
            applyBackground(beach, primary, secondary, text);
        } else if (arenaChoice == 'window-bg') {
            let primary = '#031f3e';
            let secondary = '#333333f7';
            let text = '#ffffff';
            applyBackground(space, primary, secondary, text);
        }

    }
}

function applyBackground(bg, primary, secondary, text) {
    document.getElementById('background-img').innerHTML = bg;
    document.querySelector(':root').style.setProperty('--primary', primary);
    document.querySelector(':root').style.setProperty('--secondary', secondary);
    document.querySelector(':root').style.setProperty('--text-header', text);
}

// function for how many rounds played
function roundWanted() {
    document.getElementById("round-slider").addEventListener('input', function () {
        roundsNeeded = document.getElementById('round-slider').value;
        document.getElementById('rounds-wanted').innerText = roundsNeeded;
    });
}

// main game input 
function startGameScreen() {
    document.getElementById('menu-container').innerHTML = `<div id="main-game" class="grid-container">
    <div class="grid-item1"><h2>Scores</h2><h3>Computer: <span id="computer-score">0</span></h3> <h3>${userName}: <span id="player-score">0</span></h3></h2><span></span></div>
    <div class="grid-item2"><h2>${userName}</h2><div id="player-choice"></div></div>
    <div class="grid-item3"><h2>V.S</h2></div>
    <div class="grid-item4"><h2>Computer</h2><div id="computer-choice"></div></div>
    
    <div class="grid-item5"><img class="selection" id="rock" src="./assets/images/rock-hand.png" alt="3d hand in a fist represents rock"></div>
    <div class="grid-item6"><img class="selection" id="paper" src="./assets/images/paper-hand.png" alt="3d hand flat represents paper"></div>
    <div class="grid-item7"><img class="selection" id="scissors" src="./assets/images/sicissor-hand.png" alt="3d hand two fingers up represents scissors"></div>
    <div class="grid-item8"><h2>Result of Last Round: <span id="results"></span></h2></div>
    </div>
   <div><button id="main-menu" class="btn-main">Main Menu</button></div>`;
    overallWinner = false;
    gameLoop();
    returnToMainScreen();
}

// Game loop function
function gameLoop() {
    getPlayerChoice();
}

// Return to main menu screen from game screen
function returnToMainScreen() {
    let menuBtn = document.getElementById("main-menu");
    menuBtn.addEventListener('click', mainMenu);
}

// Update score function keep track of whos winning
function updateScore() {
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
}

// Game logic 
function declareWinner() {
    switch (playerChoice + computerChoice) {
        case 'rockpaper':
        case 'scissorsrock':
        case 'paperscissors':
            roundWinner = 'computer';
            updateScore();
            break;
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            roundWinner = 'player';
            updateScore();
            break;
        case 'rockrock':
        case 'scissorsscissors':
        case 'paperpaper':
            roundWinner = 'draw';
            updateScore();
            break;
    }
}

// Determins what choice player has choosen by mouse click, inserts choice in to main game
function getPlayerChoice() {
    let playerOptions = document.getElementsByClassName('selection');
    for (let i = 0; i <playerOptions.length; i++) {
        playerOptions[i].addEventListener('click', identifyPlayerClick);
    }

    function identifyPlayerClick(e) {
        let userChoice = e.target.src;
        let userMove = e.target.id;
        document.getElementById('player-choice').innerHTML = `<img src="${userChoice}">`;
        playerChoice = userMove;
        removePlayerClick();
        getComputerChoice();
    }

    function removePlayerClick() {
        for (let i = 0; i <playerOptions.length; i++) {
            playerOptions[i].removeEventListener('click', identifyPlayerClick);
            console.log('- el' + i);
        }
    }
}

// Randomly pick for computer inserts choice
function getComputerChoice() {
    let computerOptions = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * computerOptions.length);
    let computerMove = computerOptions[randomChoice];
    if (computerMove == "rock") {
        document.getElementById('computer-choice').innerHTML = '<img src="./assets/images/rock-hand.png" alt="3d hand in a fist represents rock">';
    } else if (computerMove == "paper") {
        document.getElementById('computer-choice').innerHTML = '<img src="./assets/images/paper-hand.png" alt="3d hand flat represents paper">';
    } else {
        document.getElementById('computer-choice').innerHTML = '<img src="./assets/images/sicissor-hand.png" alt="3d hand two fingers up represents scissors">';
    }
    computerChoice = computerMove;
    declareWinner();
}

// checks for over all winner and displys message based on rounds won, win or lose
function checkForOverallWinner() {
    let computerScore = document.getElementById('computer-score').innerText;
    let playerScore = document.getElementById('player-score').innerText;
    if (parseInt(computerScore) == roundsNeeded) {
        //what happens when computer wins
        // document.getElementById('loser-message').innerHTML;
        loserModal.style.display = "block";
        overallWinner = true;
    } else if (parseInt(playerScore) == roundsNeeded) {
        // what happens when player wins
        // document.getElementById('winner-message').innerHTML;
        winnerModal.style.display = "block";
        overallWinner = true;
    } else {
        gameLoop();
    }
}
window.onload = mainMenu();
let mainContainer = `<div class="btn-container">
<button id="new-game" class="btn-main">New Game</button>
<button id="rules" class="btn-main">Game Rules</button>
<button id="settings" class="btn-main">Settings</button>
</div>`;
let beach = backgrounds[0];
let space = backgrounds[1];
let playground = backgrounds[2];
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
let bgArenaPick = '';

//main game function
function mainMenu() {
    document.getElementById('menu-container').innerHTML = mainContainer;
    console.log("loaded");
    let modalBtn = document.getElementById('new-game'); // Get open modal buttons
    let closeBtns = document.getElementsByClassName('closeBtn'); // Close modal 
    let rulesBtn = document.getElementById('rules'); // rules button
    let settingsBtn = document.getElementById('settings'); // settings button
    modalBtn.addEventListener('click', playerName); // listen for clicks sais void??

    for (let btn of closeBtns) {
        btn.addEventListener('click', closeModal);
    }
    window.addEventListener('click', outsideClick);
    rulesBtn.addEventListener('click', openEachModal); //listen for rules button click
    settingsBtn.addEventListener('click', openEachModal); // listen for settings button click
};

function closeModal() {
    modal.style.display = 'none';
    rulesModal.style.display = 'none';
    settingsModal.style.display = 'none'
};

function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    } else if (e.target == rulesModal) {
        rulesModal.style.display = 'none';
    } else if (e.target == settingsModal) {
        settingsModal.style.display = 'none';
    }
}

function openEachModal(e) {
    if (e.target == document.getElementById('rules')) {
        rulesModal.style.display = 'block';
    } else if (e.target == document.getElementById('settings')) {
        settingsModal.style.display = 'block';
        backgroundChange();
    }
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
            userName = name.value;
            startGameScreen();
            modal.style.display = 'none';
        }
    }
}


function backgroundChange() {
    console.log('arena pick')
    let arenaPick = document.getElementsByClassName("arena-img");
    for (let i = 0; i < arenaPick.length; i++) {
        arenaPick[i].addEventListener('click', selectedBackground);
        console.log('add el 1' + i);
    }

    function selectedBackground(e) {
        let arenaChoice = e.target.id
        if (arenaChoice == 'court-bg') {
            let primary = '#f4b10b';
            let secondary = '#333333f7';
            let text = '#000000';
            let box = '0px 20px 30px 0px #f9f5ea'
            applyBackground(playground, primary, secondary, text);

        } else if (arenaChoice == "beach-bg") {
            let primary = '#420707e0';
            let secondary = '#333333f7';
            let text = '#ffffff';
            applyBackground(beach, primary, secondary, text);
        } else if (arenaChoice == 'window-bg') {
            let primary = '#031f3e';
            let secondary ='#333333f7';
            let text = '#ffffff';
            applyBackground(space, primary, secondary, text);
        }

    };

};

function applyBackground(bg, primary, secondary, text) {
    document.getElementById('background').innerHTML = bg;
    document.querySelector(':root').style.setProperty('--primary', primary);
    document.querySelector(':root').style.setProperty('--secondary', secondary);
    document.querySelector(':root').style.setProperty('--text-header', text);

}

function startGameScreen() {
    document.getElementById('menu-container').innerHTML = `<div id="main-game" class="grid-container">
    <div class="grid-item1"><img class="selection" id="rock" src="/assets/images/rock-hand.png" alt="3d hand in a fist represents rock"></div>
    <div class="grid-item2"><img class="selection" id="paper" src="/assets/images/paper-hand.png" alt="3d hand flat represents paper"></div>
    <div class="grid-item3"><img class="selection" id="scissors" src="/assets/images/sicissor-hand.png" alt="3d hand two fingers up represents scissors"></div>
    
    <div class="grid-item4"><h2>Computer<span id="computer-choice"></span></h2></div>
    <div class="grid-item8"><h2>V.S</h2></div>
    <div class="grid-item7"><h2>${userName}<span id="player-choice"></span></h2></div>
    <div class="grid-item5"><h2>Result of Last Round: <span id="results"></span></h2></div>
    <div class="grid-item6"><h2>Scores<h3>Computer: <span id="computer-score">0</span></h3> <h3>${userName}: <span id="player-score">0</span></h3></h2><span></span></div>
</div>
   <div><button id="main-menu" class="btn-main">Main Menu</button></div>`; 
    overallWinner = false;
    gameLoop();
    returnToMainScreen();
    openEachModal();
}


function gameLoop() {
    console.log('gameloop')
    getPlayerChoice();
}

function returnToMainScreen() {
   let menuBtn = document.getElementById("main-menu");
   menuBtn.addEventListener('click', mainMenu);
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
    console.log('computer chose' + computerChoice)
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
window.onload = mainMenu();
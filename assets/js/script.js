const mainContainer = document.createElement('div')

// Get modal element
let modal = document.getElementById('player-input-modal');
// Get open modal buttons
let modalBtn = document.getElementById('new-game');
let closeBtn = document.getElementsByClassName('closeBtn')[0];
// start game button
let startBtn =document.getElementById('start-game');
// Get game modal elements
let gameModal = document.getElementById('selectionModal');
// get rules modal
let rulesModal =document.getElementById('rules-container-modal');
// rules button
let rulesBtn = document.getElementById('rules');
let closeBtn1 = document.getElementsByClassName('closeBtn1')[0];
// settings button
let settingsBtn =document.getElementById('settings');
// get settings modal
let settingsModal = document.getElementById('game-settings-modal');
// listen for clicks

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
//listen for start button click
startBtn.addEventListener('click', startGameModal);
//listen for rules button click
rulesBtn.addEventListener('click', openRulesModal);
closeBtn1.addEventListener('click', closeModal1);
// listen for settings button click
settingsBtn.addEventListener('click', openSettingsModal);

// Function to open modal and close modal
function openModal(){
    modal.style.display = 'block';
}
function closeModal(){
    modal.style.display = 'none';
}
function outsideClick(e){
    if(e.target == modal){
      modal.style.display = 'none';
    } 
}
// function to open new game
function startGameModal(){
    gameModal.style.display = 'block';
}
function openRulesModal(){
    rulesModal.style.display = 'block';
}
function closeModal1(){
    rulesModal.style.display = 'none';
}
function openSettingsModal(){
    settingsModal.style.display = 'block';
}

//game logic 
const computerChoice = document.getElementById('computer-choice');
const playerChoice = document.getElementById('player-choice');
const resultDisplay = document.getElementById('results');
const possibleChoices = document.querySelectorAll('.selection');
let userChoice 

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   userChoice = e.target.src
   playerChoice.innerHTML = `<img src="${userChoice}">`;
   computerChoice.innerHTML = getComputerMove();
}))
function getComputerMove(){
    let computerOptions = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * computerOptions.length);
    let computerMove = computerOptions[randomChoice];
    return computerMove
}



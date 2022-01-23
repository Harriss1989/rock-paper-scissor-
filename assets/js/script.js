//game logic 
const computerChoise = document.getElementById('computer-choice');
const playerChoice = document.getElementById('player-choice');
const resultDisplay = document.getElementById('results');
const possibleChoices = document.querySelectorAll('.selection');
let userChoice 

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   userChoice = e.target.src
   playerChoice.innerHTML = `<img src="${userChoice}">`
}))

// Get modal element
var modal = document.getElementById('player-input-modal');
// Get open modal buttons
var modalBtn = document.getElementById('new-game');
var closeBtn = document.getElementsByClassName('closeBtn')[0];
// start game button
var startBtn =document.getElementById('start-game');
// Get game modal elements
var gameModal = document.getElementById('selectionModal');
// get rules modal
var rulesModal =document.getElementById('rules-container-modal');
// rules button
var rulesBtn = document.getElementById('rules');
var closeBtn1 = document.getElementsByClassName('closeBtn1')[0];
// settings button
var settingsBtn =document.getElementById('settings');
// get settings modal
var settingsModal = document.getElementById('game-settings-modal');
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
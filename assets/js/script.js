// Get modal element
var modal = document.getElementById('player-input-modal');
// Get open modal buttons
var modalBtn = document.getElementById('new-game');
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// listen for clicks
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
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

// start game button
var startBtn =document.getElementById('start-game');
// Get game modal elements
var gameModal = document.getElementById('selectionModal');
//listen for start button click
startBtn.addEventListener('click', startGameModal);
// function to open new game
function startGameModal(){
    gameModal.style.display = 'block';
}

// get rules modal
var rulesModal =document.getElementById('rules-container-modal');
// rules button
var rulesBtn = document.getElementById('rules');
var closeBtn1 = document.getElementsByClassName('closeBtn1')[0];
//listen for rules button click
rulesBtn.addEventListener('click', openRulesModal);
closeBtn1.addEventListener('click', closeModal1);

function openRulesModal(){
    rulesModal.style.display = 'block';
}
function closeModal1(){
    rulesModal.style.display = 'none';
}

// settings button
var settingsBtn =document.getElementById('settings');
// get settings modal
var settingsModal = document.getElementById('game-settings-modal');
// listen for settings button click
settingsBtn.addEventListener('click', openSettingsModal);

function openSettingsModal(){
    settingsModal.style.display = 'block';
}
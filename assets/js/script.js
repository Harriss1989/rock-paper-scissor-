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
function closeModal(...args: []) {
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
const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const SElECTIONS = [
 {
    name: 'rock',
    document.getElementById('hand')
    .innerHTML = '<img src="asset/images/rock-hand.png" />',
    beats: 'scissors',
 },
 {
    name: 'paper',
    beats: 'rock',
 },
 {
    name: 'scissors',
    beats: 'paper',
 }
]

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SElECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})


function makeSelection(selection) {
    const computerSelection = randomSelection()
    const yourWinner = Winner(selection, computerSelection)
    const computerWinner = Winner(computerSelection, selection)
    
    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)
}

function addSelectionResult(selection, winner) {
    const div = document.createElement('div')
    div.innerText= selection.img
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)

}

function Winner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SElECTIONS.length)
  return SElECTIONS[randomIndex]
}
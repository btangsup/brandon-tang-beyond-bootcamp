/* PSEUDO CODE

1. grab the word data base and store in a empty array that will hold 25 words
2. create a function that will randomize and select 25 of the words from the data base
3. create a function that will randomize the coloured objectives.
    Example: 9 words will be blue/red
            8 cards will be blue/red
            1 card will be a black card
            7 cards will be a neutral color
4. create two buttons (codemaster and player) that will display two different options
    - one will display the coloured board for the codemaster
    - two will display a regular board that will have 
5. 
*/
// team color variables

let NUMBER_OF_WORDS = 25;

const RED_CARDS = "#ff0000";
const BLUE_CARDS = "#0000ff";
const NEUTRAL_CARDS = "#222ccc";
const BLACK_CARD = "#000";
let game_over = false;

// HANDLERS //
const playerBoard = document.querySelector('#player');
const codemasterBoard = document.querySelector('#codemaster');

// INFO JS

const infoModalInner = document.querySelector('.info-modal-inner');
const infoModalOuter = document.querySelector('.info-modal-outer');
const info = document.querySelector(".info");


function showInfo () {
    // show info from inner info modal
    infoModalOuter.classList.add('open');
}

function closeInfo() {
    const exitBtn = document.querySelector(".exit-button");
    infoModalOuter.classList.remove("open");
}

infoModalOuter.addEventListener('click', function(event){
    const clickedOutside = !event.target.closest('.info-modal-inner');

    if (clickedOutside) {
        infoModalOuter.classList.remove("open");
    }
})

window.addEventListener('keydown', (e) => {
    console.log(e);
    if(e === 'Escape') {
        closeInfo();
    }
})

info.addEventListener('click', showInfo);


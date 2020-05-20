/* PSEUDO CODE

// 1. grab the word data base and store in a empty array that will hold 25 words
// 2. create a function that will randomize and select 25 of the words from the data base
3. create a function that will randomize the coloured objectives.
    Example: 9 words will be blue/red (let)
            8 cards will be blue/red (let)
            1 card will be a black card (const)
            7 cards will be a neutral color (const)

            use a counter for each colour
            assign a colour to each word via (print out a list from 1 to end.) (viewable through toggle)

            stretch goal
            visualize the list



5. create a conditional to check if the team that selected the word is valid
    build a function to check red, check blue (functional programming)


helper

that will add to the score ( if correct, score ++)

look into creating states to keep track of things like timer, js

    
4. create two buttons (codemaster and player) that will display two different options
    - one will display the coloured board for the codemaster
    - two will display a regular board that will have 
5. 
*/
// team color variables

const codeWordbank = ["react", "vue", "syntax", "javascript", "typescript", "css", "SASS", "promises", "callback", "design", "front-end", "function", "conditionals", "back-end", "src", "jquery", "api", "json", "juno", "bootcamp", "projects", "vs-code", "wordpress", "website", "apps", "agile", "gong", "1", "north-pole", "south-pole", "scope", "curry", "tags", "cohort", "25", "konami", "portfolio", "salad-club", "show and tell", "deadlines", "laptop", "squirtle-squad", "marley", "instructor", "career", "console", "libraries", "frameworks", "memes", "hacker", "debug", "float", "flex", "forms", "grids", "github", "objects", "arrays", "boolean", "variables", "props", "bubbling", "events", "map", "filter", "snippets", "atom", "classroom", "tech-test", "interview", "undefined", "null", "DOM", "Beagel", "Bagel", "RegEx", "responsive", "accessbility", "navigation", "hamburger", "layout", "global", "block", "onClick", "components", "class", "firebase", "experience", "memory", "npm", "node", "tabs", "spaces", "footer", "header", "html", "xml", "colour", "modular", "fizzbuzz", "zoom", "toronto", "queen st", "hello world", "const", "let", "var", "absolute", "sticky", "relative", "transform", "margin", "padding", "mentors", "fishbowl", "pokemon API", "dreamhost", "props", "pair-programming", "mob-programming", "skills", "chocolate eggs", "es6", "arrow", "fundamentals", "logic", "circle of chairs", "pajamas", "salad", "calzone", "soup", "sandwich", "animal-crossing", "coffee", "bubble-tea", "sushi", "bar", "this", "data", "php", "mindblown", "secure", "sublime", "plugins", "dog", "border", "gradients", ];



const teams = [];
const RED_CARDS = "#ff0000";
const BLUE_CARDS = "#0000ff";
const NEUTRAL_CARDS = "#222ccc";
const BLACK_CARD = "#000";
let codemasterMode = false;
let playerMode = true;
const codenamesGrid = document.querySelector('.codenames-grid');

// HANDLERS //
const playerBoard = document.querySelector('#player');
const codemasterBoard = document.querySelector('#codemaster');

// INFO JS

const infoModalInner = document.querySelector('.info-modal-inner');
const infoModalOuter = document.querySelector('.info-modal-outer');
const info = document.querySelector(".info");

// randomly select 25 words and store into an array

const shuffledWords = [...codeWordbank].sort(() => 0.5 - Math.random());
const CODENAME_WORDS = shuffledWords.slice(0, 25);
console.log(CODENAME_WORDS);

// create word card function to display randomly selected words

CODENAME_WORDS.forEach(function (randomword) {
    // assign respective color to the word (?!?!?!)
    // look into creating a flip card 
    const word = document.createElement('div');
    word.classList.add('card');
    word.innerHTML = randomword;
    codenamesGrid.appendChild(word);

    //add a listener to each word 

    word.addEventListener('click', function (e) {
        console.log(e.target.innerHTML ,' | this is for team ___');
        // create a boolean to validate if the word matches the respective team objective
    })
})

// create a switch statement to help deligate points

// switch (color) {
//     case "red":
//         redScore++;
//         break;
//     case "blue":
//         blueScore++;
//         break;
//     case "black":
//         console.log('Other team wins!');
//         break;
//     case "neutral":
//         // turn over the possession and have other team choose
// }

// function updateScore(blue,red) {
//     const redScores = document.querySelector('#red-score');
//     const blueScore = document.querySelector('#blue-score');
//     const scores = document.querySelector('.score-container')


//     const redScore = document.createElement('span')
//     redScore.classList.add('card')

//     redScore.innerHTML(redScore);

//     scores.appendChild(redScore)

// }

// CODE MASTER MODE (SHOW THE BOARD THE COLOURS)


function toggleBoard () {
    codemasterMode = true;
    console.log('clicked', `is now ${codemasterMode}`)
}

codemasterBoard.addEventListener("click", toggleBoard);




function showInfo () {
    // show info from inner info modal
    infoModalOuter.classList.add('open');
}

document.querySelector('.exit-button').addEventListener('click', function(e){
    infoModalOuter.classList.remove("open");
})


infoModalOuter.addEventListener('click', function(event){
    const clickedOutside = !event.target.closest('.info-modal-inner');

    if (clickedOutside) {
        infoModalOuter.classList.remove("open");
    }
})

window.addEventListener('keydown', (e) => {
    console.log(e);
    if(e === 'Escape') {
    }
})

info.addEventListener('click', showInfo);



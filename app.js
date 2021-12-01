// import functions and grab DOM elements
import { makeStatsString } from './utils.js';
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('chatchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
// set state for all of the character's catchphrases
let catchPhrases = [];
let head = 0;
let middle = 0;
let bottom = 0;

headDropdown.addEventListener('change', () => {
    handleClick('head', headEl);
});


middleDropdown.addEventListener('change', () => {
    handleClick('middle', middleEl);
});


bottomDropdown.addEventListener('change', () => {
    handleClick('bottom', bottomEl);
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    let phrase = catchphraseInput.value;
    // push the new catchphrase to the catchphrase array in state
    catchPhrases.push(phrase);
    // update the dom for the bottom
    // catchphrasesEl.textContent = '';
    // clear out the form input's value so it's empty to the user
    catchphraseInput.value = '';
    // update the dom to show the new catchphrases (call a function to do this work)
    displayCatchphrases(catchPhrases);

});

function displayStats() {
    // change the text contentof the reportEl to tell the user how many times they've changed each piece of the state
    const statsString = makeStatsString(head, middle, bottom); // call this function with the correct arguments
    reportEl.textContent = statsString;
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    catchphrasesEl.textContent = '';
    // loop through each catchphrase in state
    for (const phrase of catchPhrases) {
        let p = document.createElement('p');
        p.textContent = phrase;
        catchphrasesEl.append(p);
    }
}

const handleClick = (article, el) => {
    let descriptor;
    if (article === 'bottom') {
        descriptor = 'pants';
    } else {
        descriptor = article;
    }
    let val;
    let articles;
    switch (article) {
        case 'bottom':
            val = bottomDropdown.value;
            articles = () => {
                bottom++;
            };
                
            break;
        case 'head':
            val = headDropdown.value;
            articles = () => {
                head++;
            };
            break;
        case 'middle':
            val = middleDropdown.value;
            articles = () => {
                middle++;
            };
            break;
    }
    
    articles();
    el.textContent = '';
    let newEl = document.createElement('img');
    newEl.src = `./assets/${val}-${descriptor}.png`;
    el.append(newEl);
    displayStats();
};

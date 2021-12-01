// import functions and grab DOM elements
import { makeStatsString, textFormatter } from './utils.js';
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('chatchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

let states = {
    catchPhrases: [],
    head: 0,
    middle: 0,
    bottom: 0
};

headDropdown.addEventListener('change', (event) => {
    handleClick(event);
});

middleDropdown.addEventListener('change', (event) => {
    handleClick(event);
});

bottomDropdown.addEventListener('change', (event) => {
    handleClick(event);
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    let phrase = catchphraseInput.value;
    // push the new catchphrase to the catchphrase array in state
    states.catchPhrases.push(phrase);
    // update the dom for the bottom
    // catchphrasesEl.textContent = '';
    // clear out the form input's value so it's empty to the user
    catchphraseInput.value = '';
    // update the dom to show the new catchphrases (call a function to do this work)
    displayCatchphrases(states.catchPhrases);

});

function displayStats() {
    // change the text contentof the reportEl to tell the user how many times they've changed each piece of the state
    const statsString = makeStatsString(states.head, states.middle, states.bottom); // call this function with the correct arguments
    reportEl.textContent = statsString;
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    catchphrasesEl.textContent = '';
    // loop through each catchphrase in state
    for (const phrase of states.catchPhrases) {
        let p = document.createElement('p');
        p.textContent = phrase;
        catchphrasesEl.append(p);
    }
}

const handleClick = (event) => {
    let val = event.target.value;

    let descriptor = textFormatter(event.target.id);
    
    states[descriptor]++;
    
    let domEl = document.getElementById(descriptor);

    domEl.textContent = '';
    let newEl = document.createElement('img');

    if (descriptor === 'bottom') {
        descriptor = 'pants';
    }

    newEl.src = `./assets/${val}-${descriptor}.png`;
    domEl.append(newEl);
    displayStats();
};
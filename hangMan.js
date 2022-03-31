let userGuess = document.getElementById('word')
let lives = document.getElementById('lives')
let startBtn = document.getElementById('start-btn')
let finalMessage = document.getElementById('final-message')
let letters = document.getElementsByClassName('alphabet')
console.log(letters[0].innerHTML)
let displayedHint = document.getElementById('hint')
let letter;
let initialFill;
let tries = []
let chosenWord;
let failed = 0


const words = ["banana", "cotton", "facebook", "school", "ghana", "abuja"];

const hints = ["fruit", "fabric", "social-media", "place", "country", "state"];

function generateWord() { // Function that generates the word randomly	
	let randNum = Math.floor(Math.random() * words.length);
	chosenWord = words[randNum];
    return chosenWord
}

function generateHint(word){
	let index = words.indexOf(word);
	let hint = hints[index];
    return hint
}

function guessedWord() {
    userGuess.innerHTML = chosenWord.split('').map(letter => (tries.indexOf(letter) >= 0 ? letter.toLowerCase() : "_ ")).join('');
    //document.getElementById('display1').value = wordStatus;
}


function checkGameWon(){
    if(userGuess.toLowerCase() === chosenWord){
        for(let each of letters){
            each.disabled = true;
            each.style.backgroundColor = "#fdcc94"
        }
    }
    message.innerHTML = "----YOU'VE WON!!!----"
}

/* ---when start is clicked to begin game--- */
function handleStart(){
    chosenWord = generateWord()
    displayedHint = generateHint()
    tries = []
    failed = 0;
    initialFill = chosenWord.replace(/[A-Z]/g, '_ ')
    for(let each of letters){
        each.disabled = false;
        each.style.backgroundColor = "#fdcc94"
    }
}

/* ---To target each alphabet press/click--- */
document.querySelector('.alpha-container').addEventListener('click', e => {
    if(e.target.matches('button')){
        letter = e.target
        let alpha = letter.innerHTML
        console.log(alpha)
        tries.indexOf(alpha) === -1 ? tries.push(alpha) : null
        letter.style.backgroundColor = "grey"
        letter.disabled = true;

        if(chosenWord.includes(alpha)){
            guessedWord();
            checkGameWon();
        }
        else{
            failed++;
            checkGameLost();
        }
    }
})

    //while(remainingLetters > 0){
        //let guess = prompt("Guess the letter: ");
        // letter = letter.toLowerCase();
        // if(guess === null) break
        // else if(guess.length !== 1) alert("Please Enter a single Letter");
        //     for(let i = 0; i < secretWord.length;i++){
        //             if(secretWord[i] === letter){
        //                     userGuess[i] = letter;
        //                     remainingLetters--;      
        //             }
        //     }
        //     lives--;
        //     console.log(userGuess)

        // if(lives > 0)
        //     //alert(`You have ${lives} lives left. Keep Guessing...`)
        //     console.log(`You have ${lives} lives left. Keep Guessing...`)

        // if(lives === 0) {
        //     break;
        // }
    //}




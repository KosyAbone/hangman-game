let userGuess = document.querySelector('#word')
let hint = document.querySelector('#hint')
let lives = document.querySelector('#lives')
let startBtn = document.querySelector('.start-btn')
let quitBtn = document.querySelector('.quit-btn')
let finalMessage = document.querySelector('#final-message')
let letters = document.querySelectorAll('.alphabet')

let letter;
let initialFill;
let tries = []
let chosenWord;
let chosenHint;
let failed = 0


const words = ["banana", "cotton", "facebook", "school", "ghana", "abuja"];

const hints = ["fruit", "fabric", "social-media", "place", "country", "state"];

function generateWord() { // Function that generates the word randomly	
	let randNum = Math.floor(Math.random() * words.length);
	let word = words[randNum];
    return word
}

function generateHint(word){
	let index = words.indexOf(word);
	let hint = hints[index];
    return hint;
}

function showWord() {
    userGuess.innerHTML = chosenWord.split('').
                            map(letter => 
                                (tries.indexOf(letter) >= 0 ? letter.toLowerCase() : "_ "))
                            .join('');
    hint.innerHTML = chosenHint
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
    console.log('clicked')
    chosenWord = generateWord().toLowerCase()
    chosenHint = generateHint(chosenWord)
    showWord()
    tries = []
    failed = 0;
    initialFill = chosenWord.replace(/[A-Z]/g, '_ ')
    for(let each of letters){
        each.disabled = false;
        each.style.backgroundColor = "#fdcc94"
    }
}
startBtn.addEventListener('click', handleStart)

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




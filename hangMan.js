let userGuess = document.getElementById('word')
let lives = document.getElementById('lives')
let letters = document.querySelector('.alpha-container')
let displayedHint = document.getElementById('hint')
hint.innerText = "animal"
let letter;
let tries = []
let chosenWord;




const words = ["banana", "cotton", "facebook", "school", "ghana", "abuja"];

const hints = ["fruit", "fabric", "social-media", "place", "country", "state"];

function generateWord() { // Function that generates the word randomly	
	let randNum = Math.floor(Math.random() * words.length);
	let chosenWord = words[randNum];
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

/* Testing the generation of words and hints */
// let w = generateWord()
// console.log(w)
// console.log(generateHint(w))

// let chosenWord = generateWord()
// let chosenHint = generateHint(chosenWord)
// console.log(chosenWord)
// console.log(chosenHint)

// function play(){
//     let word

// }

//userGuess.innerText = [...secretWord].map( i => i = '_').join(' ');
// userGuess = userGuess.innerText.split('')
// console.log(userGuess)

//let remainingLetters = secretWord.length
//console.log(remainingLetters)


letters.addEventListener('click', e => {
    if(e.target.matches('button')){
        letter = e.target.innerText
        //console.log(letter)
        
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




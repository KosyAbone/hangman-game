let guessWord = document.getElementById('word')
let lives = document.getElementById('lives')
let letters = document.querySelectorAll('.alpha-container')
let hint = document.getElementById('hint')
let letter;
// console.log(guessWord.innerText)
// console.log(lives.innerText)
// for(let z of letter){
//     console.log(z.innerText)
// }
const secretWord = "APEMONKEY";
guessWord.innerText = [...secretWord].map( i => i = '_').join(' ');
guessWord = guessWord.innerText.split('')
console.log(guessWord)
hint.innerText = "animal"
let remainingLetters = secretWord.length
console.log(remainingLetters)


letters.addEventListener('click', e => {
    if(e.target.matches('button')){
        letter = e.target.innerText
        console.log(letter)
    }
    //while(remainingLetters > 0){
        //let guess = prompt("Guess the letter: ");
        // letter = letter.toLowerCase();
        // if(guess === null) break
        // else if(guess.length !== 1) alert("Please Enter a single Letter");
        //     for(let i = 0; i < secretWord.length;i++){
        //             if(secretWord[i] === letter){
        //                     guessWord[i] = letter;
        //                     remainingLetters--;      
        //             }
        //     }
        //     lives--;
        //     console.log(guessWord)

        // if(lives > 0)
        //     //alert(`You have ${lives} lives left. Keep Guessing...`)
        //     console.log(`You have ${lives} lives left. Keep Guessing...`)

        // if(lives === 0) {
        //     break;
        // }
    //}

})


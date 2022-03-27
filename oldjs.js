const gameStart = () => {
    console.log(`----------------------------------------------
Welcome to the Hangman Game!!!
----------------------------------------------
    
Game Started...\n`)
}

const play = () => {
    const secretWord = "apee";
    let lives = 6;

    const guessArray = [...secretWord].map( i => i = '_');
    console.log(guessArray)
    let remainingLetters = secretWord.length
    

const gameOver = () => {
    if(remainingLetters === 0){
        alert("You Win!!! You're a Champ");
        console.log("You Win!!!! You're a Champ");
    }
    if(lives === 0){
        alert("Ouch!!! You're DEAD! Better luck next time...")
        console.log("Ouch!!! You're DEAD! Better luck next time...")
    }
}

    while(remainingLetters > 0){
            let guess = prompt("Guess the letter: ");
            guess = guess.toLowerCase();
            if(guess === null) break
            else if(guess.length !== 1) alert("Please Enter a single Letter");
                for(let i = 0; i < secretWord.length;i++){
                        if(secretWord[i] === guess){
                                guessArray[i] = guess;
                                remainingLetters--;      
                        }
                    }
                    lives--;
                    console.log(guessArray)

            if(lives > 0)
                //alert(`You have ${lives} lives left. Keep Guessing...`)
                console.log(`You have ${lives} lives left. Keep Guessing...`)

            if(lives === 0) {
                break;
            }
    }
       
    gameOver()

 }

gameStart();
play()
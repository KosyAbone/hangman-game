// const hangman = () => {

// return gameStart();

// }

function gameStart() {
    console.log(`----------------------------------------------
Welcome to the Hangman Game!!!
----------------------------------------------
    
Game Started...\n`)
}

const play = function(){
    const secretWord = "apee";
    const toFill = []
    let tries;
    let lives = 6
    let present = true
    let guess = "n"

        // while(tries < 6){
        //     const guess = prompt("Guess the letter: ");
        //     if(secretWord.includes(guess)){
        //         let noOfFound = secretWord.split(guess).length - 1
        //         if(noOfFound == 1){
        //             let ind = secretWord.indexOf(guess);
        //             toFill[ind] = guess;
        //         }
        //         if(noOfFound > 1){

        //         }
        //     }
        for(let i = 0; i < secretWord.length;i++){
            const guess = prompt("Guess the letter: ");
            //guess = guess.toLowerCase();
            while(present){
                if(secretWord[i] === guess){
                    toFill[i] = guess;
                    present = true;
                    i++;
                }
            }
            if(!present){present = false}
            tries++
            console.log(`You have ${--lives}lives left!`);
            if(toFill.join('') === secretWord){
                console.log(`You Win! You tried ${tries} times. `);
                break
            }
            if(tries === 6){
                console.log(`You ran out of lives. SORRY!!!`);
                break;
            }
            console.log(`array is ${toFill}`)
            console.log(`guess is ${guess}`)

        }
        //}
        return
}

gameStart();
play()
let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector("#subt")
const Userinput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement("p");

let prevGuess = []
let numGuess = 1

let playGame= true;

if(playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault();
        const guess = parseInt(Userinput.value);
        console.log(guess);
        validateGuess(guess);
    })
}; 


function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a number between 1 and 100") 
    } else if(guess < 1 || guess > 100){
        alert("Please enter a number between 1 and 100")
    } else {
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over! Random Number was ${randomNumber}`);
            endGame()
        } else{
            displayGuess(guess);
            checkGuess(guess);
            numGuess++;
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage('You guessed it right!!!')
        endGame()
    } else if (guess < randomNumber){
        displayMessage("Number is TOO low")
    } else if (guess > randomNumber){
        displayMessage("Number is TOO high")
    }
}

function displayGuess(guess){
    Userinput.value =  ''
    guessSlot.innerHTML += `${guess}  `
    remaining.innerHTML = `${11 - prevGuess.length}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
    const newgameButton = document.querySelector('#newGame')
    newgameButton.addEventListener('click',function(e){
            randomNumber = parseInt(Math.random() * 100 + 1) ; 
            prevGuess = []
            numGuess = 1
            guessSlot.innerHTML = ''
            remaining.innerHTML = `${11 - prevGuess.length}`
            Userinput.removeAttribute('disabled')
            startOver.removeChild(p)

            playGame = true
    }) 
}

function endGame(){
    Userinput.value = ""
    Userinput.setAttribute('disabled' , '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start new game</h2>`;
    startOver.appendChild(p)
    playGame = false;
    newGame()
}
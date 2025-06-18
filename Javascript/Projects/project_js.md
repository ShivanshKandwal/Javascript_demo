# Projects related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project One 

```javascript
console.log("Shivansh")
const buttons = document.querySelectorAll('.button'); // selecting class button
const body = document.querySelector("body")

buttons.forEach(function (button) {
    console.log(button) ;
    button.addEventListener('click', function (e) {
        console.log(e) ; // event object
        console.log(e.target) ; // target of the event
        switch(e.target.id){
            case 'grey' :
                body.style.backgroundColor = 'grey' ;
                break;
            case 'white' :
                body.style.backgroundColor = 'white' ;
                break;
            case 'blue' :
                body.style.backgroundColor = 'blue' ;
                break;
            case 'yellow' :
                body.style.backgroundColor = 'yellow' ;
                break;
        }
    })
}) ;  // looping through each buttonS
```

## project Two

```javascript
console.log("Shivansh")
const form = document.querySelector('form');
//const height = parseInt(document.querySelector('#height').value);
// this value will give empty string as it is outside the event listener

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting normally and refreshing the page
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if(height === '' || height <0 || isNaN(height)) {
        result.innerHTML = `Please enter a valid height. ${height}`;
    }
    else if(weight === '' || weight <0 || isNaN(weight)) {
        result.innerHTML = `Please enter a valid weight. ${weight}`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        result.innerHTML = `<span>Your BMI is ${bmi} </span>`;
    }
})
```

## project Three

```javascript
console.log("Shivansh")

const clock = document.getElementById('clock');
//const clock = document.querySelector('#clock'); //alt method

let date = new Date();
console.log(date.toLocaleDateString());

setInterval(function(){
    //console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
},1000);
```

## project Four

```javascript
console.log("Shivansh")

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
```


## project Five

```javascript
const randomColor = function (){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for ( let i = 0 ; i < 6 ; i++ ){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};
let intervalID ; 

const startChangingColor = function() {
    if(!intervalID){
        intervalID = setInterval(changeBGcolor,1000);
    }

    function changeBGcolor(){
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChangingColor = function() {
     clearInterval(intervalID);
     intervalID = null ; 
}

document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);
```

## project Six

```javascript
console.log('Project 5');
const insert = document.getElementById('insert')

window.addEventListener('keydown',(e) => {
    insert.innerHTML = `
    <div class ="color">
        <table>
        <tr>
            <th>Key</th>
            <th>KeyCode</th>
            <th>code</th>
        </tr>
        <tr>
            <td>${e.key === "" ? `space` : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
      
        </table>
    </div>
    `
})
```

## project Seven

```javascript

```
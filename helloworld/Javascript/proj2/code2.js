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

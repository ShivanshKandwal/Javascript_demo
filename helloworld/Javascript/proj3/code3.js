const clock = document.getElementById('clock');
//const clock = document.querySelector('#clock'); //alt method

let date = new Date();
console.log(date.toLocaleDateString());

setInterval(function(){
    //console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
},1000);
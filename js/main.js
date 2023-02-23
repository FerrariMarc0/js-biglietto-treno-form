'use strict'
let button = document.getElementById('gen');
let raceKm = document.getElementById('road').value;
const priceForKm = 0.21;
const totPrice = priceForKm * raceKm;
const juniorDiscount = (totPrice / 100) * 20;
const seniorDiscount = (totPrice / 100) * 40;
const overView = document.getElementById('recap');
const userName = document.getElementById("input_name").value;
const num = Math.round(Math.random() * 100000);
const num1 = Math.round(Math.random() * 10);

button.addEventListener('click',
function(){
    let inputElement = document.getElementById('input_name').value;
    document.getElementById("identity").innerHTML = inputElement; 
    document.getElementById("ccp").innerHTML = num;
    document.getElementById("car").innerHTML = num1;
    overView.classList.toggle('show');
});







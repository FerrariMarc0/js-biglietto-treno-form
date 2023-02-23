'use strict';

const button = document.getElementById('gen');
const resetButton = document.getElementById('hide');
const userName = document.getElementById('input_name');
const raceKm = document.getElementById('road');
const age = document.getElementById('eta');
const juniorDiscount = 0.8;
const seniorDiscount = 0.6;
const overView = document.getElementById('recap');
const num = Math.round(Math.random() * 100000);
const num1 = Math.round(Math.random() * 10);

button.addEventListener('click',
function(){
    const inputNameValue = userName.value;
    const inputKmValue = Number(raceKm.value);
    const inputAgeValue = eta.value;

    console.log(inputNameValue, inputKmValue, inputAgeValue);

    let ticketPrice = 0.21 * inputKmValue;

    console.log({ticketPrice});

    if(inputAgeValue === 'minor'){
        ticketPrice = ticketPrice * juniorDiscount;
        console.log(`Ti spetta uno sconto del 20%, il prezzo totale è ${ticketPrice} euro`);
    } else if(inputAgeValue === 'senior'){
        ticketPrice = ticketPrice * seniorDiscount;
        console.log(`Ti spetta uno sconto del 40%, il prezzo totale è ${ticketPrice} euro`);
    }
    console.log(`Il prezzo totale è ${ticketPrice} euro`);
    console.log({ticketPrice});
    document.getElementById("identity").innerHTML = inputNameValue;
    document.getElementById("age").innerHTML = inputAgeValue;
    document.getElementById("price").innerHTML = `${ticketPrice.toFixed(2)}€`;
    document.getElementById("ccp").innerHTML = num;
    document.getElementById("car").innerHTML = num1;
    
});

resetButton.addEventListener('click', function(){
    overView.classList.toggle('show');
})






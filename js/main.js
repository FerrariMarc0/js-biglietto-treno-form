'use strict'

const priceForKm = 0.21;
const totPrice = priceForKm * raceKm;
const juniorDiscount = (totPrice / 100) * 20;
const seniorDiscount = (totPrice / 100) * 40;
let sum1 = 0;
let sum2 = 0;
if(18 > userAge){
    sum1 = totPrice - juniorDiscount;
    document.getElementById("price").innerHTML = sum1.toFixed(2);
    console.log (`Vuoi percorrere ${raceKm}km ed hai ${userAge} anni, ti spetta uno sconto del 20% per un totale di ${sum1.toFixed(2)} euro.`);
} else if(userAge > 64){
    sum2 = totPrice - seniorDiscount;
    document.getElementById("price").innerHTML = sum2.toFixed(2);
    console.log (`Hai ${userAge} anni e vuoi percorrere ${raceKm}km, ti spetta uno sconto del 40% per un totale di ${sum2.toFixed(2)} euro.`);
} else{
    document.getElementById("price").innerHTML = totPrice.toFixed(2);
    console.log (`Hai ${userAge} anni e vuoi percorrere ${raceKm}km, il prezzo del biglietto è di ${totPrice.toFixed(2)} euro.`);
}
document.getElementById("km").innerHTML = raceKm;
document.getElementById("age").innerHTML = userAge;


/*
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
*/

let elUserName = document.getElementById("username");
let elDistance = document.getElementById("distance");
let elAge = document.getElementById("age");
console.log(elUserName, elDistance, elAge)
let elPrintTicket = document.querySelector(".btn")
let elPriceToPay = document.getElementById("pricetopay");

elPrintTicket.addEventListener('click', function(){
    if (elAge.value = Minorenne) {
        let price = price*(1 - 0.2) 
    }
        //  else if (age.value == over65) {
    //     let price = price*(1 - 0.4)
    // }
   
    // let price = elDistance.value*0.21
    // let priceUnder18 = price*(1 - 0.2)
    // let priceOver65 = price*(1 - 0.4)
    // console.log(price, priceOver65, priceUnder18)
    
    // elPriceToPay.value = price;
    // if (age = Minorenne) {

    // }
})
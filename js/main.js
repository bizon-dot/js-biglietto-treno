/*

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.
    L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*/


/*  
    ==================================
        1.Dichiaro le variabili
    ==================================
*/

var user_age;
var km_trip;
var cost_trip;

/*  
    ==================================
        2.Popolo le variabili 
    ==================================

    uso parseInt per convertire l'input str in Int
    e typeof per debuggare il tipo di var
*/

user_age = parseInt(prompt(`Inserisci la tua età:`));
km_trip = parseInt(prompt(`Inserisci la distanza che devi percorrere in km`));

// console.log(typeof(user_age));

/*  
    ==================================
        2. Calcolo il prezzo in 
        base alle condizioni
    ==================================
*/

if ( user_age < 18 ) {
    
    // Minorenni
    cost_trip = (km_trip * 0.24) * 0.8;

} else if ( user_age > 65) {

    // Over 65
    cost_trip = (km_trip *0.24) * 0.6;

} else {
    // Standard
    cost_trip = (km_trip *0.24);
}

/*  
    ==================================
        3. Stampo il prezzo in 
           console
    ==================================

    uso il toFixed per arrodondare a due cifre decimali
*/

console.log(cost_trip.toFixed(2));
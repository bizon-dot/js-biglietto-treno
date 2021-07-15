/*

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.
    L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*/



/*  
    =====================================
        1. Ritorna un array con i dati dell'utente
    ===================================

    uso parseInt per convertire l'input str in Int
    e typeof per debuggare il tipo di var
*/
function userDataInput() {
    var user_age = parseInt(prompt(`Inserisci la tua età:`));
    var km_trip = parseInt(prompt(`Inserisci la distanza che devi percorrere in km`));
    // Creo array
    var data = [];
    // Assegno valori
    data["user_age"] = user_age;
    data["km_trip"] = km_trip;
    return data;
}


/*  
    ==============================================================
        2. Funzione per calcolare il prezzo e l'eventuale sconto
    ==============================================================
*/
function calculatePrice(data) {

    if (data["user_age"] < 18) {

        // Minorenni
        var cost_trip = (data["km_trip"] * 0.24) * 0.8;

    } else if (data["user_age"] > 65) {

        // Over 65
        var cost_trip = (data["km_trip"] * 0.24) * 0.6;

    } else {
        // Standard
        var cost_trip = (data["km_trip"] * 0.24);
    }

    return cost_trip;
}

/*  
    ==============================================================
        3. Funzione main - attiva all'onclick
    ==============================================================
*/

function main() {
    data = userDataInput();
    var price = calculatePrice(data);
    document.getElementById("price").innerHTML = "Prezzo:\u0009" + price.toFixed(2) + "€";
    /*  
    ==================================
        4. Stampo il prezzo in 
           console
    ==================================

    uso il toFixed per arrodondare a due cifre decimali
*/

    console.log(price.toFixed(2));
}
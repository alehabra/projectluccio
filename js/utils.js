/*
 * Liberty Software
 * Progetto     : Luccio
 * File         : utils.js
 * Descrizione  : Funzoni comuni utili
 * Autore       : Marco Botter
 * Data         : 11/03/2021
 * Versione     : Alpha
 */

/*
 * Ritorna un parametro rispettando un range
 * Parametri:
 * - int value;                                 //Valore da riportare nel range
 * - int min;                                   //Minimo che può assumere
 * - int masx;                                  //Massimo che può assumere
 * Ritorna:
 * - int
 */
function checkBounds(value, min, max)
{
    if (value<min)                              //Se il valore è al di sotto di un minimo
    {
        return min;                             //Ritorna il minimo
    }
    else
    {
        if (value > max)                        //Se il valore supera il massimo
        {
            return max;                         //Ritorna massimo
        }
        else
        {
            return value;                       //Ritorna valore inalterato
        }
    }
}

/*
 * Ritorna un intero random
 * Parametri:
 * - int min;                                   //Minimo
 * - int max;                                   //Massimo
 * Ritorna:
 * - int
 */
function randomInt(min, max) {
    return Math.floor(Math.random()*
        (max-min+1))+min;                       //Ritorna numero casuale

}

/*
 * Ritorna un elemento random da un array
 * Parametri:
 * - Array arr;                                 //Array di prelievo
 * Ritorna:
 * - Object
 */
function random(arr)
{
    var element=null;                                   //Ospite elemento
    while(element===null)                               //Ficnhè non viene prelevato un elemnto valido
    {
        element=(arr[randomInt(0, arr.length - 1)]);    //Preleva un elemento casuale
    }
    return element;                                     //Ritorna elemento prelevato
}
/*
 * Visualizza i campi del gico nella pagina di test
 * Parametri:
 * - Game game                                          //Gioco di cui effettuare il dump
 */
function gamedump(game)
{
    document.getElementById("dump").
        innerHTML=game.toString();                      //Scrivi dati salienti gioco
}




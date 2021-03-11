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
 * - int value;     //Valore da riportare nel range
 * - int min;       //Minimo che può assumere
 * - int masx;      //Massimo che può assumere
 * Ritorna:
 * - int
 */
function checkBounds(value, min, max)
{
    if (value<min)          //Se il valore è al di sotto di un minimo
    {
        return min;         //Ritorna il minimo
    }
    else
    {
        if (value > max)    //Se il valore supera il massimo
        {
            return max;     //Ritorna massimo
        }
        else
        {
            return value;   //Ritorna valore inalterato
        }
    }
}


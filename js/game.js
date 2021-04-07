/*
 * Liberty Software
 * Progetto     : Luccio
 * File         : game.js
 * Descrizione  : Stato e gestore del gioco
 * Autore       : Marco Botter
 * Data         : 11/03/2021
 * Versione     : Alpha
 */

/*
 * Costruttore (inizia il gioco)
 * Ritorna:
 * - Game                                                           //Stato e gestore del gioco
 */
function Game()
{
    this.player = new Character("Eroe", "", getRandomObject());       //TODO: Sostituire con la scelta tra 4 personaggi
    this.currentFloor = new Floor(this.player);                       //Genera un piano

    /*
     * TODO: Gestione dei turni, 3 azioni alternando i turni, ogni attività spende 1 azione
     *       Chi inizia è scelto casualmente
     *       Oggetto di tipo turno? Di tipo azione? Oggetto di tipo stato?
     */

    /*
     * Crea stringa con i dati salienti
     * Ritorna:
     * - String
     */
    this.toString=function()
    {
        return this.currentFloor.toString();                                //Riepilogo piano
    }
}

/*
     * Combattimento tra personaggi A e B
     * Parametri:
     * - Character charA;                                                   //Personaggio A
     * - Character charB;                                                   //Personaggio B
     */
function battle(charA, charB)
{
    if(charA.bag.type===OBJECT_TYPE_WEAPON)                                 //Se il personaggio A impugna un'arma
    {
        if(charB.bag.type===OBJECT_TYPE_WEAPON)                             //e l'ha anche il personaggio B
        {
            charA.damage(checkBounds                                        //Infliggi al personaggio A
                    (charB.bag.value-charA.bag.value),                      //i danni dati non parati dell'arma di B
                0, GENERIC_STATS_MAX);                                      //nel range di validità
            charB.damage(checkBounds                                        //Infliggi al personaggio B
                    (charA.bag.value-charB.bag.value),                      //i danni dati non parati dell'arma di A
                0, GENERIC_STATS_MAX);                                      //nel range di validità
        }
        else                                                                //Se il personaggio B è disarmato
        {
            charB.damage(checkBounds(charA.bag.value),                      //Infliggi al personaggio B i danni dell'arma di A
                0, GENERIC_STATS_MAX);                                      //nel range di validità
        }
    }
    else                                                                    //Se il personaggio A è disarmato
    {
        if(charB.bag.type===OBJECT_TYPE_WEAPON)                             //e il personaggio B è armato
        {
            charA.damage(checkBounds(charB.bag.value),                      //Infliggi al personaggio A i danni dell'arma di B
                0, GENERIC_STATS_MAX);                                      //nel range di validità
        }
        else
        {
            /*
             * Entrambi disarmati, la battaglia non ha luogo
             */
        }
    }
}


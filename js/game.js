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
 * Riferimenti globali
 */
var game;                                                           //Riferimento globale al gioco

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
     * Crea stringa con i dati salienti
     * Ritorna:
     * - String
     */
    this.toString=function()
    {
        var str=this.currentFloor.toString();                               //Riepilogo piano
        str+="<br><br><button onclick='game.play()'>Avanti</button>"
        return str;
    };

    /*
     * Logica di di gioco
     */
    this.play=function()
    {
        alert("funzia");
        if(this.currentFloor.actions>NO_MORE_ACTIONS)                       //Se sul piano corrente si possono eseguire ancora azioni
        {
            if(this.currentFloor.turn===TURN_PLAYER)                        //Se è il turno del giocatore
            {

            }
            else
            {
                //TODO: Turno della cpu
            }
            this.currentFloor.actions--;                                    //Diminuisci azioni rimanenti
        }
        else
        {
            //TODO: Cambio piano
            alert("Cambio piano!");
        }
    };
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


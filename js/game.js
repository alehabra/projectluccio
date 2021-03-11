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
 * - Game                                                       //Stato e gestore del gioco
 */
function Game()
{
    this.player=new Character("Eroe", "", getRandomObject());   //TODO: Sostituire con la scelta tra 4 personaggi
    this.currentFloor=new Floor(this.player);                   //Genera un piano
    /*
     * Gioca... TODO: Implementare...
     */
    this.play=function()
    {
        //TODO: Implementare logica di gioco...
    }
}


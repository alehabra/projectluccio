/*
 * Liberty Software
 * Progetto     : Luccio
 * File         : floors.js
 * Descrizione  : Definizione e funzioni relative al "piano" dove si svolge il gioco
 * Autore       : Marco Botter
 * Data         : 11/03/2021
 * Versione     : Alpha
 */

const FLOOR_NUMBER_MAX=100;
const FLOOR_NUMBER_MIN=1;

/*
 * Costruttore piano
 * Parametri:
 * - Character player;                                          //Giocatore
 * Ritorna:
 * - Floor;
 */
function Floor(player)
{
    this.number=randomInt(FLOOR_NUMBER_MIN, FLOOR_NUMBER_MAX);  //Imposta numero casuale piano
    this.objects=getFloorObjects(this.number);                  //Ottieni oggetti presenti nel piano
    this.player=player;                                         //Imposta giocatore
    this.enemy=getEnemy(player);                                //Imposta avversario
}
/*
 * Liberty Software
 * Progetto     : Luccio
 * File         : floors.js
 * Descrizione  : Definizione e funzioni relative al "piano" dove si svolge il gioco
 * Autore       : Marco Botter
 * Data         : 11/03/2021
 * Versione     : Alpha
 */

const FLOOR_NUMBER_MAX=100;                                     //Numero massimo del piano
const FLOOR_NUMBER_MIN=1;                                       //Numero minimo del piano

const TURN_PLAYER="player";                                     //Turno -> turno giocatore
const TURN_CPU="cpu";                                           //Turno -> turno cpu

const TOTAL_ACTIONS=6;                                          //Azioni complessive totali
const NO_MORE_ACTIONS=0;                                        //Minimo azioni (fine piano)

/*
 * Costruttore piano
 * Parametri:
 * - Character player;                                          //Giocatore
 * Ritorna:
 * - Floor;
 */
function Floor(player)
{
    /*
     * Inzializzazione del piano
     */
    this.number=randomInt(FLOOR_NUMBER_MIN, FLOOR_NUMBER_MAX);  //Imposta numero casuale piano
    this.objects=getFloorObjects(this.number);                  //Ottieni oggetti presenti nel piano
    this.player=player;                                         //Imposta giocatore
    this.enemy=getEnemy(player);                                //Imposta avversario
    this.turn=random([TURN_PLAYER,TURN_CPU]);               //Scegli casualmente chi inizia
    this.actions=TOTAL_ACTIONS;                                 //Imposta azioni rimanenti
    this.lastEnemyChoice=CHOICE_NONE;                           //Ulitma azione avversario
    this.exchangeRefused=0;                                     //Scambi rifiutati dal giocatore
    this.starting=true;                                         //Il piano è appena iniziato

    /*
     * Un personaggio scambia il suo oggetto con uno di quelli presenti sul piano
     * Parametri:
     * - Character char;                                        //Personaggio che compie l'azione
     * - int index;                                             //Indice dell'oggetto
     */
    this.pick=function(char, index)
    {
        var tmpObj=char.bag;                                    //Ottieni riferimento temporaneo all'oggetto da lasciare
        char.bag=this.objects[index];                           //Raccolta dell'oggetto
        this.objects[index]=tmpObj;                             //L'oggetto precedente viene rilasciato
    };

    /*
     * Ritorna rappresentazione testuale
     * Ritorna:
     * - String
     */
    this.toString=function()
    {
        var str="<br>Piano: "+this.number;                      //Numero del piano
        str+="<br>Oggetti presenti: ";                          //Intestazione oggetti presenti
        for(let obj of this.objects)                            //Per ogni oggetto presente
        {
            if(obj!==null)                                      //Se l'oggetto è valido
            {
                str+=obj.name+", ";                             //Scrivi nome dell'oggetto
            }
        }
        str+="<br><br>Giocatore:"+this.player.toString();       //Stampa stato giocatore
        str+="<br><br>Avversario:"+this.enemy.toString();       //Stampa stato avversario
        str+="<br><br>Turno: "+this.turn;                       //Turno
        return str;                                             //Ritorna stringa
    };

    /*
     * Da chiamare per rifiutare uno scambio
     */
    this.refuseExchange=function ()
    {
        this.exchangeRefused++;                                 //Incrementa scmabi rifiutati
    };

}
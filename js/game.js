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
    this.player=new Character("Eroe", "", getRandomObject());       //TODO: Sostituire con la scelta tra 4 personaggi
    this.currentFloor=new Floor(this.player);                       //Genera un piano
    /*
     * Gioca... TODO: Implementare...
     */
    this.play=function()
    {
        //TODO: Implementare logica di gioco...
    }

    /*
     * Combattimento tra personaggi A e B
     * Parametri:
     * - Character charA;                                                   //Personaggio A
     * - Character charB;                                                   //Personaggio B
     */
    function battle(charA, charB)
    {
        if(charA.bag.type===OBJECT_TYPE_WEAPON)                             //Se il personaggio A impugna un'arma
        {
            if(charB.bag.type===OBJECT_TYPE_WEAPON)                         //e l'ha anche il personaggio B
            {

            }
        }
    }

    /*
     * Crea stringa con i dati salienti
     * Ritorna:
     * - String
     */
    this.toString=function()
    {
        var str="<br>Stato giocatore:";                                     //Etichetta stato giocatore
        str+="<br>Salute: "+this.player.health;                             //Salute giocatore
        str+="<br>Sazietà: "+(GENERIC_STATS_MAX
            -this.player.hunger);                                           //Sazietà giocatore
        str+="<br>Umore: "+this.player.mood;                                //Umore giocatore
        str+="<br>Oggetto: "+this.player.bag.name;                          //Nome oggetto portato
        str+="<br>";
        str+="<br>Stato avversario:";                                       //Etichetta stato avversario
        str+="<br>Salute: "+this.player.enemy.health;                       //Salute avversario
        str+="<br>Sazietà: "+
            (GENERIC_STATS_MAX-this.player.enemy.hunger);                   //Sazietà avversario
        str+="<br>Umore: "+this.player.enemy.mood;                          //Umore avversario
        str+="<br>Oggetto: "+this.player.enemy.bag.name;                    //Oggetto portato dall'avversario
        str+="<br>";
        str+="<br>Piano: "+this.currentFloor.number;                        //Numero del piano
        str+="<br>Oggetti sul piano: "+this.currentFloor.objects[0].name;   //Primo oggetto del piano
        str+=", "+this.currentFloor.objects[1].name;                        //Secondo oggetto del piano
        return str;                                                         //Ritorna stringa
    }
}



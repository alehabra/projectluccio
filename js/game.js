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
        return(this.currentFloor.toString());                          //Riepilogo piano
    };

    /*
     * Logica di di gioco
     */
    this.play=function()
    {
        this.currentFloor.starting=false;                                   //Il piano è inziato
        this.currentFloor.lastEnemyChoice=CHOICE_NONE;                      //Pulisci scelta nemico
        if(this.currentFloor.actions>NO_MORE_ACTIONS)                       //Se sul piano corrente si possono eseguire ancora azioni
        {
            if(this.currentFloor.turn===TURN_PLAYER)                        //Se è il turno del giocatore
            {
                updateUi();                                                 //Mostra interfaccia prima di scegliere
                /*
                 * Nulla, attendi azioni del giocatore
                 */
            }
            else
            {
                if(!this.currentFloor.enemy.isDead())                       //Se il personaggio della cpu è vivo
                {
                    this.currentFloor.lastEnemyChoice=choice(
                        this.currentFloor.enemy,this.currentFloor);         //Ottieni scelta cpu
                    switch(this.currentFloor.lastEnemyChoice)               //In base alla scelta
                    {
                        case CHOICE_IMMEDIATE_USE:                          //Uso immediato
                            this.currentFloor.enemy.use();                  //La cpu usa l'oggetto
                            break;
                        case CHOICE_ATTACK:                                 //Attacco
                            battle(this.player,this.currentFloor.enemy);    //Battaglia
                            break;
                    }
                    /*
                     * Le altre scelte non richiedono codice qui
                     */
                }
                else                                                        //Altrimenti
                {
                    this.currentFloor.actions--;                            //Perdi azione che la cpu non può fare
                    this.currentFloor.turn=TURN_PLAYER;                     //Passa il turno al giocatore
                }

                updateUi();                                                 //Mostra intefaccia dopo la scelta
            }
            this.currentFloor.actions--;                                    //Diminuisci azioni rimanenti
            /*
             * Cambio turno
             */
            if(this.currentFloor.turn===TURN_PLAYER)                        //Se era il turno del giocatore
            {
                this.currentFloor.turn=TURN_CPU;                            //Il prossimo turno sarà della cpu
            }
            else
            {
                this.currentFloor.turn=TURN_PLAYER;                         //Il prossimo turno sarà del giocatore
            }
        }
        else
        {
            this.player.feed(-1);                                           //Subisci fame
            this.player.enjoy(-1);                                          //Ti rattristi anche
            this.currentFloor=new Floor(this.player);                       //Crea nuovo piano
            updateUi();                                                     //Aggiorna interfaccia
        }
    };
}

/*
 * Combattimento tra personaggi A e B
 * Parametri:
 * - Character charA;                                                       //Personaggio A
 * - Character charB;                                                       //Personaggio B
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

/*
 * Scambio ogetti tra personaggi A e B
 * Parametri:
 * - Character charA;                                                       //Personaggio A
 * - Character charB;                                                       //Personaggio B
 */
function exchange(charA, charB)
{
    var tmpObj=charA.bag;                                                   //Riferimento temporaneo all'oggetto di A
    charA.bag=charB.bag;                                                    //A ottiene oggetto di B
    charB.bag=tmpObj;                                                       //B ottiene oggetto di A
}


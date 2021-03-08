/*
 * Liberty Software
 * Progetto     : Luccio
 * File         : backpackItems.jd
 * Descrizione  : Definizione degli oggetti "personaggio"
 * Autore       : Marco Botter
 * Data         : 07/03/2021
 * Versione     : Alpha
 */

/*
 * NOTA: Sia il giocatore che un suo nemico sono " personaggi"
 */

/*
 * Costanti
 */
const INITIAL_HEALTH=4;                             //Salute iniziale di base
const INITIAL_HUNGER=0;                             //Fame iniziale di base
const INITIAL_MOOD=4;                               //Umore iniziale di base
const HUNGER_MIN=0;                                 //Fame minima
const HEALTH_MIN=0;                                 //Salute minima
const MOOD_MIN=0;                                   //Umore minimo

/*
 * Costruttore personaggio
 */
function Character(charName, charImage, pastBag)
{
    this.name=charName;                             //Nome del personaggio
    this.image=charImage;                           //Immagine del perosnaggio
    this.bag=pastBag;                               //Oggetto nello zaiono (passato da prima, raccolto o iniziale)
    this.health = INITIAL_HEALTH;                   //Inizializza salute
    this.hunger = INITIAL_HUNGER;                   //Inizializza fame
    this.mood = INITIAL_MOOD;                       //Inizializza umore
    this.enemy;                                     //Puntatore al nemico corrente (se il personaggio è un nemico, il puntatore punta al giocatore)
    this.setEnemy=function(char)                    //Imposta nemico corrente
    {
        this.enemy=char;                            //Imposta il personaggio passato come nemico
    };
    this.damage=function(value)                     //Subisci danni
    {
        //TODO: Controlla max e min
        this.health=-value;                         //Riduci salute del valore passato
    };
    this.heal=function(value)                       //Il personaggio guarisce
    {
        //TODO: Controlla max e min
        this.health+=value;
    };
    this.feed=function(value)                       //Il personaggio si nutre
    {
        //TODO; Controlla max e min
        this.hunger-=value;
    };
    this.enjoy=function(value)                      //Il personaggio miegliora l'umore
    {
        //TODO: Controlla max e min
        this.mood+=value;
    };
}


/*
 * Liberty Software
 * Progetto     : Luccio
 * File         : characters.js
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
const INITIAL_HEALTH=4;                                                             //Salute iniziale di base
const INITIAL_HUNGER=0;                                                             //Fame iniziale di base
const INITIAL_MOOD=4;                                                               //Umore iniziale di base
const HUNGER_MAX=0;                                                                 //Fame minima
const HEALTH_MIN=0;                                                                 //Salute minima
const MOOD_MIN=0;                                                                   //Umore minimo
const HUNGER_DAMAGE=1;                                                              //Danno da fame
const MOOD_DAMAGE=1;                                                                //Danno da psicosi
const GENERIC_STATS_MIN=1;                                                          //Minimo stato randomInt possibile
const GENERIC_STATS_MAX=4;                                                          //Massimo stato randomInt possibile

/*
 * Costruttore personaggio
 * Parametri:
 * - String charName;                                                               //Nome del personaggio
 * - String charImage;                                                              //Url immagine personaggio
 * - BackpackItem pastBag;                                                          //Oggetto portato
 * Ritorna:
 * - Character
 */
function Character(charName, charImage, pastBag)
{
    this.name=charName;                                                             //Nome del personaggio
    this.image=charImage;                                                           //Immagine del perosnaggio
    this.bag=pastBag;                                                               //Oggetto nello zaiono (passato da prima, raccolto o iniziale)
    this.health = INITIAL_HEALTH;                                                   //Inizializza salute
    this.hunger = INITIAL_HUNGER;                                                   //Inizializza fame
    this.mood = INITIAL_MOOD;                                                       //Inizializza umore
    this.enemy;                                                                     //Puntatore al nemico corrente (se il personaggio è un nemico, il puntatore punta al giocatore)
    /*
     * Imposta il nemico
     * Parametri:
     * - Character char;                                                            //Personaggio avversario
     */
    this.setEnemy=function(char)                                                    //Imposta nemico corrente
    {
        this.enemy=char;                                                            //Imposta il personaggio passato come nemico
    };
    /*
     * Subisci danni
     * Parametri:
     * - int value;                                                                 //Quantità dei danni
     */
    this.damage=function(value)                                                     //Subisci danni
    {
        this.health=checkBounds((this.health-value), HEALTH_MIN, INITIAL_HEALTH);   //Subisci danni
    };
    /*
     * Guarisci dai danni
     * Parametri:
     * - int value;                                                                 //Quantità di danni guariti
     */
    this.heal=function(value)                                                       //Il personaggio guarisce
    {
        this.health=checkBounds((this.health+value), HEALTH_MIN, INITIAL_HEALTH);   //Guarisci da danni
    };
    /*
     * Nutriti o patisci fame
     * Parametri:
     * - int value;                                                                 //Entità fame o sazietà
     * NOTA: Un valore positivo di value sfama, un valore negativo affama
     */
    this.feed=function(value)                                                       //Il personaggio si nutre
    {
        this.hunger=checkBounds((this.hunger-value), INITIAL_HUNGER, HUNGER_MAX);   //Sfamati un po
        if(this.hunger===HUNGER_MAX)                                                //Se si patisce la fame
        {
            this.damage(HUNGER_DAMAGE);                                             //Subisci danno da fame
        }
    };
    /*
     * Migliora o peggiora lo stato psichico
     * Parametri:
     * - int value;                                                                 //Entità miglioramento o peggioramento
     * NOTA: Un valore positivo di value migliora, un valore negativo peggiora
     */
    this.enjoy=function(value)                                                      //Il personaggio miegliora l'umore
    {
        this.mood=checkBounds((this.mood+value), MOOD_MIN, INITIAL_MOOD);           //Goditela un po
        if(this.mood===MOOD_MIN)                                                    //Se umore troppo a terra
        {
            this.damage(MOOD_DAMAGE);                                               //Psicosi!
            this.mood=INITIAL_MOOD;                                                 //L'umore torna su
        }
    };
    /*
     * Utilizzo del proprio oggetto
     */
    this.use=function()
    {
        if(this.bag!=null)                                                          //Se possiedo effetivamente un oggetto
        {
            this.bag.perform(this);                                                 //esegui eventuale funzione speciale
            switch (this.bag.type)                                                  //In base al tipo di oggetto posseduto
            {
                case OBJECT_TYPE_FOOD:                                              //Se si tratta di cibo
                    this.feed(this.bag.value);                                      //Mangia
                    break;
                case OBJECT_TYPE_MEDICAMENT:                                        //Se si tratta di un medicamento
                    this.heal(this.bag.value);                                      //Curati
                    break;
                case OBJECT_TYPE_MOOD:                                              //Se é un oggetto con effetti sulla psiche
                    this.enjoy(this.bag.value);                                     //Goditelo
                    break;
                case OBJECT_TYPE_WEAPON:                                            //Se è un'arma
                    battle(this, this.enemy);                                       //Avvia battaglia
                    break;
            }
            if(this.bag.maximumUses>0)                                              //Se l'oggetto ha un numero limitato di utilizzi
            {
                this.bag.maximumUses--;                                             //Decrementi gli utilizzi restanti
                if(this.bag.maximumUses===0)                                        //Se non può piu' essere utilizzato
                {
                    this.bag=null;                                                  //Rimuovi oggetto (consumato)
                }
            }
        }
    };
    /*
     * Ritorna rappresentazione testuale
     * Ritorna:
     * - String
     */
    this.toString=function()
    {
        var str="<br>Personaggio: "+this.name;                                      //Nome
        if(this.health<=HEALTH_MIN)                                                 //Se il personaggio è morto
        {
            str+=" (Morto)"                                                         //Specificalo di fianco al nome
        }
        str+="<br>Salute: "+this.health;                                            //Salute
        str+="<br>Saziet&agrave;: "+(GENERIC_STATS_MAX-this.hunger);                //Sazietà
        str+="<br>Psiche: "+this.mood;                                              //Psiche
        if (this.bag!==null)                                                        //Se lo zaino non è vuoto
        {
            str+="<br>Zaino: "+this.bag.name;                                       //Nome oggetto nello zaino
        }
        else
        {
            str+="<br>Zaino vuoto";                                                 //Zaino vuoto
        }
        return str;                                                                 //Ritorna stringa
    }
}

/*
 * Crea un posbbile avversario con stato e oggetto dinamici
 * Parametri:
 * - Character player;                                                              //Puntatore al giocatore
 * Ritorna:
 * - Character
 */
function getEnemy(player)
{
    var anEnemy=new Character(                                                      //Crea un personaggio
        random(enemyNames),                                                         //con nome casuale,
        random(enemyPictures),                                                      //immagine casuale
        getRandomObject());                                                         //e con oggetto casuale in mano.
    anEnemy.health=getRandomStat();                                                 //Imposta salute avversario
    anEnemy.hunger=getRandomStat();                                                 //Imposta fame avversario
    anEnemy.mood=getRandomStat();                                                   //Imposta umore avversario;
    anEnemy.setEnemy(player);                                                       //Imposta come avversario il giocatore
    player.setEnemy(anEnemy);                                                       //Imposta come avversario del giocatore
    return anEnemy;                                                                 //Ritorna avversario generato
}


/*
 * Ritorna un valore casuale valido per una statistica di un personaggio
 * Ritorna:
 * - int
 */
function getRandomStat()
{
    return randomInt(GENERIC_STATS_MIN, GENERIC_STATS_MAX);                         //Ritorna un valore casuale valido per una statistica
}

/*
 * Possibili nomi nemici
 */
let enemyNames=
    [
        "Pancrazio",
        "Teomondo",
        "Sifilia",
        "Giosuè",
        "Barabba",
        "Tizio",
        "Caio",
        "Sempronio"
    ];

/*
 * Possbili immagini nemici
 */
let enemyPictures=
    [
        ""
    ];



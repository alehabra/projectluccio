/*
 * Liberty Software
 * Progetto     : Luccio
 * File         : intelligence.js
 * Descrizione  : Scelte automatizzate di un perosnaggio
 * Autore       : Marco Botter
 * Data         : 12/03/2021
 * Versione     : Alpha
 */

/*
 * Definizione costanti scelta
 */
const CHOICE_IMMEDIATE_USE="CHOICE_IMMEDIATE_USE";          //Scelta -> Uso immediaro del proprio oggetto
const CHOICE_COLLECTION="CHOICE_COLLECTION";                //Scelta -> Raccolta di un oggetto del piano
const CHOICE_EXCHANGE="CHOICE_EXCHANGE";                    //Scelta -> Scambio di un oggetto
const CHOICE_ATTACK="CHOICE_ATTACK";                        //Scelta -> Attacco
const CHOICE_NONE="CHOICE_NONE";                            //Scelta -> Non fare nulla

/*
 * In base alle necessità del personaggio effettua una scelta
 * Parametri:
 * - Character char;                                        //Personaggio che deve fare una scelta
 * - Floor floor;                                           //Piano in cui seve essere fatta una scelta
 * Ritorna:
 * - String                                                 //Costante tipo di scelta
 */
function choice(char, floor)
{
    if(this.health<=HEALTH_MIN)                             //Se il personaggio è morto
    {
        return CHOICE_NONE;                                 //Non può fare alcuna scelta
    }
    /*
     * Determina ncessità maggiore
     */
    var need=getNeed(char);                                 //Ottieni necessità maggiore
    /*
     * Vedi se puoi arrangiarti con il tuo oggetto
     */
    if (need===char.bag.type)                               //Se hai un oggetto corrispondnete alla tua necessità
    {
        return CHOICE_IMMEDIATE_USE;                        //Scegli di usare il tuo oggetto
    }
    else
    {
        /*
         * Vedi se un oggetto a terra può esserti utile
         */
        var objIndex=0;                                     //Varibile ospite indice oggetto
        for(obj of floor.objects)                           //Cicla oggetti a terra
        {
            if(need===obj.type)                             //Se l'oggetto in esame soddisfa la necessità
            {
                floor.pick(char, objIndex);                 //Raccolta oggetto
                return CHOICE_COLLECTION;                   //Scegli di raccoglierlo
            }
            objIndex++;                                     //Incremente indice oggetto
        }
        /*
         * Vedi se il tuo avversario ha unoggetto che ti interessa
         */
        if(need===char.enemy.bag.type)                      //Se l'avversario ha un oggetto che soddisfa la tua necessità
        {
            /*TODO: L'attacco sarà effettuato se un precedente scambio è stato rifiutato e se si ha a dispoasizone un'arma.
             *      Il possesso dell'arma è banale da verificare, mentre per il precedente scambio sono necessarie delle
             *      informazioni extra.
             *      Potrebbe esserci bisogno di tenere traccia delle scelte precedenti.
             */
            if(char.bag.type===OBJECT_TYPE_WEAPON)          //Se possiedo un'arma
            {
                /* TODO: Solo in questo caso può essere valutata la possibilità di un attacco.
                 *       tenendo conto delle considerazioni di cui sopra
                 */

            }
            else
            {
                /*
                 * Se non hai un arma puoi solo sperare in uno scambio
                 */
                return CHOICE_EXCHANGE;                     //Scelta di effettuare uno scambio
            }
        }
        else
        {
            /*
             * Non c'è modo di provvedre alla propria necessità individuata
             * TODO: Passare alla seconda necessità più importante? Verificare
             */
            return CHOICE_NONE;                             //Non fare nulla
        }

    }
}

/*
 * Funzione che determina la maggiore necessità di un personaggio
 * Parametri:
 * - Charater char;                                         //Personaggio in oggetto
 * Ritorna:
 * - OBJECT_TYPE
 */
function getNeed(char)
{
    /*
     * Determina la necessità maggiore
     */
    var satiety=(GENERIC_STATS_MAX-char.hunger);            //Ottieni sazietà
    if(satiety<char.health)                                 //Se la sazietà é più urgente della salute
    {
        if(char.mood<satiety)                               //Verifica se percaso l'umore è più basso della sazietà
        {
            return  OBJECT_TYPE_MOOD;                       //La necessità maggiore è la psiche
        }
        else
        {
            return OBJECT_TYPE_FOOD;                        //La necessità maggiore è la fame
        }
    }
    else
    {
        if(char.mood<char.health)                           //Verifica se percaso l'umore è più basso della salute
        {
            return OBJECT_TYPE_MOOD;                        //La necessità maggiore è l'umore
        }
        else
        {
            return OBJECT_TYPE_MEDICAMENT;                  //La necessità maggiore è la salute
        }
    }
}

/*
 * Funzione che restituisce un valore booleano che indica se il personaggio accetta
 * di scambiare il suo oggetto con un altro
 * Parametri:
 * - Character char;                                        //Personaggio in questione
 * - BackpackItem otherObj;                                 //Oggetto che si otterebbe dallo scambio
 */
function acceptOrNot(char, otherObj)
{
    if(char.bag===null)                                     //Se il personaggio non ha nulla
    {
        return true;                                        //Accetta tutto
    }
    else
    {
        if(otherObj.type===getNeed(char))                   //Se l'oggetto che otterei può esser usato per la mia necessità
        {
            if(char.bag.type===otherObj.type)               //ma anche quello che ho in mano
            {
                return(char.bag.value<otherObj.value);      //Scelgo quello con effetto base più ampio, preferendo il mio per diffidenza
            }
            else                                            //altrimenti
            {
                return true;                                //mi serve di più, accetto
            }
        }
        else                                                //Non mi serve nell'immediato
        {
            if(char.bag.type===getNeed(char))               //Se il mio oggetto mi serve
            {
                return false;                               //col cavolo che lo cedo
            }
            else                                            //Se non mi serve
            {
                if(char.bag.type!==OBJECT_TYPE_WEAPON)      //E se non ho in mano un'arma
                {
                    return(char.bag.value<otherObj.value);  //Indipendentemente dal tipo, sceglo quello col valore più alto preferendo il mio per diffidenza
                }
                else                                        //Altirmenti se sono armato
                {
                    return false;                           //Non cedo l'arma
                }
            }
        }
    }
}

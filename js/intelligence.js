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
const CHOICE_IMMEDIATE_USE="CHOICE_IMMEDIATE_USE";  //Scelta -> Uso immediaro del proprio oggetto
const CHOICE_COLLECTION="CHOICE_COLLECTION";        //Scelta -> Raccolta di un oggetto del piano
const CHOICE_EXCHANGE="CHOICE_EXCHANGE";            //Scelta -> Scambio di un oggetto
const CHOICE_ATTACK="CHOICE_ATTACK";                //Scelta -> Attacco
const CHOICE_NONE="CHOICE_NONE";                    //Scelta -> Non fare nulla

/*
 * In base alle necessità del personaggio effettua una scelta
 * Parametri:
 * - Character char;                                //Personaggio che deve fare una scelta
 * - Floor floor;                                   //Piano in cui seve essere fatta una scelta
 * Ritorna:
 * - String                                         //Costante tipo di scelta
 */
function choice(char, floor)
{
    /*
     * NOTA: In un contesto reale, le persone evitano lo scontro se non necessario,
     * quindi il personaggio cercherà di risolvere le proprie esigenze nel modo
     * più pacifico possibile, prima cercando di arrangiarsi con il proprio
     * oggetto, poi con quelli disponibili nel piano (anche lasciati), poi proponendo
     * un possibile scambio e solo in ultima istanza attaccando
     */

    /*
     * Determina la necessità maggiore
     */
    var need;                                       //Necessità
    var satiety=(GENERIC_STATS_MAX-char.hunger);    //Ottieni sazietà
    if(satiety<char.health)                         //Se la sazietà é più urgente della salute
    {
        if(char.mood<satiety)                       //Verifica se percaso l'umore è più basso della sazietà
        {
            need=OBJECT_TYPE_MOOD;                  //La necessità maggiore è l'umore
        }
        else
        {
            need=OBJECT_TYPE_FOOD;                  //La necessità maggiore è la fame
        }
    }
    else
    {
        if(char.mood<char.health)                   //Verifica se percaso l'umore è più basso della salute
        {
            need=OBJECT_TYPE_MOOD;                  //La necessità maggiore è l'umore
        }
        else
        {
            need=OBJECT_TYPE_MEDICAMENT;            //La necessità maggiore è la salute
        }
    }
    /*
     * Vedi se puoi arrangiarti con il tuo oggetto
     */
    if (need===char.bag.type)                       //Se hai un oggetto corrispondnete alla tua necessità
    {
        return CHOICE_IMMEDIATE_USE;                //Scegli di usare il tuo oggetto
    }
    else
    {
        /*
         * Vedi se un oggetto a terra può esserti utile
         */
        for(obj of floor.objects)                   //Cicla oggetti a terra
        {
            if(need===obj.type)                     //Se l'oggetto in esame soddisfa la necessità
            {
                //TODO: Implementare la raccolta dello specifico oggetto, non solo il ritorno della scelta
                return CHOICE_COLLECTION;           //Scegli di raccoglierlo
            }
        }
        /*
         * Vedi se il tuo avversario ha unoggetto che ti interessa
         */
        if(need===char.enemy.bag.type)              //Se l'avversario ha un oggetto che soddisfa la tua necessità
        {
            /*TODO: L'attacco sarà effettuato se un precedente scambio è stato rifiutato e se si ha a dispoasizone un'arma.
             *      Il possesso dell'arma è banale da verificare, mentre per il precedente scambio sono necessarie delle
             *      informazioni extra.
             *      Potrebbe esserci bisogno di tenere traccia delle scelte precedenti.
             */
            if(char.bag.type===OBJECT_TYPE_WEAPON) //Se possiedo un'arma
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
                return CHOICE_EXCHANGE;             //Scelta di effettuare uno scambio
            }
        }
        else
        {
            /*
             * Non c'è modo di provvedre alla propria necessità individuata
             * TODO: Passare alla seconda necessità più importante? Verificare
             */
            return CHOICE_NONE;                     //Non fare nulla
        }

    }
}

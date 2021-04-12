/*
 * Liberty Software
 * Progetto     : Luccio
 * File         : textui.js
 * Descrizione  : Interfaccia testuale di test
 * Autore       : Marco Botter
 * Data         : 12/04/2021
 * Versione     : Alpha
 */

/*
 * Ritorna pulsanti da visualizzare
 * Parametri:
 * - Floor floor;                                           //Piano corrente
 */
function getButtons(floor)
{
    var buttons=[];                                         //Variabile ospite array pulsanti
    if(floor.turn===TURN_PLAYER)                            //Se è il turno del giocatore
    {
        /*
         * Uso oggetto/arma
         */
        var item=floor.player.bag;                          //Ottieni evantuale oggetto nello zaino
        if(item!==null)                                     //Se hai qualcosa nello zaino
        {
            var itemTxt="Usa "+item.name;                   //Testo del pulsante uso oggetto
            if(item.type===OBJECT_TYPE_WEAPON)              //Se l'oggetto nello zaino è un arma
            {
                itemTxt="Attacca";                          //cambia il testo in "attacca"
            }
            buttons.push(makeButton(itemTxt, function(){    //Aggiungi il pulsante uso oggetto/attacca
                floor.player.use();game.play();}));         //che causa l'utilizzo dell'oggetto
            /*
             * Scambio
             */
            buttons.push(makeButton("Scambia",function(){   //Aggiungi il pulsante "scambia"
                /*TODO: Scambio*/ game.play();}));          //che propone uno scambio all'avversario
        }
        /*
         * Raccolta
         */
        for(let obj of floor.objects)                       //Per ogni oggetto presente sul piano
        {
            var index=0;                                    //Indice degli oggetti
            for(let obj of floor.objects)                   //Per ogni oggetto presente sul piano
            {
                buttons.push(makeButton(                    //Aggiungi
                    "Raccolgli "+obj.name,function(){       //Il pulsante "raccogli"
                        floor.pick(floor.player,            //con il quale il giocatore scambia il suo oggetto
                            index); game.play();}));        //con quello all'indice
                index++;
            }
        }
    }
    else                                                    //Altrimenti
    {
        //TODO: Verifica se l'avversario ti propone uno scambio...
        buttons.push(makeButton("Avanti", function(){       //aggiungi il pulsante "Avanti"
                game.play();}));                            //che fa solo procedere il gioco
    }
    return(buttons);                                        //Ritorna pulsanti
}
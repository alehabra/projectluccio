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
 * Crea clousure di raccolta oggetto
 * Parametri
 * - int obIndex
 * Ritorna:
 * - function
 */
function makeCollectFunction(objIndex)
{
    return function()
    {
        var floor=game.currentFloor;                                //Ottieni piano
        floor.pick(floor.player, objIndex); game.play();            //Raccogli oggetto
    };
}

/*
 * Ritorna pulsanti da visualizzare
 * Parametri:
 * - Floor floor;                                                   //Piano corrente
 * Ritorna:
 * - button[]                                                       //Array di pulsanti
 */
function getButtons(floor)
{
    var buttons=[];                                                 //Variabile ospite array pulsanti
    if(floor.turn===TURN_PLAYER)                                    //Se è il turno del giocatore
    {
        if(!floor.player.isDead())                                  //Se non sei morto
        {
            /*
             * Uso oggetto/arma
             */
            var item=floor.player.bag;                              //Ottieni evantuale oggetto nello zaino
            if(item!==null)                                         //Se hai qualcosa nello zaino
            {
                var itemTxt="Usa "+item.name;                       //Testo del pulsante uso oggetto
                if(item.type===OBJECT_TYPE_WEAPON)                  //Se l'oggetto nello zaino è un arma
                {
                    itemTxt="Attacca";                              //cambia il testo in "attacca"
                }
                buttons.push(makeButton(itemTxt, function(){        //Aggiungi il pulsante uso oggetto/attacca
                    floor.player.use();game.play();}));             //che causa l'utilizzo dell'oggetto
                /*
                 * Scambio
                 */
                buttons.push(makeButton("Scambia",function()        //Aggiungi il pulsante "scambia"
                {
                    if(acceptOrNot(floor.enemy, item))              //Se l'avversario accetta lo scmabio
                    {
                        alert("L'avversario accetta lo scambio!");  //Notifca accettazione
                        exchange(floor.player, floor.enemy);        //Scambio oggetti
                    }
                    else                                            //Altrimenti
                    {
                        alert("L'avversario rifiuta lo scambio!")   //Notifica rifiuto
                    }
                    game.play();                                    //Prosegui
                }));
            }
            /*
             * Raccolta
             */
            let index=0;                                            //Ospite indice oggetto
            for(let obj of floor.objects)                           //Per ogni oggetto presente sul piano
            {
                if(obj!==null)
                {
                    buttons.push(makeButton(                        //Aggiungi
                        "Raccolgli " + obj.name,                    //Pulsante "raccogli"
                        makeCollectFunction(index)));               //che chiama una clousure per la raccolta dell'oggetto
                }
                index++;
            }
        }
    }
    else                                                            //Altrimenti
    {
        if (floor.lastEnemyChoice===CHOICE_EXCHANGE)                //Se l'avversario propone uno scambio
        {
            buttons.push(makeButton("Si", function () {             //Pulsante "sì"
                exchange(floor.player, floor.enemy);                //Che accetta lo scambio
                game.play();}));
            buttons.push(makeButton("No", function () {             //Pulsante "no"
                floor.refuseExchange();                             //Che rifiuta lo scambio
            game.play();}));
        }
        else
        {
            buttons.push(makeButton("Avanti", function () {           //aggiungi il pulsante "Avanti"
                game.play();}));                                    //che fa solo procedere il gioco

        }
    }
    return(buttons);                                                //Ritorna pulsanti
}

/*
 * Aggiorna l'interfaccia
 */
function updateUi()
{
    var dump=document.getElementById("dump");               //Ottieni area di dump
    var buttons=document.getElementById("buttons");         //Ottieni area pulsanti
    var info=document.getElementById("info");               //Ottieni area info
    dump.innerHTML=game.toString();                         //Scrivi dati del gioco
    info.innerHTML="";                                      //Svuota area info
    if(game.currentFloor.lastEnemyChoice===CHOICE_EXCHANGE) //Se l'avversario ti propone uno scambio
    {
        info.innerText="L'avversario ti propone uno scambio";
    }
    if(game.currentFloor.lastEnemyChoice===CHOICE_ATTACK)   //Se l'avversario ti ha attaccato
    {
        info.innerText="L'avversario ti ha attaccato";
    }
    if(game.currentFloor.lastEnemyChoice===CHOICE_COLLECTION)
    {
        info.innerText="L'avversario ha raccolto un oggetto"
    }
    if(game.currentFloor.lastEnemyChoice===CHOICE_IMMEDIATE_USE)
    {
        info.innerText="L'avversario ha usato il suo oggetto"
    }
    if(game.player.isDead())                                //Se sei morto
    {
        info.innerText="Sei morto. Game over."
    }
    buttons.innerHTML="";                                   //Svuota area pulsanti
    var btns=getButtons(game.currentFloor);                 //Ottieni pulsanti per lo stato corrente
    for(let btn of btns)                                    //Per ogni pulsante ottenuto
    {
        buttons.appendChild(btn);                           //Aggiungi all'Ui
    }
}


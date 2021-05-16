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
                        "Raccolgli " + obj.name,                        //Pulsante "raccogli"
                        makeCollectFunction(index)));               //che chiama una clousure per la raccolta dell'oggetto
                }
                index++;
            }
            /*
             * Passa
             */
            buttons.push(makeButton("Passa", function ()            //Aggiungi il pulsante "passa"
            {game.play();}));                                       //Che passa il turno
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

let turn = 0;

 function updateUi()
{
    let startLevelInfo = document.querySelectorAll('.startLevel-info');
  
    console.log(turn);
    //ripristino i pulsanti
    resetBtn();

     //popolo statistiche personaggio
    AddPointsDamage('personaggio','sazieta',game.player.hunger -1,true); 
    AddPointsDamage('personaggio','salute',game.player.health -1,true);
    AddPointsDamage('personaggio','umore',game.player.mood -1,true);

    //popolo statistiche nemico
    AddPointsDamage('nemico','salute',game.player.enemy.health -1,true);
    AddPointsDamage('nemico','umore',game.player.enemy.mood -1,true);
    AddPointsDamage('nemico','sazieta',game.player.enemy.hunger -1,true); 

    //popolo numero piano
    PopulateFloorName(game.currentFloor.number);
    
    //visualizzo graficamente se turno nemico o personaggio
    console.log(TURN_PLAYER);
    game.currentFloor.turn === TURN_PLAYER ? EnemyTurn()  : YourTurn();

    //popolo oggetti dello zaino nemico e personaggio
    //NEMICO
    if(game.player.enemy.bag!==null){
        PopulateEnemyBag(game.player.enemy.bag.name)
    } else {
        PopulateEnemyBag('vuoto')
    }
    //PERSONAGGIO
    if(game.player.bag!==null){
        PopulateCharBag(game.player.bag.name)
    } else {
        PopulateCharBag('vuoto')
    }

    //popolo oggetti del piano ogni oggetto deve essere ==! NULL pagina 3
    if(game.currentFloor.objects[0]!==null){
        console.log(game.currentFloor.objects);
        //game.currentFloor.pick(0); //Raccogli oggetto
    } 


    //USARE MUTATION OBSERVER PER VEDERE SE ANIMAZIONE OCCHIO è FINITA DA QUI SI CHIAMA L'AZIONE NEMICO O PERSONAGGIO
    let occhio = document.getElementById('occhio-sopra');
    observerStartEye = new MutationObserver(eyeopenCallBack);
    
    function eyeopenCallBack(mutations){
        if (turn<1){
        for (let mutation of mutations) {
            if (mutation.type === 'attributes') {
                console.log('mutation OCCHIO detected')
                //se è il turno del giocatore mostra il modale di scelta giocatore, altrimenti notifica turno nemico
                game.currentFloor.turn === TURN_PLAYER ?  showHideModalChoice() : showModal();
                turn = 1;
            }
        }  
            observerStartEye.disconnect()
        }
    }
    observerStartEye.observe(occhio,{attributes:true});

    //se il turno non è quello iniziale
    if (turn>0){
        game.currentFloor.turn === TURN_PLAYER ?  showHideModalChoice() : showModal();
    }
 
    //esempio di cosa ha fatto il nemico pagina 4
    //in base al risultato chiamo delle funzioni
    //currentFloor.lastEnemyChoice

    //scambio nemico pagina 6
    //se accetti o no pagina 6

    //se accetta lui
    //if(acceptOrNot)
    

    //GIOCATORE azioni a pagina 5
    /*
    if (currentFloor.objects[0]!==null) {game.currentFloor.pick(0)}
    //se lo voglio usare
    game.player.use();
    game.play

    */

    if(game.currentFloor.starting)                                 
    {
        startLevelInfo[0].innerHTML="Nuovo piano: "+game.currentFloor.number;    //Notifica inizio piano
    }
} 
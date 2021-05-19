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
    let btnTake = document.querySelectorAll(".btn-take");
    btnSound.play();
    if(!btnTake[objIndex].disabled){
        btnTake[objIndex].disabled=true;
        game.currentFloor.pick(objIndex);
        PopulateCharBag(game.currentFloor.objects[objIndex].name);
        showHideModalObjRoom();
    }
        var floor=game.currentFloor;                                //Ottieni piano
        floor.pick(floor.player, objIndex);                         //Raccogli oggetto
        game.play();
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

    //ripristino i pulsanti
    resetBtn();

    //reset statistiche personaggio e nemico
    for (let index = 0; index < statsCharsParts.length; index++) {
        if(statsCharsParts[index].classList.contains('stats-icon-points--active')){
            statsCharsParts[index].classList.remove('stats-icon-points--active');
        }
    }

     //popolo statistiche personaggio
     RemovePointsDamage('personaggio','sazieta',game.player.hunger -1,true); 
     RemovePointsDamage('personaggio','salute',game.player.health -1,true);
     RemovePointsDamage('personaggio','umore',game.player.mood -1,true);

    //popolo statistiche nemico
    RemovePointsDamage('nemico','sazieta',game.player.enemy.hunger -1,true); 
    RemovePointsDamage('nemico','salute',game.player.enemy.health -1,true);
    RemovePointsDamage('nemico','umore',game.player.enemy.mood -1,true);
    

    //popolo numero piano
    PopulateFloorName(game.currentFloor.number);
    
     //funzione rimuovi pulsante "scambio" se non ho oggetti
     var btnTurn = document.querySelectorAll('.modal-yourchioiche-buttons .btn');
     var btnTurnText = document.querySelectorAll('.modal-yourchioiche-buttons .btn span');

     if(game.player.bag!==null && game.player.enemy.bag!==null){
        btnTurn[2].style.display = 'block';
     } 
     if(game.player.bag===null && game.player.enemy.bag===null){
        btnTurn[2].style.display = 'none';
     }
      //inserisco "ATTACCA" se ho arma
      if(game.player.bag.type === 'weapon'){
        btnTurnText[0].innerHTML = 'attacca';
      } else {
        btnTurnText[0].innerHTML = 'usa oggetto';   
      }

     //rimuovo "usa oggetto" se non ho oggetti
     if(game.player.bag===null){
        btnTurn[0].style.display = 'none';
        btnTurn[2].style.display = 'none';
     }

    //visualizzo graficamente se turno nemico o personaggio
    console.log(game.currentFloor.turn);
    game.currentFloor.turn === TURN_PLAYER ? YourTurn()  : EnemyTurn();

    //popolo oggetti dello zaino nemico e personaggio
    //NEMICO
    if(game.player.enemy.bag!==null){
        PopulateEnemyBag(game.player.enemy.bag.name)
    } else {
        PopulateEnemyBag('vuoto')
    }
    //PERSONAGGIO
    if(game.player.bag!==null){
        console.log('oggetto player: '+game.player.bag.name);
        PopulateCharBag(game.player.bag.name)
    } else {
        PopulateCharBag('vuoto')
    }

    //popolo oggetti del piano ogni oggetto deve essere ==! NULL pagina 3
    if(game.currentFloor.objects[0]!==null){
        console.log(game.currentFloor.objects);
    } 


 
    //NEMICO
    var enemyModal = document.querySelectorAll('#modal .modal-inner-content');
    var node = document.createElement("p");
    node.innerHTML =  game.currentFloor.lastEnemyChoice
    enemyModal[0].appendChild(node);
    
    //esempio di cosa ha fatto il nemico pagina 4
    //in base al risultato chiamo delle funzioni
    //currentFloor.lastEnemyChoice

 

    //GIOCATORE azioni a pagina 5
    /*
    if (currentFloor.objects[0]!==null) {game.currentFloor.pick(0)}
    //se lo voglio usare
    game.player.use();
    game.play

    */
    //se il turno non è quello iniziale
    if (!game.currentFloor.starting){
        game.currentFloor.turn === TURN_PLAYER ?  showHideModalChoice() : showModal();
    }else{
        startLevelInfo[0].innerHTML="Nuovo piano: "+game.currentFloor.number;    //Notifica inizio piano
    }

} 
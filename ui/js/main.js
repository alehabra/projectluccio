//////////////////////VARIABILI DOM////////////////////////////////////////////////////
const cella = document.getElementById("cella");
let btns = document.querySelectorAll(".btn");

let statsChars = document.querySelectorAll(".stats-element");
let statsCharsParts = document.querySelectorAll(".stats-element .stats-stats .stats-icon .stats-icon-points");

const modal = document.getElementById("modal");
let modalInner = document.querySelectorAll(".modal-inner");

var svg = document.getElementById("occhio-sopra");
let startLevel = document.querySelectorAll('.startLevel');

const modalPlayer = document.getElementById("modal-yourchioiche");
const modalObjRoom = document.getElementById("modal-floorObjects");
const modalObjRoomElenco = document.getElementById("modal-floorObjects-inner-objects");
let boxfloor = document.getElementById("box-objectsFloor-image");
const modalExchange = document.getElementById("modal-exchange");

//////////////////VARIABILI RISORSE MUSIC/////////////////
const btnSound = new Audio('../projectluccio/ui/music/selection.mp3');
const ouchSound = new Audio('../projectluccio/ui/music/ouch.ogg');
const hungrySound = new Audio('../projectluccio/ui/music/hungry.ogg');
const cardboxSound = new Audio('../projectluccio/ui/music/cardbox.mp3');


//////INIZIALIZZAZIONE IMMEDIATA////////////////////////////////////////////
    //funzione apertura occhi inizio livello

    //aperturaOcchi();
    function aperturaOcchi(){    
        /*rimuovo info start level */
        setTimeout(function(){
            startLevel[0].classList.add('startLevel-inactive');
        }, 300);

        /*animazione apertura occhi*/  
        
        var s = Snap(svg);
        /*variabili occhio sopra*/
        var occhioAperto = Snap.select('#aperto-sopra');
        var occhioChiuso = Snap.select('#chiuso-sopra');
        var occhioChiusoPoints = occhioChiuso.node.getAttribute('d');
        var occhioApertoPoints = occhioAperto.node.getAttribute('d');

        /*variabili occhio sotto*/
        var sottoAperto = Snap.select('#aperto-sotto');
        var sottoChiuso = Snap.select('#chiuso-sotto');
        var occhioSotChiusoPoints = sottoChiuso.node.getAttribute('d');
        var occhioSotApertoPoints = sottoAperto.node.getAttribute('d');

        var occhioChiusoAnim = function(){
            cella.classList.add("focus");
                occhioChiuso.animate({ d: occhioApertoPoints }, 1000, mina.backout, occhioApertoAnim); 
                sottoChiuso.animate({ d: occhioSotApertoPoints }, 1000, mina.backout, occhioApertoAnim);
        }

        var occhioApertoAnim = function(){
            cella.classList.remove("focus");
                occhioChiuso.animate({ d: occhioChiusoPoints }, 300, mina.backout, occhioChiusoAnim2);
                sottoChiuso.animate({ d: occhioSotChiusoPoints }, 300, mina.backout, occhioChiusoAnim2); 
        }
        var occhioChiusoAnim2 = function(){
            cella.classList.add("focus");
                occhioChiuso.animate({ d: occhioApertoPoints }, 1000, mina.backout, occhioApertoAnim2); 
                sottoChiuso.animate({ d: occhioSotApertoPoints }, 1000, mina.backout, occhioApertoAnim2);
        }
        var occhioApertoAnim2 = function(){
            cella.classList.remove("focus");
            occhioChiuso.animate({ d: occhioChiusoPoints }, 1000, mina.backout,);
            sottoChiuso.animate({ d: occhioSotChiusoPoints }, 1000, mina.backout, removeEyes);
        }
        
        /*animazione rimozione occhi*/
        var removeEyes = function(){
            cella.classList.add("focus");
            svg.classList.add("occhio-rimosso");
            if (game.currentFloor.starting){
                game.play();
            }    
        }

        //inizializzazione funzione
        occhioChiusoAnim();
    }

    function endTurn(){
        svg.classList.remove("occhio-rimosso");
        setTimeout(function(){
            startLevel[0].classList.remove('startLevel-inactive');
        }, 300);
    }


/////////////////////////////////////////////////////BOTTONI////////////////////////////

    //funzione click su BOTTONE qualsiasi
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', e => {
            btnSound.play();
            if(!btns[i].disabled){
                btns[i].disabled=true;
            }
        });
    } 

    //funzione riattiva BOTTONI
    function resetBtn(){
        for (let i = 0; i < btns.length; i++) {
            btns[i].disabled=false
        }        
    }

    //////////////////////////////////////INTERFACCIA STATISTICHE /////////////////////////////////////

    function PopulateFloorName(floor){
        var floorHolder = document.querySelectorAll('#cella-floor h1');
        floorHolder[0].innerHTML = '';
        floorHolder[0].innerHTML = 'PIANO NR. '+floor; 
    }
    
    function PopulateEnemyBag(objName){
        var enemyBagObjName = document.querySelectorAll('.enemy-stats-bag span');
        enemyBagObjName[0].innerHTML = '';
        enemyBagObjName[0].innerHTML = objName; 
    }
    function PopulateCharBag(objName){
        var charBagObjName = document.querySelectorAll('.character-stats-bag span');
        charBagObjName[0].innerHTML = '';
        charBagObjName[0].innerHTML = objName; 
    }

    function YourTurn(){
        statsChars[0].classList.remove('stats-element--disabled');
        statsChars[1].classList.add('stats-element--disabled');
    }

    function EnemyTurn(){
        statsChars[1].classList.remove('stats-element--disabled');
        statsChars[0].classList.add('stats-element--disabled');
    }

    function RemovePointsDamage(char,statsType,points,init){
        //aggiungo danni personaggio
        if(char == "personaggio"){
            if(statsType == "sazieta"){
                let i = 0; 
                let damage = 0 + points; 
                while (i<=damage) {
                    //aggiungo se trova
                    if(!statsCharsParts[i].classList.contains('stats-icon-points--active')){
                        statsCharsParts[i].classList.add('stats-icon-points--active');
                    }
                    i++;
                }
                if(!init){
                    hungrySound.play();
                }
            }
            if(statsType == "salute"){
                let i = 4; 
                let damage = 4 + points; 
                while (i<=damage) {
                    //aggiungo se trova
                    if(!statsCharsParts[i].classList.contains('stats-icon-points--active')){
                        statsCharsParts[i].classList.add('stats-icon-points--active');
                    }
                    i++;
                }
                if(!init){
                    ouchSound.play();
                }
            }
            if(statsType == "umore"){
                let i = 8; 
                let damage = 8 + points; 
                while (i<=damage) {
                    //aggiungo se trova
                    if(!statsCharsParts[i].classList.contains('stats-icon-points--active')){
                        statsCharsParts[i].classList.add('stats-icon-points--active');
                    }
                    i++;
                }
            }
        }   
        if(char == "nemico"){
            if(statsType == "sazieta"){
                let i = 12; 
                let damage = 12 + points; 
                while (i<=damage) {
                    //aggiungo se trova
                    if(!statsCharsParts[i].classList.contains('stats-icon-points--active')){
                        statsCharsParts[i].classList.add('stats-icon-points--active');
                    }
                    i++;
                }
                if(!init){
                    hungrySound.play();
                } 
            }
            if(statsType == "salute"){
                let i = 16; 
                let damage = 16 + points; 
                while (i<=damage) {
                    //aggiungo se trova
                    if(!statsCharsParts[i].classList.contains('stats-icon-points--active')){
                        statsCharsParts[i].classList.add('stats-icon-points--active');
                    }
                    i++;
                }
                if(!init){
                    ouchSound.play();
                }
            }
            if(statsType == "umore"){
                let i = 20; 
                let damage = 20 + points; 
                while (i<=damage) {
                    //aggiungo se trova
                    if(!statsCharsParts[i].classList.contains('stats-icon-points--active')){
                        statsCharsParts[i].classList.add('stats-icon-points--active');
                    }
                    i++;
                }
            }
        }     
    }

    //////////////////////////////////////INTERFACCIA MODAL /////////////////////////////////////
    //generico
    function showModal(){
       !modal.classList.contains('modal--active') ? setTimeout(function(){modal.classList.add('modal--active')}, 600) : setTimeout(function(){modal.classList.remove('modal--active')}, 600)
       setTimeout(function(){
        modalInner[0].classList.add('modal-inner--active');
       }, 400);
    }
    function hideModal(){
        setTimeout(function(){
            modalInner[0].classList.remove('modal-inner--active');
        }, 400);
        setTimeout(function(){
            !modal.classList.contains('modal--active') ? modal.classList.add('modal--active') : modal.classList.remove('modal--active')
            resetBtn();
            game.play();
        }, 600);
     }

     //modale scelta giocatore
     function showHideModalChoice(){
        !modalPlayer.classList.contains('modal-yourchioiche--active') ? setTimeout(function(){modalPlayer.classList.add('modal-yourchioiche--active')}, 600) : setTimeout(function(){modalPlayer.classList.remove('modal-yourchioiche--active'); }, 600)
     }

    //modale proposta scambio
    function showHideModalExchange(){
        //popolo quello che vuoi scambiare
        var yourExchange = document.getElementById('modal-exchange-inner-yourobj');
        var hisExchange = document.getElementById('modal-exchange-inner-himobj');
        if(game.player.bag!==null && game.player.enemy.bag!==null){
            yourExchange.innerHTML = game.player.enemy.bag.name;
            hisExchange.innerHTML = game.player.bag.name;
        }
        //mostro il modale
        !modalExchange.classList.contains('modal-exchange--active') ? setTimeout(function(){modalExchange.classList.add('modal-exchange--active')}, 600) : setTimeout(function(){modalExchange.classList.remove('modal-exchange--active'); }, 600)
    }

    //risposta scambio avversario
    function showResponseExchange(){

        if(acceptOrNot(game.currentFloor.enemy,  game.player.bag))              //Se l'avversario accetta lo scmabio
        {
            alert("L'avversario accetta lo scambio!");  //Notifca accettazione
            exchange(game.player, game.currentFloor.enemy);        //Scambio oggetti
        }
        else                                            //Altrimenti
        {
            alert("L'avversario rifiuta lo scambio!")   //Notifica rifiuto
        }
        game.play(); 
    }

     //funzione usa oggetto
     function objectCharUsed(){
        if (game.currentFloor.objects[0]!==null) {game.currentFloor.pick(0)}
        game.player.use();
        setTimeout(function(){
         game.play();
        }, 700);
     }

     //funzione passa turno
     function charTurnPass(){
        setTimeout(function(){
            game.play();
           }, 700);     
     }



    //modale oggetti stanza 
    function showHideModalObjRoom(){
        modalObjRoomElenco.innerHTML = '';
        //TODO: ricordarsi di mettere l'immagine scatola come prima
        for (let i = 0; i < game.currentFloor.objects.length; i++) {
            
            if(game.currentFloor.objects[i] !== null){
                //div singolo oggetto contenitore
                var floorObject = document.createElement("div"); 
                floorObject.className = "floorObjects-inner-object";

                //h2 nome singolo oggetto
                var floorObjectName = document.createElement("h2"); 
                floorObjectName.innerHTML =  game.currentFloor.objects[i].name;
                
                //div left
                var floorObjectLeft = document.createElement("div");
                floorObjectLeft.className = "floorObjects-inner-object-left";
                floorObjectLeft.innerHTML =  game.currentFloor.objects[i].description;
                

                //div right
                var floorObjectRight = document.createElement("div");
                floorObjectRight.className = "floorObjects-inner-object-right";

                var floorObjectTypeImg = document.createElement("div");
                floorObjectTypeImg.className = "floorObjects-inner-object-type";
                

                //Valore statistiche oggetto
                var floorObjectTypeStats = document.createElement("div");
                floorObjectTypeStats.className = "floorObjects-inner-object-stats";
                floorObjectTypeStats.innerHTML = '+'+game.currentFloor.objects[i].value;

                //visualizzo il tipo di statistica nella scatola
                if(game.currentFloor.objects[i].type ==='medicament'){
                    floorObjectTypeImg.className = "object-type-health"  
                }
                if(game.currentFloor.objects[i].type ==='mood'){
                    floorObjectTypeImg.className = "object-type-mood"  
                }
                if(game.currentFloor.objects[i].type ==='food'){
                    floorObjectTypeImg.className = "object-type-food" 
                }
                if(game.currentFloor.objects[i].type ==='weapon'){
                    floorObjectTypeImg.className = "object-type-weapon" 
                }

                //aggiungo icona alla parte destra
                floorObjectRight.appendChild(floorObjectTypeStats);
                floorObjectRight.appendChild(floorObjectTypeImg);

                //aggingo pulsante prendi
                floorObjectBTN = document.createElement("button");
                floorObjectBTN.className = "btn btn-take";
                floorObjectBTN.innerHTML = "prendi";
                
                //inserisco gli elementi sul box
                floorObject.appendChild(floorObjectName);
                floorObject.appendChild(floorObjectLeft);
                floorObject.appendChild(floorObjectRight);
                floorObject.appendChild(floorObjectBTN);

                //aggiungi elementi al box oggetti interno
                modalObjRoomElenco.appendChild(floorObject);
            }
        }
        setTimeout(function(){
            boxfloor.src = '../projectluccio/ui/img/open-box.png';
            cardboxSound.play();
        }, 1000);
        if(!modalObjRoom.classList.contains('modal-floorObjects--active')){
            setTimeout(function(){
                modalObjRoom.classList.add('modal-floorObjects--active') 
            }, 1500);
        } else {
            modalObjRoom.classList.remove('modal-floorObjects--active')
        }
    }

    //OBSERVER PER PULSANTI BOTTONI PRENDI
    observerStartTakeBtn = new MutationObserver(takeBtninteractive);
    //evento oggetto prendi
    function takeBtninteractive(mutations){
        console.log('mutation pulsante prendi')
        let btnTake = document.querySelectorAll(".btn-take");
        for (let i = 0; i < btnTake.length; i++) {
            btnTake[i].addEventListener('click', makeCollectFunction.bind(null,i)) 
        } 
        
    }
    observerStartTakeBtn.observe(modalObjRoom,{attributes:true});
    
    ////////////////////////////////////// ANIMAZIONE NEMICO /////////////////////////////////////
    animateSgherro(1);

    function animateSgherro(num){
        let i = 0;
        setInterval(function(){  
            i <= 48 ? i++ : i = 0;
            document.getElementById("enemy-img").src = '../projectluccio/personaggi/sgherro'+num+'/sgherro_'+i+'.png'; 
        }, 50);
    }



//////////////////////VARIABILI DOM////////////////////////////////////////////////////
const cella = document.getElementById("cella");
let btns = document.querySelectorAll(".btn");

let statsChars = document.querySelectorAll(".stats-element");
let statsCharsParts = document.querySelectorAll(".stats-element .stats-stats .stats-icon .stats-icon-points");

const modal = document.getElementById("modal");
let modalInner = document.querySelectorAll(".modal-inner");

//////////////////VARIABILI RISORSE MUSIC/////////////////
const btnSound = new Audio('../projectluccio/ui/music/selection.mp3');
const ouchSound = new Audio('../projectluccio/ui/music/ouch.ogg');
const hungrySound = new Audio('../projectluccio/ui/music/hungry.ogg');


//////INIZIALIZZAZIONE IMMEDIATA////////////////////////////////////////////
    //funzione apertura occhi inizio livello

    //aperturaOcchi();
    function aperturaOcchi(){    
        /*rimuovo info start level */
        let startLevel = document.querySelectorAll('.startLevel');
        setTimeout(function(){
            startLevel[0].classList.add('startLevel-inactive');
        }, 300);

        /*animazione apertura occhi*/  
        var svg = document.getElementById("occhio-sopra");
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
        }

        //inizializzazione funzione
        occhioChiusoAnim();
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

    function YourTurn(){
        statsChars[0].classList.remove('stats-element--disabled');
        statsChars[1].classList.add('stats-element--disabled');
    }

    function EnemyTurn(){
        statsChars[1].classList.remove('stats-element--disabled');
        statsChars[0].classList.add('stats-element--disabled');
    }

    function AddPointsDamage(char,statsType,points,init){
        let pointsToAdd;
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
    }

    //////////////////////////////////////INTERFACCIA MODAL /////////////////////////////////////

    function showModal(){
       !modal.classList.contains('modal--active') ? modal.classList.add('modal--active') : modal.classList.remove('modal--active')
       setTimeout(function(){
        modalInner[0].classList.add('modal-inner--active');
       }, 300);
    }
    function hideModal(){
        setTimeout(function(){
            modalInner[0].classList.remove('modal-inner--active');
        }, 400);
        setTimeout(function(){
            !modal.classList.contains('modal--active') ? modal.classList.add('modal--active') : modal.classList.remove('modal--active')
            resetBtn();
        }, 600);
     }
 
    ////////////////////////////////////// ANIMAZIONE NEMICO /////////////////////////////////////
    animateSgherro();

    function animateSgherro(){
        let i = 0;
        setInterval(function(){  
            i <= 48 ? i++ : i = 0;
            document.getElementById("enemy-img").src = '../projectluccio/personaggi/sgherro1/sgherro_'+i+'.png'; 
        }, 50);
    }
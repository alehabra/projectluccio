////////////STATISTICHE NEMICO//////////////
const enemyStatsUi = document.getElementById('enemyStats');
const alteredEnemUi = document.getElementById('alteredStatsEnem');

const heartEnemOne = document.getElementById('enemyStats-heart-point-1');
const heartEnemTwo = document.getElementById('enemyStats-heart-point-2');
const heartEnemTree = document.getElementById('enemyStats-heart-point-3');
const heartEnemFour = document.getElementById('enemyStats-heart-point-4');
const hungryEnemOne = document.getElementById('enemyStats-hungry-point-1');
const hungryEnemTwo = document.getElementById('enemyStats-hungry-point-2');
const hungryEnemTree = document.getElementById('enemyStats-hungry-point-3');
const hungryEnemFour = document.getElementById('enemyStats-hungry-point-4');
const moodEnemOne = document.getElementById('enemyStats-mood-point-1');
const moodEnemTwo = document.getElementById('enemyStats-mood-point-2');
const moodEnemTree = document.getElementById('enemyStats-mood-point-3');
const moodEnemFour = document.getElementById('enemyStats-mood-point-4');

////////////LINEE ALTERA STATISTICA NEMICO//////////////
const heartEAlter1 = document.getElementById('h-estat-1');
const heartEAlter2 = document.getElementById('h-estat-2');
const heartEAlter3 = document.getElementById('h-estat-3');
const heartEAlter4 = document.getElementById('h-estat-4');

const foodEAlter1 = document.getElementById('f-estat-1');
const foodEAlter2 = document.getElementById('f-estat-2');
const foodEAlter3 = document.getElementById('f-estat-3');
const foodEAlter4 = document.getElementById('f-estat-4');

const moodEAlter1 = document.getElementById('m-estat-1');
const moodEAlter2 = document.getElementById('m-estat-2');
const moodEAlter3 = document.getElementById('m-estat-3');
const moodEAlter4 = document.getElementById('m-estat-4');

////////////MOSTRA STATISTICHE NEMICO///////////
function showEnemyStats(){
    enemyStatsUi.classList.add('enemyStats--active');
    alteredEnemUi.classList.remove('alteredStats--active');
}

function hideEnemyStats(){
    enemyStatsUi.classList.remove('enemyStats--active');
}

///CAMBIO STATISTICHE NEMICO//////////////////
function changeEnemStats(type,loss,number){
    slideFX.play();
    enemyStatsUi.classList.remove('enemyStats--active');
    alteredEnemUi.classList.add('alteredStats--active');

    let statsType;

    //cambio statistiche salute nella ui alterazione
    if(type === 'heart'){
        statsType = document.getElementById('altered-heart');
        
        //gestisco perdo punti statistica
            if (number===1){
                //ui giocatore
                if(loss === true){
                    heartEnemOne.classList.add('charStats-stats--hide');
                } else{
                    addStatsToEnem(type,number);
                }    
                
                //ui alterazione
                heartEAlter1.classList.add('alter-blink');

                setTimeout(function(){ showEnemyStats(); }, 3000);
                setTimeout(function(){removeBlinkEnemalter();}, 3000);
            }
            if (number===2){
                //ui giocatore
                if(loss === true){
                    heartEnemOne.classList.add('charStats-stats--hide');
                    heartEnemTwo.classList.add('charStats-stats--hide');
                } else {
                    addStatsToEnem(type,number);                    
                }

                //ui alterazione
                heartEAlter1.classList.add('alter-blink');
                heartEAlter2.classList.add('alter-blink');

                setTimeout(function(){ showEnemyStats(); }, 3000);
                setTimeout(function(){removeBlinkEnemalter();}, 3000);
            }
            if (number===3){
                //ui giocatore
                if(loss === true){ 
                    heartEnemOne.classList.add('charStats-stats--hide');
                    heartEnemTwo.classList.add('charStats-stats--hide');
                    heartEnemTree.classList.add('charStats-stats--hide');
                }  else {
                    addStatsToEnem(type,number);
                }  

                //ui alterazione
                heartEAlter1.classList.add('alter-blink');
                heartEAlter2.classList.add('alter-blink');
                heartEAlter3.classList.add('alter-blink');


                setTimeout(function(){ showEnemyStats(); }, 3000);
                setTimeout(function(){removeBlinkEnemalter();}, 3000);
            }
            if (number===4){
                //ui giocatore
                if(loss === true){ 
                    heartEnemOne.classList.add('charStats-stats--hide');
                    heartEnemTwo.classList.add('charStats-stats--hide');
                    heartEnemTree.classList.add('charStats-stats--hide');
                    heartEnemFour.classList.add('charStats-stats--hide');
                } else {
                    addStatsToEnem(type,number);                  
                }   

                //ui alterazione                    
                heartEAlter1.classList.add('alter-blink');
                heartEAlter2.classList.add('alter-blink');
                heartEAlter3.classList.add('alter-blink');
                heartEAlter4.classList.add('alter-blink');
                setTimeout(function(){ showEnemyStats(); }, 3000);
                setTimeout(function(){removeBlinkEnemalter();}, 3000);
            }

    }

    //cambio statistiche fame nella ui alterazione
    if(type === 'food'){
        statsType = document.getElementById('altered-hungry');

        if (number===1){
            //ui giocatore
            if(loss === true){
                hungryEnemOne.classList.add('charStats-stats--hide');
            } else {
                addStatsToEnem(type,number);
            }

            //ui alterazione
            foodEAlter1.classList.add('alter-blink');
            setTimeout(function(){ showEnemyStats(); }, 3000);
            setTimeout(function(){removeBlinkEnemalter();}, 3000);
        }
        if (number===2){
            //ui giocatore
            if(loss === true){
                hungryEnemOne.classList.add('charStats-stats--hide');
                hungryEnemTwo.classList.add('charStats-stats--hide');
            } else {
                addStatsToEnem(type,number);
            }    

            //ui alterazione            
            foodEAlter1.classList.add('alter-blink');
            foodEAlter2.classList.add('alter-blink');
            setTimeout(function(){ showEnemyStats(); }, 3000);
            setTimeout(function(){removeBlinkEnemalter();}, 3000);
        }
        if (number===3){
            //ui giocatore
            if(loss === true){
                hungryEnemOne.classList.add('charStats-stats--hide');
                hungryEnemTwo.classList.add('charStats-stats--hide');
                hungryEnemTree.classList.add('charStats-stats--hide');
            } else {
                addStatsToEnem(type,number);                
            }


            //ui alterazione              
            foodEAlter1.classList.add('alter-blink');
            foodEAlter2.classList.add('alter-blink');
            foodEAlter3.classList.add('alter-blink');
            setTimeout(function(){ showEnemyStats(); }, 3000);
            setTimeout(function(){removeBlinkEnemalter();}, 3000);
        }
        if (number===4){
            //ui giocatore
            if(loss === true){
                hungryEnemOne.classList.add('charStats-stats--hide');
                hungryEnemTwo.classList.add('charStats-stats--hide');
                hungryEnemTree.classList.add('charStats-stats--hide');
                hungryEnemFour.classList.add('charStats-stats--hide');
            }   else {
                addStatsToEnem(type,number);
            } 

            //ui alterazione             
            foodEAlter1.classList.add('alter-blink');
            foodEAlter2.classList.add('alter-blink');
            foodEAlter3.classList.add('alter-blink');
            foodEAlter4.classList.add('alter-blink');
            setTimeout(function(){ showEnemyStats(); }, 3000);
            setTimeout(function(){removeBlinkEnemalter();}, 3000);
        }
    }

    //cambio statistiche mood nella ui alterazione
    if(type === 'mood'){
        statsType = document.getElementById('altered-mood');

        if (number===1){
            //ui giocatore
            if(loss === true){
                moodEnemOne.classList.add('charStats-stats--hide');
            } else {
                addStatsToEnem(type,number);
            }

            //ui alterazione 
            moodEAlter1.classList.add('alter-blink');
            setTimeout(function(){ showEnemyStats(); }, 3000);
            
        }
        if (number===2){
            //ui giocatore
            if(loss === true){
                moodEnemOne.classList.add('charStats-stats--hide');
                moodEnemTwo.classList.add('charStats-stats--hide');
            }   else {
                addStatsToEnem(type,number);
            } 

            //ui alterazione 
            moodEAlter1.classList.add('alter-blink');
            moodEAlter2.classList.add('alter-blink');
            setTimeout(function(){ showEnemyStats(); }, 3000);
            setTimeout(function(){removeBlinkEnemalter();}, 3000);
        }
        if (number===3){
            //ui giocatore
            if(loss === true){
                moodEnemOne.classList.add('charStats-stats--hide');
                moodEnemTwo.classList.add('charStats-stats--hide');
                moodEnemTree.classList.add('charStats-stats--hide');
            }  else {
                addStatsToEnem(type,number);
            }  

            //ui alterazione             
            moodEAlter1.classList.add('alter-blink');
            moodEAlter2.classList.add('alter-blink');
            moodEAlter3.classList.add('alter-blink');
            setTimeout(function(){ showEnemyStats(); }, 3000);
            setTimeout(function(){removeBlinkEnemalter();}, 3000);
        }
        if (number===4){
            //ui giocatore
            if(loss === true){
                moodEnemOne.classList.add('charStats-stats--hide');
                moodEnemTwo.classList.add('charStats-stats--hide');
                moodEnemTree.classList.add('charStats-stats--hide');
                moodEnemFour.classList.add('charStats-stats--hide');
            } else {
                addStatsToEnem(type,number);
            }

            //ui alterazione              
            moodEAlter1.classList.add('alter-blink');
            moodEAlter2.classList.add('alter-blink');
            moodEAlter3.classList.add('alter-blink');
            moodEAlter4.classList.add('alter-blink');
            setTimeout(function(){ showEnemyStats(); }, 3000);
            setTimeout(function(){removeBlinkEnemalter();}, 3000);
        }
    }
}

//funzione callback per aumentare in modo ordinato la statistica del giocatore
function addStatsToEnem(type,number){
    let decr = number;

    //aggiungo punti
    if (type === 'heart'){

        //calcolo punti rimanenti da aggiungere
        var rimasti = document.querySelectorAll("#enemyStats-heart-base .charStats-stats--hide");
        if(decr > rimasti.length){
            decr = rimasti.length;
        }

        while (decr > 0) {
            if(heartEnemFour.classList.contains('charStats-stats--hide')){
                heartEnemFour.classList.remove('charStats-stats--hide');
                decr = decr-1;
                continue;
            }
            if(heartEnemTree.classList.contains('charStats-stats--hide')){
                heartEnemTree.classList.remove('charStats-stats--hide');
                decr = decr-1;
                continue;
            } 
            if(heartEnemTwo.classList.contains('charStats-stats--hide')){
                heartEnemTwo.classList.remove('charStats-stats--hide');
                decr = decr-1;
                continue;
            }  
            if(heartEnemOne.classList.contains('charStats-stats--hide')){
                heartEnemOne.classList.remove('charStats-stats--hide');
                decr = decr-1;
                return;
            }     
        }
    }
    if (type === 'food'){
        //calcolo punti rimanenti da aggiungere
        var rimasti = document.querySelectorAll("#enemyStats-hungry-base .charStats-stats--hide");
        if(decr > rimasti.length){
            decr = rimasti.length;
        }

        while (decr > 0) {
            if(hungryEnemFour.classList.contains('charStats-stats--hide')){
                hungryEnemFour.classList.remove('charStats-stats--hide');
                decr = decr-1;
                continue;
            }
            if(hungryEnemTree.classList.contains('charStats-stats--hide')){
                hungryEnemTree.classList.remove('charStats-stats--hide');
                decr = decr-1;
                continue;
            } 
            if(hungryEnemTwo.classList.contains('charStats-stats--hide')){
                hungryEnemTwo.classList.remove('charStats-stats--hide');
                decr = decr-1;
                continue;
            }  
            if(hungryEnemOne.classList.contains('charStats-stats--hide')){
                hungryEnemOne.classList.remove('charStats-stats--hide');
                decr = decr-1;
                continue;
            }     
        }
    }
    if (type === 'mood'){     
        //calcolo punti rimanenti da aggiungere
        var rimasti = document.querySelectorAll("#enemyStats-mood-base .charStats-stats--hide");
        if(decr > rimasti.length){
            decr = rimasti.length;
        }
         
        while (decr > 0) {
            if(moodEnemFour.classList.contains('charStats-stats--hide')){
                moodEnemFour.classList.remove('charStats-stats--hide');
                decr = decr-1;
                continue;
            }
            if(moodEnemTree.classList.contains('charStats-stats--hide')){
                moodEnemTree.classList.remove('charStats-stats--hide');
                decr = decr-1;
                continue;
            } 
            if(moodEnemTwo.classList.contains('charStats-stats--hide')){
                moodEnemTwo.classList.remove('charStats-stats--hide');
                decr = decr-1;
                continue;
            }  
            if(moodEnemOne.classList.contains('charStats-stats--hide')){
                moodEnemOne.classList.remove('charStats-stats--hide');
                decr = decr-1;
                continue;
            }     
        }
    }        
}

function removeBlinkEnemalter(){
    heartEAlter1.classList.remove('alter-blink');
    heartEAlter2.classList.remove('alter-blink');
    heartEAlter3.classList.remove('alter-blink');
    heartEAlter4.classList.remove('alter-blink');
    foodEAlter1.classList.remove('alter-blink');
    foodEAlter2.classList.remove('alter-blink');
    foodEAlter3.classList.remove('alter-blink');
    foodEAlter4.classList.remove('alter-blink');
    moodEAlter1.classList.remove('alter-blink');
    moodEAlter2.classList.remove('alter-blink');
    moodEAlter3.classList.remove('alter-blink');
    moodEAlter4.classList.remove('alter-blink');
}
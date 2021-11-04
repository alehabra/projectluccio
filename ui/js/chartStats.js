////////////STATISTICHE GIOCATORE//////////////
const charStatsUi = document.getElementById('charStats');
const charChoiceUi = document.getElementById('charStats-choice');
const alteredCharUi = document.getElementById('alteredStats');

const heartOne = document.getElementById('charStats-heart-point-1');
const heartTwo = document.getElementById('charStats-heart-point-2');
const heartTree = document.getElementById('charStats-heart-point-3');
const heartFour = document.getElementById('charStats-heart-point-4');
const hungryOne = document.getElementById('charStats-hungry-point-1');
const hungryTwo = document.getElementById('charStats-hungry-point-2');
const hungryTree = document.getElementById('charStats-hungry-point-3');
const hungryFour = document.getElementById('charStats-hungry-point-4');
const moodOne = document.getElementById('charStats-mood-point-1');
const moodTwo = document.getElementById('charStats-mood-point-2');
const moodTree = document.getElementById('charStats-mood-point-3');
const moodFour = document.getElementById('charStats-mood-point-4');

/////////SEGNALATORE STATO CRITICO STATISTICHE GIOCATORE////////////////
const healthCritic = document.getElementById('chartstats-critic-heart');
const hungryCritic = document.getElementById('chartstats-critic-hungry');
const moodCritic = document.getElementById('chartstats-critic-mood');


////////////LINEE ALTERA STATISTICA GIOCATORE//////////////
const heartAlter1 = document.getElementById('h-stat-1');
const heartAlter2 = document.getElementById('h-stat-2');
const heartAlter3 = document.getElementById('h-stat-3');
const heartAlter4 = document.getElementById('h-stat-4');

const foodAlter1 = document.getElementById('f-stat-1');
const foodAlter2 = document.getElementById('f-stat-2');
const foodAlter3 = document.getElementById('f-stat-3');
const foodAlter4 = document.getElementById('f-stat-4');

const moodAlter1 = document.getElementById('m-stat-1');
const moodAlter2 = document.getElementById('m-stat-2');
const moodAlter3 = document.getElementById('m-stat-3');
const moodAlter4 = document.getElementById('m-stat-4');



///VISUALIZZAZIONE STATISTICHE GIOCATORE//////////////////
function showStatsChar(){
    charChoiceUi.classList.remove('charStats-choice--active');
    alteredCharUi.classList.remove('alteredStats--active');
    charStatsUi.classList.add('charStats--active');
}
function showChoicheChar(){
    charStatsUi.classList.remove('charStats--active');
    charChoiceUi.classList.add('charStats-choice--active');
}

/////////////FUNZIONE PER SEGNALARE STATO CRITICO////////////////
function criticParam(type,loss){
    if (type === "heart"){
        if (loss === true){
            healthCritic.classList.add('charStats-critic--active');
        } else{
            healthCritic.classList.remove('charStats-critic--active');  
        }
    }
    if (type === "food"){
        if (loss === true){
            hungryCritic.classList.add('charStats-critic--active');
        } else{
            hungryCritic.classList.remove('charStats-critic--active');  
        }
    }
    if (type === "mood"){
        if (loss === true){
            moodCritic.classList.add('charStats-critic--active');
        } else{
            moodCritic.classList.remove('charStats-critic--active');  
        }
    }
}

///CAMBIO STATISTICHE GIOCATORE//////////////////
function changeCharStats(type,loss,number){
    slideFX.play();
    charStatsUi.classList.remove('charStats--active');
    alteredCharUi.classList.add('alteredStats--active');

    let statsType;

    //cambio statistiche salute nella ui alterazione
    if(type === 'heart'){
        statsType = document.getElementById('altered-heart');
        
        //gestisco perdo punti statistica
            if (number===1){
                //ui giocatore
                heartOne.classList.add('charStats-stats--hide');

                //ui alterazione
                heartAlter1.classList.add('alter-blink');
                setTimeout(function(){ showStatsChar(); }, 2000);
                setTimeout(function(){removeBlinkalter();}, 3000);
            }
            if (number===2){
                //ui giocatore
                heartOne.classList.add('charStats-stats--hide');
                heartTwo.classList.add('charStats-stats--hide');

                //ui alterazione
                heartAlter1.classList.add('alter-blink');
                heartAlter2.classList.add('alter-blink');
                setTimeout(function(){ showStatsChar(); }, 2000);
                setTimeout(function(){removeBlinkalter();}, 3000);
            }
            if (number===3){
                //ui giocatore
                heartOne.classList.add('charStats-stats--hide');
                heartTwo.classList.add('charStats-stats--hide');
                heartTree.classList.add('charStats-stats--hide');
                if(loss === true){
                    criticParam('heart',true);
                }

                //ui alterazione                
                heartAlter1.classList.add('alter-blink');
                heartAlter2.classList.add('alter-blink');
                heartAlter3.classList.add('alter-blink');
                setTimeout(function(){ showStatsChar(); }, 2000);
                setTimeout(function(){removeBlinkalter();}, 3000);
            }
            if (number===4){
                //ui giocatore
                heartOne.classList.add('charStats-stats--hide');
                heartTwo.classList.add('charStats-stats--hide');
                heartTree.classList.add('charStats-stats--hide');
                heartFour.classList.add('charStats-stats--hide');
                if(loss === true){
                    criticParam('heart',true);
                }

                //ui alterazione                    
                heartAlter1.classList.add('alter-blink');
                heartAlter2.classList.add('alter-blink');
                heartAlter3.classList.add('alter-blink');
                heartAlter4.classList.add('alter-blink');
                setTimeout(function(){ showStatsChar(); }, 2000);
                setTimeout(function(){removeBlinkalter();}, 3000);
            }

    }

    //cambio statistiche fame nella ui alterazione
    if(type === 'food'){
        statsType = document.getElementById('altered-hungry');

        if (number===1){
            //ui giocatore
            hungryOne.classList.add('charStats-stats--hide');

            //ui alterazione
            foodAlter1.classList.add('alter-blink');
            setTimeout(function(){ showStatsChar(); }, 2000);
            setTimeout(function(){removeBlinkalter();}, 3000);
        }
        if (number===2){
            //ui giocatore
            hungryOne.classList.add('charStats-stats--hide');
            hungryTwo.classList.add('charStats-stats--hide');

            //ui alterazione            
            foodAlter1.classList.add('alter-blink');
            foodAlter2.classList.add('alter-blink');
            setTimeout(function(){ showStatsChar(); }, 2000);
            setTimeout(function(){removeBlinkalter();}, 3000);
        }
        if (number===3){
            //ui giocatore
            hungryOne.classList.add('charStats-stats--hide');
            hungryTwo.classList.add('charStats-stats--hide');
            hungryTree.classList.add('charStats-stats--hide');
            if(loss === true){
                criticParam('food',true);
            }

            //ui alterazione              
            foodAlter1.classList.add('alter-blink');
            foodAlter2.classList.add('alter-blink');
            foodAlter3.classList.add('alter-blink');
            setTimeout(function(){ showStatsChar(); }, 2000);
            setTimeout(function(){removeBlinkalter();}, 3000);
        }
        if (number===4){
            //ui giocatore
            hungryOne.classList.add('charStats-stats--hide');
            hungryTwo.classList.add('charStats-stats--hide');
            hungryTree.classList.add('charStats-stats--hide');
            hungryFour.classList.add('charStats-stats--hide');
            if(loss === true){
                criticParam('food',true);
            }

            //ui alterazione             
            foodAlter1.classList.add('alter-blink');
            foodAlter2.classList.add('alter-blink');
            foodAlter3.classList.add('alter-blink');
            foodAlter4.classList.add('alter-blink');
            setTimeout(function(){ showStatsChar(); }, 2000);
            setTimeout(function(){removeBlinkalter();}, 3000);
        }
    }

    //cambio statistiche mood nella ui alterazione
    if(type === 'mood'){
        statsType = document.getElementById('altered-mood');

        if (number===1){
            //ui giocatore
            moodOne.classList.add('charStats-stats--hide');

            //ui alterazione 
            moodAlter1.classList.add('alter-blink');
            setTimeout(function(){ showStatsChar(); }, 2000);
            setTimeout(function(){removeBlinkalter();}, 3000);
        }
        if (number===2){
            //ui giocatore
            moodOne.classList.add('charStats-stats--hide');
            moodTwo.classList.add('charStats-stats--hide');

            //ui alterazione 
            moodAlter1.classList.add('alter-blink');
            moodAlter2.classList.add('alter-blink');
            setTimeout(function(){ showStatsChar(); }, 2000);
            setTimeout(function(){removeBlinkalter();}, 3000);
        }
        if (number===3){
            //ui giocatore
            moodOne.classList.add('charStats-stats--hide');
            moodTwo.classList.add('charStats-stats--hide');
            moodTree.classList.add('charStats-stats--hide');
            if(loss === true){
                criticParam('mood',true);
            }

            //ui alterazione             
            moodAlter1.classList.add('alter-blink');
            moodAlter2.classList.add('alter-blink');
            moodAlter3.classList.add('alter-blink');
            setTimeout(function(){ showStatsChar(); }, 2000);
            setTimeout(function(){removeBlinkalter();}, 3000);
        }
        if (number===4){
            //ui giocatore
            moodOne.classList.add('charStats-stats--hide');
            moodTwo.classList.add('charStats-stats--hide');
            moodTree.classList.add('charStats-stats--hide');
            moodFour.classList.add('charStats-stats--hide');
            if(loss === true){
                criticParam('mood',true);
            }

            //ui alterazione              
            moodAlter1.classList.add('alter-blink');
            moodAlter2.classList.add('alter-blink');
            moodAlter3.classList.add('alter-blink');
            moodAlter4.classList.add('alter-blink');
            setTimeout(function(){ showStatsChar(); }, 2000);
            setTimeout(function(){removeBlinkalter();}, 3000);
        }
    }
}

function removeBlinkalter(){
    heartAlter1.classList.remove('alter-blink');
    heartAlter2.classList.remove('alter-blink');
    heartAlter3.classList.remove('alter-blink');
    heartAlter4.classList.remove('alter-blink');
    foodAlter1.classList.remove('alter-blink');
    foodAlter2.classList.remove('alter-blink');
    foodAlter3.classList.remove('alter-blink');
    foodAlter4.classList.remove('alter-blink');
    moodAlter1.classList.remove('alter-blink');
    moodAlter2.classList.remove('alter-blink');
    moodAlter3.classList.remove('alter-blink');
    moodAlter4.classList.remove('alter-blink');
}
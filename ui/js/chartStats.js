////////////STATISTICHE GIOCATORE//////////////
const charStatsUi = document.getElementById('charStats');
const charChoiceUi = document.getElementById('charStats-choice');
const alteredCharUi = document.getElementById('alteredStats');

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



///CAMBIO STATISTICHE GIOCATORE//////////////////
function changeCharStats(type,loss,number){
    charStatsUi.classList.remove('charStats--active');
    alteredCharUi.classList.add('alteredStats--active');

    let statsType;

    heartAlter1.classList.add('alter-blink');

    if(type === 'heart'){
        statsType = document.getElementById('altered-heart');
        if(loss===true){
            if (number===1){
                heartAlter1.classList.add('alter-blink');
                setTimeout(function(){ showStatsChar(); }, 2000);
                setTimeout(function(){removeBlinkalter();}, 3000);
            }
            if (number===2){
                heartAlter1.classList.add('alter-blink');
                heartAlter2.classList.add('alter-blink');
                setTimeout(function(){ showStatsChar(); }, 2000);
                setTimeout(function(){removeBlinkalter();}, 3000);
            }
            if (number===3){
                heartAlter1.classList.add('alter-blink');
                heartAlter2.classList.add('alter-blink');
                heartAlter3.classList.add('alter-blink');
                setTimeout(function(){ showStatsChar(); }, 2000);
                setTimeout(function(){removeBlinkalter();}, 3000);
            }
            if (number===4){
                heartAlter1.classList.add('alter-blink');
                heartAlter2.classList.add('alter-blink');
                heartAlter3.classList.add('alter-blink');
                heartAlter4.classList.add('alter-blink');
                setTimeout(function(){ showStatsChar(); }, 2000);
                setTimeout(function(){removeBlinkalter();}, 3000);
            }
        }
    }


    if(type === 'food'){
        statsType = document.getElementById('altered-hungry');

        if (number===1){
            foodAlter1.classList.add('alter-blink');
            setTimeout(function(){ showStatsChar(); }, 2000);
            setTimeout(function(){removeBlinkalter();}, 3000);
        }
        if (number===2){
            foodAlter1.classList.add('alter-blink');
            foodAlter2.classList.add('alter-blink');
            setTimeout(function(){ showStatsChar(); }, 2000);
            setTimeout(function(){removeBlinkalter();}, 3000);
        }
        if (number===3){
            foodAlter1.classList.add('alter-blink');
            foodAlter2.classList.add('alter-blink');
            foodAlter3.classList.add('alter-blink');
            setTimeout(function(){ showStatsChar(); }, 2000);
            setTimeout(function(){removeBlinkalter();}, 3000);
        }
        if (number===4){
            foodAlter1.classList.add('alter-blink');
            foodAlter2.classList.add('alter-blink');
            foodAlter3.classList.add('alter-blink');
            foodAlter4.classList.add('alter-blink');
            setTimeout(function(){ showStatsChar(); }, 2000);
            setTimeout(function(){removeBlinkalter();}, 3000);
        }
    }


    if(type === 'mood'){
        statsType = document.getElementById('altered-mood');

        if (number===1){
            moodAlter1.classList.add('alter-blink');
            setTimeout(function(){ showStatsChar(); }, 2000);
            setTimeout(function(){removeBlinkalter();}, 3000);
        }
        if (number===2){
            moodAlter1.classList.add('alter-blink');
            moodAlter2.classList.add('alter-blink');
            setTimeout(function(){ showStatsChar(); }, 2000);
            setTimeout(function(){removeBlinkalter();}, 3000);
        }
        if (number===3){
            moodAlter1.classList.add('alter-blink');
            moodAlter2.classList.add('alter-blink');
            moodAlter3.classList.add('alter-blink');
            setTimeout(function(){ showStatsChar(); }, 2000);
            setTimeout(function(){removeBlinkalter();}, 3000);
        }
        if (number===4){
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
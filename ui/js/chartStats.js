////////////STATISTICHE GIOCATORE//////////////
const charStatsUi = document.getElementById('charStats');
const charChoiceUi = document.getElementById('charStats-choice');

function showChoicheChar(){
    charStatsUi.classList.remove('charStats--active');
    charChoiceUi.classList.add('charStats-choice--active');
}

function showStatsChar(){
    charChoiceUi.classList.remove('charStats-choice--active');
    charStatsUi.classList.add('charStats--active');
}
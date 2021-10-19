///// VARIABILI OGGETTI /////
const salsiccia = ['la salsiccia','../ui/img/object-salsiccia.svg','../ui/img/hungry-statistic.svg'];


////////////TRIGGER DIALOGO//////////////
const dialog = document.getElementById('dialogs');
let dialogNum = 0;
let IsdialogActive;

function StartDialog(){
    //creo box dialogo
    dialog.classList.add('dialogs--active')
    var dialogBox = document.createElement('div');
    var dialogBack = document.createElement('div');
    if(dialogJSON.inizio[0][0].char == 'main'){
        dialogBox.classList.add('dialog-char');
        dialogBack.classList.add('dialog-char-back');
    } else{
        dialogBox.classList.add('dialog-npc');
        dialogBack.classList.add('dialog-npc-back');
    }
    dialogBox.classList.add('dialog');
    dialogBox.classList.add('dialog--active');

    //inserisco il testo
    dialogBox.innerHTML= dialogJSON.inizio[0][0].line;
    dialogBox.appendChild(dialogBack);
    
    //inserisco il box di dialogo dentro al contenitore
    dialog.appendChild(dialogBox);

    //incremento la linea di dialogo e segnalo il dialogo attivo
    dialogNum++

    IsdialogActive = document.querySelectorAll('.dialog--active');
    
}


////////////BOX SELEZIONE OGGETTI//////////////
const boxOggetto = document.getElementById('objSelector');

function showBoxObjects(){
    boxOggetto.classList.add('objSelector--active');
}
function hideBoxObjects(){
    boxOggetto.classList.remove('objSelector--active');
}

////////////OGGETTO SELEZIONATO//////////////
const objObtained = document.getElementById('objSelected');
const objImageSelected = document.getElementById('objSelected-in');
const objImageConfetti = document.getElementById('objSelected-image--confetti');
const objObtainedIcon = document.getElementById('objSelected-description-icon');

const lineSx1 = document.getElementById('line-2-sx').getElementsByClassName("line-2-sx")[0];
const lineSx2 = document.getElementById('line-3-sx').getElementsByClassName("line-3-sx")[0];
const lineSx3 = document.getElementById('line-4-sx').getElementsByClassName("line-4-sx")[0];
const lineDx1 = document.getElementById('line-1-dx').getElementsByClassName("line-1-dx")[0];
const lineDx2 = document.getElementById('line-2-dx').getElementsByClassName("line-3-sx")[0];
const lineDx3 = document.getElementById('line-3-dx').getElementsByClassName("line-4-dx")[0];

const objSelectedStats = document.getElementById('objSelected-description-icon');

var confettiSettings = { target: 'objSelected-image--confetti' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

function showBoxObjSelected(){
    objObtained.classList.add('objSelected--active');
    objImageSelected.classList.add('animation-obj');
    objImageConfetti.classList.add('animation-confetti');

    lineSx1.classList.add('animation-line');
    lineSx3.classList.add('animation-line');
    lineDx1.classList.add('animation-line');
    lineDx3.classList.add('animation-line');

    lineSx2.classList.add('animation-line2');
    lineDx2.classList.add('animation-line2');

    setTimeout(function(){
        objObtainedIcon.classList.add('objSelected-description-icon--active');
    }, 1000);
    setTimeout(function(){
        removeBoxObjSelected();
    }, 2000);
};

function removeBoxObjSelected(){
    objObtained.classList.remove('objSelected--active');
    objImageSelected.classList.remove('animation-obj');
    objImageConfetti.classList.remove('animation-confetti');

    lineSx1.classList.remove('animation-line');
    lineSx3.classList.remove('animation-line');
    lineDx1.classList.remove('animation-line');
    lineDx3.classList.remove('animation-line');

    lineSx2.classList.remove('animation-line2');
    lineDx2.classList.remove('animation-line2');

    objObtainedIcon.classList.remove('objSelected-description-icon--active');
}
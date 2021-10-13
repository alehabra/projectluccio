////////////TRIGGER DIALOGO//////////////
const dialog = document.getElementById('dialogs');
let dialogNum = 0;
let IsdialogActive;
IsdialogActive[0].onclick = ContinueDialog();

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

//click sul dialogo attivo
//IsdialogActive.onclick = ContinueDialog();

function ContinueDialog(){
    //rimuovo attivazione da dialogo precendente
    let dialogActive = document.querySelectorAll('.dialog');
    dialogActive[0].classList.remove('dialog--active');

    //creo il box dialogo
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
    dialogBox.innerHTML= dialogJSON.inizio[0][1].line;
    dialogBox.appendChild(dialogBack);
    dialog.appendChild(dialogBox);

    //incremento la linea di dialogo
    dialogNum++
}


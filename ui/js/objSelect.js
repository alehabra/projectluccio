////////////BOX SELEZIONE OGGETTI//////////////
const boxOggetto = document.getElementById('objSelector');

function showBoxObjects(){
    boxOggetto.classList.add('objSelector--active');
}
function hideBoxObjects(){
    boxOggetto.classList.remove('objSelector--active');
}

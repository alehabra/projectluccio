////////////etichette lingua/////////////
var lang = {

    'ita':{
        'enemyUI':{
            'bag':'ZAINO'
        },
        'charUI':{
            'bag':'ZAINO'
        },
        'objSelection': 'SELEZIONA UN OGGETTO DALLA STANZA'
    },
    'eng':{
        'enemyUI':{
            'bag':'BAG'
        },
        'charUI':{
            'bag':'BAG'
        },
        'objSelection': 'SELECT AN OBJECT FROM THE ROOM'
    }

}


////////////CAMPI LINGUA//////////////
const enemyBag = document.getElementById('enemyStats-bagname');
const charBag = document.getElementById('charStats-bagname');
const objRoomSelectInfo = document.getElementById('objSelector-info');

function populateLangUI(){
    enemyBag.innerHTML = lang.eng.enemyUI.bag;
    charBag.innerHTML = lang.eng.enemyUI.bag;
    objRoomSelectInfo.innerHTML = lang.eng.objSelection;
}


(function () {
    populateLangUI();
}());
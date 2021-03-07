/*
 * Liberty Software
 * Progetto     : Luccio
 * File         : backpackItems.jd
 * Descrizione  : Array degli oggetti preseni nel gioco
 * Autore       : Marco Botter
 * Data         : 07/03/2021
 * Versione     : Alpha
 */

let backpackItems=[
    {
        name: "Pane",                               //Nome dell'oggetto
        description: "Un buon pezzo di pane",       //Descrizione dell'oggetto
        abundance: 10,                              //Abbondanza
        type: "food",                               //Tipo (se non serve scambiarlo non serve)
        perform: function (char){                   //Funzione all'uso dell'oggetto (char è il personaggio che lo usa)
            char.hunger--;                          //Riduci la fame
        },
        icon: ""                                    //File dell'icona
    },
    {
        name: "Mazza",
        description: "Una semplice ma efficace arma da mischia",
        abundance: 5,
        type: "weapon",
        perform: function (char){
            char.enemy.damage(1);                   //Fai un danno al nemico
        },
        icon: ""
    }
]
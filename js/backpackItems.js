/*
 * Liberty Software
 * Progetto     : Luccio
 * File         : backpackItems.jd
 * Descrizione  : Array degli oggetti presenti nel gioco e funzioni relative
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
            char.feed(1);                           //Riduci la fame
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
    },
    {
        name: "Libro",
        description: "\"A piedi nudi su Marte\", di Adrian Fartade",
        abundance: 20,
        type: "mood",
        perform: function (char){
            char.enjoy(1);                          //Migliora l'umore leggendolo
        },
        icon: ""
    },
    {
        name: "Garza",
        description: "Un veloce medicamento",
        abundance: 5,
        type: "medicament",
        perform: function (char){
            char.heal(1);                           //Ti curi un po con la garza
        },
        icon: ""
    },
    {
        name: "Motosega",
        description: "BWA-AH_AH Siete tutti morti!",
        abundance: 1,
        type: "weapon",
        perform: function (char){
            char.enemy.damage(4);                   //Fai un sacco di danni al nemico
        },
        icon: ""
    }
];

/*
 * Ritorna un'oggetto a caso tra quelli presenti
 * TODO: Implementare un correttivo per l'abondanza nei piani
 */
function getRandomObject()
{   return(backpackItems[Math.floor(Math.random() * (backpackItems.length ))]); //Ritorna oggetto casuale
}
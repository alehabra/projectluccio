/*
 * Liberty Software
 * Progetto     : Luccio
 * File         : backpackItems.js
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
        maximumUses: 1,                             //Uilizzi massimi (0=infinito)
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
        maximumUses: 0,                                   //Usabile infinite volte
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
        maximumUses: 0,
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
        maximumUses: 1,
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
        maximumUses: 0,
        perform: function (char){
            char.enemy.damage(4);                   //Fai un sacco di danni al nemico
        },
        icon: ""
    }
];

/*
 * Ritorna un'oggetto a caso tra tutti quelli presenti
 */
function getRandomObject()
{
    return(random(backpackItems));                      //Ritorna un'oggetto casuale
}

/*
 * Ritorna due oggetti casuali in base al piano
 * Parametri:
 * - int floorNumber                                    //Numero del piano
 */
function getFloorObjects(floorNumber)
{
    var objects=[];                                     //Array ospite
    //TODO: Il piano è ignorato per adesso, utilizzo direttamente funzione  getRandomObject()
    objects.push(getRandomObject());                    //Aggiungi un'oggetto
    objects.push(getRandomObject());                    //Aggiungi un altro oggetto
    return objects;                                     //Ritorna array oggetti
}
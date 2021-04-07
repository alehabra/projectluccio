/*
 * Liberty Software
 * Progetto     : Luccio
 * File         : backpackItems.js
 * Descrizione  : Oggetti presenti nel gioco e funzioni relative
 * Autore       : Marco Botter
 * Data         : 07/03/2021
 * Versione     : Alpha
 */

/*
 * Costanti oggetti chr rispondono a precise richieste
 */
const OBJECT_TYPE_FOOD="food";                      //Oggetto con effetti su sazietà
const OBJECT_TYPE_MEDICAMENT="medicament";          //Oggetto con effetti su salute
const OBJECT_TYPE_MOOD="mood";                      //Oggetto con effetti su psiche
const OBJECT_TYPE_WEAPON="weapon";                  //Oggetto arma


/*
 * Costruttore di copia oggetto
 * Parametri:
 * - BackpackItem sample;                           //Oggetto campione da copiare
 * Ritorna:
 * - BackpackItem
 */
function BackpackItem(sample)
{
    this.name=sample.name;                          //Copia nome
    this.description=sample.description;            //Copia descrizione
    this.abundance=sample.abundance;                //Copia abbondanza
    this.type=sample.type;                          //Copia tipo
    this.value=sample.value;                        //Copia valore effetto base
    this.maximumUses=sample.maximumUses;            //Copia valore utilizzi massimi
    this.perform=sample.perform;                    //Copia funzione aggiuntiva
    this.icon=sample.icon;                          //Copia icona
}

/*
 * Array di campioni oggetti disponibili
 */
let backpackItems=[
    {
        name: "Pane",                               //Nome dell'oggetto
        description: "Un buon pezzo di pane",       //Descrizione dell'oggetto
        abundance: 10,                              //Abbondanza
        type: OBJECT_TYPE_FOOD,                     //Tipo (se non serve scambiarlo non serve)
        value: 1,                                   //Valore effetto base
        maximumUses: 1,                             //Uilizzi massimi (negativo=infinito)
        perform: function(char){},                  //Funzione aggiuntiva oggetto
        icon: ""                                    //File dell'icona
    },
    {
        name: "Mazza",
        description: "Una semplice ma efficace arma da mischia",
        abundance: 5,
        type: OBJECT_TYPE_WEAPON,
        value: 1,
        maximumUses: -1,                                  //Usabile infinite volte
        perform: function(char){},
        icon: ""
    },
    {
        name: "Libro",
        description: "\"A piedi nudi su Marte\", di Adrian Fartade",
        abundance: 20,
        type: OBJECT_TYPE_MOOD,
        value: 1,
        maximumUses: -1,
        perform: function(char){},
        icon: ""
    },
    {
        name: "Garza",
        description: "Un veloce medicamento",
        abundance: 5,
        type: OBJECT_TYPE_MEDICAMENT,
        value: 1,
        maximumUses: 1,
        perform: function(char){},
        icon: ""
    },
    {
        name: "Motosega",
        description: "BWA-AH_AH Siete tutti morti!",
        abundance: 1,
        type: OBJECT_TYPE_WEAPON,
        value: 4,
        maximumUses: -1,
        perform: function(char){},
        icon: ""
    },
    {
        name: "Biscotti",
        description: "Alcuni buoni biscotti",
        abundance: 5,
        type: OBJECT_TYPE_FOOD,
        value: 1,
        maximumUses: 3,                                   //Puoi mangiarne tre volte
        perform: function(char){},
        icon: ""
    }
];

/*
 * Ritorna un'oggetto a caso tra tutti quelli presenti
 * Ritorna:
 * - BackpackItem
 */
function getRandomObject()
{
    return(new BackpackItem(random(backpackItems)));    //Ritorna copia di un'oggetto casuale
}

/*
 * Ritorna due oggetti casuali in base al piano
 * Parametri:
 * - int floorNumber                                    //Numero del piano
 * Ritorna:
 * - BackpackItem[]
 */
function getFloorObjects(floorNumber)
{
    var objects=[];                                     //Array ospite
    //TODO: Il piano è ignorato per adesso, utilizzo direttamente funzione  getRandomObject()
    objects.push(getRandomObject());                    //Aggiungi un'oggetto
    objects.push(getRandomObject());                    //Aggiungi un altro oggetto
    return objects;                                     //Ritorna array oggetti
}
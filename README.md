Progetto Luccio
====================
Introduzione
---------------------

Il progetto Luccio persegue l'obbiettivo di creare un gioco per smartphone liberamente ispirato al film spagnolo del 2019 "Il buco" ("El hoyo") di Galder Gaztelu-Urrutia.
https://it.wikipedia.org/wiki/Il_buco_(film_2019)

Il gioco presenta sostanziali differenze rispetto al film a cominciare dalla totale assenza dell'ascensore, alla presenza di un paio di oggetti nella stanza in cui si trova il giocatore e alla breve permanenza in ogni "piano".

Modalità di gioco
---------------------

Si tratta principalmente di un gioco basato su scelte strategiche.  
L'obiettivo è sopravvivere il più a lungo possibile.  
L'ambientazione è una struttura a più piani, i quali si presentano come delle stanze chiuse, in cui una volta effetuate le azioni disponibili si verrà trasporati in altro piano, randomicamente più "in alto" o più "in basso" di quello in cui ci si trovava.  
I parametri di sopravvivenza sono essenzialmente tre:

* Salute;
* Sazietà;
* Psiche.

Questi valori possono assumere un valore da 0 a 4 e hanno dei rapporti tra di loro, ad esempio se la sazietà scende al di sotto di un valore prestabilito, farà scedere di conseguneza anche la salute.  
Per mantenere alti questi valori il giocatore potrà usare degli oggetti, che possono essere acquisiti in vari modi, tuttavia, al termine del proprio turno in un piano, solamente uno potrà essere portato al piano successivo.  

#### Sopravvivenza

Come descritto sopra, lo scopo ultimo è la sopravvivenza, di conseguenza il valore di salute del personaggio non dovrà mai scendere a zero, pena la perdita della partita.   
Tuttavia, ogni volta che si cambia stanza, la sazietà scende di un'unità, e ogni due stanze scende di un'unità il valore di psiche.  
Se uno di questi valori scende a zero, casusa la perdità di un'unità di salute al termine del turno.

#### Oggetti
Gli oggetti possono essere di svariati generi e possono essere acquisiti nei seguenti modi:

* Oggetto iniziale del personaggio.
* Raccolta nella stanza;
* Portati con se dal piano precedente;
* Scambiati con un altro personaggio.

L'uso di un oggetto, può influire sui parametri del personaggio, ad esempio un pezzo di pane può aumentare la sazietà, oppure, nel caso ci si trovi di fronte ad una altro personaggio, se ostile, si potrà attaccarlo con un'arma.

#### Piani
 
In ogni piano saranno sempre presenti due oggetti random, la cui utilità è influenzata dall'altezza del piano (a piani a profondità maggiore si troveranno oggetti meno utili) e un altro personaggio in cerca di sopravvivere con un suo stato e un oggetto portato visibili.  
Gli eventi si svolgono in turni, uno per il giocatore uno per l'AI dell'altro personaggio fino al compimento di tre azioni per ciascuno.  
Quale personaggio ha il primo turno viene deciso randomicamnete.  
Le azioni che il giocatore o l'altro nemico sono:

* L'uso di un proprio oggetto (inteso anche come attacco con un'arma);
* Raccolta di un oggetto presente;
* Proposta di uno scambio.

Sarà possibile, in ogni piano, effettuare tre azioni, ad esempio, se si ha bisongo di una medicazione per migliorare il proprio livello di salute e il "nemico" ha una medicinale, si potrà proporgli uno scambio e, in caso rifiuti, si potrà attaccarlo per ottenere il suo oggetto e infine curarsi con tale oggetto.

#### Personaggi

Il personaggio utilizzato dal giocatore verrà scelto liberamente all'inzio del gioco tra quattro disponibili.  
Questa scelta influirà, oltre che sull'aspetto fisico, anche negli effetti degli oggetti utilizzati.

#### Battaglie

Le battaglie tra personaggi servono ad appropriarsi dell'oggetto di un avversario se questi rifiuta uno scambio.
Se un personaggio viene ucciso, il suo oggetto passa automaticamente all'attacante.  

Le sorti di una battaglia vengono calcolate nel seguente modo: ad ogni personaggio viene  inflitto un danno pari al valore dell'arma dell'avversario meno il valore della propria arma.  
Ad esempio:
* Giocatore ha una arma da 1;
* L'AI ha una arma da 2.  

L'AI infliggerà 1 danno al giocatore (2-1)=1, mentre il giocatore non infliggerà danno all'AI dato che il suo valore di attacco è minore di quello dell'avversario.
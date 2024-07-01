nome repo di oggi: js-jsnacks-blocco-1
SNACK 1:
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
SNACK 2:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell'array
SNACK 3:
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
BONUS:
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Create una sotto-cartella per ogni jsnack e riportate la consegna all'inizio del file js.
La struttura dei file dovrebbe essere la seguente:
`jsnack1 (cartella)
- index.html
- script.js
jsnack2 (cartella)
- index.html
- script.js`
e così via

SCOMPOSIZIONE IN SOTTOPROBLEMI
<!-- SNACK 1 -->
>Preparo un'array 
    >Nell'array definisco n nomi degli invitati alla festa
>Recupero il pulsante (per verificare se il nome è presente nell'array) dal DOM
    >>Associo il pulsante recuperato nel DOM ad una funzione con un eventlistener
        >>>Dentro la funzione recupero il valore inserito nel campo input 
        >>>Definisco una variabile di controllo con un booleano 
        >>>Definisco un ciclo for per confrontare se uno degli elementi dell'array al valore inserito nell'input 
        >>>Definisco una condizione if per verificare se il valore che sto ciclando dell'array corrisponde al valore inserito nell'input
        >>>Preparo le condizioni per i diversi messaggi di output

<!-- SNACK 2 -->
>creo un'array vuoto
>con un ciclo let, chiedo all'utente di inserire un numero (per 6 volte)
    >> con if verifico se il numero è pari o dispari 
        >>>se il numero è dispari, lo inserisco nell'array tramite .push

<!-- SNACK 3 -->
>Recupero il pulsante dal DOM
    >>Associo il pulsante recuperato nel DOM ad una funzione con un eventlistener
>Recuper il contenuto di imput 
    >>verifico che il contenuto sia di 4 cifre 
    >>scompongo la stringa in 4 con split
    >>converto le stringe in numeri con parseint
    >>calcolo la somma di tutte le cifre 

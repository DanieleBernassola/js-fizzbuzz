<!-- Scrivi un programma che stampi in console i numeri da 1 a 100, -->

 - creiamo all'interno del js un ciclo for con indice che parte da 1 e arriva a 100 e stampa il suo indice

<!-- ma che per i multipli di 3 stampi “Fizz” al posto del numero -->

 - per ogni numero verifichiamo che, se diviso per 3, il resto sia 0. In tal caso stampiamo "Fizz"

<!-- e per i multipli di 5 stampi “Buzz”. -->

 - per ogni numero verifichiamo che, se diviso per 5, il resto sia 0. In tal caso stampiamo "Buzz"

<!-- Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. -->

 - per ogni numero verifichiamo che, se diviso per 3 e per 5, il resto sia 0. In tal caso stampiamo "FizzBuzz"

In conclusione,
    SE (indice % 3 = 0 && indice % 5 = 0){
        console.log('FizzBuzz');
    } Altrimenti SE (indice % 3 = 0){
        console.log('Fizz');
    } Altrimenti SE (indice % 5 = 0){
        console.log('Buzz');
    } Altrimenti {
        console.log(indice);
    }

<!-- BONUS 1: -->
<!-- Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare. -->

 - converto l'indice in una variabile che verrà appesa nel file HTML
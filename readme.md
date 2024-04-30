<!-- Scrivi un programma che stampi in console i numeri da 1 a 100, -->

 - creiamo all'interno del js un ciclo for con indice che parte da 1 e arriva a 100 e stampa il suo indice

<!-- ma che per i multipli di 3 stampi “Fizz” al posto del numero -->

 - per ogni numero verifichiamo che, se diviso per 3, il resto sia 0. In tal caso stampiamo "Fizz"

<!-- e per i multipli di 5 stampi “Buzz”. -->

 - per ogni numero verifichiamo che, se diviso per 5, il resto sia 0. In tal caso stampiamo "Buzz"

<!-- Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. -->

 - per ogni numero verifichiamo che, se diviso per 3 e per 5, il resto sia 0. In tal caso stampiamo "FizzBuzz"

In conclusione,
    SE (numero % 3 = 0 && numero % 5 = 0){
        console.log('FizzBuzz');
    } Altrimenti SE (numero % 3 = 0){
        console.log('Fizz');
    } Altrimenti SE (numero % 5 = 0){
        console.log('Buzz');
    } Altrimenti {
        console.log(numero);
    }

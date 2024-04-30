'use strict';

// CICLO FOR
for (let i = 1; i <= 100; i++){
    let fizzbuzzList = i;
    // CONDIZIONE
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
        fizzbuzzList = "FizzBuzz";
    } else if (i % 3 === 0) {
        console.log('Fizz');
        fizzbuzzList = "Fizz";
    } else if (i % 5 === 0){
        console.log('Buzz');
        fizzbuzzList = "Buzz";
    } else {
        console.log(fizzbuzzList);
    }
    // CREO ELEMENTI LISTA IN HTML
    const ul = document.querySelector("ul.list");
    const li = document.createElement('li');
    li.append(fizzbuzzList);
    ul.append(li);
}
'use strict';

for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0){
        console.log('Buzz');
    } else {
        console.log(i);
    }
    const ul = document.querySelector("ul.list");
    const li = document.createElement('li');
    li.append(i);
    ul.append(li);
}
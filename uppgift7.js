"use strict";

// En array med sex tal
const numbers = [2, 4, 6, 8, 10, 12];

// Funktionen beräknar summan av alla tal i arrayen
function calculateSum(numberArray) {
    let sum = 0;

    for (const number of numberArray) {
        sum += number;
    }

    return sum;
}

// Funktionen anropas och resultatet sparas i en variabel
const totalSum = calculateSum(numbers);

// Resultatet skrivs ut utanför funktionen
console.log(`Summan är ${totalSum}`);
// Uppgift 2

"use strict";

const price = 100;
const quantity = 3;
const vatRate = 0.25;

const totalPrice = price * quantity;
const totalPriceWithVat = totalPrice * (1 + vatRate);

console.log(`Pris: ${price} kr`);
console.log(`Antal: ${quantity}`);
console.log(`Totalt: ${totalPrice} kr`);
console.log(`Totalt inklusive moms: ${totalPriceWithVat} kr`);
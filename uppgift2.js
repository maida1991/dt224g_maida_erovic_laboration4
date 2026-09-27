/* Lösning till Uppgift 2 – operatorer och beräkningar.
   Skriven av Maida Erovic, 2026. */

"use strict";

// Produktens pris, antal produkter och momssats.
const price = 100;
const quantity = 3;
const vatRate = 0.25;

// Det totala priset beräknas före och efter moms.
const totalPrice = price * quantity;
const totalPriceWithVat = totalPrice * (1 + vatRate);

// Resultaten skrivs ut på ett tydligt sätt.
console.log(`Pris: ${price} kr`);
console.log(`Antal: ${quantity}`);
console.log(`Totalt: ${totalPrice} kr`);
console.log(`Totalt inklusive moms: ${totalPriceWithVat} kr`);
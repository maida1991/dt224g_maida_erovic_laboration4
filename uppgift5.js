/* Lösning till Uppgift 5 – array.
   Skriven av Maida Erovic, 2026. */

"use strict";

const dishes = [
    "Lasagne",
    "Pizza",
    "Kycklingsoppa",
    "Pannkakor",
    "Tacos"
];

// Hela arrayen skrivs ut
console.log("Hela arrayen:", dishes);

// Första och sista maträtten skrivs ut
console.log("Första maträtten:", dishes[0]);
console.log("Sista maträtten:", dishes[dishes.length - 1]);

// En ny maträtt läggs till i slutet av arrayen
dishes.push("Risotto");

// Den första maträtten tas bort från arrayen
dishes.shift();

// Arrayen skrivs ut efter att förändringarna har gjorts
console.log("Arrayen efter förändringarna:", dishes);
// Uppgift 5

"use strict";

const dishes = [
    "Lasagne",
    "Pizza",
    "Kycklingsoppa",
    "Pannkakor",
    "Tacos"
];

console.log("Hela arrayen:", dishes);

console.log("Första maträtten:", dishes[0]);
console.log("Sista maträtten:", dishes[dishes.length - 1]);

dishes.push("Risotto");

dishes.shift();

console.log("Arrayen efter förändringarna:", dishes);
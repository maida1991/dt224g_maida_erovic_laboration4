/* Lösning till Uppgift 6 – funktion.
   Skriven av Maida Erovic, 2026. */

"use strict";

// Funktionen beräknar arean av en rektangel baserat på bredd och höjd
function calculateArea(width, height) {
    const area = width * height;
    return area;
}

// Funktionen anropas tre gånger med olika argument
const firstArea = calculateArea(4, 5);
const secondArea = calculateArea(6, 7);
const thirdArea = calculateArea(10, 10);

// Resultaten skrivs ut utanför funktionen
console.log(`Arean är ${firstArea}`);
console.log(`Arean är ${secondArea}`);
console.log(`Arean är ${thirdArea}`);
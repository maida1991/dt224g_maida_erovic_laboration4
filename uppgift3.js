/* Lösning till Uppgift 3 – villkor.
   Skriven av Maida Erovic, 2026. */

"use strict";

// Variabeln innehåller åldern som ska kontrolleras
const age = 35;

// Ett villkor avgör vilken åldersgrupp personen tillhör ålder som vi sätta in i variabeln age
if (age < 18) {
    console.log("Barn");
} else if (age <= 64) {
    console.log("Vuxen");
} else {
    console.log("Pensionär");
}
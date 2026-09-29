/* Lösning till Uppgift 9 – sammanhängande program.
   Skriven av Maida Erovic, 2026. */

"use strict";

// En array som innehåller tre personobjekt
const people = [
    {
        name: "Maida",
        age: 35,
        city: "Malmö"
    },
    {
        name: "Arnel",
        age: 45,
        city: "Lund"
    },
    {
        name: "Nejla",
        age: 10,
        city: "Helsingborg"
    }
];

// Funktionen skriver ut information om en person och om personen är myndig
function printPersonInformation(person) {
    if (person.age >= 18) {
        console.log(`${person.name} bor i ${person.city} och är myndig.`);
    } else {
        console.log(`${person.name} bor i ${person.city} och är inte myndig.`);
    }
}

// Loopen går igenom arrayen och anropar funktionen för varje person
for (const person of people) {
    printPersonInformation(person);
}
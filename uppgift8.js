/* Lösning till Uppgift 8 – objekt.
   Skriven av Maida Erovic, 2026. */

"use strict";

// Ett objekt som innehåller information om en bok.
const book = {
    title: "Den lilla prinsen",
    author: "Antoine de Saint-Exupéry",
    publicationYear: 1943
};

// Funktionen skriver ut information om den bok som skickas in som argument
function printBookInformation(bookObject) {
    console.log(`Titel: ${bookObject.title}`);
    console.log(`Författare: ${bookObject.author}`);
    console.log(`Utgivningsår: ${bookObject.publicationYear}`);
}

// Funktionen anropas med bokobjektet som argument
printBookInformation(book);

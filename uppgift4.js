// Uppgift 4

"use strict";

// Loopen går igenom alla heltal från 1 till 20
// Endast jämna tal skrivs ut
for (let number = 1; number <= 20; number++) {
    
    // Modulus kontrollerar om talet är jämnt
    if (number % 2 === 0) {
        console.log(number);
    }
}
/* ES6 Snack 5
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e 
con l'iniziale maiuscola. */

/* Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino'] */


// # Fase di preparazione
// Creo l'array della lista delle parole
const words = ['pippo', 'PLUTO', 'Paperino'];


// Creo un'array a partire dall'array iniziale con il metodo degli array .map()
const formattedWords = words.map((word) => {
    // Prendo il primo carattere della parola
    const firstLetter = word.charAt(0).toUpperCase();
    console.log(firstLetter);

    // Prendo le restanti lettere
    // const otherLetters = word.split('').splice(1).join('').toLowerCase();
    const otherLetters = word.substring(1);
    console.log(otherLetters);


    // Ritorno la prima lettera e le altre lettere
    return firstLetter + otherLetters;
})

console.log(formattedWords)


const revFormattedWords = words.map((word) => {

    const firstLetter = word.charAt(0).toLowerCase();
    console.log(firstLetter);

    const otherLetters = word.split('').splice(1).join('').toUpperCase();
    console.log(otherLetters);



    return firstLetter + otherLetters;
})

console.log(revFormattedWords)
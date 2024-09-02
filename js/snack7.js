/* Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età.

Crea quindi un nuovo array inserendo, per ogni persona, 
una frase con il nome e cognome 
e l'indicazione se può guidare, in base all'età. 
*/
// # Fase di preparazione 
const persone = [
    { nome: 'Mario', cognome: 'Rossi', età: 19 },
    { nome: 'Luigi', cognome: 'Verdi', età: 25 },
    { nome: 'Giovanni', cognome: 'Bianchi', età: 40 },
    { nome: 'Sara', cognome: 'Neri', età: 17 },
    { nome: 'Elena', cognome: 'Gialli', età: 55 },
    { nome: 'Marco', cognome: 'Romano', età: 28 },
    { nome: 'Paolo', cognome: 'Bianchi', età: 13 },
    { nome: 'Anna', cognome: 'Colombo', età: 33 },
    { nome: 'Francesco', cognome: 'Mancini', età: 73 },
    { nome: 'Giulia', cognome: 'Ferrari', età: 9 }
];

console.table(persone);
// const authorizedToDrive = []
persone.forEach((persona) => {
    /* if (persona.età >= 18) {
        persona.frase = `${persona.nome} ${persona.cognome} ha ${persona.età} anni e può guidare`;

    } else {
        persona.frase = `${persona.nome} ${persona.cognome} ha ${persona.età} anni e non può guidare`;

    } */
    const not = persona.età >= 18 ? '' : 'non';
    persona.frase = persona.età >= 18 ? `${persona.nome} ${persona.cognome} ha ${persona.età} anni e può guidare` : `${persona.nome} ${persona.cognome} ha ${persona.età} anni e ${not} può guidare`;
    console.log(persona.frase)
})





console.table(persone);

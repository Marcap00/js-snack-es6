/*
 *SNACK 4*

 Creare un array di oggetti di squadre di calcio.

 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.

 Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

 Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

// # Fase di preparazione
// Creo l'array di partenza delle squadre
const listTeams = [
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0

    },
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0

    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0

    },
    {
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0

    },
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0

    }
];

console.table(listTeams);

// # Fase di elaborazione
// Inseriamo all'interno delle chiavi degli oggetti dell'array i valori con una funzione random number
const formattedListTeams = listTeams.map(({ nome }) => {
    return { nome, puntiFatti: getRandomNumber(50, 100), falliSubiti: getRandomNumber(1, 50) };
})

console.table(formattedListTeams);

// Creiamo un array di oggetti delle squadre con solo le proprietò nome e falli subiti
const withoutPuntiFatti = formattedListTeams.map(({ nome, falliSubiti }) => {
    return { nome, falliSubiti };
})

console.table(withoutPuntiFatti);

// # Fase di output
// Stampiamo la lista delle squadre con i falli subiti in console
console.log('Classifica:')
withoutPuntiFatti.forEach(team => {
    const { nome, falliSubiti } = team;
    console.log(`${nome} || falli subiti: ${falliSubiti}`)
});

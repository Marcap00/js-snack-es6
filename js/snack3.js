/*
 *SNACK 3*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
 */

// # Fase di preparazione
// Preparo l'array di oggetti con le proprietà name: nome della bici e weight: peso della bici;
const roadBikes = [
    {
        name: "Pinarello Dogma F",
        weight: 95
    },
    {
        name: "Specialized Tarmac SL7",
        weight: 87
    },
    {
        name: "Cannondale SuperSix EVO",
        weight: 103
    },
    {
        name: "Trek Émonda SLR",
        weight: 76
    },
    {
        name: "Bianchi Oltre XR4",
        weight: 92
    }
];
// Destrutturo il primo oggeto dell'array
const [firstBike] = roadBikes;
// # Fase di elaborazione

/* // $ METODO FILTER
// Utilizziamo il metodo filter per creare un array filtrando quella con il peso minore
// Dichiaro il primo oggetto dell'array (la "prima" bike) la più leggera

let lightest = firstBike;

// Faccio il confronto con filter

const lightestBike = roadBikes.filter(bike => lightest = lightest.weight < bike.weight ? lightest : bike);
console.log(lightest); */

/* // $ METODO MAP
// Utilizziamo il metodo map
let lightest = firstBike;
const lightestBike = roadBikes.map(bike => lightest = lightest.weight < bike.weight ? lightest : bike);

console.log(lightest); */

// $ METODO REDUCE
// Utilizziamo il metodo reduce 
const lightestBike = roadBikes.reduce((lightest, bike) => lightest = lightest.weight < bike.weight ? lightest : bike, firstBike);

console.table(lightestBike);

// # Fase di output
// $ Destrutturo l'oggetto lightest quando uso map o filter
/* const { name, weight } = lightest; */
// $ Destrutturo l'oggetto lightest quando uso reduce
const { name, weight } = lightestBike;
console.log(`
    La bicicletta da corsa più leggera è:
        ${name} kg: ${weight}
    `);

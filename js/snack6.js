/* 
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi.
 */

const animals = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'gatto', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'elefante', famiglia: 'elefantidi', classe: 'mammiferi' },
    { nome: 'aquila', famiglia: 'accipitridi', classe: 'uccelli' },
    { nome: 'serpente', famiglia: 'ofidi', classe: 'rettili' },
    { nome: 'rana', famiglia: 'ranidi', classe: 'anfibi' },
    { nome: 'delfino', famiglia: 'delfinidi', classe: 'mammiferi' },
    { nome: 'coccodrillo', famiglia: 'crocodilidi', classe: 'rettili' }
];

// Creo una variabile d'appoggio per l'array
/* const mammiferi = []

animals.forEach(animal => {
    if (animal.classe === 'mammiferi') {
        console.log(animal.classe === 'mammiferi');
        mammiferi.push(animal);
    }
}) */

const mammiferi = animals.filter(animal => animal.classe === 'mammiferi');


console.table(mammiferi);



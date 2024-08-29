/* 
*SNACK 2*

Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...


1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);

2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70

3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

Questo è l'elenco degli studenti:
Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna 	    48
145 Gaia Borromini          74
196 Luigi Grimaldello 	    68
102 Piero della Francesca   50
120 Francesca da Polenta    84
*/

// # Fase di preparazione
// Preparo l'array di oggetti degli studenti
const students = [
    { id: 213, name: 'Marco della Rovere', grades: 78 },
    { id: 110, name: 'Paola Cortellessa', grades: 96 },
    { id: 250, name: 'Andrea Mantegna', grades: 48 },
    { id: 145, name: 'Gaia Borromini', grades: 74 },
    { id: 196, name: 'Luigi Grimaldello', grades: 68 },
    { id: 102, name: 'Piero della Francesca', grades: 50 },
    { id: 120, name: 'Francesca da Polenta', grades: 84 }
];

// # Fase di elaborazione
// Generiamo una array contenente la lista dei nomi tutti in maiuscolo partendo dall'array precedente
const nameUppCase = students.map(student => student.name.toUpperCase());
console.table(nameUppCase);

// Generiamo un array contente la lista dei studenti che hanno grades > 70 
const over70Grades = students.filter(student => student.grades > 70);
console.table(over70Grades);

// Generiamo un array contente la lista dei studenti che hanno grades > 70 e id > 120
const specialStudents = students.filter(student => (student.grades > 70 && student.id > 120));
console.table(specialStudents);

// # Fase di output
// Stampiamo in console i nomi in maiuscolo
console.log(`
    ========================
    Lista Nomi in Maiuscolo:`);
nameUppCase.forEach(nameStud => {
    console.log(`${nameStud}`);
});


// Stampiamo in console i studenti con i voti superiori a 70
console.log(`
    ====================================
    Lista dei studenti con grades > 70:`);
over70Grades.forEach(nameStud => {
    console.log(`${nameStud.name} grades: ${nameStud.grades}`);
});


// Stampiamo in console i studenti con id superiore a 120 e i voti superiori a 70
console.log(`
    ====================================
    Lista dei studenti con grades > 70 e id > 120:`);
specialStudents.forEach(nameStud => {
    console.log(`${nameStud.name} id: ${nameStud.id} grades: ${nameStud.grades}`);
});

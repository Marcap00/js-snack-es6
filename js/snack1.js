/* 
*SNACK 1*

Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.

Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:

```
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
```

$ Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, 
$ per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come proprietà:
nome del tavolo (tableName),
nome dell'ospite (guestName),
posto occupato (place),
Generiamo e stampiamo in console la lista per i segnaposto 
*/

/* 
? COSA VOGLIAMO FARE?
1- Voglio creare un array di oggetti partendo dall'array della lista degli invitati.
2- Gli oggetti dell'array saranno ex: 
#    formattedGuestList= [
#    {
#    tableName: 'Tavolo vip',
#    guestName: 'Brad Pitt',
#    place: '1',
#    },
#    {
#    tableName: 'Tavolo vip',
#    guestName: 'Jhonny Depp',
#    place: '2',
#    },
#    {
#    tableName: 'Tavolo vip',
#    guestName: 'Lady Gaga',
#    place: '3',
#    },
#    ]

*/




const guestList = ['Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'George Clooney',
    'Amal Clooney',
    'Fedez',
    'Amadeus',
    'Fiorello'];
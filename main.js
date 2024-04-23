// reset
'use strict'

// prendo elemento su HTML da trasformare e dichiaro la sua variabile
let currentModule = document.getElementById('nome');
let currentText = currentModule.innerHTML;

// prendo gli input dell'user e li metto dentro variabili costanti
const userName = prompt('inserisci il tuo nome');
const userSurname = prompt('inserisci il tuo cognome');
const preferredColor = prompt('inserisci il tuo colore preferito');

// BONUS • randomizzo il numero
let numberRandom = Math.floor(Math.random() * 100);

// concateno il testo HTML con costanti importate dall'user
currentText = `${currentText} ${userName} ${userSurname}, il mio colore preferito è il ${preferredColor} e il mio numero fortunato è il ${numberRandom}`;

// stampo su HTML il risultato
currentModule.innerHTML = currentText;

// BONUS •  stampo in console il risultato
console.log(currentText);



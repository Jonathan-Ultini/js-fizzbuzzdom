//creare un elemento che faccia da contenitore nel DOM e poi riempiamolo con i degli elementi di js

// selezioniamo il contenitore nel DOM
const container = document.getElementById('fizzbuzz-container');

// stampiamo a console 100 numeri, con risultati diversi in base alle richieste
for (let i = 1; i <= 100; i++) {

  let output = '';
  let className = 'fizzbuzz-item';

  if (i % 3 === 0 && i % 5 === 0) {
    output = 'FizzBuzz';
    className += ' fizzbuzz';
  } else if (i % 3 === 0) {
    output = 'Fizz';
    className += ' fizz';
  } else if (i % 5 === 0) {
    output = 'Buzz';
    className += ' buzz';
  } else {
    output = i;
  }

  // Creiamo un nuovo elemento div per ogni risultato
  const item = document.createElement('div');
  item.className = className;
  item.innerText = output;

  // Aggiungi l'elemento al contenitore
  container.appendChild(item);
}
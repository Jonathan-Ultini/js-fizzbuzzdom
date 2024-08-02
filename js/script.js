//stampiamo a console 100 numeri, nei quali però quelli multipli di 3 e 5 viene scritto
//fizzbuzz, se multipli di solo 3 allora fizz infine se multipli di solo 5 allora buzz
//se niente stampa il numero normale

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

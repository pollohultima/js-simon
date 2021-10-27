/*
Descrizione:
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/



//creo l'array 
let randomNum = []

//ciclo per generare 5 numeri random
while (randomNum.length < 5) {
    const randoms = Math.floor((Math.random() * 100) + 1);

    //Pusho i numeri random dentro l'array 'numeri'
    if (!randomNum.includes(randoms)) {
        randomNum.push(randoms)
    }

}

//Visualizzo l'array di 5 numeri in console
console.log(randomNum);
alert(randomNum);


const seconds = 5;
let match = []
let userNum = []

setTimeout(counter, seconds * 1000)

function counter() {


    while (userNum.length < 5) {

        const userNumbers = parseInt(prompt('Inserisci 5 numeri'));

        if (!userNum.includes(userNumbers)) {
            userNum.push(userNumbers)

            if (randomNum.includes(userNumbers)) {
                match.push(userNumbers)
            }
        }
    }
    document.querySelector('.result').innerHTML = `Hai indovinato ${match.length} numeri, ovvero: ${match}`

}






















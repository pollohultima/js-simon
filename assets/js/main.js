/*
Descrizione:
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/



//creo l'array 
let numeri = []

//ciclo per generare 5 numeri random
for (let i = 0; i < 5; i++) {
    const randoms = Math.floor((Math.random() * 100) + 1);
    console.log(randoms);

    //Pusho i numeri random dentro l'array 'numeri'
    numeri.push(randoms)
}

//Visualizzo l'array di 5 numeri in console
console.log(numeri);
alert(numeri);



let clock
let seconds = 0;
clock = setInterval(counter, 1000);


function counter() {
    if (seconds === 5) {
        clearInterval(clock)

        let userNum = []

        for (let i = 0; i < 5; i++) {
            const userNumbers = parseInt(prompt('Inserisci 5 numeri'));
            console.log(userNumbers);

            //Pusho i numeri random dentro l'array 'numeri'
            userNum.push(userNumbers)
        }

        console.log(userNum);
    } else {
        seconds++
        console.log(seconds);
    }
}














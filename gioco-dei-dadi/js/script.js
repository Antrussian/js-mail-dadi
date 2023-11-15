/*Gioco dei dadi
Generare un numero random da 1 a 6, 
Math. 

sia per il giocatore sia per il computer.
quindi const giocatore e const 

Stabilire il vincitore, in base a chi fa il punteggio più alto. if if else else se player > di com  player < di com e se è = pareggio */



const numeroDadoPlayer = Math.floor (Math.random() *6 +1);
console.log(numeroDadoPlayer);


const numeroDadoCom = Math.floor (Math.random() *6 +1);
console.log(numeroDadoCom);


let vincentePlayer = 'Il player ha vinto';

let vincenteCom = 'Il com ha vinto';

let pareggio = 'Pareggio';

const wrapperElement=document.querySelector('div.wrapper');
const cardElement = document.createElement ('div');
const pElement=document.createElement('p');

if (numeroDadoPlayer > numeroDadoCom) {

    pElement.textContent = vincentePlayer;
    
    console.log( vincentePlayer);

}

else if (numeroDadoCom > numeroDadoPlayer) {

    console.log( vincenteCom);
   

}

else { (numeroDadoPlayer == numeroDadoCom) 

    console.log(pareggio);


}


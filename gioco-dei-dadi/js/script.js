/*Gioco dei dadi
Generare un numero random da 1 a 6, 
Math. 

sia per il giocatore sia per il computer.
quindi const giocatore e const 

Stabilire il vincitore, in base a chi fa il punteggio più alto. if if else else se player > di com  player < di com e se è = pareggio */

document.getElementById("genera").addEventListener("click", function() {

const numeroDadoPlayer = Math.floor (Math.random() *6 +1);
console.log(numeroDadoPlayer);
document.getElementById('numeroplayer').innerHTML = numeroDadoPlayer ;


const numeroDadoCom = Math.floor (Math.random() *6 +1);
document.getElementById('numerocom').innerHTML = numeroDadoCom;



let vincentePlayer = 'Il player ha vinto';

let vincenteCom = 'Il com ha vinto';

let pareggio = 'Pareggio';


let numeroVincente;


if (numeroDadoPlayer > numeroDadoCom) {

    numeroVincente = vincentePlayer;

}

else if (numeroDadoCom > numeroDadoPlayer) {

    numeroVincente = vincenteCom;
   

}

else { (numeroDadoPlayer == numeroDadoCom) 

    numeroVincente = pareggio;


}

document.getElementById('vincente').innerHTML = numeroVincente ;

});
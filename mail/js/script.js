/*Chiedi all’utente la sua email,
crea const email user

valorizzala con input dall utente prima prompt e poi input text

controlla che sia nella lista  di chi può accedere (createvi una piccola lista di email),
const lista user
crea un array
inserisci elementi in lista array
ciclo for se ci sono == login

stampa un messaggio appropriato sull’esito del controllo.
se non ci sono == messaggio di utente non registrato

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?*/






document.getElementById("genera").addEventListener("click", function() {

    const userEmail = document.getElementById("userEmail").value;  

  

    user_Email.innerHTML = userEmail;
    

  
 let listUser = ['antonino.russo.agent@gmail.com',
        'antonino@gmail.com',
        'emailrandom1@gmail.com',
        'emailrandom2@gmail.com',
        'emailrandom3@gmail.com',
        'emailrandom4@gmail.com',
        'emailrandom5@gmail.com',
        'emailrandom6@gmail.com',
        'emailrandom7@gmail.com',
        'emailrandom8@gmail.com',
        'emailrandom9@gmail.com',
        'emailrandom10@gmail.com'];

   
  
    
        let UtenteRegistrato = 0;

        for (let i = 0; i < listUser.length; i++) {
            
            if (userEmail === listUser[i]) {
                UtenteRegistrato = 1;
               
            }
        }
    
        if (UtenteRegistrato) {
        document.getElementById('outputFinale').innerHTML = 'Utente Registrato, inserisci la tua password';
  
           
            
        } 
        else {
             document.getElementById('outputFinale').innerHTML = ' Utente Non Registrato, Registrati';
      
            
        }

    });




    
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse

// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e cliccando invia il testo viene aggiunto al thread sopra, come messagg


$(document).ready(function() {

  // When the airplance icon (send button) is clicked the function is called

  $(".submit-button").click(function() {

    // We save whatever the user wants to send as a message
    var userText = $(".message").val();

    // We make a copy of an empty Div + we add a class with our css in it
    var elementMsg = $("#template .msgsent").clone().addClass('msgsent-style');

    // Current Time
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();

    // We add the user's message to that empty Div + the current time
    elementMsg.find(".testo").text(userText + " " + time);

    // We add out element containing the User's message to our HTML
    $(".message-screen").append(elementMsg);

    // This passes an empty string into the message input to clear it
    $(".message").val("");


    // Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.


    // Create a clone of the empty div we want to paste the reply into
    var elementMsgg = $("#template .msgsent").clone().addClass('msgsent-style');

    // Functions

    // Function that creates an automatic response
    setTimeout(risponse, 1000);

    function risponse() {
      var okMessage = 'ok';

      var messageResponse = $("#template .msgsent").clone().addClass('msgrecieved-style');

      messageResponse.find(".testo").text(okMessage + " " + time);

      $('.message-screen').append(messageResponse);
    }

  })


  // Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)


  $('#contacts-filter').keyup(function(event){

    var userSearch = $(this).val().toLowerCase();

    $('.contact').each(function(){
      var contactNames = $(this).find('.name').text().toLowerCase();

      if (contactNames.includes(userSearch)){
        $(this).show();
      } else {
        $(this).hide();
      }
    })

  })

//  Milestone 3
// Click sul contatto mostra la conversazione del contatto cliccato, è possibile inserire nuovi messaggi per ogni conversazione



// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato


});

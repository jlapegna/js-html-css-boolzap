$(document).ready(function() {

  // When the airplance icon (send button) is clicked the function is called

  $(".submit-button").click(function() {

    // We save whatever the user wants to send as a message
    var userText = $(".message").val();
    console.log(userText);

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

    // Response from PC

    // Create a clone of the empty div we want to paste the reply into
    var elementMsgg = $("#template .msgsent").clone().addClass('msgsent-style');

    // Functions

    // Function that creates an automatic response
    setTimeout(risponse, 1000);

    function risponse() {
      var okMessage = 'ok';

      var messageResponse = $("#template .msgsent").clone().addClass('msgrecieved-style');

      messageResponse.find(".testo").text(okMessage);

      $('.message-screen').append(messageResponse);
    }

  })

});

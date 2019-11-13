$(document).ready(function() {

  // When the airplance icon (send button) is clicked the function is called

  $(".submit-button").click(function() {

    // We save whatever the user wants to send as a message
    var userText = $(".message").val();
    console.log(userText);

    // We make a copy of an empty Div + we add a class with our css in it
    var elementMsg = $("#template .msgsent").clone().addClass('msgsent-style');

    // We add the user's message to that empty Div

    elementMsg.find(".testo").text(userText);

    // We add out element containing the User's message to our HTML

    $(".message-screen").append(elementMsg);

    // This passes an empty string into the message input to clear it

    $(".message").val("");

// Current Time
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();

    console.log(time);


  })

});

//crypto-comment!

var cryptoSquare = function(textMessage){
  var cryptoMessage = textMessage.toLowerCase().replace(/\s+/g, '');
  return cryptoMessage;
}



//crypto-front-end
$(document).ready(function(){
  $("form#cryptoEntry").submit(function(event){
    event.preventDefault();
    var userInput = $("#userInput").val();
    debugger
    $("#result").text(cryptoSquare(userInput));
  });
});

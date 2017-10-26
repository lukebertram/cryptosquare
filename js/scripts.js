//crypto-comment!

var closestSquare = function(length){
  var square = 0;
  var counter = 2;
  while (square < length) {
    square = Math.pow(counter,2);
    counter++;
  }
  // alert("Message length: " + length + "\nSquare: " + square);
  return square;
}

var cryptoSquare = function(textMessage){
  //strip whitespace, punctuation, symbols from user input
  var cryptoMessage = textMessage.toLowerCase().replace(/\s+/g, '');
  //get the perfect perfect square for given message
  var perfSquare = closestSquare(cryptoMessage.length);
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

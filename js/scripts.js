//crypto-comment!

var closestSquare = function(length){
  var square = 0;
  var counter = 2;
  while (square < length) {
    square = Math.pow(counter,2);
    counter++;
  }
  // alert("Message length: " + length + "\nSquare: " + square);
  return counter;
}

var cryptoSquare = function(textMessage){
  //strip whitespace, punctuation, symbols from user input
  var message = textMessage.toLowerCase().replace(/\s+/g, '');
  //get the perfect perfect square for given message
  var squareSide = closestSquare(message.length);
  //create a square 2D array to hold Message
  var cryptoArray = new Array(squareSide);
  for (var i = 0; i < cryptoArray.length; i++) {
    cryptoArray[i] = new Array(squareSide);
  };
  var index = 0;
  //fill up that 2d array with user Message, traverse x axis first
  for (var y = 0; y < squareSide; y++) { //<= y-axis
    for (var x = 0; x < squareSide; x++) { //<= x-axis
      if (index < message.length){
        cryptoArray[x][y] = message.charAt(index);
        index++;
      } else {
        break;
      }
    }
  };
  index = 0;
  var cryptoMessage = "";
  //read the array back into cryptoMessage, traversing the y axis first
  for (var x = 0; x < squareSide; x++) { //<= x-axis
    for (var y = 0; y < squareSide; y++) { //<= y-axis
      if (index < message.length){
        if ((index + 1) % 5 === 0){
          cryptoMessage += " ";
        }
         cryptoMessage += cryptoArray[x][y];
        index++;
      } else {
        break;
      }
    }
  };
  return cryptoMessage;
};



//crypto-front-end
$(document).ready(function(){
  $("form#cryptoEntry").submit(function(event){
    event.preventDefault();
    var userInput = $("#userInput").val();
    debugger
    $("#result").text(cryptoSquare(userInput));
  });
});

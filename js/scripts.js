$(document).ready(function(){

  $("form").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#numberInput").val());
    var primes = [];

    //Create an array of numbers from 2 thru number
    for(var i = 0; i < userInput; i++){
      primes.push(i);
    }

    for(var i = 2; i < primes.length; i++){
      for(var j = 2; j < i; j++){
        if(i%j === 0){
            primes.splice(i, 1, " ");
        }
      }
    }

    var finalPrime = primes.filter(function(prime) {
      return Number(prime);
    });

    //remove leading 1
    finalPrime.shift();

    console.log("after looping, primes are: " + primes);

    $("#prime-output").text("The answer is: " + finalPrime);
  });

}); //Doc ready close

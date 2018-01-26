
function checkNumber() {
  var answer = document.getElementById("answer").value;
  var attempt = document.getElementById("attempts").value;

  var userInput = document.getElementById("user-input").value;
  var msg = document.getElementById("msg");
  var results = document.getElementById("results");

  if(!answer) {
    answer = generateRandomAnswer();
    document.getElementById("answer").value = answer;
  }
  
  if(!attempt){
    attempt = 0;
  }

  if(!validateInput(userInput)) {
    msg.innerHTML = "<p class='text-danger'>Number should be 4-digit long </p>";
    return;
  } else {
    msg.innerHTML = "";
    attempt++;
    document.getElementById("attempts").value = attempt;
  }

  // Main Logic
  var html = '<tr><td>' + userInput + '</td><td>'
  for(let i=0; i < userInput.length; i++) {
    if(userInput[i] == answer[i]) {
      html = html + '<i class="fa fa-check text-success" style="padding: 3px;"></i>';
    } else if(answer.indexOf(userInput[i]) > -1) {
      // show Exchange icon
      html = html + '<i class="fa fa-exchange text-warning" style="padding: 3px;"></i>';
    } else {
      // not found
      html = html + '<i class="fa fa-times text-danger" style="padding: 3px;"></i>';
    }
  }
  html = html + '</td></tr>';
  results.innerHTML += html;
  
  if(answer === userInput) {
    //User is a winner
    msg.innerHTML = "<p class='msg-sucess'>Wooohhooo, You are a born Winner </p>";
    document.getElementById("btn-guess").style = "display:none;";
    document.getElementById("btn-replay").style = "display:block;";
  } else if(attempt >= 10){
    //Stop user from entering any more Guesses
    msg.innerHTML = "<p class='text-danger'>Sorry, You lost. Please play again to win. </p>";
    document.getElementById("btn-guess").style = "display:none;";
    document.getElementById("btn-replay").style = "display:block;";
  } else {
    //show user that Input number is Incorrect.
    msg.innerHTML = "<p class='text-primary'>Incorrect guess. Try again! </p>";
  }

}

function generateRandomAnswer() {
  // below will return a random number of 1000-9999 range
  var num = (Math.floor(Math.random() * 8900)+1000).toString();
  return num;
}

function validateInput(str) { 
  if(str.length == 4)
    return true;
  else
    return false;
}
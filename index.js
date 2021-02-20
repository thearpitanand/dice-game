var randomNumber1;
var randomNumber2;

for (var val = 0; val <= 1; val++) {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  //Assigning Random value to check wining status.
  if (val == 0) {
    randomNumber1 = randomNumber;
  } else {
    randomNumber2 = randomNumber;
  }
  var randomNumberDiceReplacement = "images/dice" + randomNumber + ".png"; //Creating path for image.
  //Get our img element by using document.querySelectorAll and changing the image.
  document
    .querySelectorAll("img")
    [val].setAttribute("src", randomNumberDiceReplacement);
}

var h1Tag = document.querySelector("h1");
if (randomNumber1 < randomNumber2) {
  h1Tag.innerText = "Player Two Won";
} else if (randomNumber1 > randomNumber2) {
  h1Tag.innerText = "Player One Won";
} else {
  h1Tag.innerText = "Draw!!";
}

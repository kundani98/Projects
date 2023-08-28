//var submitButton = document.getElementById("")
//Global variables
var noArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var inputNo;
var outputNo;
var guessNo = pickNo(noArray);
var noOfGuess = guessNo;
 
var numGussed = document.getElementById("num");
numGussed.innerHTML = "";
var li;

while (inputNo != guessNo && noOfGuess > 0) {

    //var i =1;
    inputNo = getGuess();
    //numGussed = inputNo
    //numGussed.innerHTML = inputNo;
    // guessedNo.push(inputNo);
    li = document.createElement("li");
    li.innerHTML = inputNo;
    numGussed.appendChild(li);
    // //showPlayerNoGuessed(guessedNo[5 - noOfGuess]);

    if (inputNo > guessNo) {
        alert("Your guess is too high, Try again");
    }
    if (inputNo < guessNo) {

        alert("Your guess is too low, Try again");
    }


    noOfGuess--;
}

if (inputNo == guessNo) {


    alert("You Won the random number was: " + guessNo);
}
if (noOfGuess === 0) {
    alert("You lost the random number was: " + guessNo);
}



function getGuess() {

    return prompt("Guess a Number, or click Cancel to stop playing.").toLowerCase();
}

function pickNo(randomArray) {
    //return a random number

    var no = randomArray[Math.floor(Math.random() * randomArray.length)];

    return no;

}

function showPlayerNoGuessed(answerarray) {
    //show the player their progress

    alert(answerarray[5 - noOfGuess]);

}
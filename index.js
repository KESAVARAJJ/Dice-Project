var randomNumber1; 
var randomNumber2; 
var randomDiceImage; 
var randomImageSource; 
var randomImageSource2; 
function pressMe1()
{
    randomNumber1 = Math.floor(Math.random() * 5) + 1; //1-6

    randomDiceImage = "Dice" + randomNumber1 + ".jpg"; //dice1.png - dice6.png

    randomImageSource = "Assets/" + randomDiceImage; //images/dice1.png - images/dice6.png

    image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImageSource); 
}

function pressMe2()
{
    randomNumber2 = Math.floor(Math.random() * 5) + 1;

    randomImageSource2 = "Assets/Dice" + randomNumber2 + ".jpg";

    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  //If player 1 wins
    if (randomNumber1 > randomNumber2) 
    {
        document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
    }
    else if (randomNumber2 > randomNumber1) 
    {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    }
    else 
    {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}
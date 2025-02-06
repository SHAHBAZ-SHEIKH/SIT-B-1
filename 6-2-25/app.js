function randomGenerate(){
    var numberGenerate = Math.ceil(Math.random() * 20);
    return numberGenerate
}


var randomNumber = randomGenerate();
console.log(randomNumber);

function checkNumber(){
    var userInput = document.getElementById("inputValue").value;
    var message = document.getElementById("message");
    var score = document.getElementById("score");
    var highScore = document.getElementById("highscore");
    console.log(userInput);
    console.log("mai Chal raha ho")
    if(userInput == randomNumber){
        message.innerHTML = "Congratulation You Win";
        score.innerHTML = 20;
        highScore.innerHTML = 20
        // alert("You Win")

    }
    else if(userInput > randomNumber){
        message.innerHTML = "You Lost OOps very High";
        score.innerHTML = score.innerHTML - 1;
        highScore.innerHTML = score.innerHTML
        // alert("Too High")
    }
    else{
        message.innerHTML = "You Lost OOps very Low";
        score.innerHTML = score.innerHTML - 1;
        highScore.innerHTML = score.innerHTML
        // alert("Too Low")
    }
}



function aginRandonNumer(){
    var randomNumber = randomGenerate() ///2334
    console.log(randomNumber)
}
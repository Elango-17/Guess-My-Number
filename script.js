'use strict';


let screteNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore = 0;


const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess){
        displayMessage("👎🏼 Enter the Number da Nigga");
    }

    //when player wins
    else if(guess === screteNumber){
        // document.querySelector('.message').textContent = "🎉 Correct Number";
        displayMessage("🎉 Correct Number");
        document.querySelector('.number').textContent = screteNumber;
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width= "30rem";

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }

    else if(guess !== screteNumber){
        if(score > 1){
            // document.querySelector('.message').textContent = guess > screteNumber ? "📈 Too High" : "📉 Too Loww";
            displayMessage(guess > screteNumber ? "📈 Too High!!" : "📉 Too Loww!!");
            score--;
            document.querySelector('.score').textContent = score;
            }else{
                // document.querySelector('.message').textContent = "You Lost da Nigga🧑🏼‍🦱";
                alert(` "You Lost da Nigga🧑🏼‍🦱" ${displayMessage("You Lost da Nigga🧑🏼‍🦱")}`);
                document.querySelector('.score').textContent = 0;
            }
    
        }

    });


    document.querySelector('.again').addEventListener('click', function () {

        score = 20;
        screteNumber = Math.trunc(Math.random()*20) + 1;
          
        // document.querySelector('.message').textContent = 'Start guessing...';
        displayMessage('Start guessing...');
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
    });



    // //when guess is too high
    // else if(guess > screteNumber){

    //     if(score > 1){
    //     document.querySelector('.message').textContent = "📈 Too High";
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = "You Lost da Nigga🧑🏼‍🦱";
    //         document.querySelector('.score').textContent = 0;
    //     }

    // }

    // //when guess is too low
    // else if(guess < screteNumber){
    //     if(score > 1){
    //     document.querySelector('.message').textContent = "📉 Too Loww";
    //     score--;
    //     document.querySelector('.score').textContent = score;
    // }else{
    //     document.querySelector('.message').textContent = "You Lost da Nigga🧑🏼‍🦱";
    //     document.querySelector('.score').textContent = 0;
    // }}


//again button



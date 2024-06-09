let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScoreTxt=document.querySelector("#user-score");
const compScoreTxt=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["Stone","Paper","Scissors"];
    const indexChosen=Math.floor(Math.random()*3);
    return options[indexChosen];
};

const drawGame=(userChoice)=>{
    console.log("A draw!");
    msg.innerText=`A draw! Both choose ${userChoice}.`;
    msg.style.backgroundColor="#262626";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScoreTxt.innerText=userScore;
        console.log("You win!");
        if(userChoice==="Scissors"){
            msg.innerText=`You win! Your ${userChoice} beat computer's ${compChoice}.`;
        }else{
            msg.innerText=`You win! Your ${userChoice} beats computer's ${compChoice}.`;
        }
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScoreTxt.innerText=compScore;
        console.log("You lose!");
        if(compChoice==="Scissors"){
            msg.innerText=`You lose! Computer's ${compChoice} beat your ${userChoice}`;
        }else{
            msg.innerText=`You lose! Computer's ${compChoice} beats your ${userChoice}`;
        }
        msg.style.backgroundColor="red";
    };
};

const game=(userChoice)=>{
    console.log("Your choice =",userChoice);

    // Generating computer's choice
    const compChoice=genCompChoice();
    console.log("Computer's choice =",compChoice);

    // Updating score
    if(userChoice===compChoice){
        drawGame(userChoice);
    }else{
        let userWin=true;
        if(userChoice==="Stone"){
            if(compChoice==="Paper"){
                userWin=false;
            }else{
                userWin=true;
            };
        }else if(userChoice==="Paper"){
            if(compChoice==="Scissors"){
                userWin=false;
            }else{
                userWin=true;
            };
        }else{
            if(compChoice==="Stone"){
                userWin=false;
            }else{
                userWin=true;
            };
        }
        showWinner(userWin,userChoice,compChoice);
    };

    

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        game(userChoice);
    });
});
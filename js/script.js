let boxes = document.querySelectorAll(".cl");
let result = document.querySelectorAll("#winner");
let reset = document.querySelector(".reset");
let pl1 = document.querySelector("#pl1");
let pl2 = document.querySelector("#pl2");
let turn = document.querySelector("#turn");

const playerA = prompt("Please Enter Player1 Name");
const playerB = prompt("Please Enter Player2 Name");

pl1.innerText = `${playerA}`;
pl2.innerText = `${playerB}`;

turn.innerHTML =`It's ${playerA} Trun`

let playerX = playerA;
let count = 0;

let wincom = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]] //winning Combinations


boxes.forEach((box)=>{
    box.addEventListener("click", () => {
        if(playerX === playerA){                           //If playerX is True
            box.innerText = "X";
            playerX = playerB;
            turn.innerHTML =`It's ${playerB} Trun`
        } else{                                //if playerX is not True
            box.innerText = "O";    
            playerX = playerA;
            turn.innerHTML =`It's ${playerA} Trun`
        }
        box.disabled = true;
        count++;

        let dWinner = checkwinner();
        
        if(count === 9 && !dWinner){
            gameDraw();
        }
    })
});

const gameDraw = () =>{
    winner.innerText = `Game is Draw!`;
    box.disabled = true;
}

const disabledBx = () =>{
    for (box of boxes){
        box.disabled = true;
    }

    turn.classList.add("hide");
}

const enabledBx = () =>{
    for (box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (win) => {
    if(win === "X"){
        winner.innerText = `Congratulation ${playerA}! You're Winner`;
    } else{
        winner.innerText = `Congratulation ${playerB}! You're Winner`;
    }
    
    disabledBx()
}

const checkwinner = () =>{
    for (let wcom of wincom){
        
        let pos1 = boxes[wcom[0]].innerText;
        let pos2 = boxes[wcom[1]].innerText;
        let pos3 = boxes[wcom[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
                return true;
            }
        }
    }
};


const gameReset = () =>{
    playerX = true;
    enabledBx();
    count = 0;

    winner.classList.add("hide");
}

reset.addEventListener("click", gameReset);


let boxes = document.querySelectorAll(".cl");
let result = document.querySelectorAll("#winner");
let reset = document.querySelector(".reset");

let playerX = true;
let count = 0;

let wincom = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]] //winning Combinations


boxes.forEach((box)=>{
    box.addEventListener("click", () => {
        if(playerX){                           //If playerX is True
            box.innerText = "X";
            playerX = false;
        } else{                                //if playerX is not True
            box.innerText = "O";    
            playerX = true;
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
}

const enabledBx = () =>{
    for (box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (win) => {
    winner.innerText = `Congratulation! Winner ${win}`;
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


let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-button");
let newGameBtn = document.querySelector("#new-button");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#message");

let turnO = true;
let count = 0;
let winnerFound = false;

const winPattren = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


const resetGame = () =>{
    count = 0;
    turnO = true;
    winnerFound = false;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        
        let iswonner = checkWinner();
        if(count === 9 && !iswonner){
            drawcon();
        }
    })
})

const drawcon = () =>{
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
}

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    winnerFound = true;
}
const checkWinner = () =>{
    for(let patter of winPattren){
        // console.log(patter[0],patter[1],patter[2]);
        // console.log(boxes[patter[0]].innerText,boxes[patter[1]].innerText,boxes[patter[2]].innerText);
        let pos1Val = boxes[patter[0]].innerText;
        let pos2Val = boxes[patter[1]].innerText;
        let pos3Val = boxes[patter[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val=== pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}



newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

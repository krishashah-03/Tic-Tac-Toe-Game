let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newbtn=document.querySelector("#newbtn");
let msgwin=document.querySelector(".msgwin");
let msg=document.querySelector("#msg");

let turnO=true;
let count=0;

const winPatt=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame =() => {
    turnO=true;
    count=0;
    enableBoxes();
    msgwin.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;

        let isWin=checkWin();

        if(count===9 && !isWin){
            gameDraw();
        }
    });
});

const gameDraw=() =>{
    msg.innerText="Game is Draw!"
    msgwin.classList.remove("hide");
    disableBoxes();
}

const disableBoxes= () => {
    for(let box of boxes) {
        box.disabled=true;
    }
}

const enableBoxes= () => {
    for(let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
}

const showWin=(winner) => {
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgwin.classList.remove("hide");
    disableBoxes();
}

const checkWin=() => {
    for(let pattern of winPatt){
            let pos1=boxes[pattern[0]].innerText;
            let pos2=boxes[pattern[1]].innerText;
            let pos3=boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos1);
                showWin(pos1);
            }
        }
    }
}

newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);


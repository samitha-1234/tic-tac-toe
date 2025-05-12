let boxes=document.querySelectorAll(".box");
let mybtn=document.querySelector("#mybtn");
let newbtn=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");
let turnO=true;

const winningpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    let turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
             console.log("button was clicked");  
             if(turnO==true){
                box.innerText="O";
                turnO=false ;
             }
             else{
                box.innerText="X";
                turnO=true;
             }
             box.disabled=true;

             checkwinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    msg.innnerText=`Congratulations,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};


const checkwinner=()=>{
    for (let pattern of winningpatterns) {
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;

        if (pos1val !="" && pos2val !="" && pos3val !="") {
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
 
    }

 };
 newbtn.addEventListener("click",resetGame);
 mybtn.addEventListener("click",resetGame);
let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset_btn");
let msg_container=document.querySelector(".msg_container");
let msg=document.querySelector("#msg");
let new_btn=document.querySelector(".new_btn");

let turn0 = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame=()=>{
    turn0 = true;
    enableBtns();
    msg_container.classList.add("hide");

}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;

    checkWinner();
  });
});
const disableBtns = ()=>{
    for(box of boxes ){
        box.disabled=true;
    }

}
const enableBtns = ()=>{
    for(box of boxes ){
        box.disabled=false;
        box.innerText="";
    }

}
function showWinner(winner){
    msg.innerText=  `Congratulations,winner is ${winner}`;
    msg_container.classList.remove("hide");
    disableBtns();

}

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("Winner ");
        showWinner(pos1Val);
      }
    }
  }
};
new_btn.addEventListener( "click",resetGame);
reset_btn.addEventListener( "click",resetGame);

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGame = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;
let turnO = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = () => {
    turnO = true;
    count = 0; 
    enableBoxes();
    msgContainer.classList.add("hide");
};

let boxColor = (box) => {
    box.classList.add("colorChange"); // ✅ apply to the clicked box only
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked"); 
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
            boxColor(box); // ✅ correctly pass the clicked box here
        }

        count++;
        box.disabled = true; 
        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("colorChange"); // ✅ remove previous color
    }
};

const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const matchDraw = () => {
    msg.innerText = "Oh..uh, It's a DRAW !";
    msgContainer.classList.remove("hide");
    disableBoxes();
};
-  
const checkWinner = () => {
    for (let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner", pos1Val);
                showWinner(pos1Val);
                return; 
            }
        }
    }

    if (count === 9) {
        matchDraw();
    }
};

newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

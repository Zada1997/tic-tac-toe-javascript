const cells = document.querySelectorAll(".cell");
const message = document.querySelector(".message-text");
const messageContainer = document.querySelector(".message");
const gameBoard = document.querySelector(".board");
const restart = document.querySelector(".restart");

const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let turnO;
const x = "X"
const o = "O"

restart.addEventListener("click", ()=>{
    start()
})
function start(){
    turnO = false;
    messageContainer.style.display="none"
    
    cells.forEach((cell)=>{
        cell.innerHTML = "";
        cell.addEventListener("click", ()=>{
            const currentPlayer = turnO ? o : x;
            if(!cell.innerText){
                cell.innerText = currentPlayer;
                if(winner(currentPlayer)){
                    end()
                    message.innerText = `${currentPlayer} wins`
                }else if(isDraw()){
                    end()
                    message.innerText = 'DRAW!'
                }else{
                    changeTurn();
                }

            }
        })
    })
}

function changeTurn(){
    turnO = !turnO
}

function winner(currentPlayer){
    return combinations.some(combination=>{
        return combination.every(index => {
            return cells[index].innerText.includes(currentPlayer)

        })
    })
}
function isDraw(){
    return [...cells].every(cell=>{
        return cell.innerText.includes("X") || cell.innerText.includes("O")
    })
}
function end(){
    messageContainer.style.display = "block";
}

start()
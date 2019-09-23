console.dir(document);

let board = [];

function play(clickedId){
    let playerSpan = document.getElementById("player");
    let clickedElement = document.getElementById(clickedId);
    if (playerSpan.innerText === "X"){
        playerSpan.innerText = "O"
        clickedElement.innerText = "X";
        board[clickedId] = "X";
    } else {
        playerSpan.innerText = "X"
        clickedElement.innerText = "O";
        board[clickedId] = "O";
    }
    console.log(board);

    const topLeft = board[0];
    const topCenter = board[1];
    const topRight = board[2];
    const middleLeft = board[3];
    const middleCenter = board[4];
    const middleRight = board[5];
    const bottomLeft = board[6];
    const bottomCenter = board[7];
    const bottomRight = board[8];
    
    if (topLeft !== undefined && topLeft === topRight && topLeft === topCenter){
        alert(`${topLeft} wins!`);
        afterWinnerRevealed();
    } else if(middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight){
        alert(`${middleLeft} wins!`);
        afterWinnerRevealed();
    } else if(bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight){
        alert(`${bottomLeft} wins!`);
        afterWinnerRevealed();
    } else if(topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight){
        alert(`${topLeft} wins!`);
        afterWinnerRevealed();
    } else if(topRight !== undefined && topRight === middleCenter && topRight === bottomLeft){
        alert(`${topRight} wins!`);
        afterWinnerRevealed();
    } else if(topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){
        alert(`${topLeft} wins!`);
        afterWinnerRevealed();
    } else if(topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter){
        alert(`${topCenter} wins!`);
        afterWinnerRevealed();
    } else if(topRight !== undefined && topRight === middleRight && topRight === bottomRight){
        alert(`${topRight} wins!`);
        afterWinnerRevealed();
    }

    let boardFull = true;
    for(let i=0; i<=8; i++){
        if (board[i] === undefined){
            boardFull = false;
        }
    }
    if (boardFull === true){
        alert("Cat Game!");
        afterWinnerRevealed();
    }
}

function afterWinnerRevealed(){
    document.getElementById("Reset")
    document.location.href = ""
}
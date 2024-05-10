/* GAME BOARD */ 
const gameBoard = (function() {
    let moves = 0;
    const boardArray = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
    const getBoardArray = () => {
        return boardArray;
    }
    const changeBoardArray = (index, marker) => { 
        boardArray[index] =  marker;
        moves++;
    }
    return {
        getBoardArray,
        changeBoardArray
    };
})();

/* PLAYER */ 
function createPlayer(name, marker) {
    let win = false; 
    const getWin = () => {
        return win;
    };
    const setWin = (result) => {
        win = result;
    };
    return {
        name,
        marker,
        getWin,
        setWin 
    };
}

/* DEFINE IF A COMBINATION THERE ARE */
function combination(player) {
    const board = gameBoard.getBoardArray();
    const marker = player.marker;
    if ((board[0] === marker && board[1] === marker && board[2] === marker) ||
        (board[3] === marker && board[4] === marker && board[5] === marker) ||
        (board[6] === marker && board[7] === marker && board[8] === marker)) {
        player.setWin(true);
    }
    if ((board[0] === marker && board[3] === marker && board[6] === marker) ||
        (board[1] === marker && board[4] === marker && board[7] === marker) ||
        (board[2] === marker && board[5] === marker && board[8] === marker)) {
        player.setWin(true);
    }
    if ((board[0] === marker && board[4] === marker && board[8] === marker) ||
        (board[6] === marker && board[4] === marker && board[2] === marker)) {
        player.setWin(true);
    }
}

/* DEFINE RESULT OF THE GAME */
const resultOfTheGame = (player1, player2) => {
    if (player1.getWin() === true) {
        return 'X WON';
    }
    else if (player2.getWin() === true) {
        return 'O WON';
    }
    else {
        if (getNumberOfFreeFields(gameBoard.getBoardArray()) === 0) {
            return 'DRAW';
        }
        else {
            return 'KEEP PLAYING'
        }
    }        
}

/* NUMBER OF FREE FIELDS */
function getNumberOfFreeFields(array) {
    count = 0;
    for (const element of array) {
        if (element === '-') {
            count++;
        }
    }
    return count;
}

/* MOVE */
function move(index, player) {
    while (gameBoard.getBoardArray()[index] !== '-') {
        index = (index + 1) % gameBoard.getBoardArray().length; 
    }
    gameBoard.changeBoardArray(index, player.marker);
}


/* GAME PROCESS */
function gameProcess() {
    /* initially dates*/
    const player1 = createPlayer('Hulk', 'X');
    const player2 = createPlayer('Danny', 'O');
    let xMove = true;
    /* game loop */
    while (resultOfTheGame(player1, player2) === "KEEP PLAYING") {
        if (xMove) {
            move(getRandomNumber(), player1);
            console.log(gameBoard.getBoardArray());
            if (combination(player1) === true) {
                player1.setWin(true);
            }
            xMove = false;
        }
        else {
            move(getRandomNumber(), player2);
            console.log(gameBoard.getBoardArray());
            if (combination(player2) === true) {
                player2.setWin(true);
            }
            xMove = true;
        }
    }
    /* printing result */
    console.log(resultOfTheGame(player1, player2));
}

console.log(gameProcess());

/* TEST FUNCTION */
function getRandomNumber() {
    return Math.floor(Math.random() * 9);
}

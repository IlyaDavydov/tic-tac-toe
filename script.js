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
function createPlayer(name, marker, type) {
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
        type,
        getWin,
        setWin 
    };
}

/* DEFINE IF A COMBINATION THERE ARE */
function combination(player) {
    const board = gameBoard.getBoardArray();
    const marker = player.marker;
    const grid0 = document.querySelector(".grid-0");
    const grid1 = document.querySelector(".grid-1");
    const grid2 = document.querySelector(".grid-2");
    const grid3 = document.querySelector(".grid-3");
    const grid4 = document.querySelector(".grid-4");
    const grid5 = document.querySelector(".grid-5");
    const grid6 = document.querySelector(".grid-6");
    const grid7 = document.querySelector(".grid-7");
    const grid8 = document.querySelector(".grid-8");
    const grid0P = document.querySelector(".grid-0 p");
    const grid1P = document.querySelector(".grid-1 p");
    const grid2P = document.querySelector(".grid-2 p");
    const grid3P = document.querySelector(".grid-3 p");
    const grid4P = document.querySelector(".grid-4 p");
    const grid5P = document.querySelector(".grid-5 p");
    const grid6P = document.querySelector(".grid-6 p");
    const grid7P = document.querySelector(".grid-7 p");
    const grid8P = document.querySelector(".grid-8 p");
    if ((board[0] === marker && board[1] === marker && board[2] === marker)) {
        player.setWin(true);
        setTimeout(() => {
            grid0.style.transition = "background-color 2s";
            grid1.style.transition = "background-color 2s";
            grid2.style.transition = "background-color 2s";
            grid0P.style.transition = "transform 2s color 2s";
            grid1P.style.transition = "transform 2s color 2s";
            grid2P.style.transition = "transform 2s color 2s";
            grid0.style.backgroundColor = "#b4cd37";
            grid1.style.backgroundColor = "#b4cd37";
            grid2.style.backgroundColor = "#b4cd37";
            grid0P.style.color = "#f000d0";
            grid1P.style.color = "#f000d0";
            grid2P.style.color = "#f000d0";
        }, 2000);
    }
    if (board[3] === marker && board[4] === marker && board[5] === marker) {
        player.setWin(true);
        setTimeout(() => {
            grid3.style.transition = "background-color 2s";
            grid4.style.transition = "background-color 2s";
            grid5.style.transition = "background-color 2s";
            grid3P.style.transition = "transform 2s color 2s";
            grid4P.style.transition = "transform 2s color 2s";
            grid5P.style.transition = "transform 2s color 2s";
            grid3.style.backgroundColor = "#b4cd37";
            grid4.style.backgroundColor = "#b4cd37";
            grid5.style.backgroundColor = "#b4cd37";
            grid3P.style.color = "#f000d0";
            grid4P.style.color = "#f000d0";
            grid5P.style.color = "#f000d0";
        }, 2000);
    }
    if (board[6] === marker && board[7] === marker && board[8] === marker) {
        player.setWin(true);
        setTimeout(() => {
            grid6.style.transition = "background-color 2s";
            grid7.style.transition = "background-color 2s";
            grid8.style.transition = "background-color 2s";
            grid6P.style.transition = "transform 2s color 2s";
            grid7P.style.transition = "transform 2s color 2s";
            grid8P.style.transition = "transform 2s color 2s";
            grid6.style.backgroundColor = "#b4cd37";
            grid7.style.backgroundColor = "#b4cd37";
            grid8.style.backgroundColor = "#b4cd37";
            grid6P.style.color = "#f000d0";
            grid7P.style.color = "#f000d0";
            grid8P.style.color = "#f000d0";
        }, 2000);
    }
    if (board[0] === marker && board[3] === marker && board[6] === marker) {
        player.setWin(true);
        setTimeout(() => {
            grid0.style.transition = "background-color 2s";
            grid3.style.transition = "background-color 2s";
            grid6.style.transition = "background-color 2s";
            grid0P.style.transition = "transform 2s color 2s";
            grid3P.style.transition = "transform 2s color 2s";
            grid6P.style.transition = "transform 2s color 2s";
            grid0.style.backgroundColor = "#b4cd37";
            grid3.style.backgroundColor = "#b4cd37";
            grid6.style.backgroundColor = "#b4cd37";
            grid0P.style.color = "#f000d0";
            grid3P.style.color = "#f000d0";
            grid6P.style.color = "#f000d0";
        }, 2000);
    }
    if (board[1] === marker && board[4] === marker && board[7] === marker) {
        player.setWin(true);
        setTimeout(() => {
            grid1.style.transition = "background-color 2s";
            grid4.style.transition = "background-color 2s";
            grid7.style.transition = "background-color 2s";
            grid1P.style.transition = "transform 2s color 2s";
            grid4P.style.transition = "transform 2s color 2s";
            grid7P.style.transition = "transform 2s color 2s";
            grid1.style.backgroundColor = "#b4cd37";
            grid4.style.backgroundColor = "#b4cd37";
            grid7.style.backgroundColor = "#b4cd37";
            grid1P.style.color = "#f000d0";
            grid4P.style.color = "#f000d0";
            grid7P.style.color = "#f000d0";
        }, 2000);
    }
    if (board[2] === marker && board[5] === marker && board[8] === marker) {
        player.setWin(true);
        setTimeout(() => {
            grid2.style.transition = "background-color 2s";
            grid5.style.transition = "background-color 2s";
            grid8.style.transition = "background-color 2s";
            grid2P.style.transition = "transform 2s color 2s";
            grid5P.style.transition = "transform 2s color 2s";
            grid8P.style.transition = "transform 2s color 2s";
            grid2.style.backgroundColor = "#b4cd37";
            grid5.style.backgroundColor = "#b4cd37";
            grid8.style.backgroundColor = "#b4cd37";
            grid2P.style.color = "#f000d0";
            grid5P.style.color = "#f000d0";
            grid8P.style.color = "#f000d0";
        }, 2000);
    }
    if (board[0] === marker && board[4] === marker && board[8] === marker) {
        player.setWin(true);
        setTimeout(() => {
            grid0.style.transition = "background-color 2s";
            grid4.style.transition = "background-color 2s";
            grid8.style.transition = "background-color 2s";
            grid0P.style.transition = "transform 2s color 2s";
            grid4P.style.transition = "transform 2s color 2s";
            grid8P.style.transition = "transform 2s color 2s";
            grid0.style.backgroundColor = "#b4cd37";
            grid4.style.backgroundColor = "#b4cd37";
            grid8.style.backgroundColor = "#b4cd37";
            grid0P.style.color = "#f000d0";
            grid4P.style.color = "#f000d0";
            grid8P.style.color = "#f000d0";
        }, 2000);
    }
    if (board[6] === marker && board[4] === marker && board[2] === marker) {
        player.setWin(true);
        setTimeout(() => {
            grid6.style.transition = "background-color 2s";
            grid4.style.transition = "background-color 2s";
            grid2.style.transition = "background-color 2s";
            grid6P.style.transition = "transform 2s color 2s";
            grid4P.style.transition = "transform 2s color 2s";
            grid2P.style.transition = "transform 2s color 2s";
            grid6.style.backgroundColor = "#b4cd37";
            grid4.style.backgroundColor = "#b4cd37";
            grid2.style.backgroundColor = "#b4cd37";
            grid6P.style.color = "#f000d0";
            grid4P.style.color = "#f000d0";
            grid2P.style.color = "#f000d0";
        }, 2000);
    }
}

/* DEFINE RESULT OF THE GAME */
const grid0 = document.querySelector(".grid-0");
const grid1 = document.querySelector(".grid-1");
const grid2 = document.querySelector(".grid-2");
const grid3 = document.querySelector(".grid-3");
const grid4 = document.querySelector(".grid-4");
const grid5 = document.querySelector(".grid-5");
const grid6 = document.querySelector(".grid-6");
const grid7 = document.querySelector(".grid-7");
const grid8 = document.querySelector(".grid-8");
const grid0P = document.querySelector(".grid-0 p");
const grid1P = document.querySelector(".grid-1 p");
const grid2P = document.querySelector(".grid-2 p");
const grid3P = document.querySelector(".grid-3 p");
const grid4P = document.querySelector(".grid-4 p");
const grid5P = document.querySelector(".grid-5 p");
const grid6P = document.querySelector(".grid-6 p");
const grid7P = document.querySelector(".grid-7 p");
const grid8P = document.querySelector(".grid-8 p");

const resultOfTheGame = (player1, player2) => {
    if (player1.getWin() === true) {
        return 'X WON';
    }
    else if (player2.getWin() === true) {
        return 'O WON';
    }
    else {
        if (getNumberOfFreeFields(gameBoard.getBoardArray()) === 0) {
            setTimeout(() => {
                grid0.style.transition = "background-color 2s";
                grid0P.style.transition = "transform 2s color 2s";
                grid0P.style.color = "#f000d0";
                grid0.style.backgroundColor = "yellow";
                grid1.style.transition = "background-color 2s";
                grid1P.style.transition = "transform 2s color 2s";
                grid1P.style.color = "#f000d0";
                grid1.style.backgroundColor = "yellow";
                grid2.style.transition = "background-color 2s";
                grid2P.style.transition = "transform 2s color 2s";
                grid2P.style.color = "#f000d0";
                grid2.style.backgroundColor = "yellow";
                grid3.style.transition = "background-color 2s";
                grid3P.style.transition = "transform 2s color 2s";
                grid3P.style.color = "#f000d0";
                grid3.style.backgroundColor = "yellow";
                grid4.style.transition = "background-color 2s";
                grid4P.style.transition = "transform 2s color 2s";
                grid4P.style.color = "#f000d0";
                grid4.style.backgroundColor = "yellow";
                grid5.style.transition = "background-color 2s";
                grid5P.style.transition = "transform 2s color 2s";
                grid5P.style.color = "#f000d0";
                grid5.style.backgroundColor = "yellow";
                grid6.style.transition = "background-color 2s";
                grid6P.style.transition = "transform 2s color 2s";
                grid6P.style.color = "#f000d0";
                grid6.style.backgroundColor = "yellow";
                grid7.style.transition = "background-color 2s";
                grid7P.style.transition = "transform 2s color 2s";
                grid7P.style.color = "#f000d0";
                grid7.style.backgroundColor = "yellow";
                grid8.style.transition = "background-color 2s";
                grid8P.style.transition = "transform 2s color 2s";
                grid8P.style.color = "#f000d0";
                grid8.style.backgroundColor = "yellow";
            }, 100);
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
    const string = `.grid-${index} p`;
    const field = document.querySelector(string);
    field.textContent = player.marker;
    resizeElement(field);
    gameBoard.changeBoardArray(index, player.marker);
}

/*let lastPlayerChoice = 5;
const fields = document.querySelectorAll(".grid div");
fields.forEach(field => {
    field.addEventListener("click", function() {
        lastPlayerChoice = parseInt(field.className.substring(5, 6));
        let index = lastPlayerChoice;
        if (gameBoard.getBoardArray()[index] !== '-') {
            return;
        }
        const string = `.grid-${index} p`;
        const fieldContainer = document.querySelector(string);
        fieldContainer.textContent = player.marker;
        resizeElement(fieldContainer);
        gameBoard.changeBoardArray(index, player.marker);
        return;
    });   
});*/

/* GAME PROCESS */
function gameProcess() {
    /* initially dates*/
    const player1 = createPlayer('Hulk', 'X', 'Player');
    const player2 = createPlayer('Danny', 'O', 'AI');
    const left = document.querySelector(".left");
    const right = document.querySelector(".right");
    let xMove = false;
    /* game loop */
    function playTurnAIvAI() {
        if (resultOfTheGame(player1, player2) === "KEEP PLAYING") {
            if (xMove) {
                move(getRandomNumber(), player1);
                console.log(gameBoard.getBoardArray());
                if (combination(player1)) {
                    player1.setWin(true);
                }
                xMove = false;
            } else {
                move(getRandomNumber(), player2);
                console.log(gameBoard.getBoardArray());
                if (combination(player2)) {
                    player2.setWin(true);
                }
                xMove = true;
            }
            setTimeout(playTurnAIvAI(), 1500);
        } else {
            console.log(resultOfTheGame(player1, player2));
        }
    }

    function playTurnPlayervAI() {
        if (resultOfTheGame(player1, player2) === "KEEP PLAYING") {
            if (xMove) {
                /*while (movePlayer(player1) === "problem") {
                    movePlayer(player1);
                }*/
                move(lastPlayerChoice, player1);
                console.log("работает)");
                if (combination(player1)) {
                    player1.setWin(true);
                }
                xMove = false;
            } else {
                move(getRandomNumber(), player2);
                console.log("обаа");
                if (combination(player2)) {
                    player2.setWin(true);
                }
                xMove = true;
            }
        } else {
            console.log(resultOfTheGame(player1, player2));
        }
    }
    
    if (player1.type === "AI" && player2.type === "AI") {
        console.log("AIAI");
        playTurnAIvAI();
    }
    else if (player1.type === "Player" && player2.type === "AI") {
        console.log("PlayerAI");
        playTurnPlayervAI();
    }
}

console.log(gameProcess());

/* TEST FUNCTION */
function getRandomNumber() {
    return Math.floor(Math.random() * 9);
}

/* OTHER FUNCTIONS */
function resizeElement(element) {
    element.classList.add('resize'); 
}

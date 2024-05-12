const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms);
    })
}

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
        }, 500);
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
        }, 500);
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
        }, 500);
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
        }, 500);
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
        }, 500);
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
        }, 500);
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
        }, 500);
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
        }, 500);
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
            }, 500);
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
function moveAI(index, player) {
    while (gameBoard.getBoardArray()[index] !== '-') {
        index = (index + 1) % gameBoard.getBoardArray().length; 
    }
    const string = `.grid-${index} p`;
    const field = document.querySelector(string);
    field.textContent = player.marker;
    resizeElement(field);
    gameBoard.changeBoardArray(index, player.marker);
    if (combination(player)) {
        player.setWin(true);
    }
}

function movePlayer(player) {
    const gridNow = document.querySelector(".grid");
    let eventPromise = new Promise((resolve, reject) => {
        const eventListener = (event) => {
            const index = event.target.className.substring(5, 6);
            const string = `.grid-${index} p`;
            const string2 = `.grid-${index}`;
            const div = document.querySelector(string2);
            const field = document.querySelector(string);
            if (gameBoard.getBoardArray()[index] !== '-') {
                div.classList.add("mistake");
                reject();
                gridNow.removeEventListener('click', eventListener);
            }
            else {
                field.textContent = player.marker;
                resizeElement(field);
                gameBoard.changeBoardArray(index, player.marker);
                resolve();
                gridNow.removeEventListener('click', eventListener);
            }
        };
        gridNow.addEventListener('click', eventListener);
    });
    eventPromise.then(() => {
        if (combination(player)) {
            player.setWin(true);
        } 
    }).catch(() => {

    });
    return eventPromise;
}

/* TEST FUNCTION */
function getRandomNumber() {
    return Math.floor(Math.random() * 9);
}

/* OTHER FUNCTIONS */
function resizeElement(element) {
    element.classList.add('resize'); 
}

/* START MENU */
const leftIcons = document.querySelectorAll(".left-menu .icon-choice img");
const rightIcons = document.querySelectorAll(".right-menu .icon-choice img");
const start = document.querySelector(".start-menu");
const mainContent = document.querySelector(".content");

leftIcons.forEach(icon => icon.addEventListener("click", function(event) {
    leftIcons.forEach(icon => icon.style.border = "none");
    event.target.style.border = "5px solid #b4cd37";
    event.target.style.borderRadius = "20px";
    event.target.style.padding = "4px";
    const leftImage = document.querySelector(".left img");
    if (event.target.tagName === 'IMG') {
        const src = event.target.src;
        const filename = src.substring(src.lastIndexOf('/') + 1).replace('.', '-pink.');
        leftImage.src = filename;
    }
}))

rightIcons.forEach(icon => icon.addEventListener("click", function(event) {
    rightIcons.forEach(icon => icon.style.border = "none");
    event.target.style.border = "5px solid #f000d0";
    event.target.style.borderRadius = "20px";
    event.target.style.padding = "4px";
    const rightImage = document.querySelector(".right img");
    if (event.target.tagName === 'IMG') {
        const src = event.target.src;
        const filename = src.substring(src.lastIndexOf('/') + 1).split('-')[0] + '.svg';
        rightImage.src = filename;
    }
}))

let leftStatus = "Player";
let rightStatus = "Player";
const leftAIButton = document.querySelector(".left-menu .AIButton");
const rightAIButton = document.querySelector(".right-menu .AIButton");
const leftPlayerButton = document.querySelector(".left-menu .PlayerButton");
const rightPlayerButton = document.querySelector(".right-menu .PlayerButton");

leftAIButton.addEventListener("click", function() {
    leftStatus = "AI";
    leftAIButton.style.border = "4px solid #f000d0";
    leftPlayerButton.style.border = "none"
})

rightAIButton.addEventListener("click", function() {
    rightStatus = "AI";
    rightAIButton.style.border = "4px solid #b4cd37";
    rightPlayerButton.style.border = "none"
})

leftPlayerButton.addEventListener("click", function() {
    leftStatus = "Player";
    leftPlayerButton.style.border = "4px solid #f000d0";
    leftAIButton.style.border = "none"
})

rightPlayerButton.addEventListener("click", function() {
    rightStatus = "Player";
    rightPlayerButton.style.border = "4px solid #b4cd37";
    rightAIButton.style.border = "none"
})

const leftSubmit = document.querySelector(".left-menu .submit");
const rightSubmit = document.querySelector(".right-menu .submit");
const leftInput = document.querySelector(".left-menu input");
const rightInput = document.querySelector(".right-menu input");
const leftType = document.querySelector(".left-menu .type");
const rightType = document.querySelector(".right-menu .type")
const leftUsername = document.querySelector(".left .username");
const rightUsername = document.querySelector(".right .username");
 
let validLeft = 0;
leftSubmit.addEventListener("click", function() {
    if (leftInput.value.length < 1) {
        leftType.style.border = "10px solid red";
    }
    else {
        validLeft = 1;
        leftType.style.border = "10px solid #f000d0";
        leftUsername.textContent = leftInput.value;
    }
    if (validLeft === 1 && validRight === 1) {
        start.style.display = "none";
        mainContent.style.display = "flex";
        gameProcess();
    }
})

let validRight = 0;
rightSubmit.addEventListener("click", function() {
    if (rightInput.value.length < 1) {
        rightType.style.border = "10px solid red";
    }
    else {
        validRight = 1;
        rightType.style.border = "10px solid #b4cd37";
        rightUsername.textContent = rightInput.value;
    }
    if (validLeft === 1 && validRight === 1) {
        start.style.display = "none";
        mainContent.style.display = "flex";
        gameProcess();
    }
})

/* GAME PROCESS */

function gameProcess() {
    /* initially dates*/
    const player1 = createPlayer(leftInput.value, 'X', leftStatus);
    const player2 = createPlayer(rightInput.value, 'O', rightStatus);
    console.log(player1);
    console.log(player2);
    const left = document.querySelector(".left");
    const right = document.querySelector(".right");
    let xMove = true;
    /* game loop */
    function playTurnAIvAI() {
        if (resultOfTheGame(player1, player2) === "KEEP PLAYING") {
            if (xMove) {
                setTimeout(() => {
                    const index = getRandomNumber();
                    moveAI(index, player1);
                    xMove = false;
                    playTurnAIvAI();
                }, 500);
            } else {
                setTimeout(() => {
                    const index = getRandomNumber();
                    moveAI(index, player2);
                    xMove = true;
                    playTurnAIvAI();
                }, 500);
            }
        } else {
            console.log(resultOfTheGame(player1, player2));
        }
    }

    function playTurnPlayervAI() {
        if (resultOfTheGame(player1, player2) === "KEEP PLAYING") {
            if (xMove) {
                left.classList.add("jumping");
                movePlayer(player1).then(() => {
                    xMove = false;
                    left.classList.remove("jumping");
                    playTurnPlayervAI();
                }).catch(() => {
                    playTurnPlayervPlayer();
                });
            } else {
                setTimeout(() => {
                    const index = getRandomNumber();
                    moveAI(index, player2);
                    xMove = true;
                    playTurnPlayervAI();
                }, 500);
            }
        } else {
            console.log(resultOfTheGame(player1, player2));
        }
    }

    function playTurnAIvPlayer() {
        if (resultOfTheGame(player1, player2) === "KEEP PLAYING") {
            if (xMove) {
                setTimeout(() => {
                    const index = getRandomNumber();
                    moveAI(index, player1);
                    xMove = false;
                    playTurnAIvPlayer();
                }, 500);
            } else {
                right.classList.add("jumping");
                movePlayer(player2).then(() => {
                    xMove = true;
                    right.classList.remove("jumping");
                    playTurnAIvPlayer();
                }).catch(() => {
                    playTurnPlayervPlayer();
                });
            }
        } else {
            console.log(resultOfTheGame(player1, player2));
        }
    }

    function playTurnPlayervPlayer() {
        if (resultOfTheGame(player1, player2) === "KEEP PLAYING") {
            if (xMove) {
                left.classList.add("jumping");
                movePlayer(player1).then(() => {
                    xMove = false;
                    left.classList.remove("jumping");
                    playTurnPlayervPlayer();
                }).catch(() => {
                    playTurnPlayervPlayer();
                });
            } else {
                right.classList.add("jumping");
                movePlayer(player2).then(() => {
                    xMove = true;
                    right.classList.remove("jumping");
                    playTurnPlayervPlayer();
                }).catch(() => {
                    playTurnPlayervPlayer();
                });
            }
        } else {
            console.log(resultOfTheGame(player1, player2));
        }
    }   
    
    if (player1.type === "AI" && player2.type === "AI") {
        playTurnAIvAI();
    }
    else if (player1.type === "Player" && player2.type === "AI") {
        playTurnPlayervAI();
    }
    else if (player1.type === "AI" && player2.type === "Player") {
        playTurnAIvPlayer();
    }
    else if (player1.type === "Player" && player2.type === "Player") {
        playTurnPlayervPlayer();
    }
}
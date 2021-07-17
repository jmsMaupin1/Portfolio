const express = require("express");

const router = express.Router();

const playerOptions = ["X", "O"];
const empty = '';

// Return player whos turn it is next given a board state
function player(board) {
    let nonEmptyCellCount = 0;
    for (const cell of board)
        if (cell != empty)
            nonEmptyCellCount += 1

    return playerOptions[nonEmptyCellCount % 2];
}

// Returns a set of all possible actions available on the board
function actions(board) {
    let possibleActions = new Set();

    for (const cell in board)
        if (board[cell] === empty)
            possibleActions.add(cell)
        
    return possibleActions
}

// Returns the board that results from making a move on the board
function result(board, action) {
    if (board[action] !== empty)
        return null;
    
    let resultingBoard = [...board]
    resultingBoard[action] = player(board);
    return resultingBoard
}

// returns the winner of the game, if there is one
function winner(board) {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combo of winningCombos)
        if (board[combo[0]] && combo.every(v => board[v] === board[combo[0]]))
            return board[combo[0]];
    
    return null
}

// Returns true if game is over, false otherwise
function isTerminalBoardState(board) {
    for (const cell of board)
        if (cell === empty)
            return false;
    return true;
}


// Returns 1 if x has won, -1 if o wins, 0 otherwise
function utility(board) {
    const winningPlayer = winner(board);

    if (winningPlayer)
        return winningPlayer == "X" ? 1 : -1;
    
    return 0;
}

// Given a board state, try to find the minimum utility value out of every
// Possible move.
function minValue(board, alpha=-Infinity, beta=Infinity) {
    if (isTerminalBoardState(board))
        return utility(board);
    
    let score = Infinity;
    for (const action of actions(board)) {
        score = Math.min(score, maxValue(result(board, action), alpha, beta));
        beta = Math.min(beta, score);
        if (alpha >= beta)
            break;
    }

    return score
}

// Given a board state, try to find the max utility value out of every
// possible move.
function maxValue(board, alpha=-Infinity, beta=Infinity) {
    if (isTerminalBoardState(board))
        return utility(board)
    
    let score = -Infinity
    for (const action of actions(board)) {
        score = Math.max(score, minValue(result(board, action), alpha, beta));
        alpha = Math.max(score, alpha);
        if (beta <= alpha)
            break;
    }

    return score
}

// Returns the optimal action for the current player on the board
function miniMax(board) {
    const turn = player(board);
    let actionToTake = -1;

    if (turn === "X") {
        let score = -Infinity;
        for (const action of actions(board)) {
            const maxScore = minValue(result(board, action));
            if (maxScore > score) {
                score = maxScore;
                actionToTake = action;
            }
        }
    } else {
        let score = Infinity;
        for (const action of actions(board)) {
            const minScore = maxValue(result(board, action));
            if (minScore < score) {
                score = minScore;
                actionToTake = action;
            }
        }
    }

    return actionToTake;
}

router.post("/", (req, res) => {
    res.status(200).json({move: miniMax(req.body.board)});
});

module.exports = router;
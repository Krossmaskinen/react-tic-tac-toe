import React, { useState } from 'react';
import './TicTacToe.css';

function TicTacToe() {
    return (
        <div className="tic-tac-toe">
            <Board />
        </div>
    );
}

export default TicTacToe;

// square
// value (prop)
// onclick function (prop)
function Square(props) {
    return <button className="square" onClick={props.onClick}>{props.value}</button>
}

function Board() {
    // board
    // state
    // boardState
    const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
    // turnState
    const [xIsNext, setXIsNext] = useState(true);
    // handleClick
    const handleClick = (index) => {
        // copy board state
        const squares = [...boardSquares];
        // if index of the board is filled, return

        if (winner || squares[index]) {
            return;
        }

        // add X/O
        squares[index] = xIsNext ? 'X' : 'O';
        // set state of the board
        setBoardSquares(squares);
        // calculate next turn

        // set state of the turn
        setXIsNext(!xIsNext);
    }

    // create a render square function
    const renderSquare = (index) => {
        return <Square value={boardSquares[index]} onClick={() => handleClick(index)} />
    }

    const resetGame = () => {
        let squares = [...boardSquares];

        winner = null;
        squares = squares.map(() => null);
        setXIsNext(true);

        setBoardSquares(squares);
    }

    // initialize status
    let status;
    let winner = calculateWinner(boardSquares);

    status = winner
        ? `Winner is: ${winner}`
        : `Next player: ${xIsNext ? 'X' : 'O'}`;

    // take an index
    // return a square with the correct value and function
    return (
        <div>
            <div className="status">{status}</div>
            <div className="square-wrapper">
                {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
                {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
                {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
            </div>
            <button className="button" onClick={resetGame}>Reset</button>
        </div>
    )
}

// function that calculates the winner
function calculateWinner(squares) {
    const winningLines = [
        // horizontal
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // vertical
        [0, 3, 6],
        [1, 4, 7],
        [6, 7, 8],
        // diagonal
        [0, 4, 8],
        [2, 4, 6]
    ];
    let winner;

    // loop through set and check for winner
    winningLines.some(lines => {
        let isWinning = true;

        if (!squares[lines[0]]) {
            return false;
        }

        isWinning = !lines.some(line => {
            if (!squares[line]) {
                return true;
            }

            return squares[line] !== squares[lines[0]];
        });

        if (isWinning) {
            winner = squares[lines[0]];

            return true;
        }

        return false;
    });

    return winner;

    // course example below:
    // for (let i = 0; i < winningLines.length; ++i) {
    //     const [a, b, c] = winningLines[i];

    //     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
    //         hasWinner = true;
    //         return squares[a];
    //     }
    // }
}
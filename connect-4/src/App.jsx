import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

//7*6
const height = 6;
const width = 7;

const initialBoard = ()=>Array(height*width).fill(null);

function App() {

  const [board, setBoard] = useState(initialBoard());

  const [isXNext, setisXNext] = useState(true);

  const WINNING_PATTERNS=[ //needs reworking
      [0, 1, 2, 3],
      [41, 40, 39, 38],
      [7, 8, 9, 10],
      [34, 33, 32, 31],
      [14, 15, 16, 17],
      [27, 26, 25, 24],
      [21, 22, 23, 24],
      [20, 19, 18, 17],
      [28, 29, 30, 31],
      [13, 12, 11, 10],
      [35, 36, 37, 38],
      [6, 5, 4, 3],
      [0, 7, 14, 21],
      [41, 34, 27, 20],
      [1, 8, 15, 22],
      [40, 33, 26, 19],
      [2, 9, 16, 23],
      [39, 32, 25, 18],
      [3, 10, 17, 24],
      [38, 31, 24, 17],
      [4, 11, 18, 25],
      [37, 30, 23, 16],
      [5, 12, 19, 26],
      [36, 29, 22, 15],
      [6, 13, 20, 27],
      [35, 28, 21, 14],
      [0, 8, 16, 24],
      [41, 33, 25, 17],
      [7, 15, 23, 31],
      [34, 26, 18, 10],
      [14, 22, 30, 38],
      [27, 19, 11, 3],
      [35, 29, 23, 17],
      [6, 12, 18, 24],
      [28, 22, 16, 10],
      [13, 19, 25, 31],
      [21, 15, 9, 3],
      [20, 26, 32, 38],
      [36, 30, 24, 18],
      [5, 11, 17, 23],
      [37, 31, 25, 19],
      [4, 10, 16, 22],
      [2, 10, 18, 26],
      [39, 31, 23, 15],
      [1, 9, 17, 25],
      [40, 32, 24, 16],
      [9, 17, 25, 33],
      [8, 16, 24, 32],
      [11, 17, 23, 29],
      [12, 18, 24, 30],
      [1, 2, 3, 4],
      [5, 4, 3, 2],
      [8, 9, 10, 11],
      [12, 11, 10, 9],
      [15, 16, 17, 18],
      [19, 18, 17, 16],
      [22, 23, 24, 25],
      [26, 25, 24, 23],
      [29, 30, 31, 32],
      [33, 32, 31, 30],
      [36, 37, 38, 39],
      [40, 39, 38, 37],
      [7, 14, 21, 28],
      [8, 15, 22, 29],
      [9, 16, 23, 30],
      [10, 17, 24, 31],
      [11, 18, 25, 32],
      [12, 19, 26, 33],
      [13, 20, 27, 34],
  ]

  const calculateWinner = (currentBoard,index) => { // needs work
      //console.log(index);

    for(let i = 0; i < WINNING_PATTERNS.length; i++) {
        const [a,b,c,d] = WINNING_PATTERNS[i];
        if(currentBoard[a] &&
            currentBoard[a] === currentBoard[b] &&
            currentBoard[a] === currentBoard[c] &&
            currentBoard[a] === currentBoard[d]){
            return currentBoard[a];
        }
    }
    return null;
  }

  const handleClick = (index) => {

    while(index < board.length){
        index +=width;
    }
    index -= width;
    while(board[index] !== null){
        index -=width;
    }

      const winner = calculateWinner(board,index);
      console.log(winner);
      if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext? "X" : "O"


    setBoard(newBoard);
    setisXNext(!isXNext);


  }

  const getStatusMessage = () => {
      const winner = calculateWinner(board);
      if(winner) return `Player ${winner} wins!`;
      if(!board.includes(null)) return 'Draw';
      return `Player ${isXNext? "X" : "O"} turn`;
  }

  const resetGameLogic = () => {
      setBoard(initialBoard());
      setisXNext(true);
  }

  //console.log(board);
  return (
      <div className="game">
        <div className="status">
          {getStatusMessage()}
          <button className="reset-button" onClick={resetGameLogic}>Reset Game</button>
        </div>

        <div className="board">
          {board.map((b,index) => {
            return(

             <button className="cell"
                           key={index}
                            onClick={() => handleClick(index)}
                            disabled={b!==null}>
              {b}
            </button>
            )})}
        </div>
      </div>
  )
}

export default App

import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const initialBoard = ()=>Array(9).fill(null);

function App() {

  const [board, setBoard] = useState(initialBoard());

  console.log(board);
  return (
      <div className="game">
        <div className="status">
          Player X Turn
          <button className="reset-button">Reset Game</button>
        </div>

        <div className="board">
          {board.map((_,index) => {
            return <button className="cell" key={index}>
              X
            </button>
          })}
        </div>
    </div>
  )
}

export default App

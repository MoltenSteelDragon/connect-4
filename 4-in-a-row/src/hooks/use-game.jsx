import {useState} from "react";

const initialBoard = ()=>Array(9).fill(null);


const useGame = ()=>{
    const [board, setBoard] = useState(initialBoard());

    const [isXNext, setisXNext] = useState(true);

    const WINNING_PATTERNS=[]

    const calculateWinner = () => {}

    const handleClick = () => {}

    const getStatusMessage = () => {}

    const resetGameLogic = () => {}
}
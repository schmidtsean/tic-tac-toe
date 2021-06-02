import { useState } from 'react';
import '../styles/Styles.css';
import Box from './Box';

const Game = () => {

  const [turn, setTurn] = useState('X')
  const [winningText, setWinningText] = useState('')

  const board= [[], [], []]

    function changeTurn(row, column) {
      board[row][column]=turn
      setTurn (turn => turn === 'X' ? 'O' : 'X')

      
     const winner = checkforwin()
     if(!winner){
     }
     else{
       setWinningText(winner + 'Won!')
     }
    }

    function checkforwin() {
      for(let i=0;i<board.length;i++) {
        const row = board[i]
        if(row[0] === row[1] && row[1] === row[2] && row[0]) {
        return row[0] 
        }
      }
      for(let i=0;i<board.length;i++) {
        const elem1 = board[0][i]
        const elem2 = board[1][i]
        const elem3 = board[2][i]

        if(elem1 === elem2 && elem2 === elem3 && elem1){
          return elem1
        }
      }
      const di1 = board[0][0]
      const di2 = board[1][1]
      const di3 = board[2][2]
      
      if(di1 === di2 && di2 === di3 && di1){
        return di1
      }
      const di4 = board[0][2]
      const di5 = board[1][1]
      const di6 = board[2][0]

      if(di4 === di5 && di5 && di6){
        return di4
      }
      return false
    }



  return (
    <div className='game'>
      <div id='winning-text'>{winningText}</div>
      <div className='row'>
        <Box row={0} column={0} currentState={turn} changeTurn={changeTurn}/>
        <Box row={1} column={1} currentState={turn} changeTurn={changeTurn}/>
        <Box row={2} column={2} currentState={turn} changeTurn={changeTurn}/>
      </div>
      <div className='row'>
        <Box row={0} column={0} currentState={turn} changeTurn={changeTurn}/>
        <Box row={1} column={1} currentState={turn} changeTurn={changeTurn}/>
        <Box row={2} column={2} currentState={turn} changeTurn={changeTurn}/>
      </div>
      <div className='row'>
        <Box row={0} column={0} currentState={turn} changeTurn={changeTurn}/>
        <Box row={1} column={1} currentState={turn} changeTurn={changeTurn}/>
        <Box row={2} column={2} currentState={turn} changeTurn={changeTurn}/>
      </div>

    </div>
    
  )
}

export default Game;
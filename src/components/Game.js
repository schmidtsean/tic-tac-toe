import { useState } from 'react';
import '../styles/Styles.css';
import Box from './Box';

const Game = () => {

  const [turn, setTurn] = useState('X')

    function changeTurn() {
      setTurn (turn => turn === 'X' ? 'O' : 'X')
    }


  return (
    <div className='game'>
      <div className='row'>
        <Box id={0} currentState={turn} changeTurn={changeTurn}/>
        <Box id={1} currentState={turn} changeTurn={changeTurn}/>
        <Box id={2} currentState={turn} changeTurn={changeTurn}/>
      </div>
      <div className='row'>
        <Box id={0} currentState={turn} changeTurn={changeTurn}/>
        <Box id={1} currentState={turn} changeTurn={changeTurn}/>
        <Box id={2} currentState={turn} changeTurn={changeTurn}/>
      </div>
      <div className='row'>
        <Box id={0} currentState={turn} changeTurn={changeTurn}/>
        <Box id={1} currentState={turn} changeTurn={changeTurn}/>
        <Box id={2} currentState={turn} changeTurn={changeTurn}/>
      </div>

    </div>
    
  )
}

export default Game;
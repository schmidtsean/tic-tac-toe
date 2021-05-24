import '../styles/Styles.css';
import Box from './Box';

const Game = () => {
  return (
    <div className='game'>
      <div className='row'>
        <Box id={0} />
        <Box id={1} />
        <Box id={2} />
      </div>
      <div className='row'>
        <Box id={0} />
        <Box id={1} />
        <Box id={2} />
      </div>
      <div className='row'>
        <Box id={0} />
        <Box id={1} />
        <Box id={2} />
      </div>

    </div>
    
  )
}

export default Game;
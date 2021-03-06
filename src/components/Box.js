import { useState } from "react";

const Box = (props) => {
  const [letter, setLetter] = useState('')

  function toggleLetter() {
    if (letter === '') {
      setLetter (props.currentState)
      props.changeTurn(props.row, props.column)
    }
  }

  return(
    <div className='box' onClick={toggleLetter}>{letter}</div>
  )
}

export default Box;
import { useState } from "react";

const Box = () => {
  const [letter, setLetter] = useState('')

  function toggleLetter() {
    if (letter === '') {
      setLetter ('X')
    }
  }

  return(
    <div className='box' onClick={toggleLetter}>{letter}</div>
  )
}

export default Box;
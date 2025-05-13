import React, {useState} from "react";


export default function InputEcho() {
  const [inputValue, setInputValue] = useState('')
  const [displayValue, setDisplayValue] = useState('')

  const handleClick = () => {
    setDisplayValue(inputValue)
  }

  return (
    <>
    <div>
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClick}>Show Text</button>
      <p data-testid="output">{displayValue}</p>
    </div>
    </>
  )
}


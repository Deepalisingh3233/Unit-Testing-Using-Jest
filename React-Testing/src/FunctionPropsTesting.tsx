import React, { useState } from 'react'

const FunctionPropsTesting = (props) => {
  const [count, setCount] = useState(0)

  return (
      <div>
        <h1>Functional Props Testing and Mocking</h1> 
        <button onClick = {props.testFunction} >Click</button>
      </div>
  )
}

export default FunctionPropsTesting;


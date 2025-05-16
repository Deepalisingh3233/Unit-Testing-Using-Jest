import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Assertion() {
  const [count, setCount] = useState(0)

  return (
      <div className='App'>
         <h1>Assertion</h1> 
        <input 
        type="text" 
        defaultValue={"Ritesh"} 
        name="userName" 
        className="test-style dummy" 
        id="user-name" 
        data-test="test"

        />

        <button className='btn' id="btn-id" disabled>Click Me</button>
      </div>
  )
}

export default Assertion;


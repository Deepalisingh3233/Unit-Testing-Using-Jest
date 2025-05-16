import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function OverrideGetByTestId() {
  const [count, setCount] = useState(0)

  return (
      <div className='App'>
        <h1>RTL Query: Override GetByTestId and GetAllByTestId</h1> 
        <div element-id="test-div">Dummy Text</div>
      </div>
  )
}

export default OverrideGetByTestId;


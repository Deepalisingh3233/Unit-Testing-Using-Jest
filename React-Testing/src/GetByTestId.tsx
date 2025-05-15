import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function GetByTestId() {
  const [count, setCount] = useState(0)

  return (
      <div className='App'>
        <h1>RTL Query: GetByTestId and GetAllByTestId</h1> 
        <div data-testid="div-test-id">
            Testing div1 with test-id
        </div>

        <div data-testid="div-test-id">
            Testing div2 with test-id
        </div>

        <h2 data-testid="h1-test-id">
            h2 Tag Testing
        </h2>
      </div>
  )
}

export default GetByTestId;


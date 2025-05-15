import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function GetByText() {
  const [count, setCount] = useState(0)

  return (
      <div className='App'>
        <h1>RTL Query: GetByText and GetByAllText</h1> 
        <button>Login</button>
        <p className="paraStyle" id="p1">P Tag Testing</p>
        <h1>Heading Tag</h1>
        <h1>Heading Tag</h1>
      </div>
  )
}

export default GetByText;


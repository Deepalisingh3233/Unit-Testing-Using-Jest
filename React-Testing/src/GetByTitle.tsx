import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function GetByTitle() {
  const [count, setCount] = useState(0)

  return (
      <div className='App'>
        <h1>RTL Query: GetByTitle and GetAllByTitle</h1> 
        <button title= "Click Me">Click Me</button>
        <span title="black spade suit">&#x2660</span>
        <span title="black spade suit">&#x2660</span>
      </div>
  )
}

export default GetByTitle;


import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function TextMatchUsingFunction() {
  const [count, setCount] = useState(0)

  return (
      <div className='App'>
        <h1>Text Match with Function</h1> 
        <div>Hello World</div>
      </div>
  )
}

export default TextMatchUsingFunction;


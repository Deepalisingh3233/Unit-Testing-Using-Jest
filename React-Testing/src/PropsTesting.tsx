import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User'

function PropsTesting() {
  const [count, setCount] = useState(0)

  return (
      <div className='App'>
        <h1>Props Testing</h1> 
        <User name = "Deepali" />
      </div>
  )
}

export default PropsTesting;


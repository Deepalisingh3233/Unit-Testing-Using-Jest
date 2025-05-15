import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function GetByPlaceholder() {
  const [count, setCount] = useState(0)

  return (
      <div className='App'>
        <h1>RTL Query: GetByPlaceholder</h1> 
        <input type="text" placeholder = 'Enter username' defaultValue={"Deepali"}/>
        <input type="text" placeholder = 'Enter username' defaultValue={"Deepali"}/>
      </div>
  )
}

export default  GetByPlaceholder;


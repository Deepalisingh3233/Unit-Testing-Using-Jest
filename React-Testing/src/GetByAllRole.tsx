import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function GetByAllRole() {
  const [count, setCount] = useState(0)

  return (
      <div className='App'>
        <h1>RTL Query: GetByAllRole</h1> 
        <button>Click Me</button>
        <button>Click Me</button>

        <select name="" id="">
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
      </div>
  )
}

export default GetByAllRole

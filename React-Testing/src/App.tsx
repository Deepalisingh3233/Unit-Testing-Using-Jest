import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='App'>
        <h1>Multiple with Role</h1> 
        <h1>Custom Role</h1>
        <button>Click 1</button>
        <button>Click 2</button>
        <label htmlFor='input1'>User Name</label>
        <input type="text" value="" id='input1' />
        <label htmlFor='input2'>User Age</label>
        <input type="text" value="" id='input2'/>

        <div role='dummy'>
          Dummy Text
        </div>
      </div>
  )
}

export default App

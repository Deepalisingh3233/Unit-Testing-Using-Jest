import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function GetByLabelText() {
  const [count, setCount] = useState(0)

  return (
      <div className='App'>
        <h1>RTL Query: getByLabelText</h1> 
        <label htmlFor="user-name">Username</label>
        <input type="text" id="user-name" defaultValue = {"Deepali"}/>
        <label htmlFor="skills">Skills</label>
        <input type="checkbox" id="skills" defaultChecked = {true}/>
      </div>
  )
}

export default GetByLabelText

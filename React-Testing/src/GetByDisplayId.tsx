import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function GetByDisplayId() {
  const [count, setCount] = useState(0)

  return (
      <div className='App'>
        <h1>RTL Query: GetByDisplayId and GetAllByDisplayId</h1> 
        <input type="text" defaultValue={"Ritesh"} />
        <input type="text" defaultValue={"Ritesh"} />
        <textarea name="" id="" defaultValue={"Ritesh Singh" }/>
        
        <input type="radio" defaultValue = {"Male"} />
      </div>
  )
}

export default GetByDisplayId;


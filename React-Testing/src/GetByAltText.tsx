import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function GetByAltText() {
  const [count, setCount] = useState(0)

  return (
      <div className='App'>
        <h1>RTL Query: GetByAltText and GetAllByAltText</h1> 
        <img 
        src={"https://kupidonia.com/content/quiz/photo/big/2306_1.jpg"} 
        alt="Dummy Image" 
        />
        <img 
        src={"https://kupidonia.com/content/quiz/photo/big/2306_1.jpg"} 
        alt="Dummy Image" 
        />
      </div>
  )
}

export default GetByAltText;


import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ActFunction() {
    const [name, setName] = useState("");
  return (
      <div className='App'>
        <h1>OnChange Event Testing</h1>
        <h2>{name}</h2>
        <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
      </div>
  )
}

export default ActFunction;


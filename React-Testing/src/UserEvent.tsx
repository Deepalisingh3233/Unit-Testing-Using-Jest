import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function UserEvent() {
    const [data, setData] = useState("");
  return (
      <div className='App'>
        <h1>{data}</h1>
        <button onClick = {() => setData("Hello")}>Click Me</button>
      </div>
  )
}

export default UserEvent;


import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function QueryBy() {
  const [count, setCount] = useState(0)
  let login=false;

  return (
      <div className='App'>
        <h1>QueryBy and QueryAllBy</h1> 
        
        {
            login?<button>Login</button>:<button>Logout</button>
        }
      </div>
  )
}

export default QueryBy;


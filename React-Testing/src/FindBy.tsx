import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function FindBy() {
    const[data, setData] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setData(true)
        }, 1000);
    })

  return (
      <div className='App'>
        <h1>FindBy and FindAllBy</h1> 
        {
            data?<h1>Data Found</h1>:<h1>No Data Found </h1>
        }
      </div>
  )
}

export default FindBy;


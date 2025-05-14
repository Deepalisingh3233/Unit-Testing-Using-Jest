import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './components/Counter'
import InputEcho from './components/InputEcho'
import MedicinePopup from './components/MedicinePopup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Counter />
     <br/>
     <InputEcho />
     <br/>
     <MedicinePopup/>
    </>
  )
}

export default App

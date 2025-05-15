import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function GetAllByLabelText() {
  const [count, setCount] = useState(0)

  return (
      <div className='App'>
        <h1>RTL Query: getAllByLabelText</h1> 
        <label htmlFor="user-name">Username</label>
        <input type="text" id="user-name" defaultValue = {"Deepali"}/>

        <label htmlFor="user-name2">Username</label>
        <input type="text" id="user-name2" defaultValue = {"Deepali"}/>

        <label htmlFor="user-name3">Username</label>
        <input type="text" id="user-name3" defaultValue = {"Deepali"}/>

        <label htmlFor="skill1">Skills</label>
        <input type="checkbox" id="skill1" defaultChecked = {true}/>

        <label htmlFor="skill2">Skills</label>
        <input type="checkbox" id="skill2" defaultChecked = {true}/>

        <label htmlFor="skill3">Skills</label>
        <input type="checkbox" id="skill3" defaultChecked = {true}/>
      </div>
  )
}

export default GetAllByLabelText

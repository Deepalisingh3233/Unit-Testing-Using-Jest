import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function QueryinWithinElement() {
  return (
      <div className='App'>
        <h1 id="test-id">Find Element within an Element</h1> 
        <div>
          Hello World
          <p>Hi</p>
          <p>Hello</p>
          <p>Hey</p>
        </div>
      </div>
  )
}

export default QueryinWithinElement;


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter = 5
  const addvalue =()=>{
    console.log("value added",  Math.random());
  }
  return (
    <>
      <h1>Smita and pawar</h1>

      <h2>counter value:{counter}</h2>

      <button onClick={addvalue}>add value</button>
      <br />
      <button>remove values</button>
    </>
  )
}

export default App

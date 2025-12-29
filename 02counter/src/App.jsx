import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let  [counter, setCounter] = useState(15)

  function addValue(){
    console.log("clicked", counter);
    setCounter(counter+1)
  }
  function RemoveValue(){
    console.log("clicked", counter);
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br></br>
      <button
      onClick={RemoveValue}
      >Remove Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App

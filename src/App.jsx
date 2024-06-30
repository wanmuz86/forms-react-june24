import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //Declaring a state [getter,setter] = (initial value)
  const [name,setName] = useState('')

  // e (reference to the form)
  const handleChange = (e) => setName(e.target.value);

  const buttonClick = () => {
    console.log(name)
  }
  
  return (
    <div>
      <h1>Hello Forms</h1>
      <div>
        <label htmlFor="name">Enter your name</label>
        <input type="text" id='name' value={name} onChange={handleChange} />
      </div>
      <button onClick={buttonClick}>Click me</button>
    </div>
  )
}

export default App

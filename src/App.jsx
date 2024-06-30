import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //Declaring a state [getter,setter] = (initial value)
  const [name, setName] = useState('')

  // e (reference to the form)
  const handleChange = (e) => setName(e.target.value);
  
  // The options for my select
  const options = [{ name: "Male", value: "male" }, { name: "Female", value: "female" }, {
    name: "Prefer not to disclosed",
    value: "nodisclose"
  }]

  const [gender,setGender] = useState('male')

  const handleGenderChange = (e) => setGender(e.target.value)

  const buttonClick = () => {
    console.log(name)
    console.log(gender)
  }

  return (
    <div>
      <h1>Hello Forms</h1>
      <div>
        <label htmlFor="name">Enter your name</label>
        <input type="text" id='name' value={name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor='gender'>Select your gender</label>
        <select name='gender' id='gender' value={gender} onChange={handleGenderChange}>
          {
            options.map(val=> <option value={val.value} key={val.value}>{val.name}</option>)
          }
        </select>
      </div>
      <button onClick={buttonClick}>Click me</button>
    </div>
  )
}

export default App

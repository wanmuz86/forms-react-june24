import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //Declaring a state [getter,setter] = (initial value)
  const [name, setName] = useState('')

  // e (reference to the form)
  const handleChange = (e) => setName(e.target.value);
  
  // Options
  const options = [{ name: "Male", value: "male" }, { name: "Female", value: "female" }, {
    name: "Prefer not to disclosed",
    value: "nodisclose"
  }]

  const [gender,setGender] = useState('male')

  const handleGenderChange = (e) => setGender(e.target.value)

  // Checkboxes

  const [colors, setColors] = useState([
    {name:"Blue", isChecked:false },
    {name:"Red", isChecked:false },
    {name:"Green", isChecked:false },
    {name:"Yellow", isChecked:false },

  ])

  const handleColorChange = (val)  => {
    val.isChecked = !val.isChecked //Updating the property is check of val in the array 
    setColors([...colors]) // setState the colors
  }

  // Radio buttons

  // For Radio we will use the same options as our drop down menu
  // But the value selected by user will be stored in this state/variable

  const [radioGender, setRadioGender] = useState('male'); 

  const handleRadioChange = (e) => {
    setRadioGender(e.target.value)
  }

  const buttonClick = () => {
    console.log(name)
    console.log(gender)
    console.log(colors)
    console.log(radioGender)
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

      <div>
        <label htmlFor="color">Select your preferred color</label>
        {
          colors.map(val=>
            <li key={val.name}>
              <input type='checkbox' name='colors' checked={val.isChecked}
              onChange={()=> handleColorChange(val)}/>
              <label>{val.name}</label>
            </li>
            )
        }
      </div>

      <div>
        <p>Select a gender</p>
        <div>
        {
          options.map(val=>{
            <div key={val.value} >
              <input type='radio' value={val.value} name="gender"
              onChange={handleRadioChange} />
              {val.name}
              </div>
          })
        }
        </div>
      </div>
      <button onClick={buttonClick}>Click me</button>
    </div>
  )
}

export default App

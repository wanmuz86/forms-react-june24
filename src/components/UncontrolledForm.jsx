import React, {useRef} from 'react'

const UncontrolledForm = () => {

    // Create a reference to the DOM element and set the initial value as follows
    const selectRef = useRef(false)
    const nameRef = useRef('')
    const checkboxRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        // document.getElementById("").value // AS if we are doing DOM manipulation in ReactJS
        console.log(`Name value ${nameRef.current.value}`)
         // document.getElementById("").value
        console.log(`Color value ${selectRef.current.value}`)
         // document.getElementById("").checked
        console.log(`Checkbox value ${checkboxRef.current.checked}`)
    }

  return (
    <div>
        <h2>Uncontrolled Form</h2>

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" ref={nameRef} id="name"/>
            </div>
            <div>
                <label htmlFor="color">Favourite colour</label>
                <select name="color" id="color" ref={selectRef}>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                </select>
            </div>
            <div>
                <p>Do you like React?</p>
                <input type="checkbox" ref={checkboxRef} />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default UncontrolledForm
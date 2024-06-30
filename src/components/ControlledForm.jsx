import React,{useState} from 'react'

const ControlledForm = () => {

    const [formData,setFormData] = useState({name:'',email:'',message:'',action:''})

    const [error, setError] = useState({name:null, email:null});

    const handleChange = (e) => {

        // Object destructuring 
        //  One variable name, store e.target.name [property name of the input]
         //  One variable value, store e.target.value [value of  the input]
        const {name, value} = e.target

        setFormData({...formData, [name]:value})
    } 

    const handleSubmit = (e) => {
        // Override the normal submit behavior of SSR with SPA
        e.preventDefault()
        // For example we weill call an API here fetch, axios

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // I need to reset everytime the error message in my form
        // If I don't do it , the form will not be updated with the error and also if user already fix the error
        
        const error = {name:null, email:null}

        let hasError  = false

        if (!formData.name || formData.name.length < 5){
            error.name = 'name cannot be less than 5 characters'
            hasError = true
            
        }
        // emailRegex.test will return true if it follows the format
        // if it does not follow the format  !emailRegex.test()
        if (!formData.email || !emailRegex.test(formData.email) ) {
            error.email = 'Please enter the correct format'
            hasError = true
            console.log(error)
            
        }
        // set the state of the form
        setError(error)
        setFormData({...formData, action:"save"});

        if (!hasError) {
            console.log(formData.name)
            console.log(formData.email)
            console.log(formData.message)
            console.log(formData.action)
        }
       
    }


  return (
    <div>
        <h2>Controlled Form</h2>

        {/* form method="POST" action="/"  onSubmit can be assumed as the action in this code*/}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id='name' name='name' value={formData.name} onChange={handleChange} />
                {error.name && <p style={{color:'red'}}>{error.name}</p>}
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" id='email' name='email' value={formData.email} onChange={handleChange} />
                {error.email && <p style={{color:'red'}}>{error.email}</p>}
            </div>
            <div>
                <label htmlFor="name">Message:</label>
                <textarea id='message' name='message' value={formData.message} onChange={handleChange} />
            </div>
            <input type="hidden" name="action" id="action" value={formData.action} />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ControlledForm
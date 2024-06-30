import React,{useState} from 'react'

const ControlledForm = () => {

    const [formData,setFormData] = useState({name:'',email:'',message:''})

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

        if (formData.name.length < 5){
            setError({...error,name:'name cannot be less than 5 characters'})
            return
        }
        if (formData.email && emailRegex.test(formData.email) ) {
            setError({...error,email:'Please enter the correct format'})
            return
        }
     
            console.log(formData.name)
            console.log(formData.email)
            console.log(formData.message)
        
       
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
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ControlledForm
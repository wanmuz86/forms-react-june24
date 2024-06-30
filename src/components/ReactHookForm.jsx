import React from 'react'
import { useForm } from 'react-hook-form'


const ReactHookForm = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Initializing, defining the method and functions needed for our form
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Input by user will be retrieved from the argument of callback function, eg: we call it data
    const onSubmit = (data) => {
    
        console.log(data)

    }
    return (
        <div>
            <h2>Example with React Hook Form</h2>
            {/* 2) I need to call the handleSubmit  function of useForm, where I pass my function as parameters*/}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Name</label>
                    {/* 1) Register here means linking it to state name */}
                    <input type="name" id='name' {...register('name', {required:true, minLength:5})}/>
                    { errors.name && <p style={{color:'red'}}>Name is required and need to be more than 5 characters</p>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' {...register('email', {required:true, pattern:emailRegex})} />
                    { errors.email && <p style={{color:'red'}}>Email is required and need to follow the format</p>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' {...register('password',{required:true,  minLength:6})}/>
                    { errors.password && <p style={{color:'red'}}>Password is required and need to be more than 6 characters</p>}
                </div>
                
                <button type="submit">Submit</button>


            </form>
        </div>
    )
}

export default ReactHookForm
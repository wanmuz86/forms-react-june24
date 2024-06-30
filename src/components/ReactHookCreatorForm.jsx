import React from 'react';
import { useForm } from 'react-hook-form';

export default function ReactHookCreatorForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div>
            <h2>React Hook Controlled Form using Builder</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Enter name</label>
                <input type="text" placeholder="Name" {...register("name", { required: true })} />
                { errors.name && <p style={{color:'red'}}>Name is required</p>}
                </div>
                <div>
                <label htmlFor="email">Enter email</label>
                <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                { errors.name && <p style={{color:'red'}}>Email is required</p>}
                </div>
                <div>
                <label htmlFor="phone">Enter phone</label>
                <input type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true })} />
                </div>
                <div>
                <label htmlFor="address">Enter address</label>
                <input type="text" placeholder="Address" {...register("Address", { required: true })} />
                </div>
                <div>
                <label htmlFor="state">Select state</label>
                <select {...register("States", { required: true })}>
                    <option value="Selangor">Selangor</option>
                    <option value=" Melaka"> Melaka</option>
                    <option value=" Pahang"> Pahang</option>
                    <option value=" Kedah"> Kedah</option>
                    <option value=" Negeri Sembilan"> Negeri Sembilan</option>
                    <option value=" Kuala Lumpur"> Kuala Lumpur</option>
                </select>
                </div>
                <div>
                <label htmlFor="message">Enter message</label>
                <textarea {...register("Message", { required: true })} />
                </div>
                <input type="submit" />
            </form>
        </div>
    );
}
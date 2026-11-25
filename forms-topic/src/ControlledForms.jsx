import React, { useState } from 'react'

const ControlledForms = () => {
    let [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        phNum: "",
        address: "",
        gender:"",
    })
    let handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }
    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Application Form</legend>
                <label htmlFor="username">Enter Username:</label>
                <input type="text" name="username" id="username" onChange={handleChange} placeholder='Enter Username' /><br /><br />
                <label htmlFor="email">Enter Email:</label>
                <input type="email" name="email" id="email" onChange={handleChange} placeholder='Enter Email' /><br /><br />
                <label htmlFor="password">Enter Password:</label>
                <input type="password" name="password" id="password" onChange={handleChange} placeholder='Enter Password' /><br /><br />
                <label htmlFor="phNum">Enter PhNumber:</label>
                <input type="tel" minLength={10} maxLength={10} name="phNum" id="phNum" onChange={handleChange} placeholder='Enter phNum' /><br /><br />
                <label htmlFor="address">Enter Address:</label>
                <textarea name="address" onChange={handleChange} id="address"></textarea>
                <br /><br />

                <label htmlFor="Gender">Select Gender</label>
                <input type="radio" onChange={handleChange} value="Male" name='gender' />Male
                <input type="radio" onChange={handleChange} value="Female" name='gender' />Female
                <input type="radio" onChange={handleChange} value="Others" name='gender' />Others
                <br /><br />


                <button type='submit'>Submit</button>
                <button type='reset'>Cancel</button>
            </fieldset>
        </form>
    )
}

export default ControlledForms

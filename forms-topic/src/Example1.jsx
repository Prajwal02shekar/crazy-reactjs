import React, { useState } from 'react'

const Example1 = () => {

    let [username,setUsername]=useState('');
    let [password,setPassword]=useState('');
    let [email,setEmail]=useState('');

    let handleEmail=(e)=>{
        console.log(e.target.value)
        setEmail(e.target.name+":"+e.target.value)
    }

    let handleUsername=(e)=>{
        console.log(e.target.value)
        setUsername(e.target.name +":"+e.target.value)

    }
    let handlePassword=(e)=>{
        console.log(e.target.value)
        setPassword(e.target.name +":"+e.target.value)
    }



    let handleSubmit=(e)=>{
        e.preventDefault()
       console.log(username)
       console.log(email)
        console.log(password)
    }

  return (
    <form onSubmit={handleSubmit}>
        <fieldset>
            <legend>Form</legend>
            <label htmlFor="username">Enter Username:</label>
            <input type="text" id='username' onChange={handleUsername} placeholder='Enter Username' name='username' /><br /><br />
            <label htmlFor="email">Enter Email:</label>
            <input type="email" id='email' onChange={handleEmail}  placeholder='Enter Email' name='email' /><br /><br />
            <label htmlFor="password">Enter Password:</label>
            <input type="password" onChange={handlePassword} id='password' placeholder='Enter Password' name='password' /> <br /><br />
            <button type='submit'>Submit</button>
            <button type='reset'>Cancel</button>


        </fieldset>

        <div>
            <h3>{username}</h3>
            <h3>{email}</h3>
            <h3>{password}</h3>
        </div>
    </form>
  )
}

export default Example1

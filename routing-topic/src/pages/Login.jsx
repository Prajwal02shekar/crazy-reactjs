import React from 'react'

const Login = () => {
  return (
   <form>
    <fieldset>
        <legend>Login</legend>
        <label htmlFor="username">Enter Username:</label>
        <input type="text" placeholder='ENter Username' /><br /><br />
        <label htmlFor="password">Enter PAssowrd:</label>
        <input type="password" placeholder='ENter password' /><br /><br />
        <button>Login</button>
        <button>Cancel</button>


    </fieldset>
   </form>
  )
}

export default Login

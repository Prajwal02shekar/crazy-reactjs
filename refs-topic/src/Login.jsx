import React, { useRef, useState } from 'react'

const Login = () => {
    let usernameRef = useRef();
    let passwordRef = useRef();
    let emailRef = useRef();


    let [userData, setUserData] = useState({
        username: "",
        password: "",
        email: ""
    })


    let hanldeSubmit = (e) => {
        e.preventDefault();

        console.log(usernameRef.current.value)
        console.log(passwordRef.current.value)
        console.log(emailRef.current.value)

        setUserData({
            username: usernameRef.current.value,
            password: passwordRef.current.value,
            email: emailRef.current.value
        })

    }



    return (
        <form onSubmit={hanldeSubmit}>
            <fieldset>
                <legend>Login</legend>

                <label htmlFor="">Enter Username:</label>
                <input type="text" ref={usernameRef} placeholder='Enter Username:' />
                <br /><br />
                <label htmlFor="">Enter Passwords:</label>
                <input type="password" ref={passwordRef} placeholder='Enter Password:' />
                <br />
                <br />

                <label htmlFor="">Enter Email:</label>
                <input type="email" ref={emailRef} placeholder='Enter Email:' />
                <br />
                <br />
                <button>Login</button>

            </fieldset>

            <h2>{userData.username }</h2>
            <h2>{userData.password }</h2>
            <h2>{userData.email }</h2>

        </form>
    )
}

export default Login

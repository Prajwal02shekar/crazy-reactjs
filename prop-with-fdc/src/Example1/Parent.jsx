import React from 'react'
import Child from './Child'
import Child2 from './Child2'

const Parent = () => {
    let username = "prajwal"
    let age = 25
    let skills = ["AWS", 'Azure', "GCP"]
    return (
        <div>
            <h1>Parent Component</h1>
            <h2>My name is {username}</h2>
            <h3>Iam {age} years old</h3>

            <Child username={username} age={age} skills={skills} />
            <Child2 skills={skills}/>
        </div>
    )
}

export default Parent

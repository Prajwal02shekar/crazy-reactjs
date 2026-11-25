import React from 'react'
import ComponentC from './ComponentC'
import UserContext from './userContext'

const App = () => {

    let userData = {
        username: "Aman",
        age: 24,
        address: "Mysore"
    }
    return (
        <div>
            <h2>MY  Details</h2>
            <h3>My name is {userData.username}</h3>
            <h3>Iam {userData.age} years old</h3>
            <h3>Iam from {userData.address}</h3>
            <UserContext.Provider value={userData}>

                <ComponentC />
            </UserContext.Provider>

        </div>
    )
}

export default App

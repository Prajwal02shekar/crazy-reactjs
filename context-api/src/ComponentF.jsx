import React, { useContext } from 'react'
import UserContext from './userContext'

const ComponentF = () => {
    let details=useContext(UserContext);
    console.log(details)
  return (
    <div>
      <h1>COmponent F</h1>
      <h3>My name is {details.username}</h3>
      <h3>Iam {details.age} years old</h3>
      <h3>Iam from {details.address}</h3>
      
    </div>
  )
}

export default ComponentF

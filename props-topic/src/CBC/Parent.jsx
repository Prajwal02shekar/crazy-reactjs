import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  render() {
    // let username="prajwal"
    // let age=25;
    // let address="Bangalore"
    // let skills=["MERN","MEAN","Java","DevOps","AWS","Azure"]

    return (
      <div>
        <h1>Parent Component</h1>
        {/* <h3>My name is {username}</h3>
        <h3>Iam {age} years old</h3>

        <Child userData={username} age={age} add={address} skills={skills}/> */}
      </div>
    )
  }
}

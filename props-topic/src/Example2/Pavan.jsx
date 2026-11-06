import React, { Component } from 'react'

export default class Pavan extends Component {
  render() {
    console.log(this.props.stdData)
    let {stdName,stdAge,stdAddress,stdSkill}=this.props.stdData
    return (
      <div>
        <h1>Pavan Component</h1>
        <h3>My name is {stdName}</h3>
        <p>Iam {stdAge} years old</p>
        <p>Iam from {stdAddress}</p>
        <ol>
            {
                stdSkill.map((skill)=>{
                    return(
                        <li key={skill}>{skill}</li>
                    )
                })
            }
        </ol>
      </div>
    )
  }
}

import React, { Component } from 'react'
import Pavan from './Pavan'

export default class Aman extends Component {
  render() {
    let studentDetails={
            stdId:101,
            stdName:"Ajith",
            stdAge:23,
            stdAddress:"Mysore",
            stdSkill:["Java","SQL","WEB"]
    }
    return (
      <div>
        <h1>Aman Component</h1>
        <h3>My name is {studentDetails.stdName}</h3>
        <p>Iam {studentDetails.stdAge} years old</p>
        <p>Iam from {studentDetails.stdAddress}</p>
        <ul>
            {
                studentDetails.stdSkill.map((skill)=>{
                    return(
                        <li key={skill}>{skill}</li>
                    )
                })
            }
        </ul>

        <Pavan stdData={studentDetails}/>
      </div>
    )
  }
}

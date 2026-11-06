import React from 'react'

const Child = (props) => {
    console.log(props)
  return (
    <div>
      <h1>Child Comp onenent</h1>
      <h2>My name is {props.username}</h2>
      <h3>Iam {props.age} years old</h3>

      {/* <ol>
        {
            props.skills.map((p)=>{
                console.log(p)
                return(
                    <li key={p}>{p}</li>
                )
            })
        }
      </ol> */}
    </div>
  )
}

export default Child

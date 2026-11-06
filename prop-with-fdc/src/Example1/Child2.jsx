import React from 'react'

const Child2 = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Child 2 Comonent</h1>
            <ol>
                {
                    props.skills.map((p)=>{
                        return(
                            <li key={p}>{p}</li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default Child2

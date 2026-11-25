import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

const ComponentE = () => {
    let data=useContext(UserContext)
    console.log(data)
    return (
        <div>
            <h1>COmponent E</h1>
            <ComponentF />

        </div>
    )
}

export default ComponentE

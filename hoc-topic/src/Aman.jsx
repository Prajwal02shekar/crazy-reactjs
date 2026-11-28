import React, { useState } from 'react'
import CommonFun from './HOC'

const Aman = (props) => {
  

    return (
        <div>
            <h1> Aman is Donating {props.money} Rupess</h1>
            <button onClick={props.handleMoney}>Increment Money</button>
        </div>
    )
}

export default CommonFun(Aman)

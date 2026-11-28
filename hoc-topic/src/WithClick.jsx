import React, { useState } from 'react'
import HOC from './HOC'

const WithClick = (props) => {
    console.log(props)

  return (
    <div>
      <button onClick={props.handleCount} >Clicked {props.count} Times</button>
    </div>
  )
}

export default HOC(WithClick)

import React, { Component } from 'react'
import Example1 from './CBC/Example1'
import StatesWithFBC from './FBC/StatesWithFBC'
import CounterWithCBC from './CBC/CounterWithCBC'
import CounterAppWithFBC from './FBC/CounterAppWithFBC'
import Student from './FBC/Student'
import ShoppingCart from './FBC/ShoppingCart'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Example1/>  */}
        {/* <StatesWithFBC/> */}
        {/* <CounterWithCBC/>
        <CounterAppWithFBC/> */}


        {/* <Student/> */}
        <ShoppingCart/>
      </div>
    )
  }
}

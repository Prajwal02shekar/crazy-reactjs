import React, { Component } from 'react'

export default class Task1 extends Component {
  render() {
    let princiaplAmount = 450000
    let rateOfInterst=7.5;
    let timeDuration=3

    let simpleInterst=(princiaplAmount*timeDuration*rateOfInterst)/100
    console.log(simpleInterst)
    return (
      <div>
        <h1>Calacuation OF Simple Interst</h1>
        <p>Amount: ₹{princiaplAmount}/-</p>
        <p>Time: {timeDuration} years</p>
        <p>ROI: {rateOfInterst}%</p>
        <h3>Simple Interst: ₹{simpleInterst}/-</h3>
      </div>
    )
  }
}

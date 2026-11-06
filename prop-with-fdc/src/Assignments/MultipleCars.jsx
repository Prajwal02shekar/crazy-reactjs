import React, { Component } from 'react'
import CardCard from './CardCard'

export default class MultipleCars extends Component {

    render() {
        let cars = [
            {
                id: 1,
                carName: "Crysta",
            },
            {
                id: 2,
                carName: "Polo GT",
            },
            {
                id: 3,
                carName: "Altroz",
            }
        ]
        return (
            <div>
                <h1>Cars Main Component</h1>
                <CardCard cars={cars} />
            </div>
        )
    }
}

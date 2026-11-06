import React, { Component } from 'react'

export default class CardCard extends Component {
    render() {
        console.log(this.props.cars)
        return (
            <div>
                <h1>Cars Details</h1>
                <aside>
                    {
                        this.props.cars.map((c)=>{
                            console.log(c)
                            return(
                                <h2>{c.carName}</h2>
                            )
                        })
                    }
                </aside>

            </div>
        )
    }
}

import React, { Component } from 'react'

export default class Child extends Component {
    render() {
        console.log(this.props)

        // let { userData, add, age, skills } = this.props
        return (
            <div>
                <h1>Child Component</h1>
                {/* <h3>My name is {this.props.userData}</h3>
                <h3>Iam {this.props.age} years old</h3>
                <h3>Iam from {this.props.add}</h3> */}

                {/* <h3>My name is {userData}</h3>
                <h3>Iam {age} years old</h3>
                <h3>Iam from {add}</h3> */}
                {/* <ol>
                    <li>{skills[0]}</li>
                    <li>{skills[1]}</li>
                    <li>{skills[2]}</li>
                    <li>{skills[3]}</li>
                </ol> */}

                {/* <ol>
                    {
                        skills.map((ele)=>{
                            console.log(ele)
                            return(
                                <li key={ele}>{ele}</li>
                            )
                        })
                    }
                </ol> */}
            </div>
        )
    }
}

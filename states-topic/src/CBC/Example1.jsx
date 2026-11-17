// import React, { Component } from 'react'

// export default class Example1 extends Component {

//     constructor() {
//         super();
//         this.state = {
//             myFavPlace: "Bangalore"
//         }
//     }

//     changePlace = () => {
//         this.setState({
//             myFavPlace: "Mysore"
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h1>My Fav Place: {this.state.myFavPlace}</h1>
//                 <button onClick={this.changePlace}>Change Place</button>
//             </div>
//         )
//     }
// }



// import React, { Component } from 'react'

// export default class Example1 extends Component {
//     constructor() {
//         super()
//         this.state = {
//             username: "prajwal",
//             age: 25,
//             address: "RR Nagar"
//         }
//     }
//     changeDetails = () => {
//         this.setState({
//             username: "Pavan",
//             age: 23,
//             address: "Mysore"
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <h1>My name is {this.state.username}</h1>
//                 <p>Iam {this.state.age} years old</p>
//                 <p>Iam from {this.state.address}</p>
//                 <button onClick={this.changeDetails}>Change Details</button>
//             </div>
//         )
//     }
// }



import React, { Component } from 'react'

export default class Example1 extends Component {
    constructor() {
        super()
        this.state = {
            student1: {
                stdName: "Ajith",
                stdAge: 22,
                stdAdd: "Mysore",
                skills: ["Java", "SQL", "React JS"]
            },
            student2: {
                stdName: "Pavan",
                stdAge: 23,
                stdAdd: "Banglore"
            }
        }
    }
    student1Details = () => {
        this.setState({
            student1: {
                stdName: "Aman",
                stdAge: 23,
                stdAdd: "Bangalore",
                skills: ["Java", "SQL", "React JS", "J2EE", "WEB"]
            }
        })
    }
    std2Details = () => {
        this.setState({
            student2: {
                stdName: "prajwal",
                stdAge: 25,
                stdAdd: "Banglore"
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Student 1 Details</h1>
                <h3>My name is {this.state.student1.stdName}</h3>
                <p>Iam {this.state.student1.stdAge} years old</p>
                <p>Iam from {this.state.student1.stdAdd}</p>
                <ol>
                    {
                        this.state.student1.skills.map((ele) => {
                            return (
                                <li key={ele}>{ele}</li>
                            )
                        })
                    }
                </ol>
                <button onClick={this.student1Details}>Change Student 1 Details</button>
                <hr />
                <h1>Student 2 Details</h1>
                <h3>My name is {this.state.student2.stdName}</h3>
                <p>Iam {this.state.student2.stdAge} years old</p>
                <p>Iam from {this.state.student2.stdAdd}</p>
                <button onClick={this.std2Details}>Change Student 2 Details</button>



            </div>
        )
    }
}




// import React, { Component } from 'react'

// export default class Example1 extends Component {

//     render() {
//         this.state = {
//             empName: "Pavan",
//             empAge: 23,
//             empDesignation: "Developer",
//             empAddress: "Mysore"
//         }
//         return (
//             <div>
//                 <h2>My name is {this.state.empName}</h2>
//                 <p>{this.state.empAge}</p>
//                 <p>{this.state.empDesignation}</p>
//                 <p>{this.state.empAddress}</p>
//             </div>
//         )
//     }
// }

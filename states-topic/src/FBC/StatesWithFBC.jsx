// import React, { useState } from 'react'

// const StatesWithFBC = () => {
//     let [place,setplace]=useState("Banaglore")

//     let changePlace=()=>{
//         setplace("Mysore")
//     }

//     return (
//         <div>
//             <h1>My Fav place is {place}</h1>
//             <button onClick={changePlace}>Change Place</button>
//         </div>
//     )
// }

// export default StatesWithFBC



// import React, { useState } from 'react'

// const StatesWithFBC = () => {
//     let [username, setUsername] = useState("Pavan")
//     let [age,setAge]=useState(23)
//     let [address,setAddress]=useState("Mysore")
//     let [skills,setSkills]=useState(["Java","SQL","Web"])

//     let changeDetails=()=>{
//         setUsername("Aman")
//         setAge(22)
//         setAddress("Bangalore")
//         setSkills(["MERN","MEAN"])
//     }
//     return (
//         <div>
//             <h2>My Name is {username}</h2>
//             <p>Iam {age} years old</p>
//             <p>Iam from {address}</p>
//             <ol>
//                 {
//                     skills.map((ele)=>{
//                         return(
//                             <li key={ele}>{ele}</li>
//                         )
//                     })
//                 }
//             </ol>

//             <button onClick={changeDetails}>Change Data</button>

//         </div>
//     )
// }

// export default StatesWithFBC


//! Example 3

import React, { useState } from 'react'

const StatesWithFBC = () => {
    let [userData, setUserData] = useState({
        username: "Pavan",
        age: 22,
        place: "Mysore",
        skills: ["React JS", "Angular JS", "Next JS"]
    })

    let chnageDetails = () => {
        setUserData({
            username: "Prajwal",
            age: 25,
            place: "Bangalore",
            skills: ["React JS", "Angular JS", "Next JS"]
        })
    }
    return (
        <div>
            <h1>My name is {userData.username}</h1>
            <p>Iam {userData.age} years old</p>
            <p>Iam from {userData.place}</p>
            <ol>
                {
                    userData.skills.map((item) => {
                        return (
                            <li key={item}>{item}</li>
                        )
                    })
                }
            </ol>
            <button onClick={chnageDetails}>CHnage Details</button>
        </div>
    )
}

export default StatesWithFBC

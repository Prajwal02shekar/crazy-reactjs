import React, { useState } from 'react'

const Student = () => {

    let [student, setStudent] = useState([
        { id: 1, stdName: "Aman", stdSub: "Java", marks: 85 },
        { id: 2, stdName: "Pavan", stdSub: "Python", marks: 65 },
        { id: 3, stdName: "Sindhu", stdSub: "Core Java", marks: 90 },
        { id: 4, stdName: "Sreejith", stdSub: "SQL", marks: 85 },
    ])

    let updateMarks=(id)=>{
        setStudent(student.map((std)=>{
            if(std.id===id){
                return {...std,marks:std.marks+5}
            }
            else{
                return std
            }
        }))
    }
    return ( 
        <div>
            <h1>Student Management System</h1>
            <section>
                {
                    student.map((std) => {
                        console.log(std)
                        return (
                            <div key={std.id}>
                                <h3>Studnet Name:{std.stdName}</h3>
                                <p>Student Subject:{std.stdSub}</p>
                                <p>Marks: {std.marks}</p>
                                <button onClick={()=>updateMarks(std.id)}>Increment Marks</button>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default Student

import React, { useState } from 'react'
import StudentCard from './StudentCard'

const Students = () => {
    let [students,setStudents]=useState([
        {id:1,stdName:"Aman",stdSubjects:"Java",stdMarks:50},
        {id:2,stdName:"Pavan",stdSubjects:"Python",stdMarks:60},
        {id:3,stdName:"Vishwa",stdSubjects:"Django",stdMarks:30},
        {id:4,stdName:"Yashwanth",stdSubjects:"J2EE",stdMarks:90},
        {id:5,stdName:"Chetan",stdSubjects:"React JS",stdMarks:75},

    ])

    let increase=(id)=>{
        setStudents(students.map((std)=>{
            if(std.id===id){
                return {...std,stdMarks:std.stdMarks+5}
            }else{
                return std
            }
        }))
    }
    let decrease=(id)=>{
        setStudents(students.map((std)=>{
            if(std.id===id){
                return {...std,stdMarks:std.stdMarks-5}
            }else{
                return std
            }
        }))
    }
  return (
    <div>
      {
        students.map((std)=>{
            return <StudentCard std={std} increase={increase} decrease={decrease}/>
        })
      }
    </div>
  )
}

export default Students

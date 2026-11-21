import React from 'react'

const StudentCard = (props) => {
    let {std,increase,decrease}=props
  return (
    <div>
      <h3>Student Name: {std.stdName}</h3>
      <h4>Subject :{std.stdSubjects}</h4>
      <h4>Student Marks: {std.stdMarks}</h4>
      <button onClick={()=>increase(std.id)}>Increase</button>
      <button onClick={()=>decrease(std.id)}>Decrease</button>
      <h3>{std.stdMarks >=35 ? "Pass":"Fail"}</h3>
      <hr />
      
    </div>
  )
}

export default StudentCard

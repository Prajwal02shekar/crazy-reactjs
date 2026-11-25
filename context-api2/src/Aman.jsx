import React, { useContext } from 'react'
import CourseContext from './courseContext'

const Aman = () => {
    let course=useContext(CourseContext)
    console.log(course)
  return (
    <div>
      <h1>My name is Aman</h1>
      <h3>Java Course</h3>
      <ul>
        {
            course.javaCourse.map((c)=>{
                return(
                    <li key={c}>{c}</li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default Aman

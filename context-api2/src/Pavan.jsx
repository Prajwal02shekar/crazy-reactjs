import React, { useContext } from 'react'
import CourseContext from './courseContext'

const Pavan = () => {
    let course=useContext(CourseContext)
    console.log(course)
    
  return (
    <div>
      <h1>My name is Pavan</h1>
      <h3>Java Course</h3>
      <ol>
        {
            course.javaCourse.map((c)=>{
                console.log(c)
                return(
                    <li key={c}>{c}</li>
                )
            })
        }
      </ol>
    </div>
  )
}

export default Pavan

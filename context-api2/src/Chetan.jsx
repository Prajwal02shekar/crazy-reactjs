import React, { useContext } from 'react'
import CourseContext from './courseContext'

const Chetan = () => {
    let course=useContext(CourseContext)
  return (
    <div>
      <h1>My name is Chetan</h1>

       <h3>Python COurse</h3>
      <ol>
        {
            course.pythonCourse.map((c)=>{
                return(
                    <li key={c}>{c}</li>
                )
            })
        }
      </ol>
    </div>
  )
}

export default Chetan

import React, { useContext } from 'react'
import CourseContext from './courseContext'

const Yashwanth = () => {

    let course=useContext(CourseContext)

  return (
    <div>
      <h1>My name is Yashwanth</h1>

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

export default Yashwanth

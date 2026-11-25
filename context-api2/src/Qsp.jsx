import React from 'react'
import Java from './Java'
import Python from './Python'
import CourseContext from './courseContext'

const Qsp = () => {
    let course = {
        javaCourse: ["Core Java", "SQL", "Web", "React JS", "J2EE"],
        pythonCourse: ["Python", "SQL", "Web", "React JS", "DJango"]
    }
    return (
        <div>
            <h1>QSP</h1>
            <CourseContext.Provider value={course}>

                <Java />
                <hr />
                <Python />
            </CourseContext.Provider>
        </div>
    )
}

export default Qsp

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getCourses } from '../api/courseApi'
import CourseList from './CourseList'

function CoursesPage() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    getCourses().then(_courses => setCourses(_courses))
  }, [])

  return (
    <div>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        AddCourse
      </Link>
      <CourseList courses={courses} />
    </div>
  )
}

export default CoursesPage

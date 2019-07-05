import React, { useState } from 'react'
import CourseForm from './CourseForm'

const ManageCoursePage = () => {
  const [course, setCourse] = useState({
    id: null,
    slug: '',
    title: '',
    authorId: '',
    category: '',
  })

  function handleChange(event) {
    // Computed property
    const updatedCourse = { ...course, [event.target.name]: event.target.value }
    setCourse(updatedCourse)
  }

  return (
    <div>
      <h2>Manage Course</h2>
      <CourseForm course={course} onChange={handleChange} />
    </div>
  )
}

export default ManageCoursePage

import React, { useState } from 'react'
import { toast } from 'react-toastify'
import CourseForm from './CourseForm'
import { saveCourse } from '../api/courseApi'

const ManageCoursePage = props => {
  const [course, setCourse] = useState({
    id: null,
    slug: '',
    title: '',
    authorId: '2',
    category: '',
  })

  function handleChange({ target }) {
    // Computed property
    setCourse({ ...course, [target.name]: target.value })
  }

  function formValid() {
    const _errors = {}
    if (!course.title) _errors.title = 'Title is required'
    if (!course.authorId) _errors.title = 'AuthorId is required'
    if (!course.category) _errors.title = 'Category is required'
    return Object.keys(_errors).length === 0
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!formValid()) return
    saveCourse(course).then(() => {
      props.history.push('/courses')
      toast.success('Course Saved')
    })
  }

  return (
    <div>
      <h2>Manage Course</h2>
      <CourseForm
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default ManageCoursePage

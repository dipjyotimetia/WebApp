import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from 'styled-components'

const Table = styles.table`
  margin: 0;
  font-family: cursive;
  font-size: medium;
  font-weight: 400;
  line-height: 1;
  color: #222921;
  text-align: left;
  background-color: #fff;
}`

const CourseList = props => {
  return (
    <Table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map(course => {
          return (
            <tr key={course.id}>
              <td>
                <Link to={`/course/${course.slug}`}>{course.title}</Link>
              </td>
              <td>{course.authorId}</td>
              <td>{course.category}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

CourseList.prototypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default CourseList

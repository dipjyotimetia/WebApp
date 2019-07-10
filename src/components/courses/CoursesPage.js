/* eslint-disable */
import React from 'react'
import { connect } from 'react-redux'
import * as CourseActions from "../../redux/actions/CourseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux"; 

class CoursesPage extends React.Component {
  state = {
    course: {
      title: '',
    },
  }

  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value }
    this.setState({ course })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.actions.CreateCourse(this.state.course)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Course</h2>
        <h3>AddCourse</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="save" />
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    )
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state) =>{
  return {
    courses: state.courses,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(CourseActions,dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage)

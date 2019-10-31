import React from 'react'
import styled from 'styled-components'
import TextInput from './common/TextInput'

const Form = styled.form`
  border-left-width: 0;
  border-left-style: solid;
  border-right-width: 20px;
  padding-left: 10px;
  padding-right: 700px;
  width: max-content;
}
`
const CourseForm = props => {
  return (
    <Form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        label="title"
        onChange={props.onChange}
        name="title"
        value={props.course.title}
        error={props.error}
      />
      <div className="form-group">
        <div className="filed">
          <label htmlFor="author">Author</label>
          <select
            name="author"
            id="authorId"
            className="form-control"
            onChange={props.onChange}
            value={props.course.authorId || ''}
          >
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
      </div>
      <TextInput
        name="category"
        label="category"
        id="category"
        onChange={props.onChange}
        value={props.course.category}
        error={props.error}
      />
      <input type="submit" value="save" className="btn btn-primary" />
    </Form>
  )
}

export default CourseForm

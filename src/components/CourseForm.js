import React from 'react'
import TextInput from './common/TextInput'

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
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
    </form>
  )
}

export default CourseForm

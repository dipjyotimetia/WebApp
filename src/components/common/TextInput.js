import React from 'react'
import PropTypes from 'prop-types'

function TextInput(props) {
  let wrapperClass = 'form-group'
  if (props.error.length > 0) {
    wrapperClass += ' has-error'
  }
  return (
    <div className={wrapperClass}>
      <div className="filed">
        <label htmlFor={props.id}>{props.label}</label>
        <input
          name={props.name}
          id={props.id}
          className="form-control"
          value={props.value}
          onChange={props.onChange}
        />
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  )
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
}

TextInput.defaultProps = {
  error: '',
}

export default TextInput

import React from 'react';
import PropTypes from 'prop-types';

function SelectInput(props) {
    return (
        <div className="form-group">
            <div className='filed'>
                <label htmlFor={props.id}>{props.label}</label>
                <select
                    name={props.name}
                    id={props.id}
                    className="form-control"
                    onChange={props.onChange}
                    value={props.value}
                >
                    <option value="" />
                    <option value="1">Cory House</option>
                    <option value="1">Scott Allen</option>
                </select>
            </div>
        </div>
    );
}

SelectInput.propTypes = {
    title:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    value:PropTypes.string,
}

SelectInput.defaultProps = {
    error: ""
}

export default SelectInput;
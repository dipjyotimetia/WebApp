import React from 'react';
import TextInput from './common/TextInput';
import SelectInput from './common/SelectInput';

function CourseForm(props) {
    return (
        <form>
            <TextInput
                id="title"
                label="title"
                onChange={props.onChange}
                name="title"
                value={props.course.title}
            />
            <SelectInput
                name="author"
                id="author"
                className="form-control"
                onChange={props.onChange}
                value={props.course.authorId}
            />
            <TextInput
                name="category"
                label='category'
                id="category"
                onChange={props.onChange}
                value={props.course.category}
            />
            <input type="submit" value="save" className="btn btn-primary" />
        </form >
    );
}

export default CourseForm;
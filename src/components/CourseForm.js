import React from 'react';

function CourseForm(props) {
    return (
        <form>
            <div className="form-group">
                <div className='filed'>
                        <label htmlFor="title">Title</label>
                        <input 
                            type="text" 
                            name="title" 
                            id="title" 
                            class="form-control"  
                            value=""
                        />
                </div>
            </div>
            <div className="form-group">
                <div className='filed'>
                    <label htmlFor="author">Author</label>
                    <select
                        name="author"
                        id="author"
                        class="form-control"
                        onChange={props.onChange}
                        value=""
                    >
                        <option value=""/>
                        <option value="1">Cory House</option>
                        <option value="1">Scott Allen</option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                <div className='filed'>
                    <label htmlFor="category">Category</label>
                    <input
                        type="text"
                        name="category"
                        id="category"
                        class="form-control"
                        value=""
                    />
                </div>
            </div>
            <input type="submit" value="save" className="btn btn-primary" />
        </form>
    );
}

export default CourseForm;
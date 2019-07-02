import React from 'react';

const ManageCoursePage = props => {
    return (
        <div>
            <h2>Manage Course</h2>
            {props.match.params.slug}
        </div>
    );
};

export default ManageCoursePage;

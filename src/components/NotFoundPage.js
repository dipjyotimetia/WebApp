import React from 'react';
import { Link } from "react-router-dom";

function NotFoundPage(params) {
    return(
        <div>
            <h2>Page not found</h2>
            <p>
                <Link to="/">Back to Home</Link>
            </p>
        </div>
    );
}

export default NotFoundPage;
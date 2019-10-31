import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
      <h2>Page not found</h2>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  )
}

export default NotFoundPage

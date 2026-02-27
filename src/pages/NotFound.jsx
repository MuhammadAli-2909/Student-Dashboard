import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>

      <button className='home' onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  )
}

export default NotFound
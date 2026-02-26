import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='container'>
      <h1>Student management Dashboard</h1>
      <p>Welcome to the Student management Dashboard. Feel free to explore</p>
      <div className="btns">
        <Link to='/login'><button className='one'>Get Started</button></Link>
        <Link to='/students'><button className='two'>View Students</button></Link>
      </div>
    </div>
  )
}

export default Home

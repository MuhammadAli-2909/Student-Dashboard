import React from 'react'
import { useNavigate } from 'react-router-dom'
import data from '../data/data'

function Dashboard() {
  const navigate = useNavigate()

  const totalStudents = data.length
  const totalCourses = new Set(data.map(s => s.Course)).size

  const logout = () => {
    localStorage.removeItem('isAuth')
    navigate('/login')
  }

  return (
    <div className="container">
      <h1>Dashboard</h1>

      <div className='dashboard'>
        
        <div className="card">
          <h2>{totalStudents}</h2>
          <p>Total Students</p>
        </div>

        <div className="card">
          <h2>{totalCourses}</h2>
          <p>Total Courses</p>
        </div>

      </div>

      <br />
      <button className='logout' onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard